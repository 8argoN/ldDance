// 클릭한 메뉴 밑줄 유지 & 메뉴바 클릭시 해당 위치로 이동
const scrollMove_best = () => {
    let location = document.querySelector("#best").offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
    // 밑줄 유지
    document.getElementById("best_sideBar").className = "nav_select";
    document.getElementById("new_sideBar").className = "nav_none";
    document.getElementById("category_sideBar").className = "nav_none";
    // 글자크기 키우기
    document.getElementById("category_sideBar").style.fontWeight = "600"
    document.getElementById("best_sideBar").style.fontWeight = "900"
    document.getElementById("new_sideBar").style.fontWeight = "600"
  };
  const scrollMove_new = () => {
    let location = document.querySelector("#new").offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
    // 밑줄 유지
    document.getElementById("best_sideBar").className = "nav_none";
    document.getElementById("new_sideBar").className = "nav_select";
    document.getElementById("category_sideBar").className = "nav_none";
    // 글자크기 키우기
    document.getElementById("new_sideBar").style.fontWeight = "900"
    document.getElementById("category_sideBar").style.fontWeight = "600"
    document.getElementById("best_sideBar").style.fontWeight = "600"
    
  };
  const scrollMove_category = () => {
    let location = document.querySelector("#category").offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
    // 밑줄 유지시켜주기
    document.getElementById("best_sideBar").className = "nav_none";
    document.getElementById("new_sideBar").className = "nav_none";
    document.getElementById("category_sideBar").className = "nav_select";
    //글자크기 키우기
    document.getElementById("category_sideBar").style.fontWeight = "900"
    document.getElementById("best_sideBar").style.fontWeight = "600"
    document.getElementById("new_sideBar").style.fontWeight = "600"
  };

const moveTop = function(){
    window.scrollTo({top :0, behavior:"smooth"});
}


//   특정 화면 위치에서 상단바 없애고 사이드바 생성하기
window.addEventListener('scroll', () => { 
    if (window.scrollY >=125){
        document.getElementById("sideBar").className = "sideBar_move";
    }else{
        document.getElementById("sideBar").className = "sideBar_none";
    }
    // 스크롤시 Y좌표 확인 => console.log(window.scrollY);


  });