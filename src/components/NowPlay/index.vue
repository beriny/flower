<template>
  <div class="content">
    <div class="movie_body">
      <ul>
        <router-link tag="li" to="nowPlay">
          <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
          <div class="info_list">
            <h2>无名之辈</h2>
            <p>观众评分：<span class="grade">9.2</span></p>
            <p>主演：陈建斌，任素汐，潘斌龙</p>
            <p>今天5家影院放映了601场</p>
          </div>
          <button class="btn_mall">按钮</button>
        </router-link>
        <router-link tag="li" to="nowPlay">
          <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
          <div class="info_list">
            <h2>无名之辈</h2>
            <p>观众评分：<span class="grade">9.2</span></p>
            <p>主演：陈建斌，任素汐，潘斌龙</p>
            <p>今天5家影院放映了601场</p>
          </div>
          <button class="btn_mall">按钮</button>
        </router-link>
        <router-link tag="li" to="nowPlay">
          <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
          <div class="info_list">
            <h2>无名之辈</h2>
            <p>观众评分：<span class="grade">9.2</span></p>
            <p>主演：陈建斌，任素汐，潘斌龙</p>
            <p>今天5家影院放映了601场</p>
          </div>
          <button class="btn_mall">按钮</button>
        </router-link>
        <router-link tag="li" to="nowPlay">
          <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
          <div class="info_list">
            <h2>无名之辈</h2>
            <p>观众评分：<span class="grade">9.2</span></p>
            <p>主演：陈建斌，任素汐，潘斌龙</p>
            <p>今天5家影院放映了601场</p>
          </div>
          <button class="btn_mall">按钮</button>
        </router-link>
        <router-link tag="li" to="nowPlay">
          <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
          <div class="info_list">
            <h2>无名之辈</h2>
            <p>观众评分：<span class="grade">9.2</span></p>
            <p>主演：陈建斌，任素汐，潘斌龙</p>
            <p>今天5家影院放映了601场</p>
          </div>
          <button class="btn_mall">按钮</button>
        </router-link>
        <router-link tag="li" to="nowPlay">
          <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
          <div class="info_list">
            <h2>无名之辈</h2>
            <p>观众评分：<span class="grade">9.2</span></p>
            <p>主演：陈建斌，任素汐，潘斌龙</p>
            <p>今天5家影院放映了601场</p>
          </div>
          <button class="btn_mall">按钮</button>
        </router-link>
        <router-link tag="li" to="nowPlay">
          <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
          <div class="info_list">
            <h2>无名之辈</h2>
            <p>观众评分：<span class="grade">9.2</span></p>
            <p>主演：陈建斌，任素汐，潘斌龙</p>
            <p>今天5家影院放映了601场</p>
          </div>
          <button class="btn_mall">按钮</button>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NowPlay",
};
</script>

<style scoped>
#content .movie_body {
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

.btn_mall {
  color: blue;
  background: orange;
}
</style>
