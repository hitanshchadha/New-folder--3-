const slider= document.querySelector('.slider');
const leftarrow= document.querySelector('.Arrow-left');
const rightarrow= document.querySelector('.Arrow-right');
const indicatorP= document.querySelector('.controls ul');
const a3= document.querySelector('.a3');
let a= document.querySelector('.f1');
let c= document.getElementById('Fragment');
let b= document.querySelector('body');
var index=0;
let section3= document.getElementsByClassName('section-3')



leftarrow.addEventListener('click',function(){
    index=(index>0)? index-1 :0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorP.children[index].classList.add('selected');
    slider.style.transform= 'translate('+ (index) * -99.88 + '%)';
    
     });
rightarrow.addEventListener('click',function(){
    index=(index<3)? index+1: 3;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorP.children[index].classList.add('selected');
    slider.style.transform= 'translate('+ (index) * -99.88 + '%)';
    
    });

document.querySelectorAll('.controls li').forEach(function(indicator,ind){
        indicator.addEventListener('click', function(){
        index=ind;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform= 'translate('+ (index) * -99.88 + '%)';
        if (ind==1) {
            
            
            let f= document.getElementById('Fragment');
            f.style.display='flex';

            let t= document.getElementById('two');
            t.style.display='flex';

            let h= document.getElementById('has');
            h.style.display='flex';

            let i= document.getElementById('italics');
            i.style.display='flex';
            
        }
         if (ind==2 || ind==0) {
            let f= document.getElementById('Fragment');
            f.style.display='none';
            
            let t= document.getElementById('two');
            t.style.display='none';

            let h= document.getElementById('has');
            h.style.display='none';

            let i= document.getElementById('italics');
            i.style.display='none';
            
            
            
            let e= document.getElementById('Editorial');
            e.style.display='flex';

            let o= document.getElementById('old');
            o.style.display='flex';

            let fi= document.getElementById('firko');
            fi.style.display='flex';

            let l= document.getElementById('lab');
            l.style.display='flex';
            
        }
        if(ind==3 || ind==1){
            let e= document.getElementById('Editorial');
            e.style.display='none';

            let o= document.getElementById('old');
            o.style.display='none';

            let fi= document.getElementById('firko');
            fi.style.display='none';

            let l= document.getElementById('lab');
            l.style.display='none';

            let te= document.getElementById('Test');
            te.style.display='flex';

            let yo= document.getElementById('Your');
            yo.style.display='flex';

            let fo= document.getElementById('Font');
            fo.style.display='flex';

            let he= document.getElementById('Here');
            he.style.display='flex';
        }
        if (ind==4 || ind==2) {
            let te= document.getElementById('Test');
            te.style.display='none';

            let yo= document.getElementById('Your');
            yo.style.display='none';

            let fo= document.getElementById('Font');
            fo.style.display='none';

            let he= document.getElementById('Here');
            he.style.display='none';
        }
        });
    });    

let x= document.querySelector('.tophover');
x.addEventListener('click',function(){ 
    let o = document.getElementById('overlay');
    o.style.display='block';
    
});  




const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');
const mainMenu2 = document.querySelector('.mainMenu2');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    mainMenu2.style.display = 'flex';
    mainMenu2.style.top = '0';
}
function close(){
    mainMenu.style.top = '-110%';
    mainMenu2.style.top = '-110%';
}


window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );