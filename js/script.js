const logo = document.querySelector('.logo');

const bgWorkImages = document.querySelectorAll('.bg-workImg');
let workList = document.querySelectorAll('.work-list .work-title ul li');
const workListImages = document.querySelectorAll('.img-wrap');

const wonkOpenContainer = document.querySelector('.wonk-open-container');
const workOpenArea = document.querySelector('.work-open-area');
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
const aboutTitle = document.querySelector('.about-title');
const aboutArea = document.querySelector('.about-area')
const aboutContainer = document.querySelector('.about-container');
const aboutContents = document.querySelector('.about-contents');
const aboutCloseBtn = document.querySelector('.about-close-btn button');
const contactTitle = document.querySelector('.contact-title');
const contactContent = document.querySelector('.contact-content');
const contactArea = document.querySelector('.contact-area');
const contactContainer = document.querySelector('.contact-container');
const contactCloseBtn = document.querySelector('.contact-close-btn button');

const footer = document.querySelector('footer > .footer-wrap');

workContentWrap = Array.prototype.slice.call(workContentWrap);
workTextsFirst = Array.prototype.slice.call(workTextsFirst);
pfList = Array.prototype.slice.call(pfList);
workList = Array.prototype.slice.call(workList);


let workInfoLink =[
    {
        link:'https://www.naver.com/',
        img: ['img/work/workimages/monster/monster1.png', 'img/work/workimages/monster/monster2.png', 'img/work/workimages/monster/monster3.png', 'img/work/workimages/monster/monster4.png'],
        textOne:['액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.','순간을 기록하는 여행 기록 어플리케이션  "Momentrip" 웹사이트를 제작하였습니다. <br><br>여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며, 그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.', '액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'],
        textTwo:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textThree:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textFour:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        title:'MONSTER ENERGY'
    },
    {
        link:'https://www.youtube.com/watch?v=WB8ALajdYQQ&t=3173s',
        img: ['img/work/workimages/johnwick/johnwick1.png', 'img/work/workimages/johnwick/johnwick2.png', 'img/work/workimages/johnwick/johnwick3.png', 'img/work/workimages/johnwick/johnwick4.png'],
        textOne:[
            '액션 스릴ㄹㄴㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹ작하였습니다.',
            '순간을 기록하는 여행 기록 어플리케이션  "Momentrip" 웹사이트를 제작하였습니다. 여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며, 그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.', 
            '액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'
        ],
        textTwo:'액션 스릴러 영화 “존 윅”을dfsdfsdfsddfsd 주제로 웹사이트를 제작하였습니다.',
        textThree:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textFour:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        title:'JOHN WICK'
    },
    {
        link:'https://www.youtube.com/watch?v=WB8ALajdYQQ&t=3173s',
        img: ['img/work/workimages/6sense/6sense1.png', 'img/work/workimages/6sense/6sense2.png', 'img/work/workimages/6sense/6sense3.png', 'img/work/workimages/6sense/6sense4.png'],
        textOne:['Day6의 "The Book of us gravity"를 주제로 웹사이트를 제작하였습니다.','Day6만의 다양한 음악성과 감각을 잘 보여주는 color를 사용하였으며 fix된 원페이지 안에서 메뉴와 버튼을 통해 다양한 인터렉션을 구성하였습니다. 뮤직 플레이어, 비디오 원형 슬라이드 등 처음 시도해본 만큼 어려움을 많이 겪었지만 그 어려움을 통해 한껏 성장함이 엿보이는 웹사이트 입니다.', 'ㅇㅇ'],
        textTwo:'액션 스릴러ddddfsdf 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textThree:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textFour:'액션 스릴러 영화 ㅎㄷㄹㅇㄴㅎㄱㄷㅎㅇㅇㅇㄹㄴㅇㄹ웹사이트를 제작하였습니다.',
        title:'sixth sense'
    },
    {
        link:'https://www.youtube.com/watch?v=WB8ALajdYQQ&t=3173s',
        img: ['img/work/workimages/momentrip/momentrip1.png', 'img/work/workimages/momentrip/momentrip2.png', 'img/work/workimages/momentrip/momentrip3.png', 'img/work/workimages/momentrip/momentrip4.png'],
        textOne:['순간을 기록하는 여행 기록 어플리케이션  "Momentrip" 웹사이트를 제작하였습니다.','여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며, 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.', '졸업작품이며 팀작업으로 진행되었으며 기획 및 일러스트작업 및 웹 페이지를 제작하였습니다'],
        textTwo:'액션 스릴러fffsssffㅇㄹㅇㄴㄹㄴㄴㄹㅁㅇㅇㄹㅇㄴㄹㅍ웹사이트를 제작하였습니다.',
        textThree:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textFour:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        title:'momentrip'
    },
    {
        link:'https://www.youtube.com/watch?v=WB8ALajdYQQ&t=3173s',
        img: ['img/work/workimages/aboutSpain/aboutSpain1.png', 'img/work/workimages/aboutSpain/aboutSpain2.png', 'img/work/workimages/aboutSpain/aboutSpain3.png', 'img/work/workimages/aboutSpain/aboutSpain4.png'],
        textOne:[' 가장 가보고 싶어했던 나라 "SPAIN"을 주제로 웹사이트를 제작하였습니다.','스페인의 관광지, 3대축제에 알아보는 페이지를 제작하였고...어쩌구저쩌구 ', '액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'],
        textTwo:'액션 스릴러fffsssffㅇㄹㅇㄴㄹㄴㄴㄹㅁㅇㅇㄹㅇㄴㄹㅍ웹사이트를 제작하였습니다.',
        textThree:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textFour:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        title:'about spain'
    },
    {
        link:'https://www.youtube.com/watch?v=WB8ALajdYQQ&t=3173s',
        img: ['img/work/workimages/whatyum/whatyum1.png', 'img/work/workimages/whatyum/whatyum2.png', 'img/work/workimages/whatyum/whatyum3.png', 'img/work/workimages/whatyum/whatyum4.png'],
        textOne:['액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.','순간을 기록하는 여행 기록 어플리케이션  "Momentrip" 웹사이트를 제작하였습니다. 여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며, 그 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.', '액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.'],
        textTwo:'액션 스릴러fffsssffㅇㄹㅇㄴㄹㄴㄴㄹㅁㅇㅇㄹㅇㄴㄹㅍ웹사이트를 제작하였습니다.',
        textThree:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        textFour:'액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
        title:'what yam!'
    }
]
let isClick = false;
let ListLength = workList.length;
let workIndex = 0;
let scrollPos;
let docHeight; 

