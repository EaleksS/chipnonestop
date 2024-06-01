import { getDictionary } from '@/lib/dictionary'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Locale, i18n } from '../../i18n.config'
import { Providers } from './Providers'
import './globals.css'

const myFont = localFont({ src: '../../fonts/gotham_pro/gothampro.ttf' })

export async function generateStaticParams() {
	return i18n.locales.map(locale => ({ lang: locale }))
}

export const metadata: Metadata = {
	title: 'Rezume',
	description: 'Конструктор резюме',
}

const RootLayout = async ({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: { lang: Locale }
}>) => {
	const { navigation } = await getDictionary(params.lang)

	return (
		<html lang={params.lang}>
			<body className={clsx(myFont.className)}>
				<Providers>
					<main>
						<Header lang={params.lang} navigation={navigation} />
						{children}
						<Footer />
					</main>
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
