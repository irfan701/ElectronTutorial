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

    /////////CHILD WINDOW///////////

    /*
    let child=new BrowserWindow({parent:win})
    child.loadFile('index.html')
    child.show()
    */
    ///////////////////////////////////
    win.loadFile('index.html')
   // win.webContents.openDevTools()
}

// app.on('before-quit',(e)=>{
//    console.warn('Call Before Quit App!')
//    e.preventDefault()  //its work here 
// })

app.on('will-quit',(e)=>{
   console.warn('Call will Quit App!')
   e.preventDefault()    // its not work here
}) 


app.on('browser-window-focus',()=>{
   console.warn('You Are On App!')
})



app.on('browser-window-blur',()=>{
   console.warn('You Are Unfocus App!')
})




setTimeout(() => {
   console.warn(app.isReady())
}, 1000);

//app.whenReady().then(createWindow)

app.on("ready",()=>{
   createWindow()
   console.warn("App is ready ->")
})

////////////////////////////////////////