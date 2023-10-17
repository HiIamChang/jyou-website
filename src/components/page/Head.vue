<template>
    <div>
        <div class="header">
            <div class="logo">Midori Website</div>
            <div class="user-info">
			<el-dropdown
            trigger="click"
            :command="handleCommand">
				<div class="head-icon">
					<img src="../../assets/jyou-logo.png"/>
					<span class="username2">Midori</span>
				</div>
				<el-dropdown-menu>
					<el-dropdown-item command="personalCenter">个人中心</el-dropdown-item>
					<el-dropdown-item command="exit">返回主页面</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
            <div class="el-item-box">
            <lang-picker></lang-picker>
            </div>
            <div class="el-item-box">
            <theme-picker></theme-picker>
            </div>
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
  export default class Header extends Vue {
    handleCommand(command: string): void {
    if (command === 'exit') {
      localStorage.removeItem('user-name');
      this.$router.push('/');
    } else if (command === 'personalCenter') {
      this.$router.push('/page/personalCenter');
    }
  }
  }

  </script>
<style scoped>
.header{
    position: relative;
    width: 100%;
    height:70px;
    font-size: 22px;
    line-height: 70px;
    color: #fff;
    background: #23c175;
}
.header .logo{
   float: left;
   width: 250px;
   text-align: center;
}
.user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
        cursor:pointer;
    }
    .user-info img{
        width:40px;
        height:40px;
        border-radius: 50%;
        vertical-align:middle;
        margin-right:15px;
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

    background-color: #fff;
}
.side-bar ul{
    height:100%;
    background-color: #fff;
}
</style>
