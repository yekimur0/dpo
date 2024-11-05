new isvek.Bvi();


document.querySelectorAll('.header__top-nav-item').forEach((item) => {
    new TransferElements({
        sourceElement: item,
        breakpoints: {
            1024: {
                targetElement: document.getElementById('main-nav'),
                targetPosition: 4,
            }
        }
    })
})

new TransferElements({
    sourceElement: document.getElementById('top-actions'),
    breakpoints: {
        1024: {
            targetElement: document.querySelector('.header__bottom-block'),
            targetPosition: 1,
        }
    }
})

new TransferElements({
    sourceElement: document.querySelector('.header__action-mail'),
    breakpoints: {
        1024: {
            targetElement: document.querySelector('.header__bottom-block'),
            targetPosition: 1,
        }
    }
})

new TransferElements({
    sourceElement: document.querySelector('.header__action-phone'),
    breakpoints: {
        1024: {
            targetElement: document.querySelector('.header__bottom-block'),
            targetPosition: 1,
        }
    }
})

const burger = document.querySelector('.burger');
burger.addEventListener('click', (e) => {
    const menuBlock = document.querySelector('.header__bottom-block');
    menuBlock.classList.toggle('header__bottom-block--active')
    e.target.classList.toggle('burger--active')
})

