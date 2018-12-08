import React from 'react'

const Icon = ({icon = 'btc', style = 'black', size = 32, ...props}) => (
	<img
		src={`/assets/crypto/${style}/${icon}.svg`}
		style={{display: 'block', width: size, height: size}}
		{...props}
	/>
)

export default Icon
