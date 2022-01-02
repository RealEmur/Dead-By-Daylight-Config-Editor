const antiAliasingEnable = window.document.getElementById("anti-aliasing-enable");
const antiAliasingDisable = window.document.getElementById("anti-aliasing-disable");
const antiAliasingLow = window.document.getElementById("anti-aliasing-low");
const antiAliasingHigh = window.document.getElementById("anti-aliasing-high");

if(antiAliasingEnable){
    antiAliasingEnable.addEventListener("click", () =>{
        try{
            const file = fs.readFileSync(Functions.GetFilePath("engine")).toString();
            const newFile = file+"\n\n[/script/engine.GarbageCollectionSettings]\nr.DefaultFeature.AntiAliasing=0";
            fs.writeFileSync(Functions.GetFilePath("engine"), newFile);

            antiAliasingEnable.style.display = "none";
            if(antiAliasingDisable)
                antiAliasingDisable.style.display = "block";
            if(antiAliasingLow)
                antiAliasingLow.style.display = "block";
            if(antiAliasingHigh)
                antiAliasingHigh.style.display = "block";
        }catch(err){
            console.log(err.message);
        }
    });
}

if(antiAliasingDisable){
    antiAliasingDisable.addEventListener("click", () =>{
        try{
            const file = fs.readFileSync(Functions.GetFilePath("engine")).toString();
            const newFile = file.replace("[/script/engine.GarbageCollectionSettings]", "").replace("r.DefaultFeature.AntiAliasing="+Functions.GetValue(Functions.GetFilePath("engine"), "r.DefaultFeature.AntiAliasing"), "");
            fs.writeFileSync(Functions.GetFilePath("engine"), newFile);

            antiAliasingDisable.style.display = "none";
            if(antiAliasingEnable)
                antiAliasingEnable.style.display = "block";
            if(antiAliasingLow)
                antiAliasingLow.style.display = "none";
            if(antiAliasingHigh)
                antiAliasingHigh.style.display = "none";
        }catch(err){
            console.log(err.message);
        }
    });
}

if(antiAliasingLow){
    antiAliasingLow.addEventListener("click", () => {
        Functions.UpdateSetting(Functions.GetFilePath("engine"), "r.DefaultFeature.AntiAliasing", "1");
    });
}

if(antiAliasingHigh){
    antiAliasingHigh.addEventListener("click", () => {
        Functions.UpdateSetting(Functions.GetFilePath("engine"), "r.DefaultFeature.AntiAliasing", "2");
    });
}


