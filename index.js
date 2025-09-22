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