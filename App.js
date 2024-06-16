// Creating HTML tag using JS

{/* <script>
  const heading = document.createElement('h1') heading.innerHTML = 'Hii this is
  Abhishek Kumar' const rootElement = document.getElementById('root')
  rootElement.appendChild(heading)
</script>; */}

// Creating HTML tag using React.createElement
// It takes three arguments ( tag, attributes, child/children)
// React elements are nothing but plain JS objects
const heading = React.createElement("h1", {}, "hello world !!!"); // JS OBJ

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render will convert this obj to html tag and put it in DOM ( Document Object Model)
// root.render(heading);

{
  /* <div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);

root.render(parent);
