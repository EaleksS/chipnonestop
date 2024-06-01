import clsx from 'clsx'
import React from 'react'

export const Steps: React.FC = () => {
	return (
		<section
			className={clsx(
				'h-[400px] flex items-center justify-center relative mt-16',
				'before:bg-[#6aede0] before:absolute before:top-0 before:right-0 before:left-0 before:z-0 before:h-[400px]'
			)}
		>
			<div className='relative z-[1] max-w-[1200px] mx-auto w-full'>
				<h1 className='text-4xl text-center'>
					CHIP NONSTOP works in 4 simple steps
				</h1>
				<div className='grid grid-cols-4 gap-3 mt-10'>
					{[1, 2, 3, 4].map(e => (
						<div key={e} className='flex flex-col items-center gap-3'>
							<div className='w-16 h-16 flex justify-center items-center border-1 border-black font-bold text-2xl'>
								{e}
							</div>
							<h3 className='text-2xl font-bold uppercase text-center'>
								SIGN UP
							</h3>
							<p className='text-center text-sm'>It takes 1 minute</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
