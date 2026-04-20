import Link from "next/link";


const BlogDetailsPage = async({params}) => {

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

    const {blogId}= await params
    const clickedBlog = blogs.find(blog => blog.id == parseInt(blogId))
    return (
        <div>
            <p>{clickedBlog.content}</p>
            <p>{clickedBlog.date}</p>
            <Link href={'/blog'} className="btn btn-primary">all blog</Link>
        </div>
    );
};

export default BlogDetailsPage;