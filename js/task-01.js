const List = document.querySelectorAll("li.item");
console.log(`Number of categories: ${List.length}`);

console.log(`Category: ${List[0].firstElementChild.textContent}`);
console.log(`Elements: ${List[0].lastElementChild.children.length}`);

console.log(`Category: ${List[1].firstElementChild.textContent}`);
console.log(`Elements: ${List[1].lastElementChild.children.length}`);

console.log(`Category: ${List[2].firstElementChild.textContent}`);
console.log(`Elements: ${List[2].lastElementChild.children.length}`);
