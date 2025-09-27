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

// Modal image
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
// Navigation 
function Direct_Portfolio(event){
    event.preventDefault();
    window.location.href="Projects/Portfolio.html";
};

function Link_index(){
  window.location.href="/Portfolio/index.html";
}

function Back_Home(){
  window.location.href="/Portfolio/index.html";
}
// Setting Data
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;


// name validation
function validate(event){
  event.preventDefault();

  let name = document.forms["form"]["name"].value;
  let email = document.forms["form"]["email"].value;
  let message = document.forms["form"]["message"].value;

  try{
    if(name.trim() == "") throw "You must input your name";
    if(email.trim() == "") throw "Your must input your email";
    if(message.trim() == "") throw "Indicate a message for Ian";
  }catch(err){
    alert(err);
    return false;
  }

  localStorage.setItem("Name",name);
  localStorage.setItem("Email",email);
  localStorage.setItem("Message",message);

  if(name != null && email != null && message != null){
    alert("Thanks " + name + " for messaging me!")
  }
}



