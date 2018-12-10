import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { VictoryLine } from 'victory'
import CryptoIcon from '../CryptoIcon'
import useComponentSize from '@rehooks/component-size'
import {Wrapper} from './'

const Main = styled.div`
	position: relative;
	display: flex;
	padding: 1rem;
	align-items: center;
	justify-content: space-between;
`

const TitleBar = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
`

const Title = styled.div`
	font-size: 1.5rem;
	line-height: 1.75rem;
`

const Amount = styled.div``

const Change = styled.div`
	text-align: right;
`

const Absolute = styled.div`
	color: ${p => p.isMelting ? 'orangered' : 'palegreen'};
`

const Relative = styled.div`
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	letter-spacing: 0.025rem;
	color: #666869;
`

const Graph = props => (
	<div style={{position: 'absolute', bottom: -2, top: -2}}>
		<VictoryLine
			padding={0}
			style={{data: {stroke: '#666869', strokeWidth: 1}}}
			interpolation='natural'
			{...props}
		/>
	</div>
)

const mean = ({low, high}) => (low+high)/2
const last = arr => arr[arr.length -1]
const diff = data => last(data).y - data[0].y
const percentage = data => ((diff(data)/data[0].y)*100).toFixed(2)

const Default = ({currency, fiat, data}) => {
	const normalizedData = data.map((v, i) => ({x: i, y: mean(v)}))
	const absoluteChange = `${diff(normalizedData).toFixed(2)} ${fiat}`
	const relativeChange = percentage(normalizedData)+'%'
	const isMelting = diff(normalizedData) < 0

	const ref = useRef(null)
	const {width, height} = useComponentSize(ref)
	return (
		<Wrapper ref={ref}>
			{(!!height && !!width) &&
				<Graph height={height+4} width={width} data={normalizedData}/>
			}
			<Main>
				<div>
					<TitleBar>
						<CryptoIcon icon={currency} style={{marginRight: '0.75rem'}}/>
						<Title>{currency}</Title>
					</TitleBar>
					<Amount>{last(normalizedData).y.toFixed(2)} {fiat}</Amount>
				</div>
				<Change>
					<Absolute isMelting={isMelting}>{absoluteChange}</Absolute>
					<Relative>{relativeChange}</Relative>
				</Change>
			</Main>
		</Wrapper>
	)
}

export default Default
