<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/jyou-logo.png">
    <HelloWorld msg="Wait , jyou/'s website is building'"/>
    <el-button @click="startHacking">Start</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  startHacking ():void {
      this.$notify({
        title: 'Imported successfully',
        type: 'success',
        message: 'If u can see it , it means element-ui already been imported.',
        duration: 5000
      })
    }
}
</script>
