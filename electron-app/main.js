//console.warn("Electron In running!")

const {app,BrowserWindow}=require('electron')
console.warn("Main Process")

function createWindow(){
   const win= new BrowserWindow({
      height:600,
      width:900,
     // frame:true,
      backgroundColor:"green",
     // alwaysOnTop:false
     title:"Awesome App"
    });

    ///////////////////////////////////
    win.loadFile('index.html')
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

////////////////////////////////////////