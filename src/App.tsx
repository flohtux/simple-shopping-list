import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

interface ShoppingItem {
	itemName: string
}

const App = () => {
	// HINT: each "item" in our list names a name,
	// a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState<string[]>(['item 1', 'item 2', 'item 3']);
	const [inputValue, setInputValue] = useState('');

	const handleAddButtonClick = () => {
		const newItems = [...items, inputValue];

		setItems(newItems);
		setInputValue('');
		console.log(newItems);
	};

	const handleQuantityDecrease = () => {
		console.log("decrease");
	}

	const handleQuantityIncrease = () => {
		console.log("increase");
	}

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
				</div>
				<div className='item-list'>
					<div className='item-container'>
						<div className='item-name'>
							{/* TODO check if the item is selected or not */}
							{false ? (
								<>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span className='completed'>{items[0]}</span>
								</>
							) : (
								<>
									<FontAwesomeIcon icon={faCircle} />
									<span>{items[0]}</span>
								</>
							)}
						</div>
						<div className='quantity'>
							<button>
								<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease()} />
							</button>
							<span> 2 </span>
							<button>
								<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease()} />
							</button>
						</div>
					</div>
				</div>
				<div className='total'>Total: 42</div>
			</div>
		</div>
	);
};

export default App;
