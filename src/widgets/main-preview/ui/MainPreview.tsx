import { IMainPreview } from '@/dictionaries/type.interface'
import { Button } from '@nextui-org/react'
import clsx from 'clsx'

interface Props {
	main_preview: IMainPreview
	sign_up_now: string
}

export const MainPreview: React.FC<Props> = ({ main_preview, sign_up_now }) => {
	return (
		<section
			className={clsx(
				'h-[400px] max-w-[1200px] mx-auto flex items-center justify-center',
				'before:bg-[#6aede0] before:absolute before:top-0 before:right-0 before:left-0 before:z-0 before:h-[400px]'
			)}
		>
			<div className='relative z-[1] flex justify-center flex-col items-center'>
				<h2 className='text-4xl font-semibold text-black text-center'>
					{main_preview.title}
				</h2>
				<h1 className='text-sm mt-3 mb-6'>{main_preview.desc}</h1>
				<Button
					size='lg'
					color='danger'
					radius='full'
					className='bg-[#f65135] uppercase'
				>
					{sign_up_now}
				</Button>
			</div>
		</section>
	)
}
