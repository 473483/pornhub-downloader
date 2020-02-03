import { dialog, ipcMain, OpenDialogOptions } from 'electron'

ipcMain.on('open-directory-dialog', evt => {
  let options: OpenDialogOptions = {
    title: '选择存储文件夹',
    properties: ['openDirectory']
  }
  dialog.showOpenDialog(options, (files: string[]) => {
    if (files) {
      evt.sender.send('directory-path', files[0])
    }
  }).then()
})
