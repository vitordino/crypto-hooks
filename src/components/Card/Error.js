import React from 'react'
import {Wrapper} from './'

const Err = ({ error }) => (
	<Wrapper style={{padding: '1rem'}}>
		Error: {error.message}
	</Wrapper>
)

export default Err