docHeight = Math.max(wonkOpenContainer.scrollHeight,wonkOpenContainer.offsetHeight);

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
                aboutTitle.style.visibility ='visible';
                aboutTitle.style.opacity ='1';
                aboutContents.style.visibility ='visible';
                aboutContents.style.opacity ='1';
            },300)
            pfListWrap.classList.add('active');
            logo.classList.add('active');
           
        }
        if(articleIndex === 1){
            console.log('cnddfdfs');
            contactContainer.classList.add('active');
            setTimeout(()=>{
                contactArea.classList.add('active');
                article[0].classList.remove('active');
                contactTitle.style.visibility ='visible';
                contactTitle.style.opacity ='1';
                contactContent.style.visibility ='visible';
                contactContent.style.opacity ='1';
            },300)
            pfListWrap.classList.add('active');
            logo.classList.add('active');
            
        }
    })
    aboutCloseBtn.addEventListener('click',()=>{
        setTimeout(()=>{
            aboutTitle.style.visibility ='hidden';
            aboutTitle.style.opacity ='0';
            aboutContents.style.visibility ='hidden';
            aboutContents.style.opacity ='0';
        },200)
        setTimeout(()=>{
            aboutArea.classList.remove('active');
        },200)
        setTimeout(()=>{
            aboutContainer.classList.remove('active');
            article[0].classList.remove('active');
            pfListWrap.classList.remove('active');
            logo.classList.remove('active');
        },600)
       
       
    })
    contactCloseBtn.addEventListener('click',()=>{
        setTimeout(()=>{
            contactTitle.style.visibility ='hidden';
            contactTitle.style.opacity ='0';
            contactContent.style.visibility ='hidden';
            contactContent.style.opacity ='0';
        },200)
        setTimeout(()=>{
            contactArea.classList.remove('active');
        },200)
        setTimeout(()=>{
            contactContainer.classList.remove('active');
            article[1].classList.remove('active');
            pfListWrap.classList.remove('active');
            logo.classList.remove('active');
        },600)
      
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
    workList[i].addEventListener('click',(e)=>{
        let targetEls = e.currentTarget;
        workIndex = workList.indexOf(targetEls);
        console.log('workIndex', workIndex);
        wonkOpenContainer.classList.add('active');
        pfListWrap.classList.add('active');
        footer.classList.add('active');
        setTimeout(()=>{
            logo.classList.add('active');
        }, 300);
      

        for(let i = 0; i <  workContentWrap.length; i++ ){
            workContentWrap[i].setAttribute('src',workInfoLink[workIndex].img[i]);
        }
        for(let i = 0; i < workTextsFirst.length; i++){
            workTextsFirst[i].innerHTML = workInfoLink[workIndex].textOne[i];
        }
        workTextSecond.innerText = workInfoLink[workIndex].textTwo;
        workTextThird.innerText = workInfoLink[workIndex].textThree;
        workTextFourth.innerText = workInfoLink[workIndex].textFour;
        workSiteLink.setAttribute('href', workInfoLink[workIndex].link);
        workTitleName.innerText = workInfoLink[workIndex].title;

        workPrevBtn.addEventListener('click',(e)=>{
            console.log('click_left');
            workIndex =  workIndex - 1;
            workIndex < 0 && ( workIndex = ListLength - 1);
            console.log(workIndex,'workIndex');
            for(let i = 0; i <  workContentWrap.length; i++ ){
                workContentWrap[i].setAttribute('src',workInfoLink[ workIndex].img[i]);
            }
            for(let i = 0; i < workTextsFirst.length; i++){
                workTextsFirst[i].innerHTML = workInfoLink[workIndex].textOne[i];
            }
            workTextSecond.innerText = workInfoLink[ workIndex].textTwo;
            workTextThird.innerText = workInfoLink[ workIndex].textThree;
            workTextFourth.innerText = workInfoLink[ workIndex].textFour;
            workSiteLink.setAttribute('href', workInfoLink[ workIndex].link);
            workTitleName.innerText = workInfoLink[ workIndex].title;
        
        });
    }) 
}
workNextBtn.addEventListener('click',()=>{
    console.log('click_right');
    workIndex =  workIndex + 1;
    workIndex > ListLength - 1 && ( workIndex = 0);
    console.log( workIndex,'workIndex');
    for(let i = 0; i <  workContentWrap.length; i++ ){
        workContentWrap[i].setAttribute('src',workInfoLink[ workIndex].img[i]);
    }
    for(let i = 0; i < workTextsFirst.length; i++){
        workTextsFirst[i].innerHTML = workInfoLink[ workIndex].textOne[i];
    }
    workTextSecond.innerText = workInfoLink[ workIndex].textTwo;
    workTextThird.innerText = workInfoLink[ workIndex].textThree;
    workTextFourth.innerText = workInfoLink[ workIndex].textFour;
    workSiteLink.setAttribute('href',workInfoLink[ workIndex].link);
    workTitleName.innerText = workInfoLink[ workIndex].title;
});
workCloseBtn.addEventListener('click',()=>{
    wonkOpenContainer.classList.remove('active');
    pfListWrap.classList.remove('active');
    
    setTimeout(()=>{
        footer.classList.remove('active');
        logo.classList.remove('active');
    },500);    
})

btt.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollToTop();
});
function scrollToTop(){
    var scrollInterval = setInterval(()=>{
        scrollPos = wonkOpenContainer.scrollTop;
        if(scrollPos != 0){
            wonkOpenContainer.scrollBy(0, -55);
        }else{
            clearInterval(scrollInterval);
        }
    }, 15);
}