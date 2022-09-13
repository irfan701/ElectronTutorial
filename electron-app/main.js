//console.warn("Electron In running!")

const {app,BrowserWindow}=require('electron')

function createWindow(){
   const win= new BrowserWindow({
      height:900,
      width:600  
    })
}