import styles from '../Product/Product.module.scss';

const ProductImage = ({ name, currentColor }) => {
	return (
		<img
			className={styles.image}
			alt={`${name} shirt`}
			src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
		/>
	);
};
export default ProductImage;
