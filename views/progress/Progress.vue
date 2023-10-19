<template>
    <div class="page-area">
		<div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item
                    class="breadcrumb-item1"
                    :to="{ path: '/' }">
                    起始页
                </el-breadcrumb-item>
                <el-breadcrumb-item  class="el-icon-sugar">
                        {{$i18n.t('sideBar.Progress')}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="data-show">
          <h3>线形进度条</h3>
          <div class="part">
            <el-progress :percentage="40"  status="exception"></el-progress>
            <el-progress :percentage="70"  status="warning"></el-progress>
            <el-progress :percentage="100"   status="success"></el-progress>
          </div>
          <h3>百分比内显</h3>
          <div class="part">
            <el-progress class="item" :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
            <el-progress class="item" :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
            <el-progress class="item" :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
          </div>
          <h3>自定义颜色</h3>
          <div class="part">
            <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
            <div>
              <el-button-group>
                <el-button icon="el-icon-minus" @click="decrease"></el-button>
                <el-button icon="el-icon-plus" @click="increase"></el-button>
              </el-button-group>
            </div>
          </div>
          <h3>环形进度条</h3>
          <div class="part">
            <el-progress class="circle" type="circle" :percentage="0" :color="customColorMethod" ></el-progress>
            <el-progress class="circle" type="circle" :percentage="15" :color="customColorMethod" text-color="red"></el-progress>
            <el-progress class="circle" type="circle" :percentage="55" :color="customColorMethod" text-color="orange"></el-progress>
            <el-progress class="circle" type="circle" :percentage="95" :color="customColorMethod" text-color="#23c175"></el-progress>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
@Component
export default class Progress extends Vue{

  percentage = 0

  format(percentage){
    return ` ${percentage} %`
  }

  customColorMethod(percentage) {
    if (percentage <= 20) {
      return 'red';
    } else if (percentage <= 70) {
      return 'orange';
    } else {
      return '#23c175';
    }
  }
  increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      }

  decrease() {
    this.percentage -= 10;
    if (this.percentage < 0) {
      this.percentage = 0;
    }
  }
}
</script>
<style scoped>
.page-body{
  padding:20px;
}
h3{
		color:#23c175;
		line-height: 40px;
		font-size: 16px;
	}
	.part {
		padding-left: 30px;
		padding-top: 20px;
		padding-bottom: 25px;
	}
.circle{
  margin-right:50px;
}
.item{
  margin-bottom:20px;
}
.data-show{
  padding:20px;
}</style>