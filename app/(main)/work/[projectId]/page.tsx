import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-b from-gray-900 to-gray-600">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          className="object-cover object-center opacity-50"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-16">
            <div className="space-y-4">
              {/* Industry */}
              <div>
                <div className="text-sm text-gray-500 mb-2">Industry</div>
                <div className="inline-block bg-[#CCFF00] px-4 py-1 rounded-full text-black">
                  {project.industry}
                </div>
              </div>

              {/* Services */}
              <div>
                <div className="text-sm text-gray-500 mb-2">Services</div>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <div
                      key={service}
                      className="bg-gray-200 px-4 py-1 rounded-full text-gray-800"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Year */}
              <div>
                <div className="text-sm text-gray-500 mb-2">Year</div>
                <div className="inline-block bg-black text-white px-4 py-1 rounded-full">
                  {project.year}
                </div>
              </div>

              {/* Live Link */}
              <div>
                <div className="text-sm text-gray-500 mb-2">Live Link</div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#CCFF00] hover:bg-[#CCFF00]/90 px-6 py-2 rounded-full text-black transition-colors"
                >
                  Live Website
                </a>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-16">
            {/* Challenge */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Process</h2>
              <p className="text-gray-600 leading-relaxed">{project.process}</p>
            </section>

            {/* Outcome */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Outcome</h2>
              <p className="text-gray-600 leading-relaxed">{project.outcome}</p>
            </section>

            {/* Testimonial */}
            {project.testimonial && (
              <section className="bg-gray-100 p-8 rounded-2xl">
                <blockquote className="text-xl italic text-gray-800 mb-4">
                  &quot;{project.testimonial.quote}&quot;
                </blockquote>
                <div className="font-semibold">
                  {project.testimonial.author}
                </div>
                <div className="text-gray-600">
                  {project.testimonial.position}
                </div>
              </section>
            )}

            {/* Gallery */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative h-64">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Back to Our Work */}
          <div className="mt-16">
            <Link
              href="/work"
              className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              &larr; Back to Our Work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
