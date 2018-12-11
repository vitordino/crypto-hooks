import {useState} from 'react'

const useArray = (initialValue = []) => {
	const [value, setValue] = useState(initialValue)

	return {
		items: [...new Set(value)],
		addItem: text => !!text && setValue(value.concat(text)),
		removeItem: i => setValue(value.filter((item, index) => i !== index)),
	}
}

export default useArray
