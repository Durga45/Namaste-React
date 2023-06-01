/*
<div id="parent">
  <div id="child">
      <h1> multi div</h1>
      <h2>h2 tag sibling</h2>
   </div>
   <div id="child2">
      <h1> multi div</h1>
      <h2>h2 tag sibling</h2>
   </div>
</div>

*/
const div1=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"i am h2 tag sibling"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i amm h1 tag"),
        React.createElement("h2",{},"i am h2 tag")
    ])
]);





const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(div1);