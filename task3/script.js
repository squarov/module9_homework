function request(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
      if (xhr.status != 200) {
          console.log('Статус ответа: ', xhr.status);
      } else {
          const result = JSON.parse(xhr.response);
          if (callback) {
              callback(result);
          }
      }
  };
  xhr.send();
};

const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener("click", () => {
  const value = input.value;
  if (value <= 0 || value > 10) {
      console.log("число вне диапазона от 1 до 10");
  } else {
      request(`https://picsum.photos/v2/list/?limit=${value}`, result => console.log(result));
  }
});

input.addEventListener("input", (event) => {
  if(!event.target.value) {
      btn.setAttribute("disabled", '');
  } else {
      btn.removeAttribute("disabled");
  }
});