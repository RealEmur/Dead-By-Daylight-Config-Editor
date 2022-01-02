const fps120Button = window.document.getElementById("fps-settings-120");
const fpsInfinite = window.document.getElementById("fps-settings-infinite");

if(fps120Button){
    fps120Button.addEventListener("click", () => {
        let success = true;
        if(!Functions.UpdateSetting(Functions.GetFilePath("game"), "bUseVSync", "False")) success = false;
        if(!Functions.UpdateSetting(Functions.GetFilePath("game"), "FrameRateLimit", "150")) success = false;
        
        sendNotification(success, success ? "Fps ayarlarını değiştirme başarılı!" : "Fps ayarlarını değiştirirken bir hata oluştu.");
    });
}

if(fpsInfinite){
    fpsInfinite.addEventListener("click", () => {
        let success = true;
        if(!Functions.UpdateSetting(Functions.GetFilePath("game"), "bUseVSync", "False")) success = false;
        if(!Functions.UpdateSetting(Functions.GetFilePath("game"), "FrameRateLimit", "0")) success = false;

        sendNotification(success, success ? "Fps ayarlarını değiştirme başarılı!" : "Fps ayarlarını değiştirirken bir hata oluştu.");
    });
}