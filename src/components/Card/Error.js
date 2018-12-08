import React from 'react'
import {Wrapper} from './'

const Err = ({ error, alert }) => (
	<Wrapper style={{padding: '1rem', background: alert ? 'firebrick' : 'darkorange'}}>
		{alert && 'Error: '}{error.message}
	</Wrapper>
)

export default Err
