let display = document.getElementById("display");
let keys = document.getElementsByClassName("key");
let del = document.getElementById("delete");
let reset = document.getElementById("reset");
let equal = document.getElementById("equal");

// del.forEach(element => {
//     element.addEventListener("click", function(e) {
//         display.innerText += e.target.innerText;
//     });
// });

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function (e) {
        if (display.innerText === '0' && e.target.innerText !== '.') {
            display.innerText = e.target.innerText;
        } else {
            display.innerText += e.target.innerText;
        }
    });
}

del.addEventListener('click', () => {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = 0;
    }
});

reset.addEventListener('click', function () {
    display.innerHTML = 0;
})

equal.addEventListener('click', () => {
    try {
        let result = eval(display.innerText.replace('x', '*'));
        if (Math.floor(result) !== result) {
            // result is a floating-point number, format it with 4 decimal places
            display.innerText = result.toFixed(4);
        } else {
            // result is an integer, display it as is
            display.innerText = result;
        }
    } catch {
        display.innerText = none;
    }
});

// document.getElementById("mul").addEventListener("click", function() {
//     document.getElementById("display").textContent = mul;
// });