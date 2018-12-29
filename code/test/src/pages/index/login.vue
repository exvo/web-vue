<template>
    <div class="login">
        <Form ref="form" :model="form" :rules="checkForm">
            <FormItem prop="account">
                <i-input type="text" v-model="form.account" size="large" placeholder="用户名">
                    <Icon type="ios-person-outline" size="30" slot="prepend"></Icon>
                </i-input>
            </FormItem>
            <FormItem prop="password">
                <i-input type="password" v-model="form.password" size="large" placeholder="密码">
                    <Icon type="ios-lock-outline" size="30" slot="prepend"></Icon>
                </i-input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="login('form')" long>登录</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import { serverApi } from '@/serverApi'

export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      },
      checkForm: {
        account: [{require: true, message: '用户名不能为空', trigger: 'blur'}],
        password: [{require: true, message: '密码不能为空', trigger: 'blur'}]
      }
    }
  },
  methods: {
    login: function (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          var paramData = {
            account: this.form.account,
            password: this.form.password
          }
          this.$http.post(serverApi.LOGIN, paramData, {emulateJSON: false}).then((res) => {
            // 跳转首页
            // this.$router.push('/index/home');
            // this.$Message.success('登录成功');
            console.log(res)
          }).catch((error) => {
            console.log(error)
          })
        }
      })
    }
  }
}
</script>

<style>
.ivu-input-group-large .ivu-input {
    height: 45px;
    width: 250px;
}
.login {
    width: 80%;
    height: 80%;
    /* background-color: chocolate; */
    /* 子div居中 start */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 子div居中 end */
}

</style>
