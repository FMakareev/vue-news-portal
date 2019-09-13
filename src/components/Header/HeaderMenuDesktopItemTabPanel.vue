<template>
  <div class="tab-pane" :id="id" role="tabpanel" :class="{'active show':activeTab === tabID}">
    <div class="row">
      <div v-for="(item, index) in postList" v-bind:key="index" class="col-3">
        <!-- Item post -->
        <PostCard
          :category="item.category"
          :href="item.href"
          :title="item.title"
          :publishDate="item.publishDate"
          :preview="item.preview"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from "../PostCard.vue";

export default {
  name: "HeaderMenuDesktopItemTabPanel",
  props: {
    postList: Array,
    activeTab: String,
    tabID: String,
    id: String,
  },
  components: {
    PostCard
  }
};
</script>

<style scoped></style>
