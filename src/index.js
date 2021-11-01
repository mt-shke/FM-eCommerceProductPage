import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureCartStore from "./store/cart-store";
import configureProductStore from "./store/product-store";

configureCartStore();
configureProductStore();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
