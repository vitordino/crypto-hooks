import React from 'react'
import useInputValue from '@rehooks/input-value'
import Container from './components/Container'
import Card from './components/Card/'
export const CRYPTO_KEY = process.env['CRYPTO_KEY']

const App = () => {
	const currency = useInputValue('btc')
	const fiat = useInputValue('usd')
	const limit = useInputValue(30)

	return (
		<Container style={{marginTop: '3rem', marginBottom: '3rem'}}>
			<div>
				<div>
					<span>I want to know the price of </span>
					<input size={6} {...currency}/>
				</div>
				<div>
					<span>on the last </span>
					<select {...limit}>
						<option value={1}>day</option>
						<option value={7}>week</option>
						<option value={30}>month</option>
						<option value={120}>quarter</option>
						<option value={180}>semester</option>
						<option value={365}>year</option>
						<option value={730}>2 years</option>
						<option value={1825}>5 years</option>
					</select>
				</div>
				<span>translated to </span>
				<input size={6} {...fiat}/>
			</div>
			<Card
				currency={currency.value.toUpperCase()}
				fiat={fiat.value.toUpperCase()}
				limit={limit.value}
				apiKey={CRYPTO_KEY}
			/>
		</Container>
	)
}

export default App
