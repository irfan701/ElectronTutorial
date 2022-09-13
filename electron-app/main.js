//console.warn("Electron In running!")

const {app,BrowserWindow}=require('electron')

function createWindow(){
   const win= new BrowserWindow({
      height:600,
      width:900  
    });
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)