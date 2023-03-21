const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

const imageList = images
  .map((image) => `<li><img src="${image.url}"  alt="${image.alt}"/></li>`)
  .join("");

console.log(imageList);

list.insertAdjacentHTML("beforeend", imageList);

const img = document.querySelectorAll("img");

img.forEach(function (e, i) {
  e.style.height = "200px";
  e.style.padding = "0 10px 0 10px";
});

list.style.display = "flex";
list.style.listStyle = "none";
list.style.justifyContent = "center";
list.style.width = "100%";
