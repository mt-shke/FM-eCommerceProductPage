import css from "./Infos.module.css";

const Infos = (props) => {
	const { brand, description, id } = props.product;

	return (
		<div className={`${css["container__infos"]} container`}>
			<em className="product-brandt text-orange fs-300 fwb uppercase">{brand}</em>
			<h2 className="product-title fs-500 fwb">{id}</h2>
			<p className="product-description text-dblue fs-200 letter-s1">{description}</p>
		</div>
	);
};

export default Infos;
