/*Создаем константу item и присваиваем ей значение элемента
.item из CSS (Элемент с class="item" из HTML )*/
const item = document.querySelector(".item");
/*Аналогично получаем доступ к селектору placeholder*/
const placeholders = document.querySelectorAll(".placeholder");

/*Добавляем события на item для нач точки "dragstart" и 
конечн "dragend",что должно происходить когда начали или 
закончили перетаскивать. Вторым параметром будут ф-и которые
будут выполнены когда эти события произойдут*/
item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

/*Обойдем циклом наш массив из элементов */
for (const placeholder of placeholders) {
  /*Вешаем события на placeholder 
  dragover-элемент над placeholder 
  dragenter-когда мы на территории placeholder
  dragleave-когда перетащили и вышли за границы placeholder
  drop-когда мы отпустили*/
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  /*В ф-ю прилетает объект event, который если проверить event.target
будет выводить наш элемент "Перетащи меня" */
  // console.log("drag start", event.target);
  /*Т к у нас есть этот объект, то мы можем применить к нему 
  стили когда мы его будем перетаскивать */
  //Добавим ему класс в CSS - hold
  event.target.classList.add("hold");
  /*Добавляем еще 1 класс hide. Заносим его в setTimeout*/
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend() {
  // console.log("drag end");
  /*Как только элемент возвращ, класс hold и hide удаляем
  event.target.className = "item" - можно так записать*/
  event.target.classList.remove("hold", "hide");
}

function dragover(event) {
  /*Эта ф-я изначально отменяет перемещение нашего объекта,
  поэтому запишем: */
  event.preventDefault();
}
function dragenter(event) {
  /*Добавляем еще 1 класс hovered. Он покажет куда карточку 
  можем сбросить*/
  event.target.classList.add("hovered");
}
function dragleave(event) {
  event.target.classList.remove("hovered");
}
function dragdrop(event) {
  /*Мы наш item сбрасываем в нужный placeholder*/
  event.target.append(item);
  event.target.classList.remove("hovered");
}
