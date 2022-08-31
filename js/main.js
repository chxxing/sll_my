window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.Header .lang').addEventListener('click', (e) => {
        const LG = e.currentTarget;
        LG.classList.toggle('on');
    });

    window.addEventListener('scroll', () => {
        let SCR = window.scrollY;
        console.log(SCR);
        SCR > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on')
    });

    const MainSlider = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        effect: "fade",
        speed: 1000,
    });
});