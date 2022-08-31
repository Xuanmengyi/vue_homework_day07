<template>
  <div>
    <my-table :goodsList="goodsList">
      <template #head>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="{ good }">
        <td>{{ good.id }}</td>
        <td>{{ good.goods_name }}</td>
        <td>{{ good.goods_price }}</td>
        <td>
          <add-tag @add-info="good.tags.push($event)"></add-tag>
          <span
            v-for="(item, index) in good.tags"
            :key="index"
            class="badge bg-warning text-dark"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(good.id)">
            删除
          </button>
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from "cpns/MyTable.vue";
import axios from "@/utils/request";
import addTag from "@/components/addTag.vue";
export default {
  components: {
    MyTable,
    addTag,
  },
  data() {
    return {
      goodsList: [],
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      try {
        const { data } = await axios({
          url: "/api/goods",
        });
        this.goodsList = data.data;
      } catch {
        alert("出错了");
      }
    },
    del(id) {
      this.goodsList = this.goodsList.filter((item) => item.id !== id);
    },
  },
};
</script>

<style>
</style>