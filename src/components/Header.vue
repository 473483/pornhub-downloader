<template>
  <el-header class="header-view" :height="height">
    <div class="left flex-c-l">
      <el-container class="flex-c-l" direction="horizontal">
        <el-input readonly v-model="folderPath" size="small"></el-input>
        <el-button class="space-20" type="success" size="small" @click="chooseDirectory">选择目录</el-button>
      </el-container>
    </div>
    <div class="right">
      <el-button @click="minimize" class="no-drag" size="mini" type="text">
        <i class="btn el-icon-minus"></i>
      </el-button>
      <el-button @click="close" class="no-drag hover-color" size="mini" type="text" >
        <i class="btn el-icon-close"></i>
      </el-button>
    </div>
  </el-header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ipcRenderer } from 'electron'

@Component({})
export default class Header extends Vue {
  @Prop() height: string = '40px'
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

  minimize() {
    ipcRenderer.send('minimize')
  }

  close() {
    ipcRenderer.send('close')
  }
}
</script>

<style lang="scss" scoped>
.header-view {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /deep/ .left {
    .btn {
      font-size: 17px;
      color: #999;
    }
    .btn:hover {
      color: #31c27c;
    }
    .el-icon-refresh {
      color: #333;
    }
    .search {
      margin-left: 15px;
      width: 200px;
      .el-input__inner {
        border: none;
        border-radius: 30px;
        background: #e9e9e9;
        color: #8c8c8c;
      }
    }
  }
  .right {
    .btn {
      font-size: 17px;
      color: #333;
    }
    .btn:hover {
      color: #31c27c;
    }
  }
}
</style>
