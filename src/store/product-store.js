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
