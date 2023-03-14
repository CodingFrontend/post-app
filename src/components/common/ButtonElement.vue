<template>
  <button
    class="button"
    :class="{ 'button--icon': btnIcon }"
    @click.prevent="onClickButton"
  >
    <span v-if="btnIcon" class="button__icon material-icons">{{
      btnIcon
    }}</span>
    <span class="button__text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "ButtonElement",

  props: {
    text: {
      type: String,
      default: "",
    },

    btnIcon: {
      type: String,
    },
  },

  methods: {
    onClickButton() {
      this.$emit("clickButton");
    },
  },
};
</script>

<style lang="scss">
.button {
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
}

.button--icon {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: seagreen;
  font-size: 16px;
}

.button__icon {
  margin-right: 3px;
  font-size: 18px;
}
</style>
