import { Label } from '@/components/label'
import Layout from '@/components/layouts'
import Title from '@/components/typography/title'

export default function TagsPage() {
  return (
    <Layout>
      <div className="flex flex-col items-start">
        <Title>Tags</Title>

        <div className="flex items-center gap-3 flex-wrap">
          {[...Array(100)].fill(0).map((v) => (
            <Label key={v}>{v}</Label>
          ))}
        </div>
      </div>
    </Layout>
  )
}
