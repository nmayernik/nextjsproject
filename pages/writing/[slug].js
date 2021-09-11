import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


export default function Slug({ post }){
  const {heroImage, title, content, description, publishDate} = post.fields
  
  return  (
    <div className="">
    <div className="max-w-3xl px-3 py-12 mx-auto prose ">
      <div id="intro" className="pb-10">
        <h1 className="px-2 pb-1 font-serif text-4xl font-semibold leading-tight">{title}</h1>
        <p className="px-2 font-mono text-xl text-opacity-50 font-regular">{publishDate}</p>
        <img src={'https://' + heroImage.fields.file.url} className="my-5 rounded-xl"/>

     

      </div>
      <div id="content" className="">
        <div className="font-serif text-lg font-regular text-opacity-80">
          <div className="px-2 post">{documentToReactComponents(content)}</div>
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
  const res = await client.getEntries({
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