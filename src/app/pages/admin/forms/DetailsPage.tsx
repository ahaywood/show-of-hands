import { Layout } from '../layout'
import { RequestInfo } from '@redwoodjs/sdk/worker'

const DetailsPage = ({ params }: RequestInfo) => {
  const formId = params.id

  return (
    <Layout>
      <div>DetailsPage</div>
    </Layout>
  )
}

export { DetailsPage }