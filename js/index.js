//https://github.com/bien0025/improved-goggles
//bien0025.github.io/improved-goggles/index.html
//http://127.0.0.1:5502/index.html
//https://improved-goggles-gules.vercel.app/

document.addEventListener('DOMContentLoaded', init)

const MODE = Object.freeze( {   
        DEV: 'dev',
        PROD: 'production',
        STAGING: 'STAGING',
});

//IIFE that runs before init to determine our app mode
////http://127.0.0.1:5502 - origin
//127.0.0.1:5502 - host
//127.0.0.1 - hostname

let mode = (() =>{
    if (location.hostname == 'localhost' || location.hostname == '127.0.0.1'){
        return MODE.DEV; //DEV
    }
    if (location.hostname.endsWith('github.io')){
        return MODE.STAGING; //STAGING
    }
    if (location.hostname.includes('vercel.app')){
        return MODE.PROD; //Production
    }

})();

//level = 'info' || 'warn' || 'error'
const log = (msg, level =mode)=>{
switch(level){
    case 'info':
        if(mode == MODE.DEV){
            console.log(msg);
        }
        break;
    case 'warn':
        console.warn(msg);
        break;
    case 'error':
        console.error(msg);
        break;
    default:
        console.log(msg);
        break; 
    }
}



//if('mode' == MODE.DEV)

function init() {
    //page is ready to use
    log('hello');
    log('yikes', 'warn');
    log('oh no', 'error');

}
