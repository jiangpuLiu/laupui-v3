<template>
  <transition name="dialog-fade">
    <div
      v-if="visible"
      ref="dragDialog"
      v-append-to-body="isAppendToBody"
      :class="{ 'float-button': isHidden, 'drag-dialog': !isHidden }"
      :style="dialogStyle"
    >
      <!-- 弹窗 -->
      <div
        v-show="!isHidden"
        class="drag-dialog__container"
      >
        <div
          class="drag-dialog__header"
          @mousedown="startDrag"
        >
          <slot name="title">
            <span class="drag-dialog__title">{{ title }}</span>
          </slot>
          <div class="header-icons">
            <span @click="toggleDialog"><NnIcon icon="fa-regular fa-square-minus" /></span>
            <span @click="close"><NnIcon icon="fa-regular fa-circle-xmark" /></span>
          </div>
        </div>
        <div class="drag-dialog__body">
          <slot />
        </div>
        <div
          v-if="$slots.footer"
          class="drag-dialog__footer"
        >
          <slot name="footer" />
        </div>
      </div>

      <!-- 悬浮按钮 -->
      <div
        v-show="isHidden"
        class="drag-float__button"
        :style="{ backgroundColor: floatBgc }"
        @mousedown="startDrag"
      >
        <NnIcon
          class="drag-float__button-icon"
          icon="fa-regular fa-life-ring"
          @click="toggleDialog"
        />
      </div>
    </div>
  </transition>
</template>

<script setup>
defineOptions({name: 'DragDialog'})
import { ref, reactive, nextTick, watchEffect } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: '30%',
  },
  title: {
    type: String,
    default: 'Draggable Dialog',
  },
  posByParent: {
    type: Boolean,
    default: true,
  },
});

const dragDialog = ref('')
const isHidden = ref(false);
const dragging = ref(false);
const offsetX = ref(0);
const offsetY = ref(0);
const transition = ref('');
const parentStyle = reactive({
  width: 0,
  height: 0,
});
const floatBgc = ref('');
const initStyle = reactive({
  width: 0,
  height: 0,
});
const isAppendToBody = ref(false);
const position = reactive({
  top: 0,
  left: 0,
});

// Watch visible prop
watchEffect(() => {
  if (props.visible) {
    open($parent);
  }
});

const open = ($parent) => {
  nextTick(() => {
    let width, height;

    if (props.posByParent) {
      isAppendToBody.value = true;
      width = window.innerWidth - 10;
      height = window.innerHeight - 10;
    } else {
      const parentEl = $parent.$el;
      if (parentEl.offsetWidth > 100 && parentEl.offsetHeight > 100) {
        width = parentEl.offsetWidth;
        height = parentEl.offsetHeight;
      }
    }

    parentStyle.width = width;
    parentStyle.height = height;

    // Use $refs directly if possible without a timeout
    nextTick(() => {
      initStyle.width = dragDialog.value.offsetWidth;
      initStyle.height = dragDialog.value.offsetHeight;
      initDialogPosition();
    });
  });
};

const initDialogPosition = () => {
  nextTick(() => {
    position.left = (parentStyle.width - initStyle.width) / 2;
    position.top = 30;
  });
};

const startDrag = (e) => {
  transition.value = 'none';
  dragging.value = true;
  offsetX.value = e.clientX - position.left;
  offsetY.value = e.clientY - position.top;

  const moveHandler = (e) => {
    if (dragging.value) {
      let newLeft = e.clientX - offsetX.value;
      let newTop = e.clientY - offsetY.value;

      const currentStyle = {
        width:dragDialog.value.offsetWidth,
        height: dragDialog.value.offsetHeight,
      };

      const maxLeft = parentStyle.width - currentStyle.width;
      const maxTop = parentStyle.height - currentStyle.height;

      newLeft = Math.max(5, Math.min(newLeft, maxLeft));
      newTop = Math.max(5, Math.min(newTop, maxTop));

      position.left = newLeft;
      position.top = newTop;
    }
  };

  const stopDrag = () => {
    dragging.value = false;
    document.removeEventListener('mousemove', moveHandler);
    document.removeEventListener('mouseup', stopDrag);
  };

  document.addEventListener('mousemove', moveHandler);
  document.addEventListener('mouseup', stopDrag);
};

const toggleDialog = () => {
  transition.value = 'all 0.3s cubic-bezier(.3,.82,.76,.98)';
  isHidden.value = !isHidden.value;
  if (!isHidden.value) {
    floatBgc.value = '';
    initDialogPosition();
  } else {
    position.left = parentStyle.width - 60;
    position.top = parentStyle.height - 60;
    setTimeout(() => (floatBgc.value = '#007bff'), 200);
  }
};

const close = () => {
  emit('update:visible', false);
};
</script>

<style scoped lang="scss">
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.3s;
}
.dialog-fade-enter,
.dialog-fade-leave-to {
  opacity: 0;
}

.drag-dialog {
  position: fixed;
  z-index: 1000;
}

.float-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}
</style>
