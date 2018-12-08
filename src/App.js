import React from 'react'
import { useFetch } from 'react-hooks-fetch'
import Container from './components/Container'
import Card from './components/Card'

const Err = ({ error }) => <span>Error: {error.message}</span>
const Loading = () => <span>Loading...</span>

const App = ({currency = 'BTC', fiat = 'USD', limit = 30}) => {
	const { error, loading, data } = useFetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${currency}&tsym=${fiat}&limit=${limit}`)
	if (error) return <Err error={error} />
	if (loading) return <Loading />
	if (data.Type !== 100) return <Err error={{message: 'api error'}}/>
	return (
		<Container>
			<h1>{currency} price last semester</h1>
			<Card
				data={data.Data}
				currency={currency}
				fiat={fiat}
			/>
		</Container>
	)
}

export default App
