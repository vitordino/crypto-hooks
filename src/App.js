import React from 'react'
import { useFetch } from 'react-hooks-fetch'

const Err = ({ error }) => <span>Error: {error.message}</span>
const Loading = () => <span>Loading...</span>

const App = () => {
	const { error, loading, data } = useFetch('https://jsonplaceholder.typicode.com/todos')
	if (error) return <Err error={error} />
	if (loading) return <Loading />
	return (
		<span>
			{data.map(x => <div>{x.id}: {x.title}</div>)}
		</span>
	)
}

export default App
