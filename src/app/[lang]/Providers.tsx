'use client'

import { NextUIProvider } from '@nextui-org/react'
import React from 'react'

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <NextUIProvider>{children}</NextUIProvider>
}
