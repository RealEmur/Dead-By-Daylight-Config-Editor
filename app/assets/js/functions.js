class Functions{
    static GetValue(FilePath = null, Setting = null){
        if(!File || !Setting) return null;

        try{
            const file = fs.readFileSync(FilePath).toString();
            const array = file.match(`\\b${Setting}=[0-9a-zA-Z]+\\b`);
            if(array)
                return array[0].replace(`${Setting}=`, "");
            return -1;
        }catch(err){
            return 0;
        }
    }
    static UpdateSetting(FilePath = null, Setting = null, Value = 0){
        if(!FilePath || !Setting) return null;
        try{
            let regex = new RegExp(Setting+"=[0-9a-zA-Z]+");
            const file = fs.readFileSync(FilePath).toString();
            let newFile = file.replace(regex, `${Setting}=${Value}`);
            fs.writeFileSync(FilePath, newFile);
            return true;
        }catch(err){
            console.log(err.message);
            return false;
        }
    }
    static GetFilePath(file){
        const configs = {"engine": "Engine.ini", "game": "GameUserSettings.ini"};
        const markets = {"steam": "WindowsNoEditor", "epic": "EGS"};
        return process.env.APPDATA+`/../Local/DeadByDaylight/Saved/Config/${markets[SelectedMarket]}/${configs[file]}`;
    }
    
}

module.exports = Functions;