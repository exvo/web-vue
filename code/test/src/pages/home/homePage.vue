<template>
  <div class="layout">
    <Layout>
      <Content :style="{height:getLayoutHeight(this.layoutStyle.contentHeight)}">
        <div v-if="showHome">Wellcome</div>
        <Tabs v-else type="card" @on-click="handleTabClick" :animated="false" @on-tab-remove="handleTabRemove" :value="currentTabCode">
          <TabPane v-for="tab in tabsData" :key="tab.code" :label="tab.name" :name="tab.code" closable >
            <router-view></router-view>
          </TabPane>
        </Tabs>
      </Content>
      <Footer :style="{height:getLayoutHeight(this.layoutStyle.footerHeight)}" class="footer">
        <Row :gutter="16">
          <Col span="6" v-for="item in this.footerData" :key="item.code" :name="item.name">
            <Button type="info" @click="chooseType(item)">{{item.name}}</Button>
          </Col>
        </Row>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import interfacePage from '@/pages/home/tabPane/interface'
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
      showHome: true,
      currentTabCode: '',
      tabsData: [
      ],
      component: {
        interfacePage
      },
      footerData: [
        {
          code: 'interface',
          name: '接口测试',
          url: '/homePage/interface'
        },
        {
          code: 'jsonData',
          name: 'json数据',
          url: ''
        },
        {
          code: 'timeConversion',
          name: '时间戳转换',
          url: ''
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
    },
    tabsData: function () {
      if (this.tabsData && this.tabsData.length > 0) {
        this.showHome = false
      } else {
        this.showHome = true
      }
    }
  },
  methods: {
    changeFixed: function (clientHeight) {
      // 窗口高度 - 页脚高度 = content高度
      this.layoutStyle.contentHeight = clientHeight - this.layoutStyle.footerHeight - 2
    },
    getLayoutHeight: function (height) {
      return height.toString() + 'px'
    },
    // 点击按钮
    chooseType: function (item) {
      if (this.tabsData) {
        var tab = this.tabsData.find(t => {
          return t.code === item.code
        })
        if (tab) {
          return
        }
      }
      this.currentTabCode = item.code
      this.tabsData.push(item)
      this.$router.push(item.url)
    },
    // 删除tab页
    handleTabRemove: function (code) {
      var closeTab = this.tabsData.find(t => {
        return t.code === code
      })
      this.tabsData.splice(this.tabsData.indexOf(closeTab), 1)
    },
    handleTabClick: function (code) {
      var chooseTab = this.tabsData.find(t => {
        return t.code === code
      })
      console.log(chooseTab.url)
      this.$router.push(chooseTab.url)
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
