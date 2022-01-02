const Settings = [
    {Id: "view-distance", Setting: "ViewDistanceQuality"},
    {Id: "anti-aliasing", Setting: "AntiAliasingQuality"},
    {Id: "shadow-quality", Setting: "ShadowQuality"},
    {Id: "post-processing", Setting: "PostProcessQuality"},
    {Id: "texture-quality", Setting: "TextureQuality"},
    {Id: "effect-quality", Setting: "EffectsQuality"}
];

function GetGraphicValues(){
    Settings.map((Setting) => {
        const object = window.document.getElementById("graphic-settings-"+Setting.Id);
        if(object)
            object.value = Functions.GetValue(Functions.GetFilePath("game"),Setting.Setting);
    });
}


const GraphicSubmitButton = window.document.getElementById("graphic-settings-submit");
if(GraphicSubmitButton){
    GraphicSubmitButton.addEventListener("click", () => {
        let success = true;
        Settings.map((Setting) => {
            const object = window.document.getElementById("graphic-settings-"+Setting.Id);
            if(object && parseInt(object.value)){
                const value = object.value;
                if(value > 5 || value < 0){
                    return;
                }
                const currentSuccess = Functions.UpdateSetting(Functions.GetFilePath("game"), Setting.Setting, object.value);
                if(success)
                    success = currentSuccess;
            }
        });
        sendNotification(success, success ? "Grafik ayarlarını değiştirme başarılı!" : "Grafik ayarlarını değiştirirken bir hata oluştu.");
    });
}

