<template>
    <div>
        <div class="header">
            <div class="logo">Midori Website</div>

            <div class="el-item-box">
            <lang-picker></lang-picker>
            </div>
            <div class="el-item-box">
            <theme-picker></theme-picker>
            </div>
        </div>
        <div class="sidebar">
            <side-bar></side-bar>
        </div>
    </div>
</template>

  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import LangPicker from '../lang-picker/index.vue'
  import ThemePicker from '../theme-picker/index.vue'
  import SideBar from './SideBar.vue';
  @Component({
    components:{
        LangPicker,
        ThemePicker,
        SideBar
    }
  })
  export default class Header extends Vue {}

  </script>
<style scoped>
.header{
    position: relative;
    width: 100%;
    height:70px;
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
.header .el-item-box {
    float: right;
    width: 90px;
    color: #fff;
}
.sidebar {
    position:absolute;
    left:0;
    top:86px;
    bottom:0;
    width:250px;

    background-color: #23c175;
}
.side-bar ul{
    height:100%;
    background-color: #fff;
}
</style>
