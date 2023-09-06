// var istatus = document.querySelector("h5");

// var btn = document.querySelector("#add");
// var check = 0;

// btn.addEventListener("click", function(){
//     if(check == 0){
//         istatus.innerHTML = "Friends";
//         istatus.style.color = "green";
//         btn.innerHTML = "Remove Friend"
//         check = 1;
//     }else{
//         istatus.innerHTML = "Stranger";
//         istatus.style.color = "red";
//         btn.innerHTML = "Add Friend";
//         check = 0;
//     }
// })
var con = document.querySelector("#container");
var love = document.querySelector("i");

con.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = "0.8";
    setTimeout(function(){
        love.style.opacity = "0";
    }, 1000)
    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000)
})

