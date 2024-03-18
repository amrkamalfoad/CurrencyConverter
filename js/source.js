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
let allexceptheaderandlist=document.querySelectorAll('body>:not(header,.list)') //to make all elements disappear when click on barbutton
let list=document.querySelector('.list');

drop.forEach((el)=>{
    el.addEventListener('click',()=>{
        drop.forEach((e)=>{
            e.classList.toggle('appear');
        })
    })
})
drop[0].addEventListener('click',()=>{
    allexceptheaderandlist.forEach((el)=>{
        el.style.display='none';
    })
    header.style.height="12vh";
    list.style.display="block";
    list.style.height="88vh"
    document.body.style.overflow="hidden"
})
drop[1].addEventListener('click',()=>{
    list.style.display="none";
    allexceptheaderandlist.forEach((el)=>{
        el.style.display='block';
    })
    document.body.style.overflow="auto";
})
window.addEventListener('resize',function(){
    if (window.matchMedia("(min-width: 1000px)").matches) {
        list.style.display="none";
        allexceptheaderandlist.forEach((el)=>{
            el.style.display='block';
        })
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
// make a cutomizable alert

window.alert = function() {
    // Prevent interaction with elements behind the alert box
    let overlay = document.createElement('div');
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    overlay.style.zIndex = "1000"; // Ensure the overlay appears on top
    document.body.appendChild(overlay);
    
    let div = document.createElement('div');
    let p = document.createElement('p');
    let h2 = document.createElement('h2');
    let text = document.createTextNode('ALERT');
    let test = document.createTextNode('Please Enter a valid number');
    let btnclose = document.createElement('button');
    let textinbtn = document.createTextNode('OK');
    btnclose.style.border = "none";
    btnclose.style.backgroundColor = "white";
    btnclose.style.borderRadius = '5px';
    btnclose.style.color = "blue";
    btnclose.style.padding = "10px 20px 10px 20px";
    btnclose.style.marginTop = "10px";
    btnclose.style.zIndex = "999";
    btnclose.appendChild(textinbtn);
    h2.appendChild(text);
    h2.style.marginBottom = "10px";
    p.style.color = "white";
    p.style.textAlign = "center";
    p.appendChild(test);
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.boxShadow = "rgba(125, 126, 126, 0.2) 0px 8px 24px";
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(btnclose);
    div.style.position = "fixed";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%,-50%)";
    div.style.padding = "30px";
    div.style.backgroundColor = "#3d6cb9";
    div.style.borderRadius = "5px";
    div.style.zIndex="1001"
    document.body.appendChild(div);

    // Add event listener to change cursor style when hovering over the close button
    btnclose.addEventListener('mouseover', () => {
        btnclose.style.cursor = 'pointer';
    });

    btnclose.addEventListener('click', () => {
        document.body.removeChild(div);
        document.body.removeChild(overlay); // Remove the overlay
    });
}


//make buttons list buttons in dropdown and navbar
//first in navbar
let btnlist=document.querySelectorAll('header ul li');
btnlist.forEach((el)=>{
    el.addEventListener('click',()=>{
        btnlist.forEach((e)=>{
            e.classList.remove('active')
        })
        el.classList.add('active')
    })
})
//second in list
let droplistbtn=document.querySelectorAll('.list ul li');
droplistbtn.forEach((el)=>{
    el.addEventListener('click',()=>{
        droplistbtn.forEach((e)=>{
            e.classList.remove('active')
        })
        el.classList.add('active')
    })
})

//Math operation Using Rates in Returned from resloving promise (API Currency rates)
let amount=document.querySelector('.mid-container .inputs-container input');
let convertbtn=document.querySelector('.mid-container .converter-div button');
let clearbtn=document.querySelectorAll('.mid-container .converter-div button')[1];
let firstdiv=document.getElementsByClassName('first')[0];
let seconddiv=document.getElementsByClassName('second')[0];
convertbtn.addEventListener('click',()=>{
    if(amount.value<0 || amount.value==0 || amount.value=="$"){
        alert('Please enter a valid number')
    }else{
        apirates.then((res)=>{
        beforeamount=amount.value/res.rates[from.value];
        console.log(beforeamount);
        afteramount=beforeamount*res.rates[to.value];
        console.log(afteramount)
        firstdiv.innerHTML=` ${amount.value} ${from.value} = `;
        seconddiv.innerHTML=`  ${afteramount.toFixed(6)} ${to.value} `
    })
    }
});
clearbtn.addEventListener('click',()=>{
    firstdiv.innerHTML=``;
    seconddiv.innerHTML=``;
    amount.value='$'
})
// init Aimate on scroll library
AOS.init();
