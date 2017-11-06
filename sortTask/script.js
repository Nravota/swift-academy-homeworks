var numbersArr = [1, 3, 50, 235, -6, 18]; // 1,3,50,235,-6, 18
document.getElementById("container").innerHTML = numbersArr;

function sortNumbers() {
    numbersArr.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("container").innerHTML = numbersArr;
}
document.getElementById("sortBtn").addEventListener("click", sortNumbers);
var input = document.getElementById("input").value;