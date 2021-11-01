import { useState } from "react";
import css from "./Pictures.module.css";

const Pictures = (props) => {
	const { images } = props.product;
	const length = images.length;
	// Get the array length, and simulate api
	const [slide, setSlide] = useState(length ? 1 : "");
	// Dynamic url
	const url = length ? `../../../assets/images/image-product-${slide}.jpg` : "";

	const sliderHandler = (event) => {
		const next = event.target.id === "next";
		if (next) {
			setSlide((prev) => (prev === length ? 1 : prev + 1));
		}
		if (!next) setSlide((prev) => (prev === 1 ? length : prev - 1));
	};

	const pictureFocusHandler = (event) => {
		const id = +event.target.closest("div").id + 1;
		setSlide(id);
	};

	return (
		<div className={css.container}>
			<div className={`${css["container__pictures"]} bg-center-cover-nr`}>
				<img src={url} alt="sneakers" />
				<span className="bg-center-cover-nr" onClick={sliderHandler}></span>
				<span className="bg-center-cover-nr" id="next" onClick={(e) => sliderHandler(e)}></span>
			</div>
			<div className={`${css["gallery"]}`}>
				{images.map((img, ind) => (
					<div key={ind} id={ind} onClick={(e) => pictureFocusHandler(e)}>
						<img src={img} alt="product" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Pictures;
