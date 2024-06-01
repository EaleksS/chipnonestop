import { Link, LinkProps } from '@nextui-org/react'
import React from 'react'
import { Locale, i18n } from '../../i18n.config'

interface CustomLinkProps extends LinkProps {
	lang?: Locale
}

export const CustomLink: React.FC<CustomLinkProps> = ({
	lang,
	href,
	children,
	...props
}) => {
	const isDefaultLang = lang === i18n.defaultLocale
	const path = isDefaultLang ? href : `/${lang}/${href}`

	return (
		<Link href={path} {...props}>
			{children}
		</Link>
	)
}
