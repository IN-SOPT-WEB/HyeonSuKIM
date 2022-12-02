const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const input = $('input');
const tag_list = $('.tagList');
const lists = $$('li');

input.addEventListener("keypress", (e) => {
    e.stopPropagation();
    let count = 0;
    if (e.key === 'Enter'){
        const currentLi = document.createElement('li');
        currentLi.innerHTML = input.value; 
        //중복이 있으면 append 하지 않는 기능 구현하기
        for (let node of tag_list.childNodes){
            if (node.innerText === currentLi.innerText){
                count++;
                break;
            }
        }
        (count > 0 ? console.log('중복') : tag_list.appendChild(currentLi));
        input.value = null;
    }
})

tag_list.addEventListener("click", (e) => {
    e.stopPropagation();
    tag_list.removeChild(e.target);
})