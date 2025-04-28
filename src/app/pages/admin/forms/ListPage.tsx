import { db } from '@/db'
import { Layout } from '../Layout'
// import { ByPersonCard } from './components/ByPersonCard'

const ListPage = async () => {

  // get all the forms
  const forms = await db.form.findMany()

  return (
    <Layout>
      <div>
      <div className="flex justify-between items-start pl-[64px] pr-12 mb-12">
        <h1 className="page-title">All Forms</h1>
        <div><a href="/admin/forms/new" className="button inline-block">+ New Form</a></div>
      </div>

      {/* FORM CARDS */}
      <div className="px-9">
        {/* HEADER ROW */}
        <div className="form-grid form-header pl-8 ml-8 pr-10 mr-12">
          <div>Upcoming</div>
          <div>Signed Up</div>
          <div>Declined</div>
          <div>Outstanding</div>
          <div>&nbsp;</div>
        </div>

        {/* CARDS */}
        <pre>{JSON.stringify(forms, null, 2)}</pre>
        {/* <ByPersonCard person={{ id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', avatar: '/images/placeholder.jpg' }} submissionDate="2021-01-01" slot="1" />
        <ByPersonCard person={{ id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', avatar: '/images/placeholder.jpg' }} submissionDate="2021-01-01" slot="1" />
        <ByPersonCard person={{ id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', avatar: '/images/placeholder.jpg' }} submissionDate="2021-01-01" slot="1" />
        <ByPersonCard person={{ id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', avatar: '/images/placeholder.jpg' }} submissionDate="2021-01-01" slot="1" /> */}


      </div>
    </div>
    </Layout>
  )
}

export { ListPage }