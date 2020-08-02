<template>
  <div class="login_body">
    <div>
      <input class="login_text" type="text" placeHolder="用户名/手机号/邮箱" />
    </div>
    <div>
      <input class="login_pwd" type="password" placeHolder="请输入密码" />
    </div>
    <div class="login_btn">
      <input type="submit" value="登录" />
    </div>
    <div class="login_link">
      <a href="#">立即注册</a>
      <a href="#">找回密码</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
#content .login_body {
  width: 100%;
}

.login_body .login_text {
  width: 100%;
  height: 140px;
  border: none;
  border-bottom: 1px solid white;
  margin-bottom: 15px;
  top: 15px;
}

.login_body .login_pwd {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid white;
  margin-bottom: 15px;
}
.login_body .login_btn {
  height: 50px;
  width: 100px;
  margin: 10px;
  align-content: center;
}

.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: lightcoral;
  border-radius: 3px;
  border: none;
  display: flex;
}

.login_body .login_link {
  display: flex;
  justify-content: space-between;
}

.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: yellowgreen;
}
</style>
