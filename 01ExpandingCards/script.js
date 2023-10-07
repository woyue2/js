//选中了panel 和 panel active
const panelItems = document.querySelectorAll(".container > .panel");

panelItems.forEach(item => {
    item.addEventListener('click',() => {
        [].filter.call(item.parentElement.children,el => el !== item).forEach(el => el.classList.remove('active'));
        item.classList.add('active')
    });
});