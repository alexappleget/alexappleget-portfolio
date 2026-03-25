import { blogs } from "@/data/blogs";

export const Blogs = () => {
  return (
    <section id="blogs" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-primary">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <a
              key={blog.url}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-border rounded-lg hover:border-primary"
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-text-muted text-sm">{blog.description}</p>
              <span className="inline-block mt-4 text-primary text-sm">
                Read more →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
