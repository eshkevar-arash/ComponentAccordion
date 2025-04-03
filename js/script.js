/*let accordion = document.querySelector('.accordion');
let list = document.querySelector('.list');
let items = document.querySelectorAll('.item')
items = Array.from(items)
accordion.addEventListener('click', event => {
    let targetBtn = event.target.closest('.target-btn');
    let mainTarget = event.target.closest('.mainTarget');
    let itemBtnTarget = event.target.closest('.item-btn')

    if (targetBtn || mainTarget) {
        if (list.style.maxHeight && list.style.maxHeight !== "0px") {
            list.style.maxHeight = "0px";
        } else {
            list.style.maxHeight = list.scrollHeight + "px"; // مقدار داینامیک ارتفاع
        }
        accordion.classList.toggle('accordion--open');
    }else if (itemBtnTarget){
        console.log('ok')
        items.forEach(item => {
            if (item !== itemBtnTarget.parentElement){
                item.classList.remove('item--open')
                item.style.maxHeight = "50px"
            }
        })
        if (itemBtnTarget.parentElement.style.maxHeight && itemBtnTarget.parentElement.style.maxHeight !== "50px") {
            itemBtnTarget.parentElement.style.maxHeight = "50px";
            list.style.maxHeight = list.scrollHeight + "px"; // مقدار داینامیک ارتفاع
        } else {
            itemBtnTarget.parentElement.style.maxHeight = itemBtnTarget.parentElement.scrollHeight + "rem"; // مقدار داینامیک ارتفاع
        }
        itemBtnTarget.parentElement.classList.toggle('item--open')
    }
});*/


/*let accordion = document.querySelector('.accordion');
let list = document.querySelector('.list');
let items = document.querySelectorAll('.item');
items = Array.from(items);

accordion.addEventListener('click', event => {
    let targetBtn = event.target.closest('.target-btn');
    let mainTarget = event.target.closest('.mainTarget');
    let itemBtnTarget = event.target.closest('.item-btn');

    if (targetBtn || mainTarget) {
        if (list.style.maxHeight && list.style.maxHeight !== "0px") {
            list.style.maxHeight = "0px"; // بستن آکوردیون
        } else {
            list.style.maxHeight = list.scrollHeight + "px"; // باز کردن آکوردیون
        }
        accordion.classList.toggle('accordion--open');
    } else if (itemBtnTarget) {
        items.forEach(item => {
            if (item !== itemBtnTarget.parentElement) {
                item.classList.remove('item--open');
                item.style.maxHeight = "50px"; // بسته شدن سایر آیتم‌ها
            }
        });

        let item = itemBtnTarget.parentElement;

        if (item.style.maxHeight && item.style.maxHeight !== "50px") {
            item.style.maxHeight = "50px"; // بسته شدن آیتم
        } else {
            item.style.maxHeight = item.scrollHeight + "px"; // باز کردن آیتم به طور داینامیک
            list.style.maxHeight = list.scrollHeight + "px"; // مقدار داینامیک ارتفاع
        }

        item.classList.toggle('item--open');
    }
});*/


let accordion = document.querySelector('.accordion');
let list = document.querySelector('.list');
let items = Array.from(document.querySelectorAll('.item'));

accordion.addEventListener('click', event => {
    let targetBtn = event.target.closest('.target-btn');
    let itemBtnTarget = event.target.closest('.item-btn');
    let mainTarget = event.target.closest('.mainTarget');

    if (targetBtn || mainTarget) {
        if (list.style.maxHeight && list.style.maxHeight !== "0px") {
            list.style.maxHeight = "0px"; // بستن آکوردیون
        } else {
            list.style.maxHeight = list.scrollHeight + "px"; // باز کردن آکوردیون
        }
        accordion.classList.toggle('accordion--open');
        if (!accordion.classList.contains('accordion--open')){
            items.forEach(item => {
                item.classList.remove('item--open')
                item.style.maxHeight = "50px"
            })
        }
    } else if (itemBtnTarget) {
        let item = itemBtnTarget.parentElement;

        items.forEach(i => {
            if (i !== item) {
                i.classList.remove('item--open');
                i.style.maxHeight = "50px"; // بسته شدن سایر آیتم‌ها
            }
        });

        if (item.style.maxHeight && item.style.maxHeight !== "50px") {
            item.style.maxHeight = "50px"; // بسته شدن آیتم
        } else {
            item.style.maxHeight = item.scrollHeight + "px"; // باز کردن آیتم به طور داینامیک
        }

        item.classList.toggle('item--open');

        // **آپدیت ارتفاع لیست**
        updateListHeight();
    }
});

// **تابع برای بروزرسانی ارتفاع لیست**
function updateListHeight() {
    let openItemsHeight = items.reduce((total, item) => {
        return total + (item.classList.contains('item--open') ? item.scrollHeight : 50);
    }, 0);

    list.style.maxHeight = openItemsHeight + "px";
}



