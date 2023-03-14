<template>
  <div class="post" :class="{ active: isEditPostName }">
    <div class="post__actions">
      <button-element
        btn-icon="edit"
        class="post__button-icon post__button-icon--edit"
        @clickButton="onEditPost"
      />
      <button-element
        btn-icon="delete"
        class="post__button-icon post__button-icon--delete"
        @clickButton="onDeletePost"
      />
    </div>
    <div class="post__content">
      <textarea
        v-if="isEditPostName"
        :value="source.name"
        class="post__input"
        @keydown.enter.prevent="onSaveEdit"
        @input="updateName"
      />
      <div v-else class="post__name">{{ source.name }}</div>
    </div>
  </div>
</template>

<script>
// vuex
import { mapMutations } from "vuex";

//components
import ButtonElement from "/src/components/common/ButtonElement.vue";

export default {
  name: "Post",

  data() {
    return {
      isEditPostName: false,
      postName: "",
    };
  },

  props: {
    source: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  components: {
    ButtonElement,
  },

  methods: {
    ...mapMutations({
      editPost: "posts/editPost",
      deletePost: "posts/deletePost",
    }),

    updateName(event) {
      this.postName = event.target.value.trim();
    },

    onEditPost() {
      this.isEditPostName = true;
      this.postName = this.source.name;
    },

    onSaveEdit() {
      this.isEditPostName = false;
      this.editPost({
        id: this.source.id,
        name: this.postName,
      });
    },

    onDeletePost() {
      this.deletePost({ id: this.source.id });
    },
  },
};
</script>

<style lang="scss">
.post {
  display: flex;
  flex-direction: column;
  padding: 15px 15px 30px 15px;
  border: 1px solid lightgray;
  border-radius: 10px;

  &.active {
    border-color: lightseagreen;
  }

  &:last-of-type {
    margin: 0;
  }

  &:hover {
    border-color: lightseagreen;
    .post__button-icon {
      opacity: 1;
      visibility: visible;
    }
  }
}

.post__actions {
  display: flex;
  align-self: flex-end;
  margin-bottom: 10px;
}

.post__button-icon {
  opacity: 0;
  visibility: hidden;

  transition: all 0.3s ease;
  &--delete {
    color: red;
  }

  &--edit {
    color: grey;
  }
}

.post__input {
  height: 80px;
  border: 1px solid lightgray;
  background: #fff;
  border-radius: 5px;
  resize: none;
  outline: none;
  padding: 3px;
  margin-bottom: 5px;
  width: calc(100% - 6px);
  transition: border 0.3s;
}

.post__name {
  word-wrap: break-word;
}
</style>
