<template>
  <div class="classinfo">
    <img alt="Vue logo" src="../assets/jyou-logo.png">
    <h1>
      Wait , jyou's website is building.
    </h1>
    <p>
      Start Date:
      <a  target="_blank" class="noopener">2023-10-11</a>
    </p>
    <p>
      One recent favorite quote:
      <a  target="_blank" class="noopener">できないならできるまでやる</a>
    </p>
    <el-button @click="startHacking">Start</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
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
<style scoped>
.classinfo{
  align-items: center;
}
.noopener{
  color: #23c175;
}
</style>
