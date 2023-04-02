// document.getElementById("c_outer").onclick = function(){
   
//     document.getElementById("c_outer").className = "best_select";
//     document.getElementById("c_top").className = "best_none";
//     document.getElementById("c_bottom").className = "best_none";
// }

// document.getElementById("c_top").onclick = function(){
    
//     document.getElementById("c_outer").className = "nav_none";
//     document.getElementById("c_top").className = "best_select";
//     document.getElementById("c_bottom").className = "nav_none";
// }

// document.getElementById("c_bottom").onclick = function(){
    
//     document.getElementById("c_outer").className = "nav_none";
//     document.getElementById("c_top").className = "nav_none";
//     document.getElementById("c_bottom").className = "best_select";
// }

const category_outer = () => {
    document.getElementById("c_outer").className = "best_select";
    document.getElementById("c_top").className = "best_none";
    document.getElementById("c_bottom").className = "best_none";
    document.getElementById("outer").style.display = "flex";
    document.getElementById("top").style.display = "none";
    document.getElementById("bottom").style.display = "none";
    
  };
  const category_top = () => {
    document.getElementById("c_top").className = "best_select";
    document.getElementById("c_outer").className = "best_none";
    document.getElementById("c_bottom").className = "best_none";
    document.getElementById("top").style.display = "flex";
    document.getElementById("outer").style.display = "none";
    document.getElementById("bottom").style.display = "none";
    
  };
  const category_bottom = () => {
    document.getElementById("c_bottom").className = "best_select";
    document.getElementById("c_top").className = "best_none";
    document.getElementById("c_outer").className = "best_none";
    document.getElementById("bottom").style.display = "flex";
    document.getElementById("top").style.display = "none";
    document.getElementById("outer").style.display = "none";
    
  };