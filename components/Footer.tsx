import Link from "next/link";
import Image from "next/image";
import { Facebook, InstagramIcon, Linkedin, Twitter } from 'lucide-react';

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
                width={500}
                height={500}
                className="h-10 w-28 object-contain"
              />
            </Link>
                
              </div>

              {/* Product Column */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-medium">Product</h3>
                <nav className="flex flex-col space-y-2">
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">Pricing</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">Analysis</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">API</Link>
                </nav>
              </div>

              {/* Company Column */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-medium">Company</h3>
                <nav className="flex flex-col space-y-2">
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">Careers</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">Blog</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">Company</Link>
                </nav>
              </div>

              {/* Support Column */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-medium">Support</h3>
                <nav className="flex flex-col space-y-2">
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">Help center</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">Community</Link>
                </nav>
              </div>

              {/* Legal Column */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-medium">Company</h3>
                <nav className="flex flex-col space-y-2 ">
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#" >Terms of service</Link>
                  <Link className="text-gray-500 hover:text-gray-900 hover:underline" href="#">Privacy policy</Link>
                </nav>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 flex flex-col justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
              <p className="text-sm text-gray-500">© 2025 Netwitx Inc.</p>
              <div className="flex gap-4">
                <Link href="https://www.facebook.com/people/Netwitx/61571982599231/" target="_blank" className="text-gray-500 hover:text-blue-600">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/netwitx_/" target="_blank" className="text-gray-500 hover:text-red-500">
                  <InstagramIcon className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://x.com/netwitx" target="_blank" className="text-gray-500 hover:text-black">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" target="_blank" className="text-gray-500 hover:text-blue-600">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

