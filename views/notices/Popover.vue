<template>
    <div class="page-area">
      <!-- <div class="bread-crumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
                class="breadcrumb-item1"
                :to="{ path: '/' }">
                起始页
            </el-breadcrumb-item>
            <el-breadcrumb-item  class="el-icon-cherry">
                    {{$i18n.t('sideBar.Notice')}}
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                {{$i18n.t('sideBar.PopoverNotice')}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div> -->
    <div class="data-show">
      <el-popover
        ref="popover"
        title="focus弹出"
        trigger="focus"
        content="持续点击，松开就无">
      </el-popover>
        <el-button  class="popbutton" v-popover:popover>focus弹出</el-button>
      <el-popover
        width="500"
        trigger="click">
        <el-table
          :data="popData">
          <el-table-column width="125" property="id" label="ID"></el-table-column>
          <el-table-column width="150" property="name" label="姓名"></el-table-column>
          <el-table-column width="150" property="address" label="地址"></el-table-column>
          <el-table-column width="125" property="live" label="生命状态"></el-table-column>
        </el-table>
        <el-button  class="popbutton" slot="reference">嵌套信息</el-button>
      </el-popover>
      <el-popover
        placement="top"
        width="160"
        v-model="visible">
        <p>这是一段内容这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
        </div>
        <el-button  class="popbutton" slot="reference">删除</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
@Component
export default class Popover extends Vue{

visible = false

 get popData ():Array<any>{
  return [
  {
    name: '超级水獭Midori',
    id: 'akasuperotter',
    address: '阿拉伯',
    categroy: '啮齿类动物',
    desc: '擅长AK-47 托马斯全旋 智商超过土拨鼠 真情666 ',
    live:'存活中'
  }, {
    name: '多黎母哀辞脏嗨您',
    id: 'arigadosennpa',
    address: '美利坚共和国',
    categroy: '黑人',
    desc: '卡皮巴拉（黑色版） 糖果制造者  蛋包饭的vip席位拥有者 讨厌同族',
    live:'存活中'
  }, {
    name: '海尔兄弟',
    id: 'zuipaodewang',
    address: '知名家族挨涩能族',
    categroy: 'HorseStreet',
    desc: '爆破小组的主力 最强王者 蝴蝶穿花步 六袋听命的傀儡大师 克隆人',
    live:'双倍存活中'
  },
  {
    name: '玫瑰花生产商',
    id: 'demmenanndakore',
    address: '银河系或者更远',
    categroy: '不用氧气星人',
    desc: '奔赴火星  花束般的没有恋爱  liuboliuhailiuba  或许是刘强的接班人',
    live:'存活中'
  },{
    name: '最强天津fan3.0',
    id: 'iamironman',
    address: '赛博坦星球',
    categroy: '龙珠超',
    desc: '求你别喝死  大猩猩  我在天津凿大树 天津fan  你给我直球',
    live:'危'
  },{
    name: '秋天',
    id: 'qiutianyaolashi',
    address: '一个温暖的家',
    categroy: '黑色狗子',
    desc: '快乐修狗 快乐袖钩 快乐小沟',
    live:'超级健康'
  }
  ]
 }
}
</script>
<style scoped>
.page-body{
  padding:20px;
}

.data-show{
  padding:20px;
}
.popbutton{
  margin-left:10px;
}
</style>