import { LightningBolt } from "@/components/icons/LightningBolt";
import { blogs } from "@/data/blogs";

export const Blogs = () => {
  return (
    <section id="blogs" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-primary flex items-center gap-3">
          <LightningBolt />
          Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <a
              key={blog.url}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-border rounded-xl hover:border-primary/50 bg-background-secondary relative overflow-hidden group hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Red cheek accent on hover */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-secondary/0 group-hover:bg-secondary/20 blur-xl" />

              <h3 className="text-xl font-semibold mb-2 relative z-10">{blog.title}</h3>
              <p className="text-text-muted text-sm relative z-10">{blog.description}</p>
              <span className="inline-block mt-4 text-primary text-sm relative z-10">
                Read more →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
