import Button from './Button/Button';
import styles from './ProductForm.module.scss';
import OptionColor from './OptionColor/OptionColor';
import OptionSize from './OptionSize/OptionSize';
import PropTypes from 'prop-types';

const ProductForm = ({
	name,
	title,
	getModifiedPrice,
	basePrice,
	sizes,
	colors,
	currentSize,
	currentColor,
	setCurrentColor,
	setCurrentSize,
}) => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log('Summary');
		console.log('================');
		console.log({
			name: name,
			title: title,
			totalPrice: getModifiedPrice(basePrice),
			size: currentSize,
			color: currentColor,
		});
	};
	return (
		<form onSubmit={(event) => handleFormSubmit(event)}>
			<div className={styles.sizes}>
				<h3 className={styles.optionLabel}>Sizes</h3>
				<OptionSize
					sizes={sizes}
					currentSize={currentSize}
					setCurrentSize={setCurrentSize}
				/>
			</div>
			<div className={styles.colors}>
				<h3 className={styles.optionLabel}>Colors</h3>
				<OptionColor
					colors={colors}
					setCurrentColor={setCurrentColor}
				/>
			</div>
			<Button className={styles.button}>
				<span className="fa fa-shopping-cart" />
			</Button>
		</form>
	);
};

ProductForm.propTypes = {
	name: PropTypes.string,
	title: PropTypes.string,
	basePrice: PropTypes.number,
	sizes: PropTypes.arrayOf(PropTypes.object),
	colors: PropTypes.arrayOf(PropTypes.string),
	currentSize: PropTypes.string,
	currentColor: PropTypes.string,
	setCurrentColor: PropTypes.func,
	setCurrentSize: PropTypes.func,
	getModifiedPrice: PropTypes.func,
};

export default ProductForm;
