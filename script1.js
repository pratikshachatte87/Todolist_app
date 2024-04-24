



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
if(e.target.classList.contains("remove")){
const targetLi=e.target.parentNode.parentNode;
targetLi.remove();
}
if(e.target.classList.contains("done")){
   const liSpan=e.target.parentNode.previousElementSibling;
  liSpan.style.textDecoration="line-through";
}

})