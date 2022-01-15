const bgWorkImages = document.querySelectorAll('.bg-workImg');
const workList = document.querySelectorAll('.work-list .work-title ul li');
const workListImages = document.querySelectorAll('.img-wrap');

const wonkOpenContainer = document.querySelector('.wonk-open-container');
const workCloseBtn = document.querySelector('.work-close-btn > button');
const workPrevBtn = document.querySelector('.work-arrow-btn > button:first-of-type');
const workNextBtn = document.querySelector('.work-arrow-btn > button:last-of-type');
const workTitleName = document.querySelector('.work-list-name > h3');
const workLinkBtn = document.querySelector('.work-link-wrap > button');
const workSiteLink = document.querySelector('.work-link-wrap > button > span > a');
let workContentWrap = document.querySelectorAll('.work-img-wrap img');
let workTextsFirst = document.querySelectorAll('.work-content-wrap >.work-wraps:first-of-type > .work-texts > p');
const workTextSecond = document.querySelector('.work-content-wrap > .work-wraps:nth-of-type(2) > .work-texts > p');
const workTextThird = document.querySelector('.work-content-wrap > .work-wraps:nth-of-type(3) > .work-texts > p');
const workTextFourth = document.querySelector('.work-content-wrap > .work-wraps:last-of-type > .work-texts > p');
const btt = document.getElementById('back-to-top');

const pfListWrap = document.querySelector('.pf-list ul');
let pfList = document.querySelectorAll('.pf-list > ul > li')
const article = document.querySelectorAll('article');
const aboutArea = document.querySelector('.about-area')
const aboutContainer = document.querySelector('.about-container');
const aboutCloseBtn = document.querySelector('.about-close-btn button');
const contactArea = document.querySelector('.contact-area');
const contactContainer = document.querySelector('.contact-container');
const contactCloseBtn = document.querySelector('.contact-close-btn button');


workContentWrap = Array.prototype.slice.call(workContentWrap);
workTextsFirst = Array.prototype.slice.call(workTextsFirst);
pfList = Array.prototype.slice.call(pfList);


let workInfoLink =[
    {
        link:'https://www.naver.com/',
        img: ['img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg'],
        textOne:['액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.','순간을 기록하는 여행 기록 어플리케이션  "Momentrip" 웹사이트를 제작하였습니다. <br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며,<br>그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.', '액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'],
        textTwo:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textThree:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textFour:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'
    },
    {
        link:'https://www.youtube.com/watch?v=WB8ALajdYQQ&t=3173s',
        img: ['img/work/workimg/johnwick2.jpg', 'img/work/workimg/winston2.jpg', 'img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg'],
        textOne:[
            '액션 스릴ㄹㄴㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹ작하였습니다.',
            '순간을 기록하는 여행 기록 어플리케이션  "Momentrip" 웹사이트를 제작하였습니다. <br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며,<br>그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.', 
            '액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'
        ],
        textTwo:'액션 스릴러 영화 “존 윅”을dfsdfsdfsddfsd 주제로 웹사이트를 제작하였습니다.',
        textThree:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textFour:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'
    },
    {
        link:'https://www.youtube.com/watch?v=WB8ALajdYQQ&t=3173s',
        img: ['img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg'],
        textOne:['액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.','순간을 기록하는 ㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹ이션  "Momentrip" 웹사이트를 제작하였습니다. <br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며,<br>그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.', '액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'],
        textTwo:'액션 스릴러ddddfsdf 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textThree:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textFour:'액션 스릴러 영화 ㅎㄷㄹㅇㄴㅎㄱㄷㅎㅇㅇㅇㄹㄴㅇㄹ웹사이트를 제작하였습니다.'
    },
    {
        link:'https://www.youtube.com/watch?v=WB8ALajdYQQ&t=3173s',
        img: ['img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg'],
        textOne:['액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.','순간을 기록하는 여행 기록 어플리케이션  "Momentrip" 웹사이트를 제작하였습니다. <br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며,<br>그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.', '액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'],
        textTwo:'액션 스릴러fffsssffㅇㄹㅇㄴㄹㄴㄴㄹㅁㅇㅇㄹㅇㄴㄹㅍ웹사이트를 제작하였습니다.',
        textThree:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textFour:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'
    },
    {
        link:'https://www.youtube.com/watch?v=WB8ALajdYQQ&t=3173s',
        img: ['img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg'],
        textOne:['액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.','순간을 기록하는 여행 기록 어플리케이션  "Momentrip" 웹사이트를 제작하였습니다. <br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며,<br>그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.', '액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'],
        textTwo:'액션 스릴러fffsssffㅇㄹㅇㄴㄹㄴㄴㄹㅁㅇㅇㄹㅇㄴㄹㅍ웹사이트를 제작하였습니다.',
        textThree:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textFour:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'
    },
    {
        link:'https://www.youtube.com/watch?v=WB8ALajdYQQ&t=3173s',
        img: ['img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg', 'img/work/workimg/johnwick2.jpg'],
        textOne:['액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.','순간을 기록하는 여행 기록 어플리케이션  "Momentrip" 웹사이트를 제작하였습니다. <br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며,<br>그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.', '액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'],
        textTwo:'액션 스릴러fffsssffㅇㄹㅇㄴㄹㄴㄴㄹㅁㅇㅇㄹㅇㄴㄹㅍ웹사이트를 제작하였습니다.',
        textThree:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textFour:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'
    }
]
let ListLength = workList.length;
currentIndex = 0;
workIndex = 0;
for(let i = 0; i < pfList.length; i++){
    pfList[i].addEventListener('click', (e)=>{
        let targetEl = e.currentTarget;
        articleIndex = pfList.indexOf(targetEl);
        for(let i = 0; i < article.length; i++){
            article[i].classList.remove('active');
        }
        article[i].classList.add('active');
        if(articleIndex === 0){
            console.log('cndfs');
            aboutContainer.classList.add('active');
            setTimeout(()=>{
                aboutArea.classList.add('active');
                article[1].classList.remove('active');
            },300)
            pfListWrap.classList.add('active');
           
        }
        if(articleIndex === 1){
            console.log('cnddfdfs');
            contactContainer.classList.add('active');
            setTimeout(()=>{
                contactArea.classList.add('active');
                article[0].classList.remove('active');
            },300)
            pfListWrap.classList.add('active');
            
        }
    })
    aboutCloseBtn.addEventListener('click',()=>{
        setTimeout(()=>{
            aboutArea.classList.remove('active');
        },400)
        setTimeout(()=>{
            aboutContainer.classList.remove('active');
            article[i].classList.remove('active');
            pfListWrap.classList.remove('active');
        },1000)
       
       
    })
    contactCloseBtn.addEventListener('click',()=>{
        setTimeout(()=>{
            contactArea.classList.remove('active');
        },500)
        setTimeout(()=>{
            contactContainer.classList.remove('active');
            article[i].classList.remove('active');
            pfListWrap.classList.remove('active');
        },1000)
      
    })
}

