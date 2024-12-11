let present = 0;
let Absent = 0;
let Leaves = 0;

function button() {
    let attend = prompt(`Enter Your Attendance \n with  P & A & L `).toLowerCase();
    if (attend == "p") {
        ++present
    } else if (attend == "a") {
        ++Absent
    } else if (attend == "l") {
        ++Leaves
    }
}

function Check() {
    document.write(`<h1> Present Student is ${present}  <br> <br> 
        Absent Student is ${Absent}  <br> <br>
        Leaves Student is ${Leaves}`)
}