import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { ContactUs } from '@/widgets/contact-us'
import { Info } from '@/widgets/info'
import { MainPreview } from '@/widgets/main-preview'
import { RegisterFree } from '@/widgets/register-free'
import { Steps } from '@/widgets/steps'
import { Top } from '@/widgets/top'
import { Why } from '@/widgets/why'

interface HomeProps {
	params: { lang: Locale }
}

const Home: React.FC<HomeProps> = async ({ params }) => {
	const { main_preview, sign_up_now } = await getDictionary(params.lang)

	return (
		<>
			<MainPreview main_preview={main_preview} sign_up_now={sign_up_now} />
			<Why />
			<Steps />
			<Info />
			<RegisterFree />
			<Top />
			<ContactUs />
		</>
	)
}

export default Home
