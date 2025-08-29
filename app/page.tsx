"use client"

import Navbar from "@/components/navbar"
import BlogHeroSection from "@/components/blog-hero-section"
import LatestReleasesSection from "@/components/latest-releases-section"
import ChangelogSection from "@/components/changelog-section"
import VersionHistorySection from "@/components/version-history-section"
import DocumentationSection from "@/components/documentation-section"
import SubscribeSection from "@/components/subscribe-section"

export default function HomePage() {
  return (
    <div className="bg-black text-white font-sans min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <BlogHeroSection />
      <LatestReleasesSection />
      <ChangelogSection />
      <VersionHistorySection />
      <DocumentationSection />
      <SubscribeSection />

      {/* Footer */}
      <footer className="px-6 py-12 text-center text-gray-600 text-sm border-t border-gray-800 uppercase tracking-wide">
        © {new Date().getFullYear()} RELEASE ARCHIVE — CLASSIFIED
      </footer>
    </div>
  )
}
