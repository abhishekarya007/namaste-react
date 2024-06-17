import React from "react";
import ReactDOM from "react-dom";
// Creating HTML tag using JS

{
  /* <script>
  const heading = document.createElement('h1') heading.innerHTML = 'Hii this is
  Abhishek Kumar' const rootElement = document.getElementById('root')
  rootElement.appendChild(heading)
</script>; */
}

// Creating HTML tag using React.createElement
// It takes three arguments ( tag, attributes, child/children)
// React elements are nothing but plain JS objects  //////important\\\\\\
const heading = React.createElement("h1", {}, "hello world !!!"); // JS OBJ

const root = ReactDOM.createRoot(document.getElementById("root"));

// ## JSX is HTML like syntax while is used to write react code to make it readable as writing the whole code using React.createElement
//     will not be readable
// ## Babel converts JSX - > React.createElement - > ReactElement - > JS onject  - > Reandered by ReactDOM
// ## Babel is not part of react and also it is not created by facebook unlike React

const headingJsx = (
  <div>
    <h1 className="name">Namaste React</h1>
  <h1 className="name">Namaste React</h1>
  </div>

)

//root.render will convert this obj to html tag and put it in DOM ( Document Object Model) //////important\\\\\\
// root.render(heading);

{
  /* <div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
</div> */
}

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h11 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ])
// );

root.render(headingJsx);
