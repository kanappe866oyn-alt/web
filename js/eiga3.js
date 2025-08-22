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
                box.classList.add('is-animated3');
            }else{
                box.classList.remove('is-animated3');
            }
        });
    }
    window.addEventListener('scroll',handleScroll);
    handleScroll();
}); 
