import {useState} from 'react'

const useArray = (initialValue = []) => {
	const [value, setValue] = useState(new Set(initialValue))

	return {
		items: [...value],
		addItem: text => !!text && setValue(value.add(text)),
		removeItem: text => value.delete(text) && setValue(value),
	}
}

export default useArray
