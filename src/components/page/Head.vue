<template>
    <div class="header">
        <div class="logo">Midori Website</div>
        <div class="lang">
            <el-dropdown trigger="click" >
                <span>click here</span>
                <el-dropdown-menu>
                    <el-dropdown-item>简体中文</el-dropdown-item>
                    <el-dropdown-item>English</el-dropdown-item>
                    <el-dropdown-item>日本語</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="setting"></div>
    </div>
  </template>

  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  @Component
  export default class Header extends Vue {}

  </script>
<style scoped>
.header{
    position: relative;
    width: 100;
    height: 70px;
    font-size: 22px;
    font-family: 'DeYiHei', sans-serif;
    line-height: 70px;
    color: #fff;
    background: #23c175;
}
.header .logo{
   float: left;
   width: 250px;
   text-align: center;
}
</style>
