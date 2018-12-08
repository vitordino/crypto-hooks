import React from 'react'
import styled from '@emotion/styled'
import { VictoryChart , VictoryAxis, VictoryLine } from 'victory'
import CryptoIcon from './CryptoIcon'

const Wrapper = styled.div`
	display: block;
`

const Card = ({data}) => {
	const mean = ({low, high}) => (low+high)/2
	const normalizedData = data.map((v, i) => ({x: i, y: mean(v)}))
	return (
		<Wrapper>
			<CryptoIcon/>
			<VictoryLine
				padding={0}
				standalone
				height={50}
				style={{data: {stroke: 'lightgray'}}}
				data={normalizedData}
			/>
		</Wrapper>
	)
}

export default Card
