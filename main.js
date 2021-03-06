const {app, BrowserWindow} = require('electron')
  
  let win
  
  function createWindow () {
    win = new BrowserWindow({width: 1200, height: 1000})
  
    win.loadFile('index.html')
  
    win.on('closed', () => {
      win = null
    })

    require('./menu/mainmenu')
  }
  
  app.on('ready', createWindow)
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })
  