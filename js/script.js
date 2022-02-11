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

const header = document.querySelector('header');
const footer = document.querySelector('footer > .footer-wrap');

workContentWrap = Array.prototype.slice.call(workContentWrap);
workTextsFirst = Array.prototype.slice.call(workTextsFirst);
pfList = Array.prototype.slice.call(pfList);
workList = Array.prototype.slice.call(workList);


let workInfoLink =[
    {
        link:'https://this-sangyeon.github.io/monsterDrink/',
        img: ['img/work/workimages/monster/monster1.png', 'img/work/workimages/monster/monster2.png', 'img/work/workimages/monster/monster3.png', 'img/work/workimages/monster/monster4.png'],
        textOne:['에너지 음료 “monster energy”  를 주제로 웹사이트를 제작하였습니다.','monster energy의 음료 제품을 구매할 수 있을 뿐만 아니라 후원하고 있는 뮤지션과 게이머 등의 정보도 살펴볼 수 있습니다. ', '블랙과 대조되는 네온 그린을 메인컬러로 사용하여 몬스터 에너지 특유의 강렬함이 돋보일 수 있도록 노력하였습니다.'],
        textTwo:'제품상세 페이지 입니다. 우측 리스트를 통해 원하는 제품을 선택하면 설명과 영양성분 등을 확인할 수 있으며 갯수 선택 후 제품 구매 버튼을 통해 가격값과 함께 장바구니에 담기도록 작업하였습니다.',
        textThree:'몬스터 에너지에서 후원하는 스폰서 페이지 입니다.  뮤지션, 게이머 두 챕터로 나뉘어져있으며 화살버튼을 통해 스폰서들을 확인할 수 있으며 sns 아이콘을 클릭하면 해당 뮤지션 및 게이머의 sns 사이트로 이동합니다.',
        textFour:'장바구니 페이지 입니다. 제품페이지에서 담은 제품명과 갯수, 토탈 가격값 등을 확인할 수 있습니다. 제품 리스트에 마우스 커서를 올리면 삭제버튼이 뜨도록 작업하였습니다. ',
        title:'MONSTER ENERGY'
    },
    {
        link:'https://this-sangyeon.github.io/johnwick/',
        img: ['img/work/workimages/johnwick/johnwick1.png', 'img/work/workimages/johnwick/johnwick2.png', 'img/work/workimages/johnwick/johnwick3.png', 'img/work/workimages/johnwick/johnwick4.png'],
        textOne:[
            '액션 스릴러 영화 “존 윅”을 주제로 웹사이트를 제작하였습니다.',
            '현재 총 3개의 chapter가 개봉된 시리즈물이며 사이트 내에서 영화 정보 및 캐릭터 프로필, photo, poster 이미지 등을 살펴볼 수 있습니다.', 
            ''
        ],
        textTwo:'메인페이지 입니다. 좌우버튼을 통해 각 챕터의 정보를 살펴볼 수 있으며, 우측의 트레일러 버튼을 클릭하면 트레일러 팝업을 나타납니다.',
        textThree:'캐릭터 페이지 입니다. 각 캐릭터의 상세설명을 볼 수 있으며 스틸컷을 살펴볼 수 있습니다. 이미지 클릭 시 팝업창이 생기며 이미지를 좀 더 크게 살펴볼 수 있습니다.',
        textFour:'갤러리 페이지이며 현재까지 나온 존윅의 포스터들 볼 수 있습니다.  스크롤 시 해당 스크롤 위치에 도달하면 이미지가 액팅되는 패럴랙스 페이지 입니다. 이미지 클릭 시 큰 화면으로 포스터 이미지를 더 상세하게 살필 수 있습니다.',
        title:'JOHN WICK'
    },
    {
        link:'https://this-sangyeon.github.io/sixthSense/',
        img: ['img/work/workimages/6sense/6sense1.png', 'img/work/workimages/6sense/6sense2.png', 'img/work/workimages/6sense/6sense3.png', 'img/work/workimages/6sense/6sense4.png'],
        textOne:['Day6의 "The Book of us gravity"를 주제로 웹사이트를 제작하였습니다.','Day6만의 다양한 음악성과 감각을 잘 보여주는 color를 사용하였으며 fix된 원페이지 안에서 메뉴와 버튼을 통해 페이지가 이동합니다.', '뮤직 플레이어, 비디오 원형 슬라이드 등 처음 시도해본 만큼 어려움을 많이 겪었지만 그 어려움을 통해 한껏 성장함이 엿보이는 웹사이트 입니다.'],
        textTwo:'멤버 페이지입니다. 이미지에 마우스 커서를 호버 시 또 다른 이미지와 함께 각 멤버가 맡고 있는 악기의 사운드가 플레이 됩니다. ',
        textThree:'앨범 페이지입니다. 앨범 상세 설명을 볼 수 있습니다. 트랙페이지에서는 수록되어있는 곡들을 직접 들어보실 수 있습니다.',
        textFour:'비디오 페이지입니다. 원형 슬라이드를 통해 데이식스의 뮤직비디오와 무대 영상 등을 살펴볼 수 있습니다.',
        title:'sixth sense'
    },
    {
        link:'https://this-sangyeon.github.io/momentrip/',
        img: ['img/work/workimages/momentrip/momentrip1.png', 'img/work/workimages/momentrip/momentrip2.png', 'img/work/workimages/momentrip/momentrip3.png', 'img/work/workimages/momentrip/momentrip4.png'],
        textOne:['순간을 기록하는 여행 기록 어플리케이션  "Momentrip" 웹사이트를 제작하였습니다.','여행 날짜를 선택하여 그 날짜를 기반으로 랜덤한 질문을 받을 수 있으며, 질문에 대한 답변을 기록하고, 포토북, 엽서 등의 아날로그 기록물로 받아볼 수 있는 서비스 입니다.', '졸업작품 및 팀작업으로 진행되었으며 기획 및 일러스트작업 및 웹 페이지를 제작하였습니다'],
        textTwo:'스크롤 시 하단의 자전거를 탄 캐릭터가 움직이며 서비스를 소개하는 가로 스크롤 패럴랙스 사이트 입니다. 해당 스크롤 값에 따라 이미지가 액팅됩니다. 우측 상단의 아이콘을 통해 bgm을 on/off 할 수 있으며 모먼트립의 아이덴티티를 확인할 수 있습니다.',
        textThree:'탬플릿 페이지 입니다. 탬플릿을 선택하여 사진을 넣고 작성한 텍스트의 컬러 및 서체를 바꿀 수 있습니다. ',
        textFour:'',
        title:'momentrip'
    },
    {
        link:'https://this-sangyeon.github.io/aboutSpain/',
        img: ['img/work/workimages/aboutSpain/aboutSpain1.png', 'img/work/workimages/aboutSpain/aboutSpain2.png', 'img/work/workimages/aboutSpain/aboutSpain3.png', 'img/work/workimages/aboutSpain/aboutSpain4.png'],
        textOne:['가장 가보고 싶은 나라 "SPAIN"을 주제로 웹사이트를 제작하였습니다. 좌우버튼 클릭 시 스페인의 풍경 이미지가 슬라이드 됩니다.','스페인의 관광지와 3대축제 및 예술가 등을 알아보는 페이지로 구성되어있습니다. ', ''],
        textTwo:'art 페이지 입니다. 예술의 나라답게 스페인은 건축, 회화 부분에서 많은 아티스트를 배출하였습니다. 각 이미지에 커서를 호버하면 제목과 아티스트의 이름이 나오며 클릭 시 큰 화면으로 작품을 감상할 수 있습니다. ',
        textThree:'여행지 페이지 입니다. 스페인이 자랑하는 지역에 대한 간단한 소개와 지역별 관광, 여행지에 대해 소개합니다',
        textFour:'축제 페이지 입니다. 리스트 클릭 시 각 스페인의 축제에 대해 설명과 함께 이미지를 살필 수 있습니다.',
        title:'about spain'
    },
    {
        link:'https://this-sangyeon.github.io/whatyam/',
        img: ['img/work/workimages/whatyum/whatyum1.png', 'img/work/workimages/whatyum/whatyum2.png', 'img/work/workimages/whatyum/whatyum3.png', 'img/work/workimages/whatyum/whatyum4.png'],
        textOne:['1인 가구 및 자취생을 위한 랜덤 쿠킹박스 정기구독 서비스"왓냠"의 프로모션 웹사이트 입니다.  ','왓냠은 바쁘고 지친 일상 속 건강마저 제대로 챙기지 못하는 1인가구 및 자취생을 타겟으로 제작된 어플리케이션입니다.', '팀작업으로 진행되었습니다'],
        textTwo:'왓냠의 서비스를 체험할 수 있는 페이지 입니다. 슬라이드 바를 통해 받아볼 박스의 갯수를 선택할 수 있습니다.',
        textThree:'갯수를 선택한 뒤 원하는 메뉴를 선택하여 장바구니에 담을 수 있습니다. ',
        textFour:'받아볼 날짜를 선택 시, 앞서 골랐던 쿠킹박스들이 정해진 날짜에 랜덤으로 배송되는 서비스 입니다.',
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
        header.classList.add('active');
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
        header.classList.remove('active');
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