<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <div class="clearfix">
          <ul>
            <li>上海</li>
            <li>北京</li>
            <li>广州</li>
            <li>深圳</li>
            <li>南京</li>
            <li>杭州</li>
            <li v-for="item in hotList" :key="item.id">
              {{ item.id }}
            </li>
          </ul>
        </div>
      </div>
      <div class="city_sort" ref="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉善盟</li>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
          </ul>
        </div>
        <div>
          <h2>
            <li v-for="item in cityList" :key="item.id">{{ item.id }}</li>
          </h2>
          <li>北京</li>
          <li>保定</li>
          <li>蚌埠</li>
          <li>包头</li>
          <li v-for="item in cityList" :key="item.index">
            {{ item.title }}! {{ item.body }}
          </li>
        </div>
      </div>
      <div class="city_index">
        <ul>
          <li
            v-for="(item, index) in cityList"
            :key="item.index"
            @touchstart="handleToIndex(index)"
          >
            {{ item.id }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      cityList: [],
      hotList: [],
    };
  },
  mounted() {
    this.axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        var status = res.status;
        if (status === 200) {
          // console.log(res);
          var data = res.data;
          // console.log(data);
          var { cityList, hotList } = this.formatCityList(data);
          console.log(cityList);
          console.log(hotList);
          this.cityList = cityList;
          this.hotList = hotList;
        } else {
          console.log("status is " + status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    formatCityList: function(dataBody) {
      var cityList = [];
      var hotList = [];

      for (var i = 0; i < dataBody.length; i++) {
        var userId = dataBody[i].id;
        if (userId) {
          cityList.push({
            id: dataBody[i].id,
            title: dataBody[i].title,
            body: dataBody[i].body,
          });
        } else {
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j] == userId) {
              cityList[j].list.push({
                id: dataBody[i].id,
                title: dataBody[i].title,
                body: dataBody[i].body,
              });
            }
          }
        }
        for (var k in dataBody[i].title) {
          if (k[0] == "a") {
            hotList.push({
              id: dataBody[i].id,
              title: dataBody[i].title,
              body: dataBody[i].body,
            });
          }
        }
      }
      return {
        cityList,
        hotList,
      };
    },
    handleToIndex: function() {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
    },
  },
};
</script>

<style scoped>
.city_body {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
}

.city_body .city_list {
  margin-left: 20px;
  height: 100%;
  line-height: 125px;
  /* overflow: scroll; */
}

.city_body .city_list .city_index {
  display: flex;
  height: 100%;
  line-height: 125px;
}

.city_body .city_list.active {
  color: blueviolet;
  border-bottom: 2px blueviolet solid;
  line-height: 125px;
}

.city_body .city_hot {
  font-size: 15px;
  color: yellowgreen;
  width: 80px;
  line-height: 125px;
}

.city_body .city_hot h2 {
  display: inline-block;
  margin-left: -1em;
  height: 100%;
  line-height: 125px;
}

.city_body .city_hot ul li {
  display: flex;
  height: 100%;
  line-height: 125px;
}

.city_body .city_hot .clearfix {
  font-size: 15px;
  color: yellowgreen;
  width: 80px;
  line-height: 125px;
}

.city_body .city_hot .clearfix.active {
  color: blueviolet;
  border-bottom: 2px blueviolet solid;
  line-height: 125px;
}

.city_body .city_sort {
  font-size: 15px;
  color: yellowgreen;
  width: 80px;
  line-height: 125px;
}

.city_body .city_sort h2 {
  display: inline-block;
  margin-left: -10;
  height: 100%;
  line-height: 125px;
}

.city_body .city_sort ul li {
  display: flex;
  height: 100%;
  line-height: 125px;
}
</style>
