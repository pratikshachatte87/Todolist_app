



const todoForm=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector( ".todolist" );

todoForm.addEventListener('submit',(e)=>{
    e.preventDefault();
   const newtodoText=todoInput.value;
   const newli=document.createElement('li');
   const newLiInnerHTML=  `       
   <span class="text">${newtodoText}</span>
   <div class="todo-buttons">
       <button class="todo-btn done">Done</button>
       <button class="todo-btn remove">Remove</button>
   </div>
`
newli.innerHTML=newLiInnerHTML;
todoList.appendChild(newli);
    todoInput.value="";
})

todoList.addEventListener( "click", (e)=>{
    // if user click on remove button then 
if(e.target.classList.contains("remove")){
const targetLi=e.target.parentNode.parentNode;
targetLi.remove();
}
if(e.target.classList.contains("done")){
   const liSpan=e.target.parentNode.previousElementSibling;
  liSpan.style.textDecoration="line-through";
}

});


// form validation 

const btnsub=document.querySelector(".signup-btn");
console.log(btnsub);
btnsub.addEventListener("click",(event)=>{
  console.log("inside event");
event.preventDefault();


const username=document.getElementById("username").value;
const email=document.getElementById("email").value;
const phone=document.getElementById("phone").value;
const password=document.getElementById("password").value;
const confirmpassword=document.getElementById("confirmpassword").value;

const usernameRegex = /^[A-za-z0-9 ]{3,20}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d)(?=.*[\w_]).{8,}$/;
const emailRegex =
  /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-za-z]{2,}$/;
const phoneRegex = /^[6-9][\d]{9}$/;
// clear previous errors
document.querySelectorAll(".error").forEach((e)=>{
  e.innerHTML="";
})

let isValid=true;
// validate username
if(!usernameRegex.test(username)){
  document.getElementById("usernameerror").innerHTML="Username is not valid";
  isValid=false;
}
// validate phonenumber
if(!phoneRegex.test(phone)){
  document.getElementById("phoneerror").innerHTML=
   "Number must be 10 digits long and starts with 6 to 9";
   isValid=false;
}
if(!emailRegex.test(email)){
  document.getElementById("emailerror").innerHTML="Please enter a valid email";
  isValid=false;
}
if(!passwordRegex.test(password)){
  document.getElementById("passworderror").innerHTML="Password must contain at least one uppercase, one lowercase,one number and one special character";
  isValid=false;
}
if(confirmpassword!==password){
  document.getElementById("cpasserror").innerHTML="Password does not match";
  isValid=false;
}

let userData=[];
if(isValid){
let formclass=document.getElementsByClassName("form-control");
console.log(formclass);

Array.from(formclass).forEach((ele)=>{
  userData.push(ele.value);
});
Array.from(formclass).forEach((ele)=>{
  ele.value="";
});
console.log(userData);
alert("Registration successful");
}
  });

