import React from 'react'
import ContentLoader from '../ContentLoader'
import {Wrapper} from './'

const Loading = () => (
	<Wrapper style={{padding: '1rem'}}>
		<ContentLoader height={64}>
			<rect x="0" y="0" rx="16" ry="16" width="32" height="32"/>
			<rect x="44" y="6" rx="2" ry="2" width="56" height="20"/>
			<rect x="0" y="44" rx="2" ry="2" width="96" height="16"/>
		</ContentLoader>
	</Wrapper>
)

export default Loading
