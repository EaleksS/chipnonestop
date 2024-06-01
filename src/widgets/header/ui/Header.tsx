'use client'

import { LangSwitcher } from '@/features'
import { Locale } from '@/i18n.config'
import { CustomLink } from '@/shared'
import {
	Avatar,
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import React from 'react'

const variable_nav = [
	{ title: 'main', href: '/' },
	{ title: 'quote', href: 'quote' },
	{ title: 'selling_on_cns', href: 'selling_on_cns' },
	{ title: 'downloads', href: 'downloads' },
	{ title: 'signIn', href: 'sign-In' },
]

interface HeaderProps {
	lang: Locale
	navigation: any
}

export const Header: React.FC<HeaderProps> = ({ lang, navigation }) => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	return (
		<>
			<Navbar
				className='container mx-auto h-[70px] max-w-[1200px] justify-between rounded-[0_0_10px_10px] bg-white/90 shadow-lg'
				classNames={{ wrapper: 'max-w-[1200px]' }}
				isMenuOpen={isMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
			>
				<NavbarBrand className='gap-3'>
					<Avatar src='./images/logo.webp' className='w-14 h-14 text-large' />
					<p className=' font-bold italic text-2xl'>CHIPNONSTOP</p>
				</NavbarBrand>

				<NavbarContent justify='end' className='visible'>
					{[
						variable_nav.map(nav => (
							<NavbarItem key={nav.href}>
								{nav.title === 'signIn' ? (
									<Button
										as={CustomLink}
										href={nav.href}
										variant='flat'
										color='success'
										size='sm'
										lang={lang}
									>
										{navigation[nav.title]}
									</Button>
								) : (
									<CustomLink
										className={clsx('text-black', {
											['underline']: false,
										})}
										href={nav.href}
										lang={lang}
									>
										{navigation[nav.title]}
									</CustomLink>
								)}
							</NavbarItem>
						)),
					]}
					<NavbarItem>
						<LangSwitcher lang={lang} />
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</>
	)
}
