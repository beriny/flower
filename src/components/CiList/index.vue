<template>
  <div class="cinema_body">
    <ul>
      <li>
        <div>
          <span>大地影院（澳东世纪店）</span>
          <span class="q"><span class="price">9.9</span>元起</span>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院（澳东世纪店）</span>
          <span class="q"><span class="price">9.9</span>元起</span>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院（澳东世纪店）</span>
          <span class="q"><span class="price">9.9</span>元起</span>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院（澳东世纪店）</span>
          <span class="q"><span class="price">9.9</span>元起</span>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院（澳东世纪店）</span>
          <span class="q"><span class="price">9.9</span>元起</span>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院（澳东世纪店）</span>
          <span class="q"><span class="price">9.9</span>元起</span>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CiList",
};
</script>

<style scoped>
#content .cinema_body {
  flex: 1;
  overflow: auto;
}

.cinema_body ul {
  padding: 20px;
}

.cinema_body li {
  border-bottom: 1px solid aliceblue;
  margin-bottom: 20px;
}

.cinema_body div {
  margin-bottom: 10px;
}

.cinema_body .q {
  font-size: 11px;
  color: red;
}

.cinema_body .price {
  font-size: 18px;
}

.cinema_body .address {
  font-size: 13px;
  color: lightblue;
}

.cinema_body .address span:nth-of-type(2) {
  float: right;
}

.cinema_body .card {
  display: flex;
}

.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: antiquewhite;
  border: 1px solid chocolate;
}

.cinema_body .card div .or {
  color: lavender;
  border: 1px solid orangered;
}

.cinema_body .card div .or .bl {
  color: blueviolet;
  border: 1px solid lightcyan;
}
</style>