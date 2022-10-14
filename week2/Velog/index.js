const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const dropdown_toggle = $('.dropdownToggle');
const dropdown_content = $('.dropdown_content');
const toggle_content = $('.toggle_content');

//dropdown 구현하기

dropdown_toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown_content.classList.add('show');
})

dropdown_content.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown_content.classList.remove('show');
    toggle_content.innerHTML = e.target.innerText;
})

