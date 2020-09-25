import App, { Container } from 'next/app'
import Head from 'next/head'
import 'react-flexbox-grid/dist/react-flexbox-grid.css'

export default class MyApp extends App {
	render () {
	const { Component, pageProps } = this.props
	return (
		<Container>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:site_name" content="Hello there" />         
				<link rel="icon" type="image/png" href="/static/favicon.ico" sizes="48x48" />
				<link 
					href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,700" 
					rel="stylesheet"
				/>  
			</Head>
			<Component {...pageProps} />
			<style jsx global>{`
				body, html { 
					margin: 0px;
					padding: 0px;
					overflow: auto;
					width:100%; 
				}
				img{
					max-width: 100%
				}
				a {
					all: unset
				}
				button {
					all: unset
				}
		
		
			`}</style>
		</Container>
		)
	}
}