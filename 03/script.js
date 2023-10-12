//形参
const $ = v => document.querySelector(v);
const $$ = v => document.querySelectorAll(v);
const openBtn = $('#open');
const closeBtn = $('#close');
const pageContainer = $('.page-page-container');
//形参定义函数
const addClass = (el, className) => el.classList.add(className);
const rmClass = (el, className) => el.classList.remove(className);

openBtn.addEventListener('click'.()=>{
	addClass(openBtn,'hidden');
	rmClass(pageContainer, 'show-nav');
});
closeBtn.addEventListener('click'.()=>{
	rmClass(openBtn,'hidden');
	addClass(pageContainer, 'show-nav');
	addClass(closeBtn,'hidden')
});