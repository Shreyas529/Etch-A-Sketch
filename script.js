var slider = document.querySelector("#myRange");
var dimension = document.querySelector("#sliderValue");


slider.addEventListener("input" , update_values(), false)

function update_values(){
    dimension.textContent=slider.value + " x "+slider.value;
    var space = document.querySelector(".space");
    let width = space.offsetwidth;
    console.log(width);
    let number = space/width;
    for(let i=0;i<number;i++){
        var div = document.createElement("div");
        div.style.width=`${slider.value}px`;
        div.style.height=`${slider.value}px`;
    }
}