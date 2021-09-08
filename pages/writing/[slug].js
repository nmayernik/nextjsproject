import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


export default function Slug({ post }){
  const {heroImage, title, content, description, publishDate} = post.fields
  
  return  (
    <div className="post">
    <div className="max-w-3xl mx-auto py-20 px-5 ">
      <div id="intro" className="max-w-2xl mx-auto pb-10">
        <img src={'https://' + heroImage.fields.file.url} className="mx-auto"/>
        <h1 className="text-4xl leading-tight font-serif font-semibold pb-1">{title}</h1>
        <p className="text-xl font-mono font-regular text-opacity-50">{publishDate}</p>
      </div>
      <div id="content" className="max-w-2xl mx-auto">
        <div className="text-lg font-serif font-regular text-opacity-80">
          <div className="post">{documentToReactComponents(content)}</div>
          </div>
      </div>

      </div>
    </div>
  )

}


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client. getEntries({
    content_type: 'blogPost'
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': params.slug
  })

  return {
    props: { post: items[0] }
  }
}