<template>
    <div class="page-area">
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item
                class="breadcrumb-item1"
                :to="{ path: '/' }">
                起始页
                </el-breadcrumb-item>
                <el-breadcrumb-item  class="el-icon-cherry">
                    {{$i18n.t('sideBar.Notice')}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
      <div class="data-show">
        <h3>{{ $i18n.t('sideBar.AlertNotice') }}</h3>
        <Alert />
        <h3>{{ $i18n.t('sideBar.MessageNotice') }}</h3>
        <MessageNotice />
        <h3>{{ $i18n.t('sideBar.NotificationNotice') }}</h3>
        <Notification1 />
        <h3>{{ $i18n.t('sideBar.LoadingNotice') }}</h3>
        <Loading1 />
        <h3>{{ $i18n.t('sideBar.DialogNotice') }}</h3>
        <Dialog />
        <h3>{{ $i18n.t('sideBar.TipNotice') }}</h3>
        <Tip />
        <h3>{{ $i18n.t('sideBar.PopoverNotice') }}</h3>
        <Popover />
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../src/i18n/i18n'
import Dialog from './Dialog.vue'
import Loading1 from './Loading.vue'
import MessageNotice from './Message.vue'
import Alert from './Alert.vue'
import Notification1 from './Notification.vue'
import Popover from './Popover.vue'
import Tip from './Tip.vue'
@Component({
    components:{
        Tip,
        Popover,
        Notification1,
        Alert,
        MessageNotice,
        Loading1,
        Dialog
    }
})
export default class Notices extends Vue{

}
</script>
<style scoped>
h3{
		color:#23c175;
		line-height: 40px;
		font-size: 16px;
	}
</style>

