const bgWorkImages = document.querySelectorAll('.bg-workImg');
const workList = document.querySelectorAll('.work-list .work-title ul li');
const workListImages = document.querySelectorAll('.img-wrap');

const wonkOpenContainer = document.querySelector('.wonk-open-container');
const workCloseBtn = document.querySelector('.work-close-btn > button');
const workPrevBtn = document.querySelector('.work-close-btn > button:first-of-type');
const workNextBtn = document.querySelector('.work-close-btn > button:last-of-type');
const workTitleName = document.querySelector('.work-list-name > h3');
const workLinkBtn = document.querySelector('.work-link-wrap > button');
const workSiteLink = document.querySelector('.work-link-wrap > button > span > a');
let workContentWrap = document.querySelectorAll('.work-img-wrap img');
let workTextsFirst = document.querySelectorAll('.work-wraps:first-of-type > .work-texts > p');
const workTextSecond = document.querySelector('.work-wraps:nth-of-type(2) > .work-texts > p');
const workTextThird = document.querySelector('.work-wraps:nth-of-type(3) > .work-texts > p');
const workTextFourth = document.querySelector('.work-wraps:last-of-type > .work-texts > p');
const btt = document.getElementById('back-to-top');


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

let ListLength = workList.length;
currentIndex = 0;

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
           
        }
        if(articleIndex === 1){
            console.log('cnddfdfs');
            contactContainer.classList.add('active');
            setTimeout(()=>{
                contactArea.classList.add('active');
                article[0].classList.remove('active');
            },300)
            
        }
    })
    aboutCloseBtn.addEventListener('click',()=>{
        setTimeout(()=>{
            aboutArea.classList.remove('active');
        },500)
        setTimeout(()=>{
            aboutContainer.classList.remove('active');
            article[i].classList.remove('active');
            pfList[i].classList.add('active');
        },1000)
       
       
    })
    contactCloseBtn.addEventListener('click',()=>{
        setTimeout(()=>{
            contactArea.classList.remove('active');
        },500)
        setTimeout(()=>{
            contactContainer.classList.remove('active');
            article[i].classList.remove('active');
            pfList[i].classList.add('active');
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