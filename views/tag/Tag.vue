<template>
  <div class="page-area">
		<div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
              class="breadcrumb-item1"
              :to="{ path: '/' }">
              起始页
          </el-breadcrumb-item>
          <el-breadcrumb-item  class="el-icon-watermelon">
                  {{$i18n.t('sideBar.Tag')}}
          </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="data-show">
      <el-tag
        :key="tag"
        v-for="tag in dyTags"
        closable
        :color="randomColor"
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm">
      </el-input>
      <el-button
        v-else
        class="button-new-tag"
        size="small"
        @click="showInput">+ 新标签</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
@Component
export default class Tag extends Vue{

dyTags = []
inputVisible = false
inputValue  = ''

handleClose(tag:string){
 this.dyTags.splice(this.dyTags.indexOf(tag), 1);
}
// un understand
showInput() {
  this.inputVisible = true;
  this.$nextTick(()=> {
    this.$refs.saveTagInput.$refs.input.focus();
  });
}

handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dyTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
//用不了，改不了组件库的颜色
randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  do {
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
  } while (color === '#FFFFFF' || color === '#000000');
  return color;
}

}
</script>
<style scoped>
.page-body{
  padding:20px;
}
.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
.data-show{
  padding:20px;
}</style>