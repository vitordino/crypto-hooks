import React from 'react'
import {Wrapper} from './'

const Err = ({ error }) => (
	<Wrapper style={{padding: '1rem', background: 'firebrick'}}>
		Error: {error.message}
	</Wrapper>
)

export default Err
