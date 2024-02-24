const backwards = document.getElementById("backwards");
const forwards = document.getElementById("forwards");


// styles

backwards.innerText = "<"
backwards.style.color = 'white';
backwards.style.fontSize = '2rem';

forwards.innerText = ">"
forwards.style.color = 'white';
forwards.style.fontSize = '2rem';

// preparing logic

const bar = document.querySelector(".bar");

let count = 0;

let increment = 0;
bar.style.width = `${increment}%`;
bar.style.transition;

// event handler declarations

const increase = () => {
  if (count < 3) {
    increment += 32.5;
    bar.style.width = `${increment}%`;
    count += 1;
}
}

const decrease = () => {
    if (count > 0) {
        increment -= 32.5;
        bar.style.width = `${increment}%`;
        count -= 1;
  }
}

// assigning event handlers

backwards.addEventListener("click", decrease);
forwards.addEventListener("click", increase);
