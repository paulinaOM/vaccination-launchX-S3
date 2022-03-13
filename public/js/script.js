var accordion_buttons = document.getElementsByClassName('accordion-button');
var accordion_bodies  = document.getElementsByClassName('accordion-collapse');
var last_index = 0;

for (let i = 0; i < accordion_buttons.length; i ++){
    accordion_buttons[i].addEventListener('click', expand_accordion);
}

function expand_accordion(){
    let current_index = parseFloat(( this.id).split('_')[1]) - 1;
    let accordion_element = document.getElementById(this.id);
    
    if(last_index == current_index){
        if(accordion_element.classList.contains("collapsed")){
            open_accordion(current_index);
        }
        else{
            close_accordion(current_index);
        }
    }
    else{
        close_accordion(last_index);
        open_accordion(current_index);

        last_index = current_index;
    }
}

function close_accordion(index){
    accordion_buttons[index].classList.add("collapsed");
    accordion_bodies[index].classList.remove('show');
}

function open_accordion(index){
    accordion_buttons[index].classList.remove("collapsed");
    accordion_bodies[index].classList.add('show');
}

