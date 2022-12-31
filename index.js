let clickme=document.querySelector(".clickme");
let change_text=document.querySelector(".change-text")

clickme.addEventListener("click",function(){
  clickme.style.display="none";
  change_text.style.display="block";
  change_text.innerHTML="Hello not Jawad :)";
})

change_text.addEventListener("click",function(){
  clickme.style.display="block";
  change_text.style.display="none";
  change_text.innerHTML="";
})