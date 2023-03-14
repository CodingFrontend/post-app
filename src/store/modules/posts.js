import postsData from "/src/data/posts";
import { nanoid } from "nanoid";

const state = () => ({
  list: {},
});

const mutations = {
  SET_DATA: (state, { key, data }) => {
    // Restricting reactivity using Object.freeze
    state[key] = data.map((item) => Object.freeze(item));
  },

  editPost(state, payload) {
    const itemIndex = state.list.find((item) => item.id === payload.id);
    if (itemIndex !== -1) {
      const newItem = {
        ...itemIndex,
        name: payload.name,
      };
      state.list.splice(itemIndex, 1, Object.freeze(newItem));
    }
  },

  deletePost(state, payload) {
    const index = state.list.findIndex((c) => c.id == payload.id);
    return state.list.splice(index, 1);
  },

  addPost(state) {
    const emptyItem = {
      id: nanoid(),
      name: "New post",
    };
    return state.list.splice(0, 0, Object.freeze(emptyItem));
  },
};

const actions = {
  getList({ commit }) {
    commit("SET_DATA", { key: "list", data: postsData.posts });
  },
};

export default {
  name: "posts",
  namespaced: true,
  state,
  mutations,
  actions,
};
