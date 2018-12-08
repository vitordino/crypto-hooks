import React from 'react'
import Base from 'react-content-loader'

const ContentLoader = ({height, width = '100%', ...props}) => (
	<Base
		height={height}
		width={width}
		speed={2}
		primaryColor='#666869'
		secondaryColor='#323538'
		preserveAspectRatio='xMinYMid'
		style={{display: 'block', height, width}}
		{...props}
	/>
)

export default ContentLoader
