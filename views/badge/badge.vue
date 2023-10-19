<template>
  <div class="page-area">
		<div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
              class="breadcrumb-item1"
              :to="{ path: '/' }">
              起始页
          </el-breadcrumb-item>
          <el-breadcrumb-item  class="el-icon-grape">
                  {{$i18n.t('sideBar.Badge')}}
          </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  <div class="data-show">
    <h3>基础用法</h3>
      <div class="badge-show">
        <el-badge
          class="item"
          v-for="item in base"
          :key="item.id"
          :value="item.value">
          <el-button size="small">{{item.text}}</el-button>
        </el-badge>
      </div>
      <h3>最大值</h3>
      <div class="badge-show">
        <el-badge
          class="item"
          v-for="item in base"
          :key="item.id"
          :value="item.value"
          :max="10">
          <el-button size="small">{{item.text}}</el-button>
        </el-badge>
      </div>
      <h3>自定义角标</h3>
      <div class="badge-show">
        <el-badge
          class="item"
          v-for="item in myData"
          :key="item.id"
          :value="item.value">
          <el-button size="small">{{item.text}}</el-button>
        </el-badge>
      </div>
      <h3>小红点</h3>
      <div class="badge-show">
        <el-badge
          class="item"
          v-for="item in myData"
          :key="item.id"
          :value="item.value" is-dot>
          <el-button size="small">{{item.text}}</el-button>
        </el-badge>
      </div>
      <h3>综合使用demo</h3>
      <div class="badge-show">
        <el-dropdown>
          <el-badge is-dot>
            <span class="el-dropdown-link">
              新消息<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
          </el-badge>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                class="clearfix"
                v-for="item in base"
                :key="item.id">
          {{item.text}}<el-badge class="mark" :value="item.value" />
        </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
import { Badge } from 'element-ui'
@Component
export default class Badge1 extends Vue{

  get base():Array<any>{
    return [
      { key:'1', text:'Button One', value:13},
      { key:'2',text:'Button Two', value:26}
    ]
  }

  get myData():Array<any>{
    return [
      { key:'1', text:'Button One', value:'hot'},
      { key:'2', text:'Button Two', value:'new'}
    ]
  }
}
</script>
<style scoped>
.page-body{
  padding:20px;
}
h3{
		color:#23c175;
		line-height: 40px;
		font-size: 16px;
	}
	.badge-show {
		padding-left: 30px;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.item{
		margin-right: 40px;
	}
.data-show{
  padding:20px;
}</style>