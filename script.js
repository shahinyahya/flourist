
// top nav sticky

window.addEventListener('scroll', () => {
    const wholeHead = document.querySelector('.whole-head')
    const annoucementOff = wholeHead.offsetTop;

    if (window.pageYOffset > annoucementOff) {
        wholeHead.classList.add('whole-active')
    } else {
        wholeHead.classList.remove('whole-active')
    }
})



// FAQ section

const plusMinus = document.querySelector('.section-1')

plusMinus.addEventListener('click', () => {
    const faq = document.querySelector('.faq-list');
    faq.classList.toggle('faq-list-active')
    plusMinus.classList.toggle("active")
})

// product carousel

const rightBtn = [...document.querySelectorAll('.right-btn')]
const leftBtn = [...document.querySelectorAll('.left-btn')]
const slides = [...document.querySelectorAll('.product-carousel')]


slides.forEach((item, i) => {
    let slideWholeWidth = item.getBoundingClientRect();
    let containerWidth = slideWholeWidth.width;
    rightBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth
        leftBtn[i].style.opacity = 1;
        if (item.scrollLeft > (containerWidth * 9)) {
            rightBtn[i].style.opacity = 0;
        } else {
            rightBtn[i].style.opacity = 1;
        }
    })

    leftBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth
        if (item.scrollLeft === containerWidth) {
            leftBtn[i].style.opacity = 0;
        }
    })
})

// Scroll up func

const wrapper = document.querySelector('.small-wrapper')
const scroller = document.querySelector('.scroll-up')

const scrollSet = wrapper.offsetTop;

console.log(scrollY);
console.log(scrollSet);

window.addEventListener('scroll', () => {
    if (scrollY > scrollSet) {
        scroller.classList.add('scroll-active')
    } else {
        scroller.classList.remove('scroll-active')
    }

})

scroller.addEventListener('click', () => {
    window.scrollTo({ top: 0, scrollBehaviour: "smooth" })
})


//Nav menu drop down

const shopNav = document.querySelector('.shop-nav')
const shopDrop = document.querySelector('.shop-dropdown')
const mainDrop = document.querySelector('.maindrop')

shopNav.addEventListener('mouseover', () => {
    mainDrop.classList.toggle("maindrop-active")
    shopDrop.classList.toggle("shop-drop-active")
})