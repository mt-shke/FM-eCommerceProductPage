import Item from "./Item";
import css from "./List.module.css";

const List = (props) => {
	return (
		<ul className={css["container__list"]}>
			{props.data.map((item) => (
				<Item data={item} key={item.id} />
			))}
		</ul>
	);
};

export default List;
