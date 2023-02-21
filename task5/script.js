const input1 = document.querySelector('.num1');
const input2 = document.querySelector('.num2');
const btn = document.querySelector('button');
const pic = document.querySelector('img');
  
btn.addEventListener("click", () => {
    const value1 = +input1.value;
    const value2 = +input2.value;
    if (value1 < 1 || value1 > 10 || !Number.isInteger(value1)) {
        console.log("Номер страницы вне диапозона от 1 до 10");
    } else if (value2 < 1 || value2 > 10 || !Number.isInteger(value2)) {
        console.log("Лимит вне диапозона от 1 до 10")
    } else if (value1 < 1 || value1 > 10 || !Number.isInteger(value1) && value2 < 1 || value2 > 10 || !Number.isInteger(value2)) {
        console.log("Номер страницы и лимит вне диапозона от 1 до 10")
    } else {
        fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
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