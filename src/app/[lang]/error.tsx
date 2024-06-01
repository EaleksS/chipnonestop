'use client' // Error components must be Client Components

import { Button, ButtonGroup, Link } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

interface Props {
	error: Error & { digest?: string }
	reset: () => void
}

export default function Error({ error, reset }: Props) {
	const router = useRouter()

	return (
		<div className='fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center justify-center gap-3'>
			<h2 className='text-3xl text-secondary-400 opacity-70'>
				Упс, что-то пошло не так
			</h2>
			<p className='opacity-70'>{error.message}</p>
			<ButtonGroup>
				<Button variant='flat' color='secondary' onClick={() => router.back()}>
					Назад
				</Button>
				<Button variant='flat' color='secondary' as={Link} href='/'>
					Главная страница
				</Button>
			</ButtonGroup>
		</div>
	)
}