for(let i = 0; i < workList.length; i++){
    workList[i].addEventListener('mouseenter',()=>{
        console.log('click');
        for(let i = 0; i < bgWorkImages.length; i++){
            bgWorkImages[i].classList.remove('active');
            workListImages[i].classList.remove('active'); 
        }
        bgWorkImages[i].classList.add('active');
        workListImages[i].classList.add('active'); 
    })
    workList[i].addEventListener('mouseleave',()=>{
        bgWorkImages[i].classList.remove('active');
        workListImages[i].classList.remove('active'); 
    })
}
for(let i = 0; i < workList.length; i++){
    workList[i].addEventListener('click',()=>{
        wonkOpenContainer.classList.add('active');
        pfListWrap.classList.add('active');
        
    })
    workCloseBtn.addEventListener('click',()=>{
        wonkOpenContainer.classList.remove('active');
        pfListWrap.classList.remove('active');
    })
}

workPrevBtn.addEventListener('click',(e)=>{
    console.log('click_left');
    currentIndex = currentIndex - 1;
    currentIndex < 0 && (currentIndex = ListLength - 1);
    console.log(currentIndex,'currentIndex');
    for(let i = 0; i <  workContentWrap.length; i++ ){
        workContentWrap[i].setAttribute('src',workInfoLink[currentIndex].img[i]);
    }
    for(let i = 0; i < workTextsFirst.length; i++){
        workTextsFirst[i].innerHTML = workInfoLink[currentIndex].textOne[i];
    }
    workTextSecond.innerText = workInfoLink[currentIndex].textTwo;
    workTextThird.innerText = workInfoLink[currentIndex].textThree;
    workTextFourth.innerText = workInfoLink[currentIndex].textFour;
    workSiteLink.setAttribute('href', workInfoLink[currentIndex].link);

});

workNextBtn.addEventListener('click',()=>{
    console.log('click_right');
    currentIndex = currentIndex + 1;
    currentIndex > ListLength - 1 && (currentIndex = 0);
    console.log(currentIndex,'currentIndex');
    for(let i = 0; i <  workContentWrap.length; i++ ){
        workContentWrap[i].setAttribute('src',workInfoLink[currentIndex].img[i]);
    }
    for(let i = 0; i < workTextsFirst.length; i++){
        workTextsFirst[i].innerHTML = workInfoLink[currentIndex].textOne[i];
    }
    workTextSecond.innerText = workInfoLink[currentIndex].textTwo;
    workTextThird.innerText = workInfoLink[currentIndex].textThree;
    workTextFourth.innerText = workInfoLink[currentIndex].textFour;
    workSiteLink.setAttribute('href',workInfoLink[currentIndex].link);
});
