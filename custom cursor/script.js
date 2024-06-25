var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){ //dets is using for details in this code this give details of x and y-axis
    crsr.style.left = dets.x+"px"  
    crsr.style.top = dets.y+"px"
    
})