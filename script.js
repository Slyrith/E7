var i = 0;
var txt = 'Login to access E7'; 
var speed = 50; 

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
