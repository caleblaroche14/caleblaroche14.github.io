
var body = document.body , html = document.documentElement;
var ph = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );;
var sh = window.innerHeight;
var scrollPosition = window.pageYOffset;
var windowSize     = window.innerHeight;
var bodyHeight     = document.body.offsetHeight;

var bottompic = document.getElementById('bottompic');
var viewphotos = document.getElementById('viewphotos');

var links = document.querySelector("#body > div > div.middle > div");

function scrollDist(){
    //scrollPosition = window.pageYOffset;
    //windowSize     = window.innerHeight;
    //bodyHeight     = document.body.offsetHeight;
    bblur = getDist(window.pageYOffset,window.innerHeight,document.body.offsetHeight,22)
    lblur = getDist(window.pageYOffset,window.innerHeight,links.offsetHeight,1);
    console.log(window.pageYOffset,window.innerHeight,links.offsetHeight,1);
    //blurScale = 22;
    //blur = (Math.max(bodyHeight - (scrollPosition + windowSize), 0))/blurScale;
    bottompic.style.webkitFilter = (`blur(${bblur}px)`);
    viewphotos.style.top = (`${bblur+30}%`);
}

setInterval(scrollDist,1);

window.addEventListener('resize', function(event) {
    scrollPosition = window.pageYOffset;
    windowSize     = window.innerHeight;
    bodyHeight     = document.body.offsetHeight;
}, true);

function getDist(sp,ws,bh,bs){
    var scrollPosition = sp;
    var windowSize     = ws;
    var bodyHeight     = bh;
    var blurScale      = bs;

    return (Math.max(bodyHeight - (scrollPosition + windowSize), 0))/blurScale;
}