function tabs(tabsParentClass, tabItems, contentItems, activeClass) {
    let head = document.querySelector(tabsParentClass),
        tabs = document.querySelectorAll(tabItems),
        content = document.querySelectorAll(contentItems);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
            // Class for animation
            item.classList.remove('animation');
        });

        tabs.forEach(btn => {
            btn.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        // Class for animation
        content[i].classList.add('animation');
        tabs[i].classList.add(activeClass)
    }

    head.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains(tabItems.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabItems.replace(/\./, ""))) {
            tabs.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    hideTabContent();
    showTabContent();
}

window.addEventListener('DOMContentLoaded', () => {
    tabs('.tabs__list', '.tab__link', '.tab', 'active');
});



