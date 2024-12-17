"use client";

import React from 'react';
import '@/app/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {
	Flex,
	Grid, Icon,
	SegmentedControl, SmartImage, Text
} from '@/once-ui/components';
import Link from 'next/link';

function Home() {
	return (
		<section id={"home-section"} 
				 className={"flex flex-column"}
				 style={{
					 justifyContent: 'center',
					 alignItems: 'center',
				 }}
		>
			<div
				 className="flex column-layout my-64" 
				 style={{
					justifyContent: 'center',
					alignItems: 'center',
					 padding: '0 24px',
				 }}
			>
				<SmartImage
					src="/images/pp_lofi.jpg"
					alt="Image description"
					aspectRatio="5/5"
					radius="full"
					className={"m-64"}
					style={{
						// minWidth: '300px',
						maxWidth: '300px',
					}}
				/>
				<div className={"flex flex-column"} style={
					{
						justifyContent: 'center',
					}
				}>
					<Text
						as="h1"
						style={{
							fontSize: 'var(--font-size-xxl)',
					}}
					>
						Hello, I'm <span style={{color: 'var(--color-primary)'}}>Gabriel Dezon</span>
					</Text>
					<p
						style={{
							fontSize: 'var(--font-size-md)',
					}}
					>
						I'm a student in Information Technology at the EPITA school in Paris. I'm passionate about development and I'm always looking for new challenges.
					</p>
				</div>
			</div>
		</section>
	);
}

function Contact() {
	return (
		<section 
			id={"contact-section"}
			style={{
				position: 'fixed',
				bottom: '0',
				backgroundColor: 'var(--neutral-medium)',
				padding: '48px 0',
			}}
		>
			<Flex
				border="neutral-medium"
				borderStyle="solid-1"
				padding="24"
				alignItems="center"
				justifyContent="center"
				// fillWidth
				radius="l"
				onBackground="neutral-strong"
				background="neutral-medium"
			>
				<a href="https://github.com/gabriel77176" target="_blank" rel="noopener noreferrer" className={"mx-16"}>
					<FontAwesomeIcon icon={faGithub} size="2x"/>
				</a>
				<a href="https://discord.com/users/931938244390703194" target="_blank" rel="noopener noreferrer"
				   className={"mx-16"}>
					<FontAwesomeIcon icon={faDiscord} size="2x"/>
				</a>
				<a href="mailto:dezon.gabriel@gmail.com" target="_blank" rel="noopener noreferrer" className={"mx-16"}>
					<FontAwesomeIcon icon={faEnvelope} size="2x"/>
				</a>
			</Flex>
		</section>
	);
}

export default function Page() {
	return (
		<main style={{
			margin: '0 auto',
			width: '70vw',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			height: '90vh',
		}}>
			<Home/>
			<Contact/>
		</main>
	);
}