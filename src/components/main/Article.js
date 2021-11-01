import { useStore } from "../../store/store";
import Infos from "./infos/Infos";
import Pictures from "./picture/Pictures";
import Prices from "./prices/Prices";
import css from "./Article.module.css";

const Article = () => {
	const state = useStore()[0];

	// state.products.map(product => render product)

	return (
		<article className={css["container__article"]}>
			<div>
				<Pictures product={state.products[0]} />
			</div>
			<div>
				<Infos product={state.products[0]} />
				<Prices product={state.products[0]} />
			</div>
		</article>
	);
};

export default Article;
