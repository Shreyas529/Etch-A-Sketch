const slider = document.querySelector("#myRange");
const dimension = document.querySelector("#sliderValue");
const space = document.querySelector(".space");

slider.addEventListener("input" , async () =>{
    await update_values();
    const divs = document.querySelectorAll(".space .blocks");
    divs.forEach(div => div.addEventListener("mouseover", colour_div, false));
}, false);

window.addEventListener('load', async () => {
    await update_values();
    const divs = document.querySelectorAll(".space .blocks");
    divs.forEach(div => div.addEventListener("mouseover", colour_div, false));
}, false);


function update_values() {
    let empty_space_width = space.offsetWidth;
    let empty_space_height = space.offsetHeight;
    let width_div = Number(slider.value);
    let height_div = Number(slider.value);
    dimension.textContent = slider.value + " x " + slider.value;
    space.innerHTML = '';

    let max_columns = Math.floor(empty_space_width / width_div);

    offset_width=empty_space_width-(width_div*max_columns);
    width_div+=Number(offset_width/max_columns);
    let rows = Math.floor(empty_space_height / height_div);
    

    offset_height=empty_space_height-(height_div*rows);
    height_div+=Number(offset_height/rows);
    

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < max_columns; i++) {
            let div = document.createElement("div");
            div.style.width = `${width_div}px`;
            div.style.height = `${height_div}px`;
            div.style.padding='0px';
            div.style.margin='0px';
            div.classList.add("blocks");
            document.querySelector('.space').appendChild(div);
        }
    }
    
}


function colour_div(e){
    e.stopPropagation();
    if(document.querySelector('.active').id==='Colour')
        e.currentTarget.style.backgroundColor = document.querySelector('#colour-picker').value;

    else if(document.querySelector('.active').id==='Rainbow'){
        e.currentTarget.style.backgroundColor ='#' + Math.floor(Math.random()*16777215).toString(16);
    }

    else if(document.querySelector('.active').id==='Eraser'){
        e.currentTarget.style.backgroundColor = '#FFFFFF';
    }

}



const clear = document.querySelector('#Clear');
clear.addEventListener('click',clear_div,false);

function clear_div(e){
    e.stopPropagation();
    const divs = document.querySelectorAll(".space .blocks");
    divs.forEach(div => div.style.backgroundColor='white');
}

// Get all the <li> elements
const options = document.querySelectorAll('.options-container li');

// Add a click event listener to each <li> element
options.forEach(option => {
    option.addEventListener('click', () => {
        // Remove the "active" class from all <li> elements
        options.forEach(opt => opt.classList.remove('active'));

        // Add the "active" class to the clicked <li> element
        option.classList.add('active');
    });
});


