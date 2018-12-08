import React from 'react'
import styled from '@emotion/styled'
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

const Card = ({error, loading, ...props}) => {
	if (error) return <Err error={error}/>
	if (loading) return <Loading/>
	if (props.data.Type !== 100) return <Err error={{message: 'api error'}}/>
	return <Default {...props}/>
}

export default Card
