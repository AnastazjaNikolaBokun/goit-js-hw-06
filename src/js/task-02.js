const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

ingredients.forEach(function (e, i) {
  let li = document.createElement("li");
  li.textContent = e;
  li.classList.add("item");
  list.append(li);
  console.log(li);
});

// let li1 = document.createElement("li");
// li1.textContent = ingredients[0];
// li1.classList.add("item");

// let li2 = document.createElement("li");
// li2.textContent = ingredients[1];
// li2.classList.add("item");

// let li3 = document.createElement("li");
// li3.textContent = ingredients[2];
// li3.classList.add("item");

// let li4 = document.createElement("li");
// li4.textContent = ingredients[3];
// li4.classList.add("item");

// let li5 = document.createElement("li");
// li5.textContent = ingredients[4];
// li5.classList.add("item");

// const list = document.querySelector("#ingredients");

// list.after(li1, li2, li3, li4, li5);
