<template>
  <div class="icon-wrapper">
<!--    <el-tabs style="height:900px">-->
<!--      <el-tab-pane-->
<!--        v-for="item in iconsData"-->
<!--        :key="item.category"-->
<!--        :label="item.category.toUpperCase()"-->
<!--        class="icon-category"-->
<!--      >-->
<!--        <div class="icon-category-container">-->
<!--          <div-->
<!--            v-for="(icon, iconIndex) in item.iconList"-->
<!--            :key="`${icon.prefix}_${icon.iconName}_${iconIndex}`"-->
<!--            class="icon-item"-->
<!--            @click="copyToClipboard(`fa-${item.category} fa-${icon.iconName}`)"-->
<!--          >-->
<!--            <span-->
<!--              class="icon"-->
<!--              :title="`fa-${item.category} fa-${icon.iconName}`"-->
<!--            >-->
<!--              <NnIcon-->
<!--                :icon="[icon.prefix, icon.iconName]"-->
<!--                fixed-width-->
<!--                size="lg"-->
<!--              />-->
<!--            </span>-->
<!--            <small>{{ `fa-${item.category} fa-${icon.iconName}` }}</small>-->
<!--          </div>-->
<!--        </div>-->
<!--      </el-tab-pane>-->
<!--    </el-tabs>-->
  </div>
</template>

<script setup>
// import { solidIconList, regularIconList, brandsIconList } from '../../../packages/utils/fontAwesome.js';
// import { ref } from 'vue';
//
// const iconsData = ref([
//   {
//     category: 'solid',
//     iconList: [...solidIconList],
//   },
//   {
//     category: 'regular',
//     iconList: [...regularIconList],
//   },
//   {
//     category: 'brands',
//     iconList: [...brandsIconList],
//   },
// ]);

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log(`复制 ${text} 成功`);
  }).catch(() => {
    console.error('复制失败，请手动复制');
  });
};
</script>

<style scoped lang="scss">
.icon-wrapper {
  width: calc(100% - 30px);
  height: 100%;
  padding: 0 15px;
  background: rgb(240, 241, 243);
  border-radius: 10px;

  .icon-category {
    width: 100%;

    .icon-category-container {
      width: 100%;
      height: 780px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
      grid-row-gap: 20px;
      overflow: auto;

      .icon-item {
        width: calc(248px - 25px);
        padding: 10px 0 10px 20px;
        box-shadow: 0 0.25em 0 rgb(195, 198, 209);
        background: #fff;
        color: rgb(24, 49, 83);
        border: 0em solid #fff;
        border-radius: 0.35em;
        background: #fff;
        vertical-align: top;
        color: rgb(24, 49, 83);
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        cursor: pointer;

        &:hover {
          box-shadow: 0 0.25em 0 #74c0fc;
        }

        .icon {
          margin-right: 15px;
          display: inline-block;
          //border: 1px solid silver;
          border-radius: 0.25em;
          padding: 0.5em 0.5em;
        }
      }
    }
  }
}
</style>
