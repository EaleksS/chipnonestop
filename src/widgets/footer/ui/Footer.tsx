import { Button, Image, Input } from '@nextui-org/react'
import React from 'react'

export const Footer: React.FC = () => {
	return (
		<footer className=' bg-white relative py-11'>
			<div className='grid grid-cols-5 max-w-[1200px] mx-auto'>
				<Image src='./images/123.webp' width='150' height='150' />
				<ul className='text-sm'>
					<li className='font-bold'>Accredited</li>
					<li className='my-3'>
						<span className='font-bold'>ISO 9001:2015</span> <br />
						WHI/QMS/F23/3809
					</li>
					<li className='my-3'>
						THE PROCUREMENT AND DELIVERY OF ELECTRONIC COMPONENTS
					</li>
				</ul>
				<ul className='text-sm'>
					<li className='font-bold'>Contact Us</li>
					<li className='my-3'>
						WHITESTONEBRIDGE SL <br />
						VAT ESB44804524
					</li>
					<li className='my-3'>
						sales@chipnonstop.com <br />
						support@chipnonstop.com
					</li>
				</ul>
				<ul className='text-sm'>
					<li className='font-bold'>Open Hours:</li>
					<li className='my-3'>
						Monday - Thursday <br />
						9:00AM - 5:30PM
					</li>
					<li className='my-3'>
						Friday <br />
						9:00AM - 4:30PM
					</li>
				</ul>
				<form className='flex flex-col gap-3'>
					<Input placeholder='Name' variant='flat' radius='sm' />
					<Input placeholder='Email' variant='flat' radius='sm' />
					<Button
						className='w-[150px] uppercase font-bold text-white'
						variant='solid'
						color='success'
						radius='sm'
					>
						Subscribe
					</Button>
				</form>
			</div>
		</footer>
	)
}
