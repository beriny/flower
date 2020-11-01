<template>
  <div id="main">
    <Header title="电影推荐" />
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/City" class="city_name">
          <span>{{ $store.state.city.nm }}</span
          ><i class="iconfont icon-lower-triangle"></i>
          <span>大连</span>
        </router-link>
        <div class="hot_switch">
          <router-link tag="div" to="/movie/NowPlay" class="hot_item">
            正在热映
          </router-link>
          <router-link tag="div" to="/movie/ComePlay" class="hot_item">
            即将上映
          </router-link>
        </div>
        <router-link tag="div" to="/movie/Search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import { messageBox } from "@/components/JS";

export default {
  name: "Movie",
  components: {
    Header,
    TabBar,
    // MessageBox,
  },
  mounted() {
    messageBox({
      title: "定位",
      content: "沈阳",
      cancel: "取消",
      ok: "切换定位",
      handleOk: function() {
        // window.localStorage.setItem("nowNM", nm);
        // window.localStorage.setItem("nowID", id);
        // window.location.reload();
        console.log("loding");
      },
    });
  },
};
</script>

<style scoped>
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
}

.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 125px;
}

.movie_menu .city_name.active {
  color: blueviolet;
  border-bottom: 2px blueviolet solid;
  line-height: 125px;
}

.movie_menu .hot_switch {
  display: flex;
  height: 100%;
  line-height: 125px;
}

.movie_menu .hot_item {
  font-size: 15px;
  color: yellowgreen;
  width: 80px;
  line-height: 125px;
}

.movie_menu .hot_item.active {
  color: blueviolet;
  border-bottom: 2px blueviolet solid;
  line-height: 125px;
}

.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 125px;
  display: inline-block;
}

.movie_menu .search_entry.active {
  color: blueviolet;
  border-bottom: 2px blueviolet solid;
  line-height: 125px;
}

.movie_menu .search_entry i {
  font-size: 24px;
  color: blueviolet;
  line-height: 125px;
  display: inline-block;
}
</style>
