var next1Button=document.querySelector(".tue_hidari");
var prev1Button=document.querySelector(".tue_migi");
var position=0;
var links1item=document.querySelectorAll(".tue_item");
var maxmove=links1item.length-4;

function moveToNext1(){
    if(position<maxmove){
        position++;
    }
    move();
}
function moveToPrev1(){
    if(position>0){
       position--; 
    }
    move();
}
function move(){
    for(var i=0;i<links1item.length;i++){
        links1item[i].style.left=(position*-255)+"px";
    }
    if(position>=maxmove){
        next1Button.classList.add("disable");        
    }else{
        next1Button.classList.remove("disable");
    }
    if(position<=0){
        next1Button.classList.add("disable");        
    }else{
        next1Button.classList.remove("disable");
    }
}

next1Button.addEventListener("click",moveToNext1);
prev1Button.addEventListener("click",moveToPrev1);

document.addEventListener('DOMContentLoaded',function(){
    const lines=document.querySelectorAll('.line_anm');

    function handleScroll() {
        lines.forEach(line=>{
            const rect=line.getBoundingClientRect();
            if (rect.top>=0 && rect.bottom<=window.innerHeight) {
                line.classList.add('is-animated');
            }else{
                line.classList.remove('is-animated');
            }
        });
    }
    window.addEventListener('scroll',handleScroll);
    handleScroll();
}); 

const image=document.getElementById('image');

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            image.classList.add('movie_image');
        }
    });
});
observer.observe(image);

document.addEventListener('DOMContentLoaded',function(){
    const boxes=document.querySelectorAll('.section_title');

    function handleScroll() {
        boxes.forEach(box=>{
            const rect=box.getBoundingClientRect();
            if (rect.top>=0 && rect.bottom<=window.innerHeight) {
                box.classList.add('is-animated2');
            }else{
                box.classList.remove('is-animated2');
            }
        });
    }
    window.addEventListener('scroll',handleScroll);
    handleScroll();
}); 
