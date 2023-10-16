<template>
	<div class="side-bar">
		<el-menu
		default-active="1"
		class="el-menu-vertical-demo">
      <el-menu-item index="1">Menu Item 1</el-menu-item>
      <el-menu-item index="2">Menu Item 2</el-menu-item>
      <el-menu-item index="3">Menu Item 3</el-menu-item>
		</el-menu>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Route } from 'vue-router'
import axios from 'axios'
@Component
export default class SideBar extends Vue {
    private url = '../../../static/data/sideBar.json'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private items: any[] = [];
    $route!: Route;
    $axios = axios;

	// created() {
    //     this.getData();
    // }

    get  onRoutes() {
        return this.$route.path;
    }

    getData () {

        if(process.env.NODE_ENV === "development"){
            this.url="/static/data/sideBar.json";
        }
        this.$axios.get(this.url).then((res) => {
            this.items = res.data.slice(0)
        });
    }

	}
</script>

<style scoped>
.el-menu-vertical-demo{
	color:#fff;
	background-color: #fff;
}

</style>