<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroller",
  props: {
    handleToScroll: {
      type: Function,
      default: function() {},
    },
    handleToTouchEnd: {
      type: Function,
      default: function() {},
    },
  },
  mounted() {
    this.$nextTick(() => {
      var scroll = new BScroll(this.$refs.wrapper, {
        tap: true,
        probeType: 1,
      });
      scroll.on("scroll", (pos) => {
        // console.log("scroll is run");
        this.handleToScroll(pos);
      });
      scroll.on("touchEnd", (pos) => {
        // console.log("touchend");
        this.handleToTouchEnd(pos);
      });
    });
  },
  methods: {
    toScrollTop: function() {
      this.scroll.scrollTo();
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
