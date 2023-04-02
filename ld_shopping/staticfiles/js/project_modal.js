// click한 사진의 id값을 인자로 보내 사진과 관련된 modal창을 띄워준다.
function getId(clicked_id){
    id_value = clicked_id
    
        document.getElementById(`modal_${clicked_id}`).style.display = "flex";
        document.body.classList.add('no_scroll');
}

// modal창 닫기
document.querySelectorAll(".modalClose").forEach(element =>
    element.onclick = function(){
        document.getElementById(`modal_${id_value}`).style.display = "none";
        document.body.classList.remove('no_scroll');
    }
    )