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
                    {{$i18n.t('sideBar.NotificationNotice')}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
        <div class="data-show">
          <el-button
            plain
            @click="open1">
            成功
          </el-button>
          <el-button
            plain
            @click="open2">
            警告
          </el-button>
          <el-button
            plain
            @click="open3">
            消息
          </el-button>
          <el-button
            plain
            @click="open4">
            错误
          </el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
import { Notification } from 'element-ui'

@Component
export default class Notification1 extends Vue{

 open1():void{
  this.$notify({
    title:'Success',
    message:'This is a success notification',
    type:'success'
  })
 }
 open2():void{
  this.$notify({
    title:'Info',
    message:'This is a info notification',
    type:'info'
  })
 }
 open3():void{
  this.$notify({
    title:'Warning',
    message:'This is a warning notification',
    type:'warning'
  })
 }
 open4():void{
  this.$notify({
    title:'Error',
    message:'This is a error notification',
    type:'error'
  })
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