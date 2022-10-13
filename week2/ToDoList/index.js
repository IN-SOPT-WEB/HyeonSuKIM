const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const nav = $('nav');

//이벤트 위임을 이용해 버튼을 이용한 화면 전환 구현
//애니메이션 효과 적용

nav.addEventListener("click", (e) => {
    const target = e.target;
    switch (target.id) {
        case 'today_button' :
            $('.right').classList.add('hidden');
            $('.left').classList.add('full');
            $('.left').classList.remove('hidden');
            $('.right').classList.remove('full');
            break;
        case 'tomorrow_button' :
            $('.left').classList.add('hidden');
            $('.right').classList.add('full');
            $('.right').classList.remove('hidden');
            $('.left').classList.remove('full');
            break;
        case 'both_button' :
            $('.right').classList.remove('hidden');
            $('.left').classList.remove('full');
            $('.left').classList.remove('hidden');
            $('.right').classList.remove('full');
            break; 
    }
    
})

