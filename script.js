var i = 0;
var txt = 'Login to access E7'; 
var speed = 50; 

let backgrounds = ["bg1.png", "bg2.png", "bg3.png"];
    let currentIndex = 0;
  
    function switchBackground() {
      document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
      currentIndex = (currentIndex + 1) % backgrounds.length;
    };

document.addEventListener("DOMContentLoaded", function(){
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("E7T").textContent += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
  
  var timeoutId;
  document.getElementById("E7T").addEventListener("mouseover", function() {
    document.querySelector(".hidden").style.display = "inline";
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){
      document.querySelector(".hidden").style.opacity = "0";
    }, 2000);
  });
  document.getElementById("E7T").addEventListener("mouseout", function() {
    setTimeout(function(){
      document.querySelector(".hidden").style.display = "none";
    }, 2000);
  });
});

if (location.protocol !== 'https:') {
      location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }