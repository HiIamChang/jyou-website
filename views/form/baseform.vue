<template>
	<div class="page-area">
		<div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            class="breadcrumb-item1"
            :to="{ path: '/' }">
            起始页
          </el-breadcrumb-item>
          <el-breadcrumb-item  class="el-icon-orange">
                {{$i18n.t('sideBar.Form')}}
          </el-breadcrumb-item>
          <el-breadcrumb-item>
              {{$i18n.t('sideBar.BaseForm')}}
          </el-breadcrumb-item>
      </el-breadcrumb>
		</div>
		<div class="page-body">
      <div class="data-show">
        <el-form ref="form"
          :model="form"
          label-width="80px">
            <el-form-item
              label="表单名称">
              <el-col :span="11">
                <el-input
                  v-model="form.name"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item
              label="选择选项">
              <el-select
                v-model="form.region"
                placeholder="请选择一个选项">
                <el-option label="A" value="shanghai"></el-option>
                <el-option label="B" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="日期">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="一个按钮">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="多项选择">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="你的性别">
              <el-radio-group v-model="form.resource">
                <el-radio label="男性"></el-radio>
                <el-radio label="女性"></el-radio>
                <el-radio label="其他"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="其他描述">
              <el-col :span="11">
               <el-input type="textarea" v-model="form.desc"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="okform">写好了
              </el-button>
            </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
import { Notification } from 'element-ui'
@Component
export default class Baseform extends Vue {

  form = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
  }

  okform(): void {
    Notification({
        title: '你完成了这个表单的填写',
        type: 'success',
        dangerouslyUseHTMLString: true,
        message: '<p>表单名：{{from.name}}</p><p>选择选项为：{{from.name}}</p><p>确定日期：{{from.name}}</p><p>按钮状态：{{from.name}}</p><p>选择有：{{from.name}}</p><p>其他：{{from.name}}</p>',
        duration: 5000
      })
      }
}
  </script>
  <style>
.page-body{
  padding:20px;
}

.data-show{
  padding:20px;
}
.title {
		line-height: 50px;
		font-size: 16px;
		color:#23c175;
		font-weight: bold;
		text-align: center;
	}

.page-table{
  align-items: center;
}</style>