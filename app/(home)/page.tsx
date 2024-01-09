import { InfoBox } from '@/components/pages/home/info-box'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col items-start">
        <InfoBox />
      </section>
    </div>
  )
}
