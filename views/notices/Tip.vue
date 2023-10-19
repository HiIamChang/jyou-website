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
                    {{$i18n.t('sideBar.TipNotice')}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
        <div class="data-show">
          <el-tooltip
          class="item"
          effect="dark"
          content="On Left"
          placement="left">
          <el-button>左边提示</el-button></el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="On Top"
          placement="top">
          <el-button>上边提示</el-button></el-tooltip>
        <el-tooltip
          class="item"
          effect="light"
          content="Light theme">
          <el-button>亮色提示</el-button></el-tooltip>
        <el-tooltip
          class="item">
          <div slot="content">好几行信息<br/>第二行信息<br/>.......</div>
          <el-button>多行提示</el-button></el-tooltip>
          <el-tooltip
          :disabled="disabled"
          content="点击关闭提示">
          <el-button
          @click="disabled = !disabled">
          点击{{ disabled ? '开启' : '关闭' }}提示</el-button></el-tooltip>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
@Component
export default class Tip extends Vue{
disabled = false
}
</script>
<style scoped>
.page-body{
  padding:20px;
}

.data-show{
  padding:20px;
}</style>