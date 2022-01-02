const app = document.getElementById('app');
const marketSelection = document.getElementById('market-selection');

const SteamButton = document.getElementById('select-steam');
if(SteamButton){
    SteamButton.addEventListener('click', ()=>{
        SelectedMarket = "steam";
        if(app)
            app.style.display = "block";
        if(marketSelection)
            marketSelection.style.display = "none";
        loadSettings();
    });
}

const EpicGamesButton = document.getElementById('select-epic');
if(EpicGamesButton){
    EpicGamesButton.addEventListener('click', ()=>{
        SelectedMarket = "epic";
        if(app)
            app.style.display = "block";
        if(marketSelection)
            marketSelection.style.display = "none";
        loadSettings();
    });
}

function loadSettings(){
    set3dResolution(Functions.GetValue(Functions.GetFilePath("game"), "ScreenResolution"));
    GetGraphicValues();

    if(Functions.GetValue(Functions.GetFilePath("engine"), "r.DefaultFeature.AntiAliasing") === -1){
        if(antiAliasingDisable)
            antiAliasingDisable.style.display = "none";
        if(antiAliasingLow)
            antiAliasingLow.style.display = "none";
        if(antiAliasingHigh)
            antiAliasingHigh.style.display = "none";
    }else{
        if(antiAliasingEnable)
            antiAliasingEnable.style.display = "none";
    }

}