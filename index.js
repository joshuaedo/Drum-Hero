
// Detecting onScreen button
var buttonNumber = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonNumber; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
      var buttoninnerHTML = this.innerHTML

        soundOut (buttoninnerHTML);

        animation (buttoninnerHTML);
        
    })
    }

// Detecting keyboard press
    document.addEventListener("keydown", function (event) {

       soundOut(event.key);

       animation(event.key);

    })


// Making the sound
    function soundOut(onPress) {


        switch (onPress) {
            case "w":
                var tomOne = new Audio('./sounds/tom-1.mp3');
                tomOne.play();
                break;
            
            case "a":
                var tomTwo = new Audio('./sounds/tom-2.mp3');
                tomTwo.play();
                break;
            
            case "s":
                var tomThree = new Audio('./sounds/tom-3.mp3');
                tomThree.play();
                break;

            case "d":
                var tomFour = new Audio('./sounds/tom-4.mp3');
                tomFour.play();
                break;                
        
            case "j":
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
                break;
            
            case "k":
                var kickBass = new Audio('./sounds/kick-bass.mp3');
                kickBass.play();
                break;
            
            case "l":
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
                break;

                
            default:
                alert("Click on either w,a,s,d,j,k or l to play the drums")
                break;
        }

    }


    function animation(onPress) {

        var activeButton = document.querySelector("." + onPress);
        
        activeButton.classList.add("pressed");  

        setTimeout(function () {
            activeButton.classList.remove("pressed") 
        }, 200
        )
        
    }
     


   