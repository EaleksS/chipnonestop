import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { Button, Input } from '@nextui-org/react'
import clsx from 'clsx'
import { FaCheck } from 'react-icons/fa6'

interface QuoteProps {
	params: { lang: Locale }
}

const Quote: React.FC<QuoteProps> = async ({ params }) => {
	const { quote } = await getDictionary(params.lang)

	return (
		<>
			<section
				className={clsx(
					'min-h-[100dvh] after:fixed after:top-0 after:bottom-0 after:right-0 after:left-0 after:bg-[#e4e5f3] after:z-[-1] '
				)}
			>
				<div className='max-w-[1200px] mx-auto grid grid-cols-2 mt-11'>
					<div>
						<h1 className='text-4xl font-bold'>{quote.looking_for}</h1>
						<br />
						<p className='font-bold'>{quote.always_in_stock}</p>
						<br />
						<br />
						<ul>
							<li>{quote.why_should}</li>
							<li className='flex gap-3 items-center mt-3'>
								<FaCheck size={20} color='#646abd' />
								{quote.non_public}
							</li>
							<li className='flex gap-3 items-center'>
								<FaCheck size={20} color='#646abd' />
								{quote.give_an}
							</li>
							<li className='flex gap-3 items-center'>
								<FaCheck size={20} color='#646abd' />
								{quote.own_laboratory}
							</li>
							<li className='flex gap-3 items-center'>
								<FaCheck size={20} color='#646abd' />
								{quote.request_is_free}
							</li>
							<li className='flex gap-3 items-center'>
								<FaCheck size={20} color='#646abd' />
								{quote.our_customers}
							</li>
							<li className='flex gap-3 items-center'>
								<FaCheck size={20} color='#646abd' />
								{quote.We_can}
							</li>
						</ul>
					</div>
					<form className='flex flex-col gap-3'>
						<Input label='Business Email' isRequired size='sm' />
						<Input label='Business Phone Number' isRequired size='sm' />
						<Input label='Part Number' isRequired size='sm' />
						<Input label='Quantity' isRequired size='sm' />
						<Input label='When Need' isRequired size='sm' />
						<div className='flex justify-center'>
							<Button
								variant='solid'
								color='success'
								className='font-bold text-white'
								radius='full'
							>
								{quote.send}
							</Button>
						</div>
					</form>
				</div>
			</section>
		</>
	)
}

export default Quote
