// document.querySelector(".set").addEventListener("click",handleclick);
//
//
// function handleclick(){
//   alert("i got clicked");
// }
var dom=document.querySelectorAll(".drum").length;
for (var i=0;i<dom;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttons= this.innerHTML;
    makesound(buttons);
    buttonanimation(buttons);
    });
}
document.addEventListener("keypress",function(event){
 makesound(event.key);
 buttonanimation(event.key)

 });

function makesound(key){
  switch (key) {
    case "w":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play()
      break;
    case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play()
        break;
    case "s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play()
          break;
    case "d":
          var tom4=new Audio("sounds/tom-4.mp3");
          tom4.play()
            break;
    case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play()
              break;
    case "k":
              var crash=new Audio("sounds/crash.mp3");
              crash.play()
                break;
    case "l":
              var kick=new Audio("sounds/kick-bass.mp3");
              kick.play()
      break;

    default:
      console.log(buttons)

  }
}
function buttonanimation(currentkey){
  var activekey=document.querySelector('.'+currentkey);
  activekey.classList.add("pressed");
  setTimeout(function(){
    activekey.classList.remove("pressed"),100
  })
}
