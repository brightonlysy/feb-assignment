var totalAns = document.createElement("div");
totalAns.className = "total";

document.form.addEventListener("submit", function(e) {
    e.preventDefault();
    let goom = parseInt(document.form.goombas.value) * 5;
    let bob = parseInt(document.form.bob.value) * 7;
    let cheep = parseInt(document.form.cheep.value) * 11;
    let total = goom + bob + cheep;
    totalAns.textContent = total;
    console.log(total)
    document.body.appendChild(totalAns);
})







// function sumValues(e)
// { e.preventDefault();
//     var num1, num2, res;
//     num1 = Number(document.formCalc.num1.value);
//     num2 = Number(document.formCalc.num2.value);
//     res = num1 + num2;
//     document.formCalc.txtres.value = res;

// }
// document.formCalc.addEventListener("submit", sumValues)