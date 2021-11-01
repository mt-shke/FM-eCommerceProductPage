import { useStore } from "../../../store/store";
import css from "./Item.module.css";

const Item = (props) => {
	const item = props.data;
	const dispatch = useStore()[1];

	const removeFromCart = (event) => {
		const id = event.target.closest("li").id;
		dispatch("DELETE_PRODUCT_FROM_CART", {
			id: id,
			quantity: item.quantity,
		});
		dispatch("ADD_PRODUCT_TO_STOCK", {
			id: id,
			quantity: item.quantity,
		});
	};

	return (
		<li className={css.item} id={item.id} key={item.id}>
			<div className={css.image}>
				<img src={item.imageCart && item.imageCart} alt={item.id} />
			</div>
			<div className={`${css["cart-item-infos"]} text-dblue`}>
				<h4 className=" fwb">{item.id}</h4>
				<span>${item.price}</span> x<span>{item.quantity}</span>
				<span className="text-vdblue fwb">${item.price * item.quantity}</span>
			</div>
			<button onClick={(e) => removeFromCart(e)}>
				<img src="../../../assets/images/icon-delete.svg" alt="delete icon" />
			</button>
		</li>
	);
};

export default Item;
