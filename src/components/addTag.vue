<template>
  <div>
    <button
      type="button"
      v-if="isShowBtn"
      @click="isShowBtn = false"
      class="btn btn-primary btn-sm"
    >
      +Tag
    </button>
    <input
      v-else
      type="text"
      style="width: 70px"
      v-model="tag"
      @blur="addTag"
      @keydown.enter="addTag"
      v-focus
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowBtn: true,
      tag: "",
    };
  },
  methods: {
    addTag() {
      this.isShowBtn = true;
      if (this.tag !== "") {
        this.$emit("add-info", this.tag);
      }
      this.tag = "";
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style>
</style>