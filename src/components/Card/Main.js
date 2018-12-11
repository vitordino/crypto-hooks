import React from 'react'
import { useFetch } from 'react-hooks-fetch'
import Err from './Error'
import Loading from './Loading'
import Default from './Default'

const Main = ({currency, fiat, limit, apiKey, ...props}) => {
	const { error, loading, data } = useFetch([
		`https://min-api.cryptocompare.com/data/`,
		`histo${limit < 7 ? 'minute' : limit <= 30 ? 'hour' : 'day'}?`,
		`fsym=${currency}&`,
		`tsym=${fiat}`,
		`&limit=${limit < 7 ? limit*60*24 : limit <= 30  ? limit*24 : limit}`,
		`&api_key=${apiKey}`
	].join(''))

	if (error) return <Err alert error={error}/>
	if (loading) return <Loading/>
	if (data && data.Type !== 100) return (
		<Err error={{message: 'sorry, no matches for this search 😔'}}/>
	)

	return (
		<Default
			currency={currency}
			fiat={fiat}
			limit={limit}
			data={data.Data}
			{...props}
		/>
	)
}

export default Main
