var nextButton=document.querySelector(".ongaku_hidari");
var prevButton=document.querySelector(".ongaku_migi");
var position=0;
var linksitem=document.querySelectorAll(".ongaku_item");
var maxmove=linksitem.length-4;

function moveToNext(){
    if(position<maxmove){
        position++;
    }
    move();
}
function moveToPrev(){
    if(position>0){
       position--; 
    }
    move();
}
function move(){
    for(var i=0;i<linksitem.length;i++){
        linksitem[i].style.left=(position*-255)+"px";
    }
    if(position>=maxmove){
        nextButton.classList.add("disable");        
    }else{
        nextButton.classList.remove("disable");
    }
    if(position<=0){
        nextButton.classList.add("disable");        
    }else{
        nextButton.classList.remove("disable");
    }
}

nextButton.addEventListener("click",moveToNext);
prevButton.addEventListener("click",moveToPrev);

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

const images=document.querySelectorAll('.movie_image');

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            image.classList.add('show');
        }else{
            image.classList.remove('show');
        }
    });
});
images.forEach(image=>{
    observer.observe(image);
});

document.addEventListener('DOMContentLoaded',function(){
    const boxes=document.querySelectorAll('.section_title');

    function handleScroll() {
        boxes.forEach(box=>{
            const rect=box.getBoundingClientRect();
            if (rect.top>=0 && rect.bottom<=window.innerHeight) {
                box.classList.add('is-animated1');
            }else{
                box.classList.remove('is-animated1');
            }
        });
    }
    window.addEventListener('scroll',handleScroll);
    handleScroll();
}); 