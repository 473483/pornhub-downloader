import { dialog, ipcMain, OpenDialogOptions, BrowserWindow, app } from 'electron'

ipcMain.on('minimize', evt => {
  BrowserWindow.getAllWindows()[0].minimize()
})

ipcMain.on('close', evt => {
  BrowserWindow.getAllWindows()[0].close()
  app.exit(0)
})

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
