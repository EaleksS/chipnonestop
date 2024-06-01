import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import {
	Button,
	Checkbox,
	CheckboxGroup,
	Input,
	Textarea,
} from '@nextui-org/react'
import clsx from 'clsx'

interface QuoteProps {
	params: { lang: Locale }
}

const Quote: React.FC<QuoteProps> = async ({ params }) => {
	const { selling_on_cns } = await getDictionary(params.lang)

	return (
		<>
			<section className={clsx('min-h-[100dvh]')}>
				<div className='max-w-[1200px] mx-auto mt-11'>
					<div>
						<p>{selling_on_cns.join}</p>
						<br />
						<br />
						<h2 className='text-2xl'>{selling_on_cns.selling}</h2>
						<p>{selling_on_cns.after}</p>
						<br />
						<p className='text-black/60'>{selling_on_cns.we_connect}</p>
						<br />
						<br />
						<h2 className='text-2xl'>{selling_on_cns.are_you}</h2>
						<p>{selling_on_cns.if_you}</p>
					</div>
					<div className='flex justify-center mt-11'>
						<form className='flex flex-col gap-3 w-[400px]'>
							<h2 className='text-2xl text-center'>
								Application for registration
							</h2>
							<CheckboxGroup
								label='Mandatory conditions
							'
								isRequired
							>
								<Checkbox value='I have an ISO9001 certification'>
									I have an ISO9001 certification
								</Checkbox>
								<Checkbox value='I have inventory available and ready to'>
									I have inventory available and ready to
								</Checkbox>
							</CheckboxGroup>
							<Input label='Name / Last Name' isRequired size='sm' />
							<Input label='Company name' isRequired size='sm' />
							<Input label='Website' isRequired size='sm' />
							<Input label='Email' isRequired size='sm' />
							<Input label='Business phone' isRequired size='sm' />
							<Textarea label='Comments' isRequired size='sm' />
							<div className='flex justify-center'>
								<Button
									variant='solid'
									color='success'
									className='font-bold text-white'
									radius='full'
								>
									Submit
								</Button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}

export default Quote
