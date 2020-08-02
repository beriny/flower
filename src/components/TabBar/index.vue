<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/moive">
        <i class="iconfont icon-dianying"></i>
        <p>电影推荐</p>
      </router-link>
      <router-link tag="li" to="/cinema" class="active">
        <i class="iconfont icon-yingyuan"></i>
        <p>城市影院</p>
      </router-link>
      <router-link tag="li" to="/mine">
        <i class="iconfont icon-wode"></i>
        <p>个人中心</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "TabBar",
  components: {},
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 70px;
  background: lemonchiffon;
  border-top: 2px whitesmoke solid;
  position: fixed;
  left: 0;
  bottom: 0;
  border-radius: 5%;
}

#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}

#footer ul li {
  flex: 1;
  height: 40px;
}

#footer ul li.active {
  color: blueviolet;
}

#footer ul li.router-link-active {
  color: blueviolet;
}

#footer ul i {
  font-size: 20px;
}
.iconfont icon-dianying {
  display: block;
  width: 10px;
  height: 10px;
  background-image: url("../.././assets/movie.png");
}

#footer ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>
