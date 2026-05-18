//Generate a random color 

let randColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
const startChangingColor=function(){
    const changeDivBgColor=function(){
        document.querySelector("div").style.backgroundColor=randColor();
    };

    if(!intervalId){
        intervalId=setInterval(changeDivBgColor,1000);
    } 
};


const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null;
};


document.getElementById("start").addEventListener('click',startChangingColor);
document.getElementById("stop").addEventListener('click',stopChangingColor);
