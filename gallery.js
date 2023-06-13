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
    slider.style.transform= 'translate('+ (index) * -101 + '%)';
    
     });
rightarrow.addEventListener('click',function(){
    index=(index<3)? index+1: 3;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorP.children[index].classList.add('selected');
    slider.style.transform= 'translate('+ (index) * -101 + '%)';
    
    });

document.querySelectorAll('.controls li').forEach(function(indicator,ind){
        indicator.addEventListener('click', function(){
        index=ind;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform= 'translate('+ (index) * -101 + '%)';
        if (ind==0) {
            
            let w= document.getElementById('weirdly');
            w.style.display='flex';
            w.style.animation= 'Editorial 2s ease 0s 1 normal forwards';

            let off= document.getElementById('Off');
        off.style.display='flex';
        off.style.animation= 'Editorial 2s ease 0s 1 normal forwards';

            let b= document.getElementById('Beat');
            b.style.display='flex';
            b.style.animation= 'Editorial 2s ease 0s 1 normal forwards';

            let font= document.getElementById('Fonts');
            font.style.display='flex';
        font.style.animation= 'Editorial 2s ease 0s 1 normal forwards';
        }
        
        
        if (ind==1) {
            let w= document.getElementById('weirdly');
            w.style.animation= 'weirdly-close 2s ease 0s 1 normal forwards';

            let off= document.getElementById('Off');
            off.style.animation= 'Off-close 2s ease 0s 1 normal forwards';

            let b= document.getElementById('Beat');
            b.style.animation= 'weirdly-close 2s ease 0s 1 normal forwards';

            let font= document.getElementById('Fonts');
            font.style.animation= 'weirdly-close 2s ease 0s 1 normal forwards';
        
            let f= document.getElementById('Fragment');
            f.style.display='flex';
            f.style.animation= 'Editorial 2s ease 0s 1 normal forwards';

            let t= document.getElementById('two');
            t.style.display='flex';
            t.style.animation= 'Editorial 2s ease 0s 1 normal forwards';


            let h= document.getElementById('has');
            h.style.display='flex';
            h.style.animation= 'Editorial 2s ease 0s 1 normal forwards';


            let i= document.getElementById('italics');
            i.style.display='flex';
            i.style.animation= 'Editorial 2s ease 0s 1 normal forwards';

            
        }
         if (ind==2 || ind==0) {
            let f= document.getElementById('Fragment');
            f.style.animation= 'Editorial-close 2s ease 0s 1 normal forwards';
            
            let t= document.getElementById('two');
            t.style.animation= 'Editorial-close 2s ease 0s 1 normal forwards';

            let h= document.getElementById('has');
            h.style.animation= 'Editorial-close 2s ease 0s 1 normal forwards';

            let i= document.getElementById('italics');
            i.style.animation= 'Editorial-close 2s ease 0s 1 normal forwards';
            
            
            
            let e= document.getElementById('Editorial');
            e.style.display='flex';
            e.style.animation= 'Editorial 2s ease 0s 1 normal forwards';

            let o= document.getElementById('old');
            o.style.display='flex';
            o.style.animation= 'Editorial 2s ease 0s 1 normal forwards';

            let fi= document.getElementById('firko');
            fi.style.display='flex';
            fi.style.animation= 'Editorial 2s ease 0s 1 normal forwards';

            let l= document.getElementById('lab');
            l.style.display='flex';
            l.style.animation= 'Editorial 2s ease 0s 1 normal forwards';
            
        }
        if(ind==3 || ind==1){
            let e= document.getElementById('Editorial');
            e.style.animation= 'Editorial-close 2s ease 0s 1 normal forwards';

            let o= document.getElementById('old');
            o.style.animation= 'Editorial-close 2s ease 0s 1 normal forwards';

            let fi= document.getElementById('firko');
            fi.style.animation= 'Editorial-close 2s ease 0s 1 normal forwards';

            let l= document.getElementById('lab');
            l.style.animation= 'Editorial-close 2s ease 0s 1 normal forwards';

            let te= document.getElementById('Test');
            te.style.display='flex';
            te.style.animation= 'Editorial 2s ease 0s 1 normal forwards';


            let yo= document.getElementById('Your');
            yo.style.display='flex';
            yo.style.animation= 'Editorial 2s ease 0s 1 normal forwards';

            let fo= document.getElementById('Font');
            fo.style.display='flex';
            fo.style.animation= 'Editorial 2s ease 0s 1 normal forwards';

            let he= document.getElementById('Here');
            he.style.display='flex';
            he.style.animation= 'Editorial 2s ease 0s 1 normal forwards';
        }
        if (ind==4 || ind==2) {
            let te= document.getElementById('Test');
            te.style.animation= 'Editorial-close 2s ease 0s 1 normal forwards';

            let yo= document.getElementById('Your');
            yo.style.animation= 'Editorial-close 2s ease 0s 1 normal forwards';

            let fo= document.getElementById('Font');
            fo.style.animation= 'Editorial-close 2s ease 0s 1 normal forwards';

            let he= document.getElementById('Here');
            he.style.animation= 'Editorial-close 2s ease 0s 1 normal forwards';
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

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.animation= 'menu 2s ease 0s 1 normal forwards';
    mainMenu.style.top = '0';
    mainMenu2.style.display = 'flex';
    mainMenu2.style.top = '0';
}
function close(){
    mainMenu.style.top = '-110%';
    mainMenu.style.animation= 'menu-close 2s ease 0s 1 normal forwards';
    mainMenu2.style.top = '-110%';
}


window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.scrollY / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );


  