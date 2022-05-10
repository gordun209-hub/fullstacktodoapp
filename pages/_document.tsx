/* eslint-disable @typescript-eslint/explicit-function-return-type */
// pages/_document.js

import { ColorModeScript, extendTheme } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac'
	}
}

const theme = extendTheme({ colors })

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en'>
				<Head />
				<body>
					{/* 👇 Here's the script */}
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
