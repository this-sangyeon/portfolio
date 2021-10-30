const sectionScroll = document.querySelector('.work-open');
const btt = document.getElementById('back-to-top');
let workListEl = document.querySelectorAll('.work-list');
// exit 버튼을 누르면 work-open창이 닫힌다.
let exitBtn = document.querySelectorAll('.work-exit span');


workListEl = Array.prototype.slice.call(workListEl);
exitBtn = Array.prototype.slice.call(exitBtn);



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

sectionScroll.style.visibility='hidden' ;
for(let i= 0; i < workListEl.length; i++){
    workListEl[i].addEventListener('click',()=>{
        sectionScroll.style.visibility = 'visible';
    })
    
}


for(let i= 0; i < exitBtn.length; i++){
    exitBtn[i].addEventListener('click',()=>{
        sectionScroll.style.visibility='hidden' ;
    })
}


