import Image from 'next/image';

const logos = [
  { name: 'Company 1', src: 'https://uploadthing.com/f/3avCIVBvIockZHdoWFOibmZ7osScqeWP9xNvLjtG1XOFrD0a' },
  { name: 'Company 2', src: 'https://uploadthing.com/f/3avCIVBvIockd8hAbZtmTkSzZ954niY1HO3bWcoDwt8h2KjE' },
  { name: 'Company 3', src: 'https://uploadthing.com/f/3avCIVBvIockJ3tjBviPuFTEdSzM01g67BoNrOYlhiwaLX49' },
  { name: 'Company 4', src: 'https://uploadthing.com/f/3avCIVBvIockwo7Ggnz9oI0kwXa2BPpbCsMF7Dq8ezdYLhl6' },
];

export function TrustedBy() {
  return (
    <section className="w-full py-12 flex items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
          Trusted By
        </h2>
        <div className="grid grid-cols-4 gap-4 md:gap-8 items-center justify-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 grayscale transition-all duration-300 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={50} // Increased width for better visibility
                height={50} // Increased height for better visibility
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
