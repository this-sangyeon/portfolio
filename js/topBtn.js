const sectionScroll = document.querySelector('.work-open');
const btt = document.getElementById('back-to-top');

// 일정 위치에 올라오더라도 top 버튼이 나타나게끔
let offset;
// 스크롤 양을 저장하는 변수
let scrollPos;
// document의 높이를 구해온다.
let docHeight; 

docHeight = Math.max(sectionScroll.scrollHeight,sectionScroll.offsetHeight); 


if(docHeight != 'undifind'){
    // docHeight 를 4번 나눈 값을 offset에 저장
    // 4분의 1 값보다 많으면~
    offset = docHeight / 2;
}

sectionScroll.addEventListener('scroll', ()=>{
    // value = sectionScroll.scrollTop;
    // console.log(value);
    scrollPos = sectionScroll.scrollTop;

    // btt.className = (scrollPos > offset) ? 'visible' : '';

    if(scrollPos < 400){
        btt.className ='visible';
    }
    console.log(scrollPos);
})

btt.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollTop();
});
function scrollToTop(){
    var scrollInterval = setInterval(function(){
        if(scrollPos != 0){
            window.scrollBy(0, -55);
        }else{
            clearInterval(scrollInterval);
        }
     }, 15);
}