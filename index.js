let get = document.getElementsByClassName("Menu")[0];

function outer(){
    let number = 1;
    return ()=>{
        number+=1;
        return number;
    }
}
let a = outer();

function myMenu(){
  if(a() % 2 == 0){
    get.style.display = "block";
  }else{
    get.style.display = "none";
  }
}

// Modal
let modal = document.getElementById("modal");
let Modal_box = document.getElementById("Modal-box");
let body = document.getElementsByTagName("body")[0];
let ekis = document.getElementById("eks");
let myImage = document.getElementsByClassName("img")[0];
let portfolio_image = document.getElementById("portfolio-image");
let caption = document.getElementById("myCaption");


modal.onclick = function(){
  Modal_box.classList.add("card")
  body.style.overflow = "hidden";

  myImage.style.backgroundImage = "url("+portfolio_image.title+")";
  caption.innerHTML = portfolio_image.alt;
  ekis.innerHTML = "X";
}

ekis.addEventListener("click",()=>{
  Modal_box.classList.remove("card");
  body.style.overflow = "scroll";
  caption.innerHTML = "";
  ekis.innerHTML = "";
})