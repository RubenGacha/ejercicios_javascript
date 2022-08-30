const text=document.getElementById("text");
const view=document.getElementById("view")
text.addEventListener('keyup',()=>{
    view.setAttribute("srcdoc",text.value);
});