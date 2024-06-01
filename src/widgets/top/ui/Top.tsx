import React from 'react'

export const Top: React.FC = () => {
	return (
		<section className='max-w-[1200px] mx-auto'>
			<h1 className='text-4xl font-bold text-center my-16'>
				TOP SELLING BY BRAND
			</h1>
			<div className='grid grid-cols-2 gap-3'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => (
					<div className='border-2 border-black/20 p-5' key={e}>
						<h1>Microchip Technology</h1>
					</div>
				))}
			</div>
		</section>
	)
}
