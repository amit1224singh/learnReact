var header1 = React.createElement("h1",{id:"header1"},"This is Header 1");
var header2 = React.createElement("h2",{id:"header2"},"This is Header 2");
var snip = React.createElement("div",{id:"snip"}, [header1,header2 ]);
var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(snip);