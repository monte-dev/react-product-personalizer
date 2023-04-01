import styles from '../ProductForm.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
	return (
		<ul className={styles.choices}>
			{sizes.map((size) => {
				return (
					<li key={size.name}>
						<button
							type="button"
							// conditionally set classname
							className={clsx(
								currentSize === size.name && styles.active
							)}
							onClick={() => setCurrentSize(size.name)}
						>
							{size.name}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

OptionSize.propTypes = {
	sizes: PropTypes.arrayOf(PropTypes.object),
	currentSize: PropTypes.string,
	setCurrentSize: PropTypes.func,
};

export default OptionSize;
