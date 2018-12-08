import React from 'react'
import { useFetch } from 'react-hooks-fetch'
import Container from './components/Container'
import Card from './components/Card/'

const App = ({currency = 'BTC', fiat = 'USD', limit = 30}) => {
	const { error, loading, data } = useFetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${currency}&tsym=${fiat}&limit=${limit}`)
	return (
		<Container>
			<h1>{currency} price last semester</h1>
			<Card
				currency={currency}
				data={data}
				fiat={fiat}
				error={error}
				loading={loading}
			/>
		</Container>
	)
}

export default App
