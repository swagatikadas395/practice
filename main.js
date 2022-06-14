document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 :-1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() =>{
            current += increment;
            obj.textContent = current;
            if (current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",0,1287,3000);
    counter("count2",100,5248,6000);
    counter("count3",1008,8052,10000);
    counter("count4",50,807,1200);
})