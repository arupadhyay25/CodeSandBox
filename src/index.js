import "./styles.css";

let Header = (properties) => {
  let { id, text } = properties;
  let header = document.createElement(`h1`);
  let counter = document.createElement(`span`);
  header.innerText = text;
  header.setAttribute("id", id);
  counter.setAttribute("id", "c");
  counter.innerText = 0;
  counter.style.marginLeft = "20px";
  header.append(counter);
  return header;
};

let Button = (properties) => {
  let { text, disabled, onClick } = properties;
  let button = document.createElement("button");
  button.innerText = text;
  button.disabled = disabled;
  button.onclick = onClick;
  button.style.marginRight = "20px";
  return button;
};

let app = document.getElementById("app");

var Clicks = 0;
let header = Header({ id: "counter", text: "Counter" });
let addBtn = Button({
  text: "ADD",
  disabled: false,
  onClick: () => {
    Clickevent();
  }
});
let reduceBtn = Button({
  text: "SUBTRACT",
  disabled: false,
  onClick: () => {
    Clicks -= 1;
    document.getElementById("c").innerHTML = Clicks;
  }
});

app.append(header, addBtn, reduceBtn);
let header1 = Header({ id: "counter", text: "Counter" });
console.log(header1);

let Clickevent = () => {
  Clicks += 1;
  document.getElementById("c").innerHTML = Clicks;
};
