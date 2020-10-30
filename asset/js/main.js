const slogans = document.querySelectorAll("#jsSubSlogan li");
const listLength = slogans.length;
let i = 0;

const controllSlogans = (idx) => {
    slogans.forEach( (slogan) => {
            slogan.setAttribute("style", "display:none;");
            slogans[idx].setAttribute("style", "display:block;")
        }
    );
}

const slogansInit = () => {
    setInterval(() => {
        controllSlogans(i);
        i = (i + 1) % listLength;
    }, 1200);
}

if(slogans){
    slogansInit();
}
