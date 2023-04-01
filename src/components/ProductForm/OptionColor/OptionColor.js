import styles from '../ProductForm.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = ({ colors, setCurrentColor }) => {
	const colorClassName = (color) => {
		// format color class name to i.e 'colorGreen'
		return styles[
			'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
		];
	};

	return (
		<ul className={styles.choices}>
			{colors.map((color) => {
				return (
					<li key={color}>
						<button
							type="button"
							className={clsx(
								colorClassName(color)
								// currentColor === color && styles.active
							)}
							onClick={() => setCurrentColor(color)}
						></button>
					</li>
				);
			})}
		</ul>
	);
};

OptionColor.propTypes = {
	colors: PropTypes.array,
	setCurrentColor: PropTypes.func,
};

export default OptionColor;
