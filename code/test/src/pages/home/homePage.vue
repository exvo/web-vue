<template>
  <div class="layout">
    <Layout>
      <Content :style="{height:getLayoutHeight(this.layoutStyle.contentHeight)}"></Content>
      <Footer :style="{height:getLayoutHeight(this.layoutStyle.footerHeight)}" class="footer">
        <Row :gutter="16">
          <Col span="6" v-for="item in this.footerData" :key="item.code" :name="item.name">
            <Button type="info">{{item.name}}</Button>
          </Col>
        </Row>
      </Footer>
    </Layout>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // 窗口高度
      clientHeight: '',
      // layout样式
      layoutStyle: {
        footerHeight: 100,
        contentHeight: 300
      },
      footerData: [
        {
          code: 'interface',
          name: '接口测试'
        },
        {
          code: 'jsonData',
          name: 'json数据'
        },
        {
          code: 'timeConversion',
          name: '时间戳转换'
        }
      ]
    }
  },
  mounted: function () {
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`
    window.onresize = function temp () {
      this.clientHeight = `${document.documentElement.clientHeight}`
    }
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
  methods: {
    changeFixed: function (clientHeight) {
      // 窗口高度 - 页脚高度 = content高度
      this.layoutStyle.contentHeight = clientHeight - this.layoutStyle.footerHeight - 2
    },
    getLayoutHeight: function (height) {
      return height.toString() + 'px'
    }
  }
}
</script>

<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  height: 100%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.footer{
  background: #c3baff;
}
</style>
