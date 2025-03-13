import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FeaturedCourses from "@/components/featured-courses"
import LatestProjects from "@/components/latest-projects"
import NewsSidebar from "@/components/news-sidebar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FeaturedCourses />
              <LatestProjects />
            </div>
            <div className="lg:col-span-1">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

