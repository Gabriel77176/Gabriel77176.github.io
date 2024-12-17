import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';
import { headers } from "next/headers";
import { Metadata } from "next";

// import { baseURL, style, meta, og, schema, social } from "@/once-ui/resources/config"

import { Background, Flex } from '@/once-ui/components'

import { Inter } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';

const primary = Inter({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
})

const code = Roboto_Mono({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

type FontConfig = {
    variable: string;
};

const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<Flex
			as="html" lang="en"
			fillHeight background="page"
			data-theme="dark"
			data-brand="blue"
			data-accent="violet"
			data-neutral="gray"
			data-border="playful"
			data-solid="color"
			data-solid-style="flat"
			data-surface="filled"
			data-transition="all"
			className={classNames(
				primary.variable, code.variable,
				secondary ? secondary.variable : '',
				tertiary ? tertiary.variable : ''
			)}>
			<head>
				<title>{"Gabriel Dezon | Portfolio"}</title>
				<meta name="description" content="Gabriel Dezon's portfolio"/>
				<meta name="author" content="Gabriel Dezon"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/src/app/pp_favicon.ico"/>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
			</head>
			<Flex
				as="body"
				fillWidth fillHeight margin="0" padding="0">
				<Background
					style={{zIndex: '-1'}}
					position="fixed"
					mask="cursor"
					dots={{
						display: false,
					}}
					gradient={{
						display: true,
						opacity: 0.4,
					}}/>
				<Flex
					flex={1} direction="column">
					{children}
				</Flex>
			</Flex>
		</Flex>
	);
}