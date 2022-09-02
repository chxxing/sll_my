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
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // const TM = document.querySelectorAll('.TabMenu li');
    // const TC = document.querySelectorAll('.TabCont li');

    // for (let i = 0; i < TM.length; i++) {
    //     document.querySelector('.TabMenu li').addEventListener('click', (e) => {
    //         if (e.target == document.querySelector(TM)[i]) {
    //             TAB(i)
    //         };
    //     });
    // };

    // function TAB(i) {
    //     TM.removeClass('on');
    //     TC.removeClass('on');
    //     TM.eq(i).addClass('on');
    //     TC.eq(i).addClass('on');
    // }






    document.querySelector('.Footer .Familyul').addEventListener('click', (e) => {
        const FS = e.currentTarget;
        FS.classList.toggle('on');
    });
});