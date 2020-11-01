<template>
  <div class="movie_body" ref="movie_body">
    <Loading v-if="isLoading" />
    <scroller
      v-else
      :handleToScroll="handleToScroll"
      :handleToTouchEnd="handleToTouchEnd"
    >
      <div>
        <ul>
          <li>
            <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
            <div class="info_list">
              <h2>无名之辈</h2>
              <p>观众评分：<span class="grade">9.2</span></p>
              <p>主演：陈建斌，任素汐，潘斌龙</p>
              <p>今天5家影院放映了601场</p>
            </div>
            <button class="btn_mall">按钮</button>
          </li>
          <li>
            <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
            <div class="info_list">
              <h2>无名之辈</h2>
              <p>观众评分：<span class="grade">9.2</span></p>
              <p>主演：陈建斌，任素汐，潘斌龙</p>
              <p>今天5家影院放映了601场</p>
            </div>
            <button class="btn_mall">按钮</button>
          </li>
          <li>
            <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
            <div class="info_list">
              <h2>无名之辈</h2>
              <p>观众评分：<span class="grade">9.2</span></p>
              <p>主演：陈建斌，任素汐，潘斌龙</p>
              <p>今天5家影院放映了601场</p>
            </div>
            <button class="btn_mall">按钮</button>
          </li>
          <li>
            <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
            <div class="info_list">
              <h2>无名之辈</h2>
              <p>观众评分：<span class="grade">9.2</span></p>
              <p>主演：陈建斌，任素汐，潘斌龙</p>
              <p>今天5家影院放映了601场</p>
            </div>
            <button class="btn_mall">按钮</button>
          </li>
          <li>
            <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
            <div class="info_list">
              <h2>无名之辈</h2>
              <p>观众评分：<span class="grade">9.2</span></p>
              <p>主演：陈建斌，任素汐，潘斌龙</p>
              <p>今天5家影院放映了601场</p>
            </div>
            <button class="btn_mall">按钮</button>
          </li>
          <li>
            <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
            <div class="info_list">
              <h2>无名之辈</h2>
              <p>观众评分：<span class="grade">9.2</span></p>
              <p>主演：陈建斌，任素汐，潘斌龙</p>
              <p>今天5家影院放映了601场</p>
            </div>
            <button class="btn_mall">按钮</button>
          </li>
          <li>
            <div class="pic_show"><img src="@/assets/movie.png" alt="" /></div>
            <div class="info_list">
              <h2>无名之辈</h2>
              <p>观众评分：<span class="grade">9.2</span></p>
              <p>主演：陈建斌，任素汐，潘斌龙</p>
              <p>今天5家影院放映了601场</p>
            </div>
            <button class="btn_mall" @tap="handleToDetail">按钮</button>
          </li>
        </ul>
        <hr />
        <ul>
          <li class="pullDownMsg">{{ pullDownMsg }}</li>
          <li v-for="item in movieList" :key="item.index">
            {{ item.id }}£ {{ item.title }}
          </li>
        </ul>
      </div>
    </scroller>
  </div>
</template>

<script>
export default {
  name: "NowPlay",
  data() {
    return {
      movieList: [],
      pullDownMsg: " ",
      isLoading: true,
    };
  },
  mounted() {
    this.axios //https://jsonplaceholder.typicode.com/
      .get("posts/albums")
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
        this.isLoading = false;
      });
  },

  methods: {
    handleToDetail: function() {
      console.log("tap is run");
    },
    handleToScroll(pos) {
      if (pos.y > 0) {
        this.pullDownMsg = "更新成功";
      }
    },
    handleToTouchEnd(pos) {
      if (pos.y > 30) {
        this.axios
          .get("https://jsonplaceholder.typicode.com/albums")
          .then(() => {
            var msg = res.data;
            this.pullDownMsg = "更新成功！";
            setTimeout(() => {
              this.movieList.push({
                id: msg[i].id,
                title: msg[i].title,
              });
              this.pullDownMsg = " ";
            }, 1000);
          });
      }
    },
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

.btn_mall {
  color: blue;
  background: orange;
}
</style>
