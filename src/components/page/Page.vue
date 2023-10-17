<template>
    <div class="wrap">
       <Header></Header>
       <SideBar></SideBar>
        <div class="page">
            <transition name="fade" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './Head.vue';
import SideBar from './SideBar.vue'
@Component({
    components:{
        Header,
        SideBar
    }
})
export default class Page extends Vue{}

</script>
