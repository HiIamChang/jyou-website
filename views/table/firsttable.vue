<template>
	<div class="page-area">
		<div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">起始页</el-breadcrumb-item>
                <el-breadcrumb-item  class="el-icon-apple">  {{$i18n.t('sideBar.table')}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{$i18n.t('sideBar.elementUI-table-plugin')}}</el-breadcrumb-item>
            </el-breadcrumb>
		</div>
		<div class="page-body">
      <div class="data-show">
        <div class="title">以下是一个使用elementui组件库建立的基础表格</div>
        <div class="page-table">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="name"
              width="180"
              :label="tableLabels[0].name"
              >
            </el-table-column>
            <el-table-column
              prop="id"
              :label="tableLabels[0].id"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              :label="tableLabels[0].address"
              width="180">
            </el-table-column>
            <el-table-column
              prop="categroy"
              :label="tableLabels[0].categroy"
              width="180">
            </el-table-column>
            <el-table-column
              prop="desc"
              :label="tableLabels[0].desc">
            </el-table-column>
            <el-table-column
              prop="live"
              :label="tableLabels[0].live"
              width="180">
            </el-table-column>
          </el-table>
          </div>
        </div>
      </div>
	</div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
@Component
export default class FirstTable extends Vue {

 get tableLabels():Array<any>{
        return[{
            id: i18n.t('tableLabels.id'),
            name: i18n.t('tableLabels.name') ,
            categroy: i18n.t('tableLabels.category') ,
            address: i18n.t('tableLabels.address') ,
            desc: i18n.t('tableLabels.desc'),
            live: i18n.t('tableLabels.live')
        }];
    }
 get tableData():Array<any>{
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
          },{
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
<style>
.page-body{
  padding:20px;
}
.data-show{
  padding:20px;
}
.title {
		line-height: 50px;
		font-size: 16px;
		color:#23c175;
		font-weight: bold;
		text-align: center;
	}
.page-table{
  align-items: center;
}
</style>