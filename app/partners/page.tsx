import Navbar from "@/components/navbar"
import PartnersPage from "@/components/partners-page"
import Footer from "@/components/footer"
import Btn from "@/components/btn-download"

export const metadata = {
  title: "Partners - Singular",
  description: "Join Singular's ecosystem of innovative partners and collaborate on the future of digital transformation.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main>
        <PartnersPage />
        <div className="fixed bottom-4 right-4">
          <Btn url="https://calendly.com/bookings-singular/schedule-a-meeting-with-singular" label="Schedule Meeting" />
        </div>
      </main>
      <Footer />
    </div>
  )
}