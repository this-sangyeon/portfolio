const sectionScroll = document.querySelector('.work-open');
const btt = document.getElementById('back-to-top');

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
    var scrollInterval = setInterval(function(){
        scrollPos = sectionScroll.scrollTop;
        if(scrollPos != 0){
            sectionScroll.scrollBy(0, -55);
        }else{
            clearInterval(scrollInterval);
        }
     }, 15);
}