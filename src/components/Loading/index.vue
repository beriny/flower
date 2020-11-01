<template>
  <div class="loader"></div>
</template>
<script>
export default {
  name: "Loading",
};
</script>
<style scoped>
.loader {
  position: relative;
  width: 2.5cm;
  height: 2.5cm;
  transform: rotate(165deg);
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5em;
  height: 0.5em;
  border-radius: 0.25em;
  transform: translate(-50%, -50%);
}
.loader:before {
  animation: before 2s infinite;
}

.loader:after {
  animation: after 2s infinite;
}
</style>
