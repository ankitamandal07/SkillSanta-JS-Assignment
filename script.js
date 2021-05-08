//Solution #1
function largest() {
    let num1, num2, num3;
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    num3 = Number(document.getElementById("num3").value);
   
    const greatest = Math.max(num1, num2, num3);

    alert("The largest number = " + greatest); 
}
