import {useState} from 'react'

const useArray = (initialValue = []) => {
	const [value, setValue] = useState(initialValue)

	return {
		items: value,
		addItem: text => {if (!!text) {setValue(value.concat(text))}},
		removeItem: idx => {setValue(value.filter((item, index) => idx !== index))},
	}
}

export default useArray
