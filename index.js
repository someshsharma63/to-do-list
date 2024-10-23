var tar=document.getElementById('mybtn');
var text=document.querySelector('.text');

tar.addEventListener('click',()=>
{
 var inputdata=document.getElementById('listitems').value;
    if(inputdata=="")
        {
            alert('please enter the task');
        }
        else
        {
            let newEle=document.createElement('li');
            newEle.innerHTML=`${inputdata}<i class="fa-solid fa-trash">`
            text.appendChild(newEle);

            newEle.querySelector('i').addEventListener('click',()=>
            {
                newEle.remove();
            });
        }
})