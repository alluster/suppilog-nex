import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {ThemeProvider} from 'styled-components';
import theme from "../theme"
import styled from 'styled-components'
import Head from '../components/head'

const Container = styled.div`
	min-height: 100vh
`
const Layout = ({ children, title }) => (
    <ThemeProvider theme={theme}>
		<Container>
			<Head title={title} />
			{/* <Navigation /> */}
			{children }
			{/* <Footer/> */}
		</Container>
  </ThemeProvider>
 
)

export default Layout