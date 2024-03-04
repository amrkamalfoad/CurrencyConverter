let signinbutton=document.querySelectorAll('header button');
signinbutton.forEach((el)=>{
    el.addEventListener('click',()=>{
        signinbutton.forEach((e)=>{
            e.classList.remove('active');
        })
        el.classList.add('active');
    })
})
//dropdown list buttons
let drop=document.querySelectorAll('header span');
let header=document.querySelector('header');
let list=document.querySelector('.list');

drop.forEach((el)=>{
    el.addEventListener('click',()=>{
        drop.forEach((e)=>{
            e.classList.toggle('appear');
        })
    })
})
drop[0].addEventListener('click',()=>{
    header.style.height="12vh";
    list.style.display="block";
    list.style.height="88vh"
    document.body.style.overflow="hidden"
})
drop[1].addEventListener('click',()=>{
    list.style.display="none";
})
//buttons in drop list;
let btn=document.querySelectorAll('.list button');

btn.forEach((el)=>{
    el.addEventListener('click',()=>{
        btn.forEach((e)=>{
            e.classList.remove('active')
        })
        el.classList.add('active');
    })
})
