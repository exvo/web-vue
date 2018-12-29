<template>
    <div class="home">
        <!-- 表单 -->
        <div class="form">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import login from './login.vue'

export default {
  data () {
    return {}
  },
  components: {
    login
  }
}
</script>

<style>
.form {
  width: 500px;
  height: 300px;
  /* background-color: aqua; */
  position: absolute;
  top: 25%;
  left: 30%;
  /* 子div居中 start */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 子div居中 end */
}
</style>
