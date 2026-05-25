import Navbar from "@/components/navbar"
import IndustryPage from "@/components/industry-page"
import Footer from "@/components/footer"
import Btn from "@/components/btn-download"
import { industries } from "@/lib/industries"
import { notFound } from "next/navigation"

interface IndustryPageParams {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export async function generateMetadata({ params }: IndustryPageParams) {
  const industry = industries.find((i) => i.slug === params.slug)

  if (!industry) {
    return {
      title: "Industry Not Found",
    }
  }

  return {
    title: `${industry.title} - Singular`,
    description: industry.heroDescription,
  }
}

export default function Page({ params }: IndustryPageParams) {
  const industry = industries.find((i) => i.slug === params.slug)

  if (!industry) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main>
        <IndustryPage industry={industry} />
        <div className="fixed bottom-4 right-4">
          <Btn url="https://calendly.com/bookings-singular/schedule-a-meeting-with-singular" label="Schedule Meeting" />
        </div>
      </main>
      <Footer />
    </div>
  )
}