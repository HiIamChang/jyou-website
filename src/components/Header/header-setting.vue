<template>
    <div>
        <div class="header">
            <div class="avatar"><img src="../../assets/jyou-logo.png"/></div>
            <div class="logo">Midori Website</div>
            <div class="user-info">
			<el-dropdown
            trigger="click"
            @command="handleCommand">
				<div class="el-icon-setting">
				</div>
				<el-dropdown-menu>
					<el-dropdown-item command="personalCenter">{{ $i18n.t('header.personalCenter') }}</el-dropdown-item>
					<el-dropdown-item command="exit">{{ $i18n.t('header.exit') }}</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, } from 'vue-property-decorator'
  @Component({})
export default class Header extends Vue {

    header = ''

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
.avatar {
    float: left;
    font-size: 16px;
    color: #fff;
    cursor:pointer;
}
.avatar img{
    width:40px;
    height:40px;
    border-radius: 50%;
    vertical-align:middle;
    margin-left:15px;
}
.header .logo{
   float: left;
   width: 150px;
   font-family:  'DeYiHei' sans-serif;
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
