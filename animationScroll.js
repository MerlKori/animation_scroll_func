window.onload = function () {


    let windowHeight = document.documentElement.clientHeight;


    // учитываю изменения окна браузера пользователем
    window.addEventListener('resize', function () {
        windowHeight = document.documentElement.clientHeight;
        console.log(windowHeight);
    })

    function toggleAnimation (id) {
        let element = document.querySelector(id);
        let сoordinates = {
            windowTop: element.getBoundingClientRect().top,
            height: element.getBoundingClientRect().height
        };
        let animateStartPoint = сoordinates.windowTop + сoordinates.height + (windowHeight / 4);
        if (windowHeight >= animateStartPoint) {
            element.style.backgroundColor = "green";
        } else {
            element.style.backgroundColor = "blue";
        }
    }

    window.addEventListener('scroll' , function () {
        toggleAnimation('.element_1');
        toggleAnimation('.element_2');
        toggleAnimation('.element_3');
        toggleAnimation('.element_4');
    })

}
// w.o