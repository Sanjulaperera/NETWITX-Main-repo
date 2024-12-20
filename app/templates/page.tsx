import { HeroParallaxDemo } from "@/components/templates-hero";
import { TemplatesGrid } from "./templates-grid";
import { Header } from "@/components/header";
import Footer from "@/components/Footer";

// Mock data for templates
const mockTemplates = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Template ${i + 1}`,
  category: ["Business", "Personal", "Portfolio", "E-commerce"][
    Math.floor(Math.random() * 4)
  ],
  tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
    .sort(() => 0.5 - Math.random())
    .slice(0, 2),
  imageUrl: `https://uploadthing.com/f/3avCIVBvIockvouV0awCYVxRvriBtUhFA7MK8OW0dylE3Qqg`,
}));

export default function TemplatesPage() {
  return (
    <main>
      <section>
        <Header />
      </section>
      <section id="hero">
        <HeroParallaxDemo />
      </section>
      <section id="templates">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Templates</h1>
          <TemplatesGrid initialTemplates={mockTemplates} />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
