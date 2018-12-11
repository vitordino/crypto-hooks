import React from 'react'
import styled from '@emotion/styled/macro'
import useInputValue from '@rehooks/input-value'


const Wrapper = styled.form`
	height: 6rem;
	border: 1px dashed #323538;
	border-radius: 0.25rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem 2rem;
`

const EmptyCard = ({addItem, ...props}) => {
	const currency = useInputValue('')
	return (
		<Wrapper
			onSubmit={event => {
				event.preventDefault()
				addItem(currency.value)
			}}
			{...props}
		>
			<input autoFocus {...currency}/>
		</Wrapper>
	)
}

export default EmptyCard
