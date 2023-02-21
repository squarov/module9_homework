const input1 = document.querySelector('.num1');
const input2 = document.querySelector('.num2');
const btn = document.querySelector('button');
const pic = document.querySelector('img');
  
btn.addEventListener("click", () => {
    const value1 = +input1.value;
    const value2 = +input2.value;
    if (value1 < 100 || value1 > 300 || value2 < 100 || value2 > 300 || !Number.isInteger(value1) || !Number.isInteger(value2)) {
        console.log("Одно из чисел вне диапазона от 100 до 300");
    } else {
        fetch(`https://picsum.photos/${value1}/${value2}`)
        .then((res) => res.blob())
        .then((result) => {
            const objectURL = URL.createObjectURL(result);
            pic.src = objectURL;
        });
    }
});

const genListener = (secondInput) => (event) => {
    if(!event.target.value || !secondInput.value) {
        btn.setAttribute("disabled", '');
    } else {
        btn.removeAttribute("disabled");
    }
};

input1.addEventListener("input", genListener(input2));
input2.addEventListener("input", genListener(input1));