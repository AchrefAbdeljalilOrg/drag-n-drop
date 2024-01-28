/* -------------------------------- */
/*    Start drag visual feedback    */
/* -------------------------------- */
function onStartDrag(ev) {
  // Set data for transfer

  const offsetX = ev.clientX - ev.target.getBoundingClientRect().left;
  const offsetY = ev.clientY - ev.target.getBoundingClientRect().top;

  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.setData("offsetX", offsetX);
  ev.dataTransfer.setData("offsetY", offsetY);
}

/* -------------------------------- */
/*        Handle drop action        */
/* -------------------------------- */
function onDrop(ev) {
  ev.preventDefault();
  // Retrieve data from drag
  const id = ev.dataTransfer.getData("text");
  const offsetX = ev.dataTransfer.getData("offsetY");
  const offsetY = ev.dataTransfer.getData("offsetX");
  console.log({ offsetX, offsetY });

  if (id == "source" && ev.target.id.startsWith("destination")) {
    // Create a new <div> element
    var newDiv = document.createElement("div");

    // Set attributes for the div element
    newDiv.setAttribute("class", "draggable");
    newDiv.setAttribute("id", Date.now());
    newDiv.innerHTML = "Draggable";
    newDiv.draggable = true;
    newDiv.style.left =
      ev.clientX - ev.target.getBoundingClientRect().left + "px";
    newDiv.style.top = (ev.clientY - ev.target.getBoundingClientRect().top - 10) + "px";

    ev.target.appendChild(newDiv);
  }

  ev.currentTarget.style.background = "";
}

/* -------------------------------- */
/*         Allow drop action        */
/* -------------------------------- */
function onDragOver(ev) {
  ev.preventDefault();
  console.log(ev.clientX);
}

/* -------------------------------- */
/*      Highlight on drag enter     */
/* -------------------------------- */
function onDragEnter(ev) {
  ev.currentTarget.style.background = "#0a0a15";
}

/* -------------------------------- */
/*        Reset on drag leave       */
/* -------------------------------- */
function onDragLeave(ev) {
  ev.currentTarget.style.background = "#2b002b";
}

/* -------------------------------- */
/*       End drag reset styles      */
/* -------------------------------- */
function onEndDrag(ev) {
  ev.target.style.border = "3px dashed #ff00ff";
}
