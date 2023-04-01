import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';

const Product = (props) => {
	const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
	const [currentColor, setCurrentColor] = useState(props.colors[0]);

	const getModifiedPrice = (basePrice) => {
		// access objects with additionalPrice of currentSize
		const selectedSize = props.sizes.find(
			(size) => size.name === currentSize
		);
		const additionalPrice = selectedSize ? selectedSize.additionalPrice : 0;

		return props.basePrice + additionalPrice;
	};

	return (
		<article className={styles.product}>
			<div className={styles.imageContainer}>
				<ProductImage currentColor={currentColor} name={props.name} />
			</div>
			<div>
				<header>
					<h2 className={styles.name}>{props.title}</h2>
					<span className={styles.price}>
						Price: {getModifiedPrice()}$
					</span>
				</header>
				<ProductForm
					{...props}
					currentColor={currentColor}
					currentSize={currentSize}
					setCurrentSize={setCurrentSize}
					setCurrentColor={setCurrentColor}
					getModifiedPrice={getModifiedPrice}
				/>
			</div>
		</article>
	);
};

Product.propTypes = {
	name: PropTypes.string,
	title: PropTypes.string,
	basePrice: PropTypes.number,
	colors: PropTypes.arrayOf(PropTypes.string),
	sizes: PropTypes.arrayOf(PropTypes.object),
};

export default Product;
