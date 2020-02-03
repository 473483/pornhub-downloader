<template>
  <el-container direction="vertical">
    <Header height="40px"/>
    <el-main>
      <el-container direction="vertical">
        <el-container class="tip-column flex-c-l" direction="horizontal">
          <i class="el-icon-info"></i>
        </el-container>
      </el-container>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Header from '../components/Header.vue'

@Component({
  components: {
    Header
  }
})
export default class Index extends Vue {
}
</script>

<style scoped>
.tip-column {
  height: 30px;
  background: #EFEFEF;
  padding: 0 10px;
}
</style>
