<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<div class="bread-crumb">
			<el-breadcrumb
            separator=">>">
			<el-breadcrumb-item><i class="el-icon-ice-tea"></i> 起始页</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="ms-doc">
            <h3>README.md</h3>
            <article>
                <h1>plugin-system</h1>
                <p>基于Vue.js 2.x系列 + Element UI 的组件联系成果物show</p>
                <h2>此web搭建使用: </h2>
                <el-checkbox  disabled checked>Vue2</el-checkbox><br>
                <el-checkbox  disabled checked>TypeScript</el-checkbox><br>
                <el-checkbox   checked>Vuex</el-checkbox><br>
                <el-checkbox  disabled checked>Router</el-checkbox><br>
                <el-checkbox   checked>VueI18n</el-checkbox><br>
                <el-checkbox  disabled checked>Element UI</el-checkbox><br>
                <el-checkbox  >......</el-checkbox><br>
                <h2>实现的组件功能：</h2>
                <el-checkbox  disabled checked>Layout</el-checkbox>
                <br>
                <el-checkbox  disabled checked>导航栏</el-checkbox>
                <br>
                <el-checkbox  disabled checked>循环实现侧边栏</el-checkbox>
                <br>
                <el-checkbox >支持切换主题色</el-checkbox>
                <br>
                <el-checkbox >支持切换语言</el-checkbox>
                <br>
                <el-checkbox >分页图表</el-checkbox>
                <br>
                <el-checkbox >表单</el-checkbox>
                <br>
                <el-checkbox >消息通知</el-checkbox>
                <br>
                <el-checkbox >tag标签</el-checkbox>
                <br>
                <el-checkbox >进度条</el-checkbox>
                <br>
                <el-checkbox >数据可视化</el-checkbox>
                <br>
            </article>
        </div>
	</div>
</template>

<style scoped>
	.ms-doc{
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }
</style>