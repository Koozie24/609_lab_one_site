/*variable mode changes between 1 and 0 depending on light/dark mode. 0 = light and 1 = dark. Default to 1.*/
let mode = 1

function toggle_mode(){
    /*checks mode == 0 and sets background to lavender, text to black, loops through and sets borders to black*/
    if(mode % 2 == 0){
        document.body.style.background = 'lavender';
        document.body.style.color = 'black';
        let p_elements = document.getElementsByClassName("index-image-text")

        for(let i = 0; i <p_elements.length; i++){
            p_elements[i].style.borderColor = "black";
        }

        return mode++;
    }
    
    /*checks mode == 1 and sets background to dimgray, text to white, loops through and sets borders to white*/
    else if(mode % 2 == 1){
        document.body.style.background = 'dimgray';
        document.body.style.color = 'white';
        let p_element = document.getElementsByClassName("index-image-text")

        for(let i = 0; i < p_element.length; i++){
            p_element[i].style.borderColor = "white";
        }

        return mode--;
    }
}