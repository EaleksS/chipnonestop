import { Locale } from '@/i18n.config'
import { Button, Link } from '@nextui-org/react'
import clsx from 'clsx'

interface QuoteProps {
	params: { lang: Locale }
}

const Quote: React.FC<QuoteProps> = async ({ params }) => {
	return (
		<>
			<section
				className={clsx(
					'min-h-[100dvh] flex items-center flex-col justify-center'
				)}
			>
				<h2 className='text-3xl'>Customer Downloads</h2>
				<div className='grid grid-cols-3 gap-3 min-w-[1200px] mt-11'>
					<div className='border-2 border-black/20 p-5 w-full '>
						<h1 className='text-4xl'>Line card</h1>
						<br />
						<Button
							color='success'
							radius='full'
							className='text-white font-bold '
							fullWidth
							as={Link}
							href='https://uploads.strikinglycdn.com/files/abe10e53-321a-40b0-936f-30ff27f32257/chipnonstop.pdf'
							target='_blank'
						>
							Download
						</Button>
					</div>
					<div className='border-2 border-black/20 p-5 w-full'>
						<h1 className='text-4xl'>Sales terms</h1> <br />
						<Button
							color='success'
							radius='full'
							className='text-white font-bold'
							fullWidth
							as={Link}
							href='https://uploads.strikinglycdn.com/files/abe10e53-321a-40b0-936f-30ff27f32257/Sales%20terms.pdf'
							target='_blank'
						>
							Download
						</Button>
					</div>
					<div className='border-2 border-black/20 p-5 w-full'>
						<h1 className='text-4xl'>ISO 9001:2015</h1> <br />
						<Button
							color='success'
							radius='full'
							className='text-white font-bold'
							fullWidth
							as={Link}
							href='https://uploads.strikinglycdn.com/files/abe10e53-321a-40b0-936f-30ff27f32257/1.%20ISO%209001%20%202015%20CERTIFICATE.pdf'
							target='_blank'
						>
							Download
						</Button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Quote
