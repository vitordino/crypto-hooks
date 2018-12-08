import React from 'react'
import { useFetch } from 'react-hooks-fetch'
import Trend from 'react-trend'

const Err = ({ error }) => <span>Error: {error.message}</span>
const Loading = () => <span>Loading...</span>

const App = () => {
	const { error, loading, data } = useFetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=365')
	if (error) return <Err error={error} />
	if (loading) return <Loading />
	if (data.Type !== 100) return <Err error={{message: 'api error'}}/>
	return (
		<div>
			<h1>bitcoin price since last year</h1>
			<Trend
				smooth
				autoDraw
				data={data.Data.map(({low, high}) => (low+high))}
				gradient={['#e64a19', '#b2ff59']}
				strokeLinecap={'round'}
			/>
		</div>
	)
}

export default App
