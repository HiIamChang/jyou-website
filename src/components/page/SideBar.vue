<template>
	<div class="side-bar">
		<el-menu unique-opened router
		:default-active="onRoutes"
		class="el-menu-vertical-demo"
		theme="dark" >
			<div v-for="(item,key) in items" :key="key">
				<div v-if="item.children">
					<el-submenu :index="item.index">
                        <div slot="title">
							<span :class="item.icon"></span>
							{{ item.title }}
						</div>
                        <el-menu-item
						v-for="(subItem,i) in item.children"
						:key="i"
						:index="subItem.index">
						{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
				</div>
				<div v-else>
					<el-menu-item
					:index="item.index">
						<span :class="item.icon">
						</span>
						{{ item.title }}
					</el-menu-item>
				</div>
			</div>
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
	.side-bar {
		position:absolute;
		left:0;
		top:70px;
		bottom:0;
		width:250px;
		background-color: #23c175;
	}
	.side-bar ul{
		height:100%;
	}
</style>