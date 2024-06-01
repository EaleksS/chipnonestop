'use client'

import { Button, Link } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { Locale, i18n } from '../../i18n.config'

interface LangSwitcherProps {
	lang?: Locale
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ lang }) => {
	const pathName = usePathname()

	const redirectedPathName = (locale: string) => {
		if (lang === locale) return

		if (!pathName) return '/'

		const pathnameIsMissingLocale = i18n.locales.every(
			locale => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
		)

		if (pathnameIsMissingLocale) {
			if (locale === i18n.defaultLocale) return pathName
			return `/${locale}${pathName}`
		} else {
			if (locale === i18n.defaultLocale) {
				const segments = pathName.split('/')
				const isHome = segments.length === 2

				if (isHome) return '/'

				segments.splice(1, 1)
				return segments.join('/')
			}

			const segments = pathName.split('/')
			segments[1] = locale
			return segments.join('/')
		}
	}

	const locals: { local: string }[] = []

	i18n.locales.forEach(local => {
		locals.push({ local: local })
	})

	const ANTI_LANG = lang === 'es' ? i18n.locales[0] : i18n.locales[1]

	return (
		<Button
			className='uppercase font-semibold '
			href={redirectedPathName(ANTI_LANG)}
			as={Link}
			variant='light'
			size='sm'
		>
			{ANTI_LANG}
		</Button>
	)
}
