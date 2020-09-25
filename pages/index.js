import styled from 'styled-components'
import Layout from "../layouts/layout"
import { createClient } from '../utils/contentful';


const title = "Hello world"
const ogImage = '/static/app-image.png'



const Index = (articles) => (

	<Layout 
		title={title} 
		ogImage={ogImage} 
	>



    </Layout>
  
)
Index.getInitialProps = async () => {
  const client = createClient();

  const entries = await client.getEntries(
    {
      'content_type' : 'article'
    } 
  )
  return  {articles: entries.items}

};

export default Index
