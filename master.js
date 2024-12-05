let itemButton = document.querySelectorAll(".button span");
let input = document.querySelector("input");
let result = document.querySelector(".result");

itemButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    items(e.target.getAttribute("index"), input.value);
  });
});
function items(index, value) {
  switch (index) {
    case "0":
      checkItem(value);
      break;
    case "1":
      addItem(value);
      break;
    case "2":
      deleteItem(value);
      break;
    case "3":
      showItems();
      break;
  }
}
function checkItem(value) {
  if (input.value.trim() !== "") {
    if (localStorage.getItem(value)) {
      result.innerHTML = `There item found in local storge : <span>${value}</span>`;
    } else {
      result.innerHTML = `There no item found in local storge : <span>${value}</span>`;
    }
  } else {
    result.innerHTML = "The input is empty";
  }
}
function addItem(value) {
  if (input.value.trim() !== "") {
    localStorage.setItem(value, "value");
    result.innerHTML = `You add items ${value} sucssesfly`;
    input.value = "";
  } else {
    result.innerHTML = "The input is empty";
  }
}
function deleteItem(value) {
  if (input.value.trim() !== "") {
    if (localStorage.getItem(value)) {
      localStorage.removeItem(value);
      result.innerHTML = `You remeved <span>${value}</span>`;
    } else {
      result.innerHTML = "The item not found";
    }
  } else {
    result.innerHTML = "The input is empty";
  }
}
function showItems() {
  if (localStorage.length === 0) {
    result.innerHTML = "There no item in local storge";
  } else {
    let r = "";
    for (let i = 0; i < localStorage.length; i++) {
      r += `Item: <span>${localStorage.key(i)} </span>`;
    }
    result.innerHTML = `${r}`;
  }
}
