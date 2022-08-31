<template>
  <div class="app">
    <my-header color="yellow" title="tabbar"></my-header>
    <component :is="componentName"></component>
    <my-footer
      :list="tabList"
      @change-componentName="componentName = $event"
    ></my-footer>
  </div>
</template>

<script>
import MyHeader from "cpns/MyHeader.vue";
import MyFooter from "cpns/MyFooter.vue";
import MyGoodsList from "@/views/MyGoodsList.vue";
import MyGoodsSearch from "@/views/MyGoodsSearch.vue";
import MyUserInfo from "@/views/MyUserInfo.vue";

export default {
  components: {
    MyHeader,
    MyFooter,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  data() {
    return {
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
      componentName: "MyGoodsList",
    };
  },
};
</script>

<style scoped>
.app {
  padding-top: 50px;
  padding-bottom: 45px;
}
</style>