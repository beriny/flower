<template>
  <header id="header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {
    title: {
      type: String,
      default: "朵儿影视",
    },
  },
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 50px;
  color: white;
  background: blueviolet;
  border-bottom: blueviolet 1px solid;
  position: fixed;
  left: 0;
  top: 0;
  border-radius: 5%;
}

#header h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
</style>
