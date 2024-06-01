export interface INavigation {
	main: string
	quote: string
	selling_on_cns: string
	download: string
	signIn: string
}

export interface IMainPreview {
	title: string
	desc: string
}

export interface IQuote {
	looking_for: string
	always_in_stock: string
	why_should: string
	non_public: string
	give_an: string
	own_laboratory: string
	request_is_free: string
	our_customers: string
	We_can: string
	send: string
}

export interface ILocal {
	navigation: {
		main: string
		quote: string
		selling_on_cns: string
		download: string
		signIn: string
	}
	main_preview: {
		title: string
		desc: string
	}
	sign_up_now: string
}
