<template>
	<div class="side-bar">
		<el-menu
		:default-active="onRouter"
		class="el-menu-vertical-demo"
        :unique-opened= true
        :router= true
        text-color = '#23c175'>
        <div
        v-for="(item,key) in sidebarItems"
        :key="key">
				<div v-if="item.children">
					<el-submenu
                    :index="item.index">
                        <div slot="title">
							<span
                            :class="item.icon"></span>
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
// import axios from 'axios'
@Component
export default class SideBar extends Vue {

    onRouter = '';

    get sidebarItems():Array<unknown>{
    return [
    {
        "icon":"el-icon-apple",
        "index":"/page/table",
        "title":"Table",
        "children":[
            {
                "index":"/page/table/ele",
                "title":"ElementUI Table Plugin"
            }
        ]
    },
    {
        "icon":"el-icon-pear",
        "index":"/page/chart",
        "title":"Chart",
        "children":[
            {
                "index":"/page/chart/schart",
                "title":"vue-schart"
            }
        ]
    },
    {
        "icon":"el-icon-orange",
        "index":"/page/form",
        "title":"Form",
        "children":[
            {
                "index":"/page/form/baseform",
                "title":"Base Form"
            }
        ]
    },
    {
        "icon":"el-icon-cherry",
        "index":"/page/notice",
        "title":"Notice",
        "children":[
            {
                "index":"/page/notice/alert",
                "title":"Aliert Notice"
            },
            {
                "index":"/page/notice/message",
                "title":"Message Notice"
            },
            {
                "index":"/page/notice/notification",
                "title":"Notification Notice"
            },
            {
                "index":"/page/notice/loading",
                "title":"Loading Notice"
            },
            {
                "index":"/page/notice/dialog",
                "title":"Dialog Notice"
            },
            {
                "index":"/page/notice/tip",
                "title":"Tip Notice"
            },
            {
                "index":"/page/notice/popover",
                "title":"Popover Notice"
            }
        ]
    },
    {
        "icon":"el-icon-watermelon",
        "index":"/page/tag",
        "title":"Tag"
    },
    {
        "icon":"el-icon-grape",
        "index":"/page/badge",
        "title":"Badge"
    },
    {
        "icon":"el-icon-sugar",
        "index":"/page/progress",
        "title":"Progress"
    }

    ]
  }

    // sidebarItems: Array<{
    //     icon: string;
    //     index: string;
    //     title: string;
    //     children?: Array<{
    //          index: string;
    //          title: string;}>
    // }>=[]

    // created(){
    //     axios.get('../../../static/data/sideBar.json')
    //     .then((response) => {
    //         this.sidebarItems = response.data;
    //     })
    //     .catch((error) => {
    //     console.error('Error fetching sidebar data:', error);
    //   });
    // }

    // mounted(){
    //     this.$router.beforeEach((to, from, next) => {
    //         this.onRouter = to.path;
    //         next();
    //     });
    // }
}
</script>

<style scoped>
.side-bar {
		position:absolute;
		left:0;
		top:70px;
		bottom:0;
		width:250px;
	}
	.side-bar ul{
		height:100%;
	}
</style>
