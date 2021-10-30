const sectionScroll = document.querySelector('.work-open');
const btt = document.getElementById('back-to-top');
let workListEl = document.querySelectorAll('.work-list li');
// exit 버튼을 누르면 work-open창이 닫힌다.
let exitBtn = document.querySelectorAll('.work-exit');
let workListImage = document.querySelectorAll('.work-listImg div');
const leftArrowBtn = document.querySelector('.left-arrow');
const rightArrowBtn = document.querySelector('.right-arrow');

let workIntroArea = document.querySelectorAll('.work-intro');
let introLength = workIntroArea.length;
let currentIndex = 0;

workListEl = Array.prototype.slice.call(workListEl);
exitBtn = Array.prototype.slice.call(exitBtn);
workIntroArea = Array.prototype.slice.call(workIntroArea);


rightArrowBtn.addEventListener('click',()=>{
    currentIndex = currentIndex + 1;
    currentIndex > introLength - 1 && (currentIndex = 0);
    console.log(currentIndex);
    for(let i = 0; i < workIntroArea.length; i++){
        workIntroArea[i].classList.remove('active');
    }
    workIntroArea[currentIndex].classList.add('active');
})

leftArrowBtn.addEventListener('click',()=>{
    currentIndex = currentIndex - 1;
    currentIndex < 0 && (currentIndex = introLength - 1);
    console.log(currentIndex);
    for(let i = 0; i < workIntroArea.length; i++){
        workIntroArea[i].classList.remove('active');
    }
    workIntroArea[currentIndex].classList.add('active');
})




// work-area
// workListImage[0].style.zIndex ="2";
for(let i = 0; i < workListEl.length; i++){
    workListEl[i].addEventListener('mouseenter', (e)=>{
        // console.log('mouse', e.target);
        workListEl[i].style.color="#FF5D2C";
        for(let j = 0; j < workListImage.length; j++ ){
            workListImage[j].classList.remove('active');
        }
        workListImage[i].classList.add('active');
    })
    workListEl[i].addEventListener('mouseleave', (e)=>{
        // console.log('mouse', e.target);
        workListEl[i].style.color ="white";
        // workListImage[i].classList.remove('active');
    })
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




 


