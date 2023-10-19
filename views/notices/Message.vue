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
                    {{$i18n.t('sideBar.MessageNotice')}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
        <div class="data-show">
          <el-button
          :plain="true"
          @click="open1">成功</el-button>
          <el-button
          :plain="true"
          @click="open2">警告</el-button>
          <el-button
          :plain="true"
          @click="open3">消息</el-button>
          <el-button
          :plain="true"
          @click="open4">错误</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
import { Message } from 'element-ui';
@Component
export default class MessageNotice extends Vue{
  open3():void{
     this.$message({
      message:'这是一条消息提示',
      type:'info'
     });
  }
  open1():void{
     this.$message({
      message:'这是一条成功提示',
      type:'success'
     });
  }
  open2():void{
     this.$message({
      message:'这是一条警告提示',
      type:'warning'
     });
  }
  open4():void{
     this.$message({
      message:'这是一条错误提示',
      type:'error'
     });
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