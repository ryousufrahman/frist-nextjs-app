import Link from "next/link";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Blogging",
      slug: "getting-started-with-blogging",
      author: "John Doe",
      date: "2026-04-20",
      tags: ["blogging", "writing", "beginner"],
      content:
        "This is the content of the blog post. It introduces how to start blogging...",
      image: "https://example.com/images/blog1.jpg",
      published: true,
    },
    {
      id: 2,
      title: "10 Tips for Better Writing",
      slug: "10-tips-for-better-writing",
      author: "Jane Smith",
      date: "2026-04-18",
      tags: ["writing", "tips"],
      content: "Here are ten practical tips to improve your writing skills...",
      image: "https://example.com/images/blog2.jpg",
      published: true,
    },
    {
      id: 3,
      title: "Understanding SEO Basics",
      slug: "understanding-seo-basics",
      author: "Alex Johnson",
      date: "2026-04-15",
      tags: ["seo", "marketing"],
      content:
        "SEO is important for visibility. This post explains the basics...",
      image: "https://example.com/images/blog3.jpg",
      published: false,
    },
  ];
  return <>
          <div className="container mx-auto mt-15">
                <h1>This is blog page</h1>
                <div  className="grid grid-cols-3 gap-1 mt-5">
                    {
                        blogs.map(blog => <div className=" shadow rounded-2xl p-10 bg-white text-black" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.author}</p>
                            <Link href={'/'} className="btn btn-primary">learn more</Link>
                        </div>)
                    }
                </div>

          </div>
      
      </>;
};

export default BlogPage;
