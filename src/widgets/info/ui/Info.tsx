import React from 'react'

export const Info: React.FC = () => {
	return (
		<section className='max-w-[1200px] mx-auto mt-16'>
			<div className='grid grid-cols-2 gap-3'>
				{[1, 2, 3, 4].map(e => (
					<div className='border-2 border-black/20 p-5'>
						<h1>2000+</h1>
						<p>Clients Registered</p>
					</div>
				))}
			</div>
		</section>
	)
}
