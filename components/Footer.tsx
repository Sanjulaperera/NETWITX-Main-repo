import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto"> {/* Added max-width and centering */}
        {/* Navigation Section */}
        <div className="w-full border rounded-3xl mt-8">
          <div className="px-4 py-10 md:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
              {/* Logo Column */}
              <div className="col-span-2 lg:col-span-1">
                <Link className="flex items-center gap-2 font-semibold" href="/">
                  <Image
                    priority={true}
                    src="https://uploadthing.com/f/3avCIVBvIockvnJbGmwCYVxRvriBtUhFA7MK8OW0dylE3Qqg"
                    alt="Netwitx Logo"
                    width={112}
                    height={28}
                    className="h-10 w-28 object-contain"
                  />
                </Link>
              </div>

              {/* Product Column */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-medium">Product</h3>
                <nav className="flex flex-col space-y-2">
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="/website/design">Web Design</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="./website-creator">Website Templates</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="/web-hosting">Website Hosting</Link>
                 {/* <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="https://www.netwitx.com/templates?type=restaurant#templates">Restaurant</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="https://www.netwitx.com/templates?type=eCommerce#templates">eCommerce</Link> */}
                </nav>
              </div>

              {/* Solutions Column */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-medium">Solutions</h3>
                <nav className="flex flex-col space-y-2">
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="/solutions">Payment systems</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="/solutions">Web Analytics</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="/solutions">SEO Tools</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="/solutions">All Web Features</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">Booking Systems</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">Scheduling Systems</Link>
                </nav>
              </div>

              {/* Resources Column */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-medium">Resources</h3>
                <nav className="flex flex-col space-y-2">
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="/blog">Netwitx Blog</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="/work">Our Work</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="/about/contact">Contact Us</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="/about/us">About Us</Link>
                </nav>
              </div>

              {/* Company Column */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-medium">Company</h3>
                <nav className="flex flex-col space-y-2">
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">Terms of service</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">Privacy policy</Link>
                </nav>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 flex flex-col justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
              <p className="text-sm text-gray-500">© 2025 Netwitx Inc.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-blue-600">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://x.com/netwitx" className="text-gray-500 hover:text-black">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-pink-600">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}