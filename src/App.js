import React from 'react'
import useInputValue from '@rehooks/input-value'
import { useFetch } from 'react-hooks-fetch'
import useArray from './utils/useArray'
import Container from './components/Container'
import Card from './components/Card/'
import EmptyCard from './components/EmptyCard'

const apiKey = process.env['CRYPTO_KEY']

const App = ({initialCurrencies = ['btc', 'eth', 'mda']}) => {
	const { data: fiatList } = useFetch('https://openexchangerates.org/api/currencies.json')

	const {items, addItem, removeItem} = useArray(initialCurrencies)
	const fiat = useInputValue('USD')
	const limit = useInputValue(30)

	return (
		<Container style={{marginTop: '3rem', marginBottom: '3rem'}}>
			<h1 style={{fontSize: '1.5rem', marginBottom: '2rem'}}>crypto hooks</h1>
			<div style={{display: 'flex', justifyContent: 'space-between', margin: '1rem 0'}}>
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
					{fiatList && (
						<select {...fiat}>
							{Object.entries(fiatList || {}).map(([code, name]) => (
								<option value={code}>{code}: {name}</option>
							))}
						</select>
					)}
				</div>
			</div>
			{items.map(currency => (
				<Card
					key={currency+limit.value+fiat.value}
					currency={currency.toUpperCase()}
					fiat={fiat.value.toUpperCase()}
					limit={limit.value}
					apiKey={apiKey}
					remove={() => removeItem(currency)}
				/>
			))}
			<EmptyCard addItem={addItem}/>
		</Container>
	)
}

export default App
