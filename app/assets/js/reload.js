const reloadSettings = window.document.getElementById('reload-settings');
const reloadAlert = window.document.getElementById("reset-alert");
const reloadButton = window.document.getElementById("reset-alert-button");

if(reloadButton){
    reloadButton.addEventListener("click", ()=>{
        if(reloadAlert)
            reloadAlert.style.display = "none";
    });
}

if(reloadSettings){
    reloadSettings.addEventListener("click", ()=>{
        try{
            fs.unlinkSync(ConfigFilePath);
            fs.unlinkSync(EngineFilePath);
            reloadAlert.style.display = "flex";
        }catch(err){
            sendNotification(false, "Config sıfırlanırken bir hata oluştu.");
        }
    });
}