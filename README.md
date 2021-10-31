<details>
<summary>no arrows in input number field
</summary>

```css
.container__cart > div > input::-webkit-outer-spin-button,
.container__cart > div > input::-webkit-inner-spin-button {
	-webkit-appearance: none;
}

.container__cart > div > input {
	-webkit-appearance: none;
	-moz-appearance: textfield;
```

</details>

<details>
<summary>useStore hook </summary>

store.js

```js
import { useEffect, useState } from "react";

let globalState = {};
//

let listeners = [];
// Array full of functions, called to update the components using the hook

let actions = {};
//

// create custom hook store
export const useStore = () => {
	// Get the function updating the state
	const setState = useState(globalState)[1];

	// Create a function taking an action from actions object,
	// this action produces a function on the globalState
	const dispatch = (actionId, payload) => {
		const newState = actions[actionId](globalState, payload);
		// Get a newState from the action on the globalState
		globalState = { ...globalState, ...newState };
		//

		for (const listener of listeners) {
			listener(globalState);
			// update the state with the new globalState
			// then React re-render all the components using this custom hook
		}
	};

	useEffect(() => {
		listeners.push(setState);
		// push this custom hook update to listeners array

		return () => {
			listeners = listeners.filter((listen) => listen !== setState);
			// when a component is unmount, this removes its listener
		};
	}, [setState]);

	return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
	if (initialState) {
		globalState = { ...globalState, ...initialState };
		// merge all the global state, with this unique state
	}

	actions = { ...actions, ...userActions };
	// merge all actions, with these currents actions
};
```

product-store

```js
import { initStore } from "./store";

// Dummy test product database

const configureStore = () => {
	const actions = {
		ADD_PRODUCT_TO_STOCK: (curState, item) => {
			let newProducts = [];
			const itemIndex = curState.products.findIndex((it) => it.id === item.id);

			if (itemIndex < 0) {
				newProducts.push(item);
			}
			if (itemIndex >= 0) {
				newProducts = [...curState.products];
				newProducts[itemIndex].quantityInStock += item.quantity;
			}

			return { products: newProducts };
		},
		REMOVE_PRODUCT_FROM_STOCK: (curState, item) => {
			let newProducts = [];
			const itemIndex = curState.products.findIndex((it) => it.id === item.id);

			if (itemIndex < 0) {
				newProducts.push(item);
			}
			if (itemIndex >= 0) {
				newProducts = [...curState.products];
				newProducts[itemIndex].quantityInStock -= item.quantity;
			}

			return { products: newProducts };
		},
	};

	initStore(actions, {
		products: [
			{
				id: "Fall Limited Edition Sneakers",
				brand: "SNEAKER COMPANY",
				description:
					"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
				images: [
					"../../../assets/images/image-product-1.jpg",
					"../../../assets/images/image-product-2.jpg",
					"../../../assets/images/image-product-3.jpg",
					"../../../assets/images/image-product-4.jpg",
				],
				imageCart: `../../../assets/images/image-product-1-thumbnail.jpg`,
				price: 125.0,
				promo: 50,
				quantity: null,
				quantityInStock: 18,
				originPrice: 250.0,
			},
		],
	});
};
export default configureStore;
```

cart-store

```js
import { initStore } from "./store";

const configureStore = () => {
	const actions = {
		ADD_PRODUCT_TO_CART: (curState, item) => {
			let newItems = [];
			const itemIndex = curState.cart.items.findIndex((it) => it.id === item.id);
			if (itemIndex < 0) {
				newItems.push(item);
			}
			if (itemIndex >= 0) {
				newItems = [...curState.cart.items];
				newItems[itemIndex].quantity += item.quantity;
			}

			const newCart = { ...curState.cart, items: newItems };
			return { cart: newCart };
		},

		DELETE_PRODUCT_FROM_CART: (curState, item) => {
			const newItems = curState.cart.items.filter((it) => it.id !== item.id);
			const newCart = { ...curState.cart, items: newItems };
			return { cart: newCart };
		},
	};

	initStore(actions, {
		cart: {
			totalAmount: 0,
			// reduce todo
			items: [],
		},
	});
};

export default configureStore;
```

</details>
