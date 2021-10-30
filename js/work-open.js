const sectionScroll = document.querySelector('.work-open');
const btt = document.getElementById('back-to-top');
let workListEl = document.querySelectorAll('.work-list li');
// exit 버튼을 누르면 work-open창이 닫힌다.
let exitBtn = document.querySelectorAll('.work-exit');


const workListImgWrap = document.querySelector('.work-listImg');
let workListImage = document.querySelectorAll('.bg-workImg');


workListEl = Array.prototype.slice.call(workListEl);
exitBtn = Array.prototype.slice.call(exitBtn);





// work-area

for(let i = 0; i < workListEl.length; i++){
    workListEl[i].addEventListener('mouseenter', (e)=>{
        // console.log('mouse', e.target);
        workListEl[i].style.color="blue";
    })
    workListEl[i].addEventListener('mouseleave', (e)=>{
        // console.log('mouse', e.target);
        workListEl[i].style.color="white";
    })

}
















// top버튼 눌렀을 때 상단으로 올라가는 함수 선언
// 스크롤 양을 저장하는 변수
let scrollPos;
// document의 높이를 구해온다.
let docHeight; 

docHeight = Math.max(sectionScroll.scrollHeight,sectionScroll.offsetHeight);
btt.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollToTop();
});
function scrollToTop(){
    var scrollInterval = setInterval(()=>{
        scrollPos = sectionScroll.scrollTop;
        if(scrollPos != 0){
            sectionScroll.scrollBy(0, -55);
        }else{
            clearInterval(scrollInterval);
        }
    }, 15);
}

// ------------------------------------------ !


for(let i= 0; i < workListEl.length; i++){
    workListEl[i].addEventListener('click',()=>{
        // sectionScroll.style.visibility = 'visible';
        sectionScroll.classList.add('active');
        exitBtn[i].classList.add('active');
    })
}


for(let i= 0; i < exitBtn.length; i++){
    exitBtn[i].addEventListener('click',()=>{
        // sectionScroll.style.visibility='hidden' ;
        sectionScroll.classList.remove('active');
        exitBtn[i].classList.remove('active');
    })
}


