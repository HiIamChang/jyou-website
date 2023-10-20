<template>
  <div class="page-area">
    <!-- <div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            class="breadcrumb-item1"
            :to="{ path: '/' }">
            起始页
          </el-breadcrumb-item>
          <el-breadcrumb-item  class="el-icon-cherry">
                {{$i18n.t('sideBar.Notice')}}
          </el-breadcrumb-item>
          <el-breadcrumb-item>
              {{$i18n.t('sideBar.AlertNotice')}}
          </el-breadcrumb-item>
  </el-breadcrumb> -->
    <div class="data-show">
      <el-alert class="alert-one"
        title="Alert"
        type="success"
        description="This is the first alert warning . Btw , the type is success . "
        show-icon>
      </el-alert>
      <el-alert class="alert-one"
        title="Alert"
        type="info"
        description="This is the second alert warning . Btw , the type is info . "
        show-icon> </el-alert>
      <el-alert class="alert-one"
        title="Alert"
        type="warning"
        description="This is the third alert warning . Btw , the type is warning. "
        show-icon> </el-alert>
      <el-alert class="alert-one"
        title="Alert"
        type="error"
        description="This is the last alert warning . Btw , the type is error . "
        show-icon>
      </el-alert>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
@Component
export default class Alert extends Vue{

}
</script>
<style scoped>
.page-body{
  padding:20px;
}

.data-show{
  padding:20px;
}
.alert-one{
  margin-bottom:15px;
}
</style>