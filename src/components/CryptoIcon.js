import React from 'react'

const Icon = ({icon = 'btc', mode = 'white', size = 32, style, ...props}) => (
	<img
		src={`/assets/crypto/${mode}/${icon}.svg`}
		style={{display: 'block', width: size, height: size, ...style}}
		alt={`icon for ${icon} currency`}
		{...props}
	/>
)

export default Icon
