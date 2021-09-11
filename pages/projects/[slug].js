import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  
  export const getStaticPaths = async () => {
    const res = await client.getEntries({
      content_type: 'caseStudy'
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
        content_type: 'caseStudy',
        'fields.slug': params.slug
    })
  
    return {
      props: { caseStudy: items[0] }
    }
  }

export default function Slug({ caseStudy }) {
    const {title, cover, description, client, date, problem, role, process, challenges, outcomes, learned} = caseStudy.fields

    return(
    <section className="max-w-3xl px-6 py-12 mx-auto prose">
      <div className="project">
        <a href="/projects/" className="">Back to Projects</a>
        <h1 className="pt-5 text-4xl font-bold leading-tight ">{title}</h1>
        <p className="font-serif text-xl">{description}</p>

        <p className="font-semibold text">Client: {client}</p>
        <p className="text-base font-semibold">Shipped: {date}</p>

        <article className="py-8">
        <div className="py-6">
            <h2 className="">The Problem</h2>
            {documentToReactComponents(problem)}
        </div>

        
        <div className="py-4">
            <h2>My Role</h2>
            {documentToReactComponents(role)}
        </div>

        <div className="py-4">
        <h2>Process</h2>
            {documentToReactComponents(process)}
        </div>

        <div className="py-4">
        <h2>Challenges</h2>
            {documentToReactComponents(challenges)}
        </div>

        <div className="py-4">
        <h2>Outcomes</h2>
            {documentToReactComponents(outcomes)}
        </div>
        
        <div className="py-4">
        <h2>Takeaways</h2>
            {documentToReactComponents(learned)}
        </div>
        </article>
        </div>
    </section>
)};


