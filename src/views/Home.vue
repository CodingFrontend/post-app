<template>
  <div class="posts">
    <h1 class="posts__title">Posts</h1>

    <div class="posts__actions">
      <search-input v-model.trim="searchText" class="posts__search" />
      <button-element
        btn-icon="add"
        text="Add post"
        class="posts__add-button"
        @clickButton="onAddPost"
      />
    </div>

    <div class="posts__list">
      <virtual-list
        :page-mode="true"
        :item-class="'post-wrapper'"
        :data-key="'id'"
        :data-sources="filteredList"
        :data-component="postComponent"
      />
    </div>
  </div>
</template>

<script>
// vuex
import { mapState, mapActions, mapMutations } from "vuex";

//components
import Post from "/src/components/post/Post.vue";
import ButtonElement from "/src/components/common/ButtonElement.vue";
import SearchInput from "/src/components/common/SearchInput.vue";

import VirtualList from "vue-virtual-scroll-list";

export default {
  name: "Home",

  data() {
    return {
      postComponent: Post,
      searchText: "",
    };
  },

  components: {
    ButtonElement,
    SearchInput,
    VirtualList,
  },

  computed: {
    ...mapState({
      list: (state) => state.posts.list,
    }),

    filteredList() {
      return this.list.filter((post) =>
        post.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },

  methods: {
    ...mapActions({
      getList: "posts/getList",
    }),

    ...mapMutations({
      addPost: "posts/addPost",
    }),

    onAddPost() {
      this.addPost();
    },

    searchPost(value) {
      this.filterList(value);
    },
  },

  created() {
    this.getList();
  },
};
</script>

<style lang="scss">
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 550px;
  margin: 0 auto;
}

.posts__title {
  margin-bottom: 30px;
}

.posts__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 15px;

  width: 100%;
}

.posts__search {
  margin-bottom: 25px;
}

.post-wrapper {
  margin-bottom: 25px;
}
</style>
