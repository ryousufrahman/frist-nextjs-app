import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Top section */}
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            {/* Logo / About */}
            <div>
              <h2 className="text-xl font-semibold text-white">MyBlog</h2>
              <p className="text-sm mt-2">
                Sharing ideas, tutorials, and stories for developers.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div>
                <h3 className="text-white font-medium mb-2">Links</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/" className="hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    
                      About
                    
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">Social</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            © {new Date().getFullYear()} MyBlog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
