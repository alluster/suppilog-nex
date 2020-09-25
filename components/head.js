import NextHead from 'next/head'
import { string } from 'prop-types'


const pageUrl = 'hello'
// const title = {props.title}"From Head"
const fallbackOgImage = '/static/image.png'
const metaDescription = 'Hello World'
const Head = ({title, ogImage}) => (
	<NextHead>
		<title>{title ? title : 'Hello World'}</title>
		<meta property="og:url" content={pageUrl} />
		<meta property="og:title" content={title} />
		<meta property="og:type" content="website" />
		<meta property="og:image" content={ogImage ? ogImage : fallbackOgImage} />
		<meta property="og:description" content={metaDescription} />
		<meta name="description" content={metaDescription} />
		{/* <meta name="google-site-verification" content="o2Byhhy-3H74VDcgPH1GdTwvFrlsUMzrsfof9AfTVp8" /> */}
		
	</NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
