const sectionScroll = document.querySelector('.work-open');
const btt = document.getElementById('back-to-top');
let workListEl = document.querySelectorAll('.work-list li');
let workMiniImg = document.querySelectorAll('.work-list li img');
// exit 버튼을 누르면 work-open창이 닫힌다.
const exitBtn = document.querySelector('.work-exit');
let workListImage = document.querySelectorAll('.work-listImg div');
const leftArrowBtn = document.querySelector('.left-arrow');
const rightArrowBtn = document.querySelector('.right-arrow');
const workTitle = document.querySelector('.title-container > h2');
const workInfoSum = document.querySelector('.work-contents > p:first-of-type');
const workInfoText = document.querySelector('.work-contents > p:last-of-type')
let workIntroArea = document.querySelector('.work-intro');
let introLength = workIntroArea.length;
let currentIndex = 0;

let workInfo =[
    {
        title:'MONSTER ENERGY',
        sum:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        info:'순간을 기록하는 여행 기록 어플리케이션 "Momentrip" 웹사이트를 제작하였습니다.<br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며,<br>그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.'

    },
    {
        title:'JOHN WICK',
        sum:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        info:'순간을 기록하는 여행 기록 어플리케이션 "Momentrip" 웹사이트를 제작하였습니다.<br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며,<br>그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.'
    },
    {
        title:'SIXTH SENSE',
        sum:'Day6의 "The Book of us gravity"를 주제로 웹사이트를 제작하였습니다.',
        info:'순간을 기록하는 여행 기록 어플리케이션 "Momentrip" 웹사이트를 제작하였습니다.<br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며,<br>그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.'
    },
    {
        title:'MOMENTRIP',
        sum:'순간을 기록하는 여행 기록 어플리케이션  "Momentrip" 웹사이트를 제작하였습니다.',
        info:'순간을 기록하는 여행 기록 어플리케이션 "Momentrip" 웹사이트를 제작하였습니다.<br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며,<br>그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.'
    },
    {
        title:'ABOUT SPAIN',
        sum:'가장 가보고 싶어했던 나라 `SPAIN`을 주제로 웹사이트를 제작하였습니다.',
        info:'순간을 기록하는 여행 기록 어플리케이션 "Momentrip" 웹사이트를 제작하였습니다.<br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며,<br>그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.'
    },
    {
        title:'WHAT YUM!',
        sum:'순간을 기록하는 여행 기록 어플리케이션  "Momentrip" 웹사이트를 제작하였습니다.',
        info:'순간을 기록하는 여행 기록 어플리케이션 "Momentrip" 웹사이트를 제작하였습니다.<br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며,<br>그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.'
    }
]
workListEl = Array.prototype.slice.call(workListEl);
workIntroArea = Array.prototype.slice.call(workIntroArea);
workMiniImg = Array.prototype.slice.call(workMiniImg);


// rightArrowBtn.addEventListener('click',()=>{
//     currentIndex = currentIndex + 1;
//     currentIndex > introLength - 1 && (currentIndex = 0);
//     console.log(currentIndex);
//     workTitle.innerText = workInfo[currentIndex].title;
//     workInfoSum.innerText = workInfo[currentIndex].sum;
//     workInfoText.innerHTML = workInfo[currentIndex].info;
   
    
// })

// leftArrowBtn.addEventListener('click',()=>{
//     currentIndex = currentIndex - 1;
//     currentIndex < 0 && (currentIndex = introLength - 1);
//     console.log(currentIndex);
//     workTitle.innerText = workInfo[currentIndex].title;
//     workInfoSum.innerText = workInfo[currentIndex].sum;
//     workInfoText.innerHTML = workInfo[currentIndex].info;
    
// })




// work-area

for(let i = 0; i < workListEl.length; i++){
    workListEl[i].addEventListener('mouseenter', (e)=>{
        workListEl[i].style.color="#FF5D2C";
        for(let j = 0; j < workListImage.length; j++ ){
            workListImage[j].classList.remove('active');
        }
        workListImage[i].classList.add('active');
        workMiniImg[i].classList.add('active');
    })
    workListEl[i].addEventListener('mouseleave', (e)=>{
        workListEl[i].style.color ="white";
        workMiniImg[i].classList.remove('active');
    })
}


// ------------------------------------------ !

for(let i= 0; i < workListEl.length; i++){
    workListEl[i].addEventListener('click',()=>{
        // sectionScroll.style.visibility = 'visible';
        sectionScroll.classList.add('active');
        exitBtn.classList.add('active');
        for(let j = 0; j < workIntroArea.length; j++ ){
            workIntroArea[j].classList.remove('active');
        }
        workIntroArea.classList.add('active');
    })
}

exitBtn.addEventListener('click',()=>{
    // sectionScroll.style.visibility='hidden' ;
    sectionScroll.classList.remove('active');
    exitBtn.classList.remove('active');
})
let scrollPos;
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




 



