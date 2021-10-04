const notifications = document.querySelector('.notifications');
if(notifications){
    function sendNotification(success = false, string = "") {
        let div = document.createElement('div');
        div.className = "notification "+ (success ? "success" : "failed");

        let p = document.createElement('p');
        p.innerText = string;
        let span = document.createElement('span');
        span.innerText = "X";
        span.addEventListener("click", ()=>{
            clearNotification();
        });

        div.appendChild(p);
        div.appendChild(span);
        notifications.appendChild(div);

        setTimeout(()=>{
            clearNotification();
        },5000);

        function clearNotification(){
            let i = 1;
            const interval = setInterval(() => {
                if(i <= 0){
                    clearInterval(interval);
                    div.remove();
                }
                i = i - 0.02;
                div.style.opacity = i;
            }, 10);
        }
    }
}
