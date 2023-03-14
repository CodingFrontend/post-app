<template>
  <div class="search-input">
    <input
      type="text"
      placeholder="Search..."
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "SearchInput",

  props: {
    value: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.search-input {
  width: 100%;
  input {
    border-radius: 25px;
    height: 30px;
    width: calc(100% - 40px);
    font-size: 16px;
    padding: 5px 20px;
    border: 1px solid;
    &:focus {
      outline: none;
      border-color: lightslategray;
    }
  }
}
</style>
