import { useState } from 'react';
import './Filters.css';

const Filters = () => {
	const [minPrice, setMinPrice] = useState(0);
	const handleChangeMinPrice = event => {
		setMinPrice(event.target.value);
	};

	return (
		<section className='filters'>
			<div>
				<label htmlFor='price'>Precio a partir de:</label>
				<input
					type='range'
					id='price'
					min='0'
					max='1000'
					onChange={handleChangeMinPrice}
				/>
				<span>{minPrice}</span>
			</div>

			<div>
				<label htmlFor='category'>Categoría</label>
				<select id='category'>
					<option value='all'>All</option>
					<option value='laptops'>Laptops</option>
					<option value='smartphones'>Smartphones</option>
				</select>
			</div>
		</section>
	);
};

export default Filters;
