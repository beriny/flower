<template>
  <div class="movie_body">
    <ul>
      <li v-for="item in movieList" :key="item.index">
        {{ item.id }}* {{ item.title }}
      </li>
    </ul>
    <ul>
      <li>
        <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分：<span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天5家影院放映了601场</p>
        </div>
        <div class="btn_mall">按钮</div>
      </li>
      <li>
        <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分：<span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天5家影院放映了601场</p>
        </div>
        <div class="btn_mall">按钮</div>
      </li>
      <li>
        <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分：<span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天5家影院放映了601场</p>
        </div>
        <div class="btn_mall">按钮</div>
      </li>
      <li>
        <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分：<span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天5家影院放映了601场</p>
        </div>
        <div class="btn_mall">按钮</div>
      </li>
      <li>
        <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分：<span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天5家影院放映了601场</p>
        </div>
        <div class="btn_mall">按钮</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComePlay",
  data() {
    return {
      movieList: [],
    };
  },
  mounted() {
    this.axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        var msg = res.data;
        console.log(msg);
        for (var i = 0; i < msg.length; i++) {
          console.log(msg[i].id);

          this.movieList.push({
            id: msg[i].id,
            title: msg[i].title,
          });
        }
      });
  },
};
</script>

<style scoped>
.movie_body {
  flex: 1;
  overflow: auto;
}

.movie_body ui {
  margin: 0 12px;
  overflow: hidden;
}

.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px white solid;
  padding-left: 5px;
}
</style>
