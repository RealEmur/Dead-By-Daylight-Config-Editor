const performanceButton = window.document.getElementById('auto-settings-performance');
const balancedButton = window.document.getElementById('auto-settings-balanced');
const cinematicButton = window.document.getElementById('auto-settings-cinematic');

function UpdateSettings(ViewDistanceQuality = "0", AntiAliasingQuality = "0", ShadowQuality = "0", PostProcessQuality = "0", TextureQuality = "0", EffectsQuality = "0", ScreenResolution = "10"){
    let success = true;

    if(!Functions.UpdateSetting(Functions.GetFilePath("game"), "ViewDistanceQuality", ViewDistanceQuality)) success = false;
    if(!Functions.UpdateSetting(Functions.GetFilePath("game"), "AntiAliasingQuality", AntiAliasingQuality)) success = false;
    if(!Functions.UpdateSetting(Functions.GetFilePath("game"), "ShadowQuality", ShadowQuality)) success = false;
    if(!Functions.UpdateSetting(Functions.GetFilePath("game"), "PostProcessQuality", PostProcessQuality)) success = false;
    if(!Functions.UpdateSetting(Functions.GetFilePath("game"), "TextureQuality", TextureQuality)) success = false;
    if(!Functions.UpdateSetting(Functions.GetFilePath("game"), "EffectsQuality", EffectsQuality)) success = false;
    if(!Functions.UpdateSetting(Functions.GetFilePath("game"), "ScreenResolution", ScreenResolution)) success = false;
    GetGraphicValues();
    set3dResolution(Functions.GetValue(Functions.GetFilePath("game"), "ScreenResolution"));
    sendNotification(success, success ? "Grafik ayarlarını değiştirme başarılı!" : "Grafik ayarlarını değiştirirken bir hata oluştu.");
} 

if(performanceButton){
    performanceButton.addEventListener("click", () =>{
        UpdateSettings("0", "0","0", "0","0", "0", "25");
    });
}

if(balancedButton){
    balancedButton.addEventListener("click", () =>{
        UpdateSettings("2", "0","2", "2","4", "0", "111");
    });
}

if(cinematicButton){
    cinematicButton.addEventListener("click", () =>{
        UpdateSettings("9", "0","9", "9","9", "9", "205");
    });
}