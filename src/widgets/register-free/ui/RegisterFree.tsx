import { Button, Image } from '@nextui-org/react'
import React from 'react'

export const RegisterFree: React.FC = () => {
	return (
		<section className='max-w-[1200px] mx-auto flex items-center flex-col mt-16'>
			<h1 className='text-4xl font-bold text-center'>
				REGISTRATION COMPLETELY FREE FOR OEM/CM
			</h1>
			<Button
				size='lg'
				color='danger'
				radius='full'
				className='bg-[#f65135] uppercase my-16'
			>
				Sign up now
			</Button>
			<div className='w-full flex gap-3'>
				<Image
					width={1200}
					height={820}
					alt='NextUI hero Image'
					src='https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8657368/662818_562221.jpeg'
					radius='none'
				/>
				<div>
					<h1 className='text-4xl font-bold'>About CHIP NONSTOP</h1>
					<br />
					<p className=' text-sm font-thin'>
						The company is headquartered in Spain, Alicante. We have more than
						20 employees, including accountants, sales staff and purchasers.
					</p>
					<br />
					<p className=' text-sm font-thin'>
						CHIPNONSTOP cooperates with many original equipment manufacturers in
						China and overseas.
					</p>
					<br />
					<p className=' text-sm font-thin'>
						We have a large inventory of electronic components. There are more
						than 950,000 unique part numbers in the inventory that can be sold.
					</p>
					<br />
					<p className=' text-sm font-thin'>
						We take pride in providing customers with new, unused, original, and
						high-quality parts, and strive to establish long-term working
						relationships with all customers.
					</p>
				</div>
			</div>
		</section>
	)
}
