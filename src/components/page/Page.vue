<template>
    <div class="wrap">
        <v-head />
        <div class="page">
            <transition name="fade" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script type="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './Head.vue';
@Component({
    Components:{
        Header,
    }
})
export default class Page extends Vue{

}
</script>
<style scoped>
    .wrap{
        background-color: azure;
    }
    .page {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom:0;
    width: auto;
    padding:40px;
    overflow-y: auto;
}
</style>