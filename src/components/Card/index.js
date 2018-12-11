import React from 'react'
import styled from '@emotion/styled/macro'
import Main from './Main'


const Outer = styled.div`
	position: relative;
	padding: 0.625rem 0;
`

const Close = styled.button`
	appearance: none;
	border: 0;
	margin: 0;
	padding: 0;
	color: currentColor;
	position: absolute;
	right: 0;
	top: -0.25rem;
	right: -0.875rem;
	background: orangered;
	border-radius: 50%;
	opacity: 0;
	transition: 0.2s all;
	display: block;
	text-align: center;
	font-size: 1.125rem;
	line-height: 1.5rem;
	height: 1.5rem;
	width: 1.5rem;
	text-indent: -1px;
	font-weight: 600;
	cursor: pointer;
	${Outer}:hover &{
		opacity: 1;
	}
`

Close.defaultProps = {children: '×'}

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	overflow: hidden;
	background: #323538;
	border-radius: 0.25rem;
	box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.22);
`

const Card = ({remove, ...props}) => (
	<Outer style={{position: 'relative'}}>
		<Main {...props}/>
		<Close onClick={remove}/>
	</Outer>
)

export default Card
