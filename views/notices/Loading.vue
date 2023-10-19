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
                    {{$i18n.t('sideBar.LoadingNotice')}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
        <div class="data-show">
          <el-button
            type="primary"
            @click="openFullScreen1"
            v-loading.fullscreen.lock="fullscreenLoading">
            指令方式
          </el-button>
          <el-button
            type="primary"
            @click="openFullScreen2">
            服务方式
          </el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
import { Loading } from 'element-ui'
@Component
export default class Loading1 extends Vue{
  fullscreenLoading = false

 openFullScreen1():void{
  this.fullscreenLoading = true
  setTimeout(() => {
    this.fullscreenLoading = false
  }, 2000);
 }
//关不掉的loading，omg
 openFullScreen2():void{
  const loading = this.$loading
  this.$loading({
    lock:true,
    text:'正在努力加载中，请稍等',
    spinner:'el-icon-loading',
    background:'rgba (0,0,0,0.7)'
  });
  setTimeout(() => {
      this.$loading({lock:false})
    }, 2000);
 }
}
</script>
<style scoped>
.page-body{
  padding:20px;
}

.data-show{
  padding:20px;
}</style>