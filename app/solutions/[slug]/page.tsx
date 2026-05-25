import Navbar from "@/components/navbar"
import SolutionPage from "@/components/solution-page"
import Footer from "@/components/footer"
import Btn from "@/components/btn-download"
import { solutions } from "@/lib/solutions"
import { notFound } from "next/navigation"

interface SolutionPageParams {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }))
}

export async function generateMetadata({ params }: SolutionPageParams) {
  const solution = solutions.find((s) => s.slug === params.slug)

  if (!solution) {
    return {
      title: "Solution Not Found",
    }
  }

  return {
    title: `${solution.title} - Singular`,
    description: solution.heroDescription,
  }
}

export default function Page({ params }: SolutionPageParams) {
  const solution = solutions.find((s) => s.slug === params.slug)

  if (!solution) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main>
        <SolutionPage solution={solution} />
        <div className="fixed bottom-4 right-4">
          <Btn url="https://calendly.com/bookings-singular/schedule-a-meeting-with-singular" label="Schedule Meeting" />
        </div>
      </main>
      <Footer />
    </div>
  )
}