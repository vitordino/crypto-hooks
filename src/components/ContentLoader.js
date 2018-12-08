import React from 'react'
import Base from 'react-content-loader'

const ContentLoader = ({height, width = '100%', ...props}) => (
	<Base
		height={height}
		width={width}
		speed={2}
		primaryColor='#f3f3f3'
		secondaryColor='#ecebeb'
		preserveAspectRatio='xMinYMid'
		style={{display: 'block', height, width}}
		{...props}
	/>
)

export default ContentLoader
