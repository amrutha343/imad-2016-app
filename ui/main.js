console.log('Loadded!');
var element = document.getElementById('maintext');
element.innerHTML= 'New Value';
var img= document.getElementById('madi');
var marginLeft=0;
function moveRight() {
    marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval=setInterval(moveRight,50);
};