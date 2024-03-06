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
window.addEventListener('resize',function(){
    if (window.matchMedia("(min-width: 1000px)").matches) {
        list.style.display="none";
        drop.forEach((e)=>{
            e.classList.remove('appear');
        })
        drop[0].classList.add('appear')
    } 
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
//middle list buttons
let lstbtn=document.querySelectorAll('.mid-container .converter-div ul li');
lstbtn.forEach((el)=>{
    el.addEventListener('click',()=>{
        lstbtn.forEach((e)=>{
            e.classList.remove('active')
        })
        el.classList.add('active');
    });
 
})
//end of middle list buttons
//using api 
let apirates=fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=14ef191fa408457d89cfed2ddcc8f2df').then(
    (res)=>{
        let result=res.json();
        return result; //return
    }
);

//inputs configure
let from=document.getElementsByClassName('from')[0];
let to=document.getElementsByClassName('to')[0];
let switchbtn=document.getElementsByClassName('change')[0];
//Using ES6 to switch values of select elements
switchbtn.addEventListener('click',()=>{
    [from.value,to.value]=[to.value,from.value];
})


//Math operation Using Rates in Returned from resloving promise (API Currency rates)
let amount=document.querySelector('.mid-container .inputs-container input');
let convertbtn=document.querySelector('.mid-container .converter-div button');
convertbtn.addEventListener('click',()=>{
    apirates.then((res)=>{
       beforeamount=amount.value/res.rates[from.value];
       console.log(beforeamount);
       afteramount=beforeamount*res.rates[to.value];
       console.log(afteramount)
    })
});
