const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const dropdown_toggle = $('.dropdownToggle');
const dropdown_content = $('.dropdown_content');
const toggle_content = $('.toggle_content');

dropdown_toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown_content.classList.add('show');
})

dropdown_content.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown_content.classList.remove('show');
    console.log(e.target);
    toggle_content.innerHTML = e.target.innerText;
})

//dropdown 구현하기