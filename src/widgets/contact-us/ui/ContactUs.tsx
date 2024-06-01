'use client'

import { Button, Input, Link, Textarea } from '@nextui-org/react'
import { Map, YMaps } from '@pbe/react-yandex-maps'
import clsx from 'clsx'
import React from 'react'
import { HiMiniMapPin } from 'react-icons/hi2'

export const ContactUs: React.FC = () => {
	return (
		<section
			className={clsx(
				'h-[500px] flex items-center justify-center relative mt-16',
				'before:bg-[#6aede0] before:absolute before:top-0 before:right-0 before:left-0 before:z-0 before:h-[500px]'
			)}
		>
			<div className='relative z-[1] max-w-[1200px] mx-auto w-full'>
				<h1 className='text-4xl'>ContactUs</h1>
				<h2 className='text-lg text-center mt-4'>
					<span className='font-bold'>OFFICE SPAIN: WHITESTONEBRIDGE SL</span>,
					Calle Diamante 5, 1d floor, Orihuela Costa, 03189
				</h2>
				<div className='grid grid-cols-3 gap-3 mt-10'>
					<form className='flex flex-col gap-3'>
						<Input placeholder='Name' variant='flat' radius='sm' />
						<Input placeholder='Email' variant='flat' radius='sm' />
						<Textarea placeholder='Message' variant='flat' radius='sm' />
						<Button
							className='w-[150px] uppercase font-bold text-white'
							variant='solid'
							color='success'
							radius='sm'
						>
							Submit
						</Button>
					</form>

					<YMaps>
						<div className='w-full relative'>
							<Map
								width='100%'
								defaultState={{ center: [37.9206024, -0.7399372], zoom: 9 }}
							/>
						</div>
					</YMaps>

					<div>
						<ul className='flex flex-col gap-2'>
							<li className='flex items-center text-sm'>
								<HiMiniMapPin /> Calle Diamante 5, 1d floor, Orihuela Costa,
								03189
							</li>
							<li className='flex items-center text-sm'>
								Mon to Sun: 8:00AM to 5:00PM
							</li>
							<li className='flex items-center text-sm'>34601523878</li>
							<li className='flex items-center text-sm'>
								<Link href='mailto:sales@chipnonstop.com'>
									sales@chipnonstop.com
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
