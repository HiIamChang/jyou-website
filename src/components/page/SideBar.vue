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
import i18n from '../../i18n/i18n'
// import axios from 'axios'
@Component
export default class SideBar extends Vue {

    onRouter = '';

    get sidebarItems():Array<unknown>{
    return [
    {
        "icon":"el-icon-apple",
        "index":"/page/table",
        "title":i18n.t('sideBar.table'),
        "children":[
            {
                "index":"/page/table/ele",
                "title":i18n.t('sideBar.elementUI-table-plugin')
            }
        ]
    },
    {
        "icon":"el-icon-pear",
        "index":"/page/chart",
        "title":i18n.t('sideBar.Chart'),
        "children":[
            {
                "index":"/page/chart/schart",
                "title":i18n.t('sideBar.vue-schart')
            }
        ]
    },
    {
        "icon":"el-icon-orange",
        "index":"/page/form",
        "title":i18n.t('sideBar.Form'),
        "children":[
            {
                "index":"/page/form/baseform",
                "title":i18n.t('sideBar.BaseForm')
            }
        ]
    },
    {
        "icon":"el-icon-cherry",
        "index":"/page/notice",
        "title":i18n.t('sideBar.Notice')
        // "children":[
        //      {
        //         "index":"/page/notice/notices",
        //         "title":i18n.t('sideBar.AlertNotice')
        //     },
        //     {
        //         "index":"/page/notice/alert",
        //         "title":i18n.t('sideBar.AlertNotice')
        //     },
        //     {
        //         "index":"/page/notice/message",
        //         "title":i18n.t('sideBar.MessageNotice')
        //     },
        //     {
        //         "index":"/page/notice/notification",
        //         "title":i18n.t('sideBar.NotificationNotice')
        //     },
        //     {
        //         "index":"/page/notice/loading",
        //         "title":i18n.t('sideBar.LoadingNotice')
        //     },
        //     {
        //         "index":"/page/notice/dialog",
        //         "title":i18n.t('sideBar.DialogNotice')
        //     },
        //     {
        //         "index":"/page/notice/tip",
        //         "title":i18n.t('sideBar.TipNotice')
        //     },
        //     {
        //         "index":"/page/notice/popover",
        //         "title":i18n.t('sideBar.PopoverNotice')
        //     }
        // ]
    },
    {
        "icon":"el-icon-watermelon",
        "index":"/page/tag",
        "title":i18n.t('sideBar.Tag')
    },
    {
        "icon":"el-icon-grape",
        "index":"/page/badge",
        "title":i18n.t('sideBar.Badge')
    },
    {
        "icon":"el-icon-sugar",
        "index":"/page/progress",
        "title":i18n.t('sideBar.Progress')
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
