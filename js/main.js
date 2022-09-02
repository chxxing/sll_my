window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.Header .lang').addEventListener('click', (e) => {
        const LG = e.currentTarget;
        LG.classList.toggle('on');
    });

    window.addEventListener('scroll', () => {
        let SCR = window.scrollY;
        // console.log(SCR);
        SCR > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on')
    });

    const MAIN = new Swiper('.MainSlider', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        speed: 1500,
    });

    AOS.init({
        offset: 100,
        delay: 10,
        duration: 500,
        easing: 'ease-out-quart',
    });

    const CONT = new Swiper('.ContentSlider', {
        loop: true,
        slidesPerView: 5,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    document.querySelector('.Footer .Familyul').addEventListener('click', (e) => {
        const FS = e.currentTarget;
        FS.classList.toggle('on');
    });
});