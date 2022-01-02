const lowerArrow = window.document.getElementById("3d-resolution-lower-arrow");
const higherArrow = window.document.getElementById("3d-resolution-higher-arrow");
const text = window.document.getElementById("3d-resolution-text");
const resolutionSubmitButton = window.document.getElementById("3d-resolution-button");

const getCurrentValue = () =>{
    let currentValue = parseInt(text.innerText);
    if(isNaN(currentValue)) return 10;
    return currentValue;
};

const set3dResolution = (textInput) =>{
    text.innerText = textInput;
}


if(lowerArrow && higherArrow && text){
    let interval = false;
    const StartInterval = () =>{
        if(!interval){
            interval = setInterval(()=>{
                if(!lowerUp && !higherUp){
                    clearInterval(interval);
                    interval = false;
                }

                if(lowerUp) changeValue(-1);
                else if(higherUp) changeValue(1);
            }, 50);
        }
    };

    const changeValue = (difference = 0) =>{
        if(difference !== 0){
            if(difference < 0 && getCurrentValue() > 10)
                text.innerText = getCurrentValue() + difference;
            else if(difference > 0 && getCurrentValue() < 300)
                text.innerText = getCurrentValue() + difference;
        }
    } 

    let lowerUp = false;
    let higherUp = false;

    
    lowerArrow.addEventListener("mousedown", () => {lowerUp=true; StartInterval();});
    lowerArrow.addEventListener("mouseup", () => {lowerUp=false;});
    lowerArrow.addEventListener("mouseleave", () => {lowerUp=false;});

    higherArrow.addEventListener("mousedown", () => {higherUp=true; StartInterval();});
    higherArrow.addEventListener("mouseup", () => {higherUp=false;});
    higherArrow.addEventListener("mouseleave", () => {higherUp=false;});
}
else
    console.log("3D Resolution'da bir hata oluştu.");

if(resolutionSubmitButton){
    resolutionSubmitButton.addEventListener("click", () =>{
        let success = true;
        if(!Functions.UpdateSetting(Functions.GetFilePath("game"), "ScreenResolution", getCurrentValue())) success = false;
        sendNotification(success, success ? "3D Resolution değiştirme başarılı!" : "3D Resolution değiştirilirken bir hata oluştu.");
    });
}