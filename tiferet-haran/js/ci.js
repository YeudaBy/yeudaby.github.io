const c1 = $(".c1")
const c2 = $(".c2")

function handler(e) {
    const scrollY = window.scrollY;
    const innerWidth = window.innerWidth;
    // console.log(scrollY);
    // console.log(window.innerHeight);
    // console.log(scrollY > 700);
    // console.log(scrollY < 2300);
    const toBtm = (scrollY / 400) / 15


    if (scrollY > 700 && scrollY < 2000) {
        c1.css("background", "#9a9a9a")
        // c1.css("box-shadow", "0 0 30px 30px gray")
        c2.css("background", "#9a9a9a")
        // c2.css("box-shadow", "0 0 30px 30px gray")
    } else {
        c2.css("background", " #e1e1e1")
        // c2.css("box-shadow", "0 0 30px 30px #e1e1e1")
        c1.css("background", "#e1e1e1")
        // c1.css("box-shadow", "0 0 30px 30px #e1e1e1")
    }



    if (scrollY < window.innerHeight) {
        c2.css("transform", `translateX(${scrollY / 3}px) 
        scale(${(scrollY / 300) + 1})`)
        c1.css("transform", `translateX(-${scrollY / 7}px) 
        scale(${(scrollY / 400) + 1})`)
    } else if (scrollY < (window.innerHeight * 2) + 100) {

        if (toBtm < window.innerHeight + 100) {
            c2.css("transform", `${c2.css("transform")}
                translateY(${toBtm}px)`)

            c1.css("transform", `${c1.css("transform")}
                translateY(-${toBtm}px)`)
        }


    } else if (scrollY > (window.innerHeight * 3)) {
        c1.css("transform", `${c1.css("transform")}
                translateX(${toBtm}px)
                translateY(-${toBtm}px)
                `)

        c2.css("transform", `${c2.css("transform")}
                translateX(-${toBtm}px)
                translateY(${toBtm}px)
                `)
    }
}

document.addEventListener("scroll", handler,)





