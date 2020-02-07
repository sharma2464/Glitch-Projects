const React = require("react");
const ReactDOM = require("react-dom");
// const Route = require("react-router-dom").Route;
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const hashHistory = require("react-router-dom").hashHistory;

/* Import Components */
const App = require("./comp/App");
const Test = require("./comp/Test");

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
