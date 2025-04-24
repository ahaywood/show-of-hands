import { Avatar } from '@/app/components/Avatar'
import { Layout } from '../layout'

const ListPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-[300px_1fr]">
        {/* list of contacts */}
        <div className="border-r-[3px] border-white page-top page-bottom px-6">
          <h2 className="text-xl font-bold text-han-purple">Direct Messages</h2>
          <input type="search" placeholder="Search" id="search" name="search" />
          <ul>
            <li className="flex items-center gap-6">
              <div className="w-[42px]"><Avatar src="/images/placeholder.jpg" alt={''} size={42} shape="square" border={true} /></div>
              <div className="text-xl text-han-purple">Amy Dutton</div>
            </li>
          </ul>
        </div>

        {/* message detail */}
        <div>
          <p>Something</p>
        </div>
      </div>
    </Layout>
  )
}

export { ListPage }