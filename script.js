
let countno = 0;

const increment = function countincrement(){
    countno++;
    console.log(countno);
    document.getElementById("count").innerHTML = countno;
}

const reset = function countreset(){
    countno = 0;
    console.log(countno);
    document.getElementById("count").innerHTML = countno;
}

const clkbtn = document.getElementById("clkbtn")
    .addEventListener('click', increment)


const rstbtn = document.getElementById("rstbtn")
    .addEventListener('click', reset)







