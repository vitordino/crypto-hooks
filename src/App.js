import React from 'react'
import { useFetch } from 'react-hooks-fetch'
import Card from './components/Card'

const Err = ({ error }) => <span>Error: {error.message}</span>
const Loading = () => <span>Loading...</span>

const App = () => {
	const { error, loading, data } = useFetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=182')
	if (error) return <Err error={error} />
	if (loading) return <Loading />
	if (data.Type !== 100) return <Err error={{message: 'api error'}}/>
	return (
		<div>
			<h1>bitcoin price last semester</h1>
			<Card data={data.Data}/>
		</div>
	)
}

export default App
