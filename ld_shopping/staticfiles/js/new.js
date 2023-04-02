window.addEventListener('scroll', () =>{
    if (window.scrollY >= 323){
        document.getElementById("new").style.opacity = "1";

    }else{
        document.getElementById("new").style.opacity = "0";
    }

    if (window.scrollY >= 1550){
        document.getElementById("category").style.opacity = "1";

    }else{
        document.getElementById("category").style.opacity = "0";
    }
})

// let box = document.querySelector('#new');  // 요소 선택
    
//      window.addEventListener('scroll', function(){
//         console.log("상대위치"+box.getBoundingClientRect().top) // 상대위치
//         // console.log(box.getBoundingClientRect().top + window.pageYOffset) // 절대위치

//     });