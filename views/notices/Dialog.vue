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
                    {{$i18n.t('sideBar.DialogNotice')}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
        <div class="data-show">
          <el-button
          @click="open1">消息提示</el-button>
          <el-button
          @click="open2">确认消息</el-button>
          <el-button
          @click="open3">提交内容</el-button>
          <el-button
          @click="open4">自定义</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
import { MessageBox } from 'element-ui'
@Component
export default class Dialog extends Vue{

  open1():void{
    this.$alert('你已经生成了一个消息提示的弹框', '消息提示',{
      confirmButtonText:'OK',
      callback:() => {
        this.$message({
          type:'success',
          message:`还生成了一条 ${i18n.t('sideBar.MessageNotice')}`
        });
        }
      })
    }

  open2():void{
    this.$confirm('是否对该消息进行确认操作？','确认消息',{
      confirmButtonText:'确定',
      cancelButtonText:'取消',
      type:'warning'
    })
    .then(() =>{
      this.$message({
        type:'success',
        message:'你成功确认了该消息'
      });
    })
    .catch(() =>{
        this.$message({
          type:'error',
          message:'很抱歉，你点击了取消确认'
        })
      })
  }

  open3():void{
    this.$prompt('请输入你的邮箱：', '提交内容（邮箱）', {
      confirmButtonText:'确定',
      cancelButtonText:'取消',
      inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      inputErrorMessage:'邮箱格式不正确'
    })
    .then(() => {
      this.$message({
        type:'success',
        message:'成功提交'
      });
    })
    .catch(() =>{
      this.$message({
        type:'error',
        message:'取消了提交'
      });
    })
  }
//图片居中问题没解决 点击右上角xbutton报错？
  open4():void{
    this.$alert('<img src="http://localhost:8080/img/jyou-logo.40b55ff8.png">', '自定义了一张图片', {
      dangerouslyUseHTMLString: true
    }).catch(() =>{
      this.$message({
        type:'error',
        message:'不看了'
      });
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