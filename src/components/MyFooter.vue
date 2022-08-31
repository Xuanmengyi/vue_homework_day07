<template>
  <div class="my-tab-bar">
    <div
      :class="['tab-item', { current: active === index }]"
      v-for="(item, index) in list"
      :key="index"
      @click="
        (active = index), $emit('change-componentName', item.componentName)
      "
    >
      <!-- 图标 -->
      <span :class="`iconfont ${item.iconText}`"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>
  
  <style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>