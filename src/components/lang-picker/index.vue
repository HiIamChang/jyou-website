<!-- eslint-disable vue/multi-word-component-names -->
<!-- 语言选择组件 -->
<template>
    <div>
      <!-- 语言选择下拉选框 -->
      <el-dropdown @command="handLanguageCommand">
        <div class="el-dropdown-link default-text-color">
          <!--中文/English-->
         切换语言 <!-- {{$t('lang.language')}} -->
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="cn">中文</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
          <el-dropdown-item command="en">日本語</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {};
    },
    methods: {
      handLanguageCommand(language) {
        //语言选择函数,更改语言值'cn'或'en'
        this.$store.commit("setLang", language); //保存语言设置
        this.$i18n.locale = language; //切换语言
      }
    }
  };
  </script>

  <style lang='scss' scoped>
  </style>