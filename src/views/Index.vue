<template>
  <el-container direction="vertical">
    <el-header height="40px">
      <el-container class="flex-c-l" direction="horizontal">
        <el-input readonly v-model="folderPath" size="small"></el-input>
        <el-button class="space-20" type="success" size="small" @click="chooseDirectory">选择目录</el-button>
      </el-container>
    </el-header>
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
import { ipcRenderer } from 'electron'

@Component({})
export default class Index extends Vue {
  folderPath: string = ''

  created() {
    let that = this

    ipcRenderer.on('directory-path', (evt, folder: string) => {
      that.folderPath = folder
    })
  }

  chooseDirectory() {
    ipcRenderer.send('open-directory-dialog')
  }
}
</script>

<style scoped>
.tip-column {
  height: 30px;
  background: #EFEFEF;
  padding: 0 10px;
}
</style>
