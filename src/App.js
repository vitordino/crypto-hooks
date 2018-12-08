import React from 'react'
import { useFetch } from 'react-hooks-fetch'
import { VictoryChart , VictoryAxis, VictoryCandlestick } from 'victory'

const Err = ({ error }) => <span>Error: {error.message}</span>
const Loading = () => <span>Loading...</span>

const App = () => {
	const { error, loading, data } = useFetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=182')
	if (error) return <Err error={error} />
	if (loading) return <Loading />
	if (data.Type !== 100) return <Err error={{message: 'api error'}}/>

	const normalizedData = data.Data.map(({time, ...props}) => (
		({x: new Date(time*1000), ...props}))
	)

	return (
		<div>
			<h1>bitcoin price last semester</h1>
			<VictoryChart scale={{ x: "time" }}>
				<VictoryAxis tickFormat={(t) => t.toLocaleDateString('en-US', {month: 'short'})}/>
				<VictoryAxis dependentAxis/>
				<VictoryCandlestick
					data={normalizedData}
				/>
			</VictoryChart>
		</div>
	)
}

export default App
