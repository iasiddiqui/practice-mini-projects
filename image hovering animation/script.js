// var eleme = document.querySelector(".elem")
// var elemImange = document.querySelector(".elem img")


// eleme.addEventListener("mousemove", function(dets){
//     elemImange.style.left = dets.x+"px"
//     elemImange.style.top = dets.y+"px"
// } )

// eleme.addEventListener("mousemove", function(dets){
//     elemImange.style.opacity =1
// } )

// eleme.addEventListener("mouseleave", function(dets){
//     elemImange.style.opacity =0
// } )

var elem = document.querySelectorAll(".elem")

elem.forEach(function(val){

    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1    //childNodes girve the value of that node here is the picture on index 3 so I use this here childNode[3] 

    })
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener("mousemove", function(dets){
        val.childNodes[3].style.left = dets.x+"px"
    })
})

