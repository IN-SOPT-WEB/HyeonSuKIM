const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const nav = $('nav');
const forms = $$('form');
const left_form_button = $('.leftButton');
const right_form_button = $('.rightButton');
const left_input = $('.leftInput');
const right_input = $('.rightInput');
const left_list = $('.leftList');
const right_list = $('.rightList');
const garbage = $('.material-symbols-outlined');
const lists = $$('li');

//이벤트 위임을 이용해 버튼을 이용한 화면 전환 구현
//애니메이션 효과 적용

nav.addEventListener("click", (e) => {
    e.stopPropagation();
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

//Left + 버튼 클릭 시 Add 함수 호출하는 이벤트 

left_form_button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    left_list.appendChild(onAddLeft(left_input));
    
})

//Left 에 Add 하는 함수 

function onAddLeft(left_input) {
    const currentLi = document.createElement('li');
    currentLi.innerHTML = left_input.value; 

    //delete 아이콘 만들어서 리스트에 추가하기 
    const currentDeleteBtn = document.createElement('span');
    currentDeleteBtn.innerHTML = "delete";
    currentDeleteBtn.classList.add('material-symbols-outlined');
    currentLi.appendChild(currentDeleteBtn);

    currentLi.classList.add('grid');

    return currentLi;
}

//Right + 버튼 클릭 시 Add 함수 호출하는 이벤트 

right_form_button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    right_list.appendChild(onAddRight(right_input));
})

//Right 에 Add 하는 함수 

function onAddRight(right_input) {
    const currentLi = document.createElement('li');
    currentLi.innerHTML = right_input.value; 

    //delete 아이콘 만들어서 리스트에 추가하기 
    const currentDeleteBtn = document.createElement('span');
    currentDeleteBtn.innerHTML = "delete";
    currentDeleteBtn.classList.add('material-symbols-outlined');
    currentLi.appendChild(currentDeleteBtn);

    currentLi.classList.add('grid');

    return currentLi;
}

//Left 에서 휴지통 아이콘 클릭 시 삭제하는 기능 구현 

left_list.addEventListener("click", (e) => {
        e.stopPropagation();
        const target = e.target;
        switch (target.nodeName) {
            case 'SPAN':
            const n = e.target.parentNode;
            left_list.removeChild(n);
            break;
        }
        
    }
)

//Right 에서 휴지통 아이콘 클릭 시 삭제하는 기능 구현

right_list.addEventListener("click", (e) => {
    e.stopPropagation();
    const target = e.target;
    switch (target.nodeName) {
        case 'SPAN':
        const n = e.target.parentNode;
        right_list.removeChild(n);
        break;
    }
    
}
)