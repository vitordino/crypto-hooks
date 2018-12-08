import React from 'react'
import useInputValue from '@rehooks/input-value'
import { useFetch } from 'react-hooks-fetch'
import Container from './components/Container'
import Card from './components/Card/'

const App = () => {

	const currency = useInputValue('BTC')
	const fiat = useInputValue('USD')
	const limit = useInputValue('30')

	const { error, loading, data } = useFetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${currency.value}&tsym=${fiat.value}&limit=${limit.value}`)

	return (
		<Container>
			<div>
				<input {...currency}/>
				price on the last
				<input {...limit}/> days translated to
				<input {...fiat}/>
			</div>
			<Card
				currency={currency.value}
				fiat={fiat.value}
				data={data}
				error={error}
				loading={loading}
			/>
		</Container>
	)
}

export default App
