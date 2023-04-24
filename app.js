const adviceId = document.querySelector(".box__advice-number span");
const adviceText = document.querySelector(".box__advice-text span");
const btn = document.querySelector(".btn");

const getAdvice = (e) => {
  e.preventDefault();

  let id = Math.floor(Math.random() * 150);

  const url = `https://api.adviceslip.com/advice/${id}`;

  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw Error("It's not response 200.");
      } else {
        return response.json();
      }
    })
    .then((json) => showAdvice(json.slip))
    .catch((err) => console.log(err));
};

const showAdvice = (advice) => {
  adviceId.textContent = advice.id;
  adviceText.textContent = advice.advice;
};

btn.addEventListener("click", getAdvice);
