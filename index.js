
function makeSound(char)
{
    switch(char)
    {
        case 'A':
            var audio = new Audio('sound/bassdrum.mp3');
            audio.play();
            break;
        case 'S':
            var audio = new Audio('sound/hihat.mp3');
            audio.play();
            break;
        case 'D':
            var audio = new Audio('sound/snaredrum.mp3');
            audio.play();
            break;
        case 'F':
            var audio = new Audio('sound/tomdrum.mp3');
            audio.play();
            break;
        case 'G':
            var audio = new Audio('sound/floortomdrum.mp3');
            audio.play();
            break;
    }
}
$(".btn").click(function(){
    const char =  $(this).children('.btn-container').children('.btn-txt')[0].innerHTML;
    makeSound(char);
});

$(document).keypress(function(event){
   const char = event.key.toUpperCase();
    makeSound(char);
});
