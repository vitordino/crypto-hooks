import React from 'react'
import styled from '@emotion/styled'
import { useFetch } from 'react-hooks-fetch'
import Err from './Error'
import Loading from './Loading'
import Default from './Default'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	overflow: hidden;
	background: #323538;
	border-radius: 0.25rem;
	box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.22);
	margin: 1rem 0;
`

const Card = ({currency, fiat, limit, apiKey, ...props}) => {
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
	if (data.Type !== 100) return (
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

export default Card
