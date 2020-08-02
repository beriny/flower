<template>
  <div id="main">
    <div class="content">
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
              </ul>
            </div>
          </div>
          <div class="city_sort">
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
              <h2>B</h2>
              <div>
                <ul>
                  <li>北京</li>
                  <li>保定</li>
                  <li>蚌埠</li>
                  <li>包头</li>
                </ul>
              </div>
            </div>
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
              <h2>B</h2>
              <div>
                <ul>
                  <li>北京</li>
                  <li>保定</li>
                  <li>蚌埠</li>
                  <li>包头</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
};
</script>

<style scoped>
#content .city_body {
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
