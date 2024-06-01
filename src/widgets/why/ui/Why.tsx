import { Avatar } from '@nextui-org/react'
import React from 'react'

const data = [
	{
		title: 'QUALITY 100%',
		desc: "All our suppliers are obliged and have only original components, as well as their own quality department. After the goods arrive at the CHIPNONSTOP warehouse, all goods are checked in our laboratory. There is an option to send to an independent laboratory of the client's choice. You can also order samples for quality control in your company",
		logo: './images/why-1.webp',
	},
	{
		title: '95% ALWAYS IN STOCK',
		desc: 'We sell any electronic components, mostly hard-to-find components, which are usually not available on public stocks. Prices depend on demand, for some positions prices may be high, for others below the public market. We work on the principle of requesting components with your target when you need to buy, so as not to create another buzz for your position',
		logo: './images/why-1.webp',
	},
	{
		title: 'FAST DELIVERY',
		desc: 'In your personal account you can leave an unlimited number of requests. We try to process them and respond within 3 business days. Further, after payment, the goods arrive at our warehouse, where they undergo quality control, packaging and shipment to the client. The average time from the start of placing an order to receipt is 12 days.',
		logo: './images/why-1.webp',
	},
	{
		title: 'GUARANTEED SATISFACTION',
		desc: 'On average, of all requests in our system, every 10th request is ordered from us. We do not claim that all products are priced better than your suppliers, but 1 in 10 is usually much better, so you can consider us as an alternative supplier. We are confident that we will benefit your company.',
		logo: './images/why-1.webp',
	},
]

export const Why: React.FC = () => {
	return (
		<section className='max-w-[1200px] mx-auto'>
			<h1 className='text-4xl uppercase font-bold text-center'>
				WHY CHIPNONSTOP?
			</h1>
			<div className='grid grid-cols-4 gap-3 mt-10'>
				{data.map(e => (
					<div className='flex flex-col gap-3 items-center'>
						<Avatar src={e.logo} className='w-[150px] h-[150px] text-large' />
						<h3 className=' text-lg font-bold text-center'>{e.title}</h3>
						<p className=' text-sm text-center'>{e.desc}</p>
					</div>
				))}
			</div>
		</section>
	)
}
