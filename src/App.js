import React from 'react'
import useInputValue from '@rehooks/input-value'
import useArray from './utils/useArray'
import Container from './components/Container'
import Card from './components/Card/'
export const CRYPTO_KEY = process.env['CRYPTO_KEY']

const App = ({initialCurrencies = ['btc', 'eth', 'mda']}) => {
	const {items, addItem, removeItem} = useArray(initialCurrencies)
	const fiat = useInputValue('usd')
	const limit = useInputValue(30)

	return (
		<Container style={{marginTop: '3rem', marginBottom: '3rem'}}>
			<h1 style={{fontSize: '1.5rem', marginBottom: '2rem'}}>crypto hooks</h1>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<div>
					<select {...limit}>
						<option value={1}>last day</option>
						<option value={7}>last week</option>
						<option value={30}>last month</option>
						<option value={120}>last quarter</option>
						<option value={180}>last semester</option>
						<option value={365}>last year</option>
						<option value={730}>last 2 years</option>
						<option value={1825}>last 5 years</option>
					</select>
				</div>
				<div>
					<span>on </span>
					<input size={6} {...fiat}/>
				</div>
			</div>
			{items.map((currency, index) => (
				<Card
					key={currency+limit.value+fiat.value}
					currency={currency.toUpperCase()}
					fiat={fiat.value.toUpperCase()}
					limit={limit.value}
					apiKey={CRYPTO_KEY}
				/>
			))}
		</Container>
	)
}

export default App
