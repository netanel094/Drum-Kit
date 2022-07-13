

var buttuns_array = document.querySelectorAll("button")

for (var i=0; i < buttuns_array.length; i++)
{
    buttuns_array[i].addEventListener("click", function(){

        var button_inner_html = this.innerHTML;
        play_audio(button_inner_html);
        change_shadow(button_inner_html);
    
    } );

}

function play_audio (key)
{
        switch (key)
         {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
        
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();   
                break;

            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();   
                break;

            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();   
                break;

            case "j":
                var snare = new Audio('sounds/crash.mp3');
                snare.play();   
                break;

            case "k":
                var brash = new Audio('sounds/kick-bass.mp3');
                brash.play();   
                break;
        
            case "l":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();   
                break;

            default:
                console.log("defoult");

                break;
        }
}



document.addEventListener("keypress", function(event)
{
    play_audio(event.key)
    change_shadow(event.key)
})

function change_shadow(current_key)
{
   var activeButton = document.querySelector("." + current_key);
   activeButton.classList.add("pressed");
   myTimeout = setTimeout(function(){ activeButton.classList.remove("pressed")}, 110);
}


// play sound for guid text: 

var guide_text = document.getElementsByClassName("use");
for(var x = 0; x < guide_text.length ; x++)
{
    guide_text[0].addEventListener("mouseover", function(){
            var mouse = new Audio("sounds/Mouse-Click.mp3");
            mouse.play();
    })


    guide_text[1].addEventListener("mouseover", function(){
     var mouse = new Audio("sounds/Keyboard-Typing.mp3");
     mouse.play();

    })
}




