"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";

const websiteTypes = [
  "Business",
  "Portfolio",
  "Tradie",
  "Blog",
  "Consultant",
  "Technology",
  "Restaurant",
  "Event",
];

const templates = {
  box1: [
    {
      image: "https://uploadthing.com/f/3avCIVBvIockzhfCMisLNCRpTEuxIvKQ08VX3jMJO1qo4AHD",
      color: "bg-cyan-900",
    },
    {
      image: "https://uploadthing.com/f/3avCIVBvIock5X9hQ3lchGoXZCurMI5lxOyN4ijAkLzgnKmb",
      color: "bg-blue-900",
    },
    {
      image: "https://uploadthing.com/f/3avCIVBvIockNegIW6r3rAsqXcoSxHR8v4yju1ZmMLbfdIOK",
      color: "bg-indigo-900",
    },
    {
      image: "https://uploadthing.com/f/3avCIVBvIockbfWzEManHSngtQOCDZPzsbh0xRdlp15Lk7jN",
      color: "bg-violet-900",
    },
  ],
  box2: [
    {
      image: "https://uploadthing.com/f/3avCIVBvIocks3BXSKs7e6FTifoCzdQ8Xx0ykZPn4UBDHMLI",
      color: "bg-green-100",
    },
    {
      image: "https://uploadthing.com/f/3avCIVBvIockbfWzEManHSngtQOCDZPzsbh0xRdlp15Lk7jN",
      color: "bg-emerald-100",
    },
    {
      image: "https://uploadthing.com/f/3avCIVBvIockzhfCMisLNCRpTEuxIvKQ08VX3jMJO1qo4AHD",
      color: "bg-teal-100",
    },
    {
      image: "https://uploadthing.com/f/3avCIVBvIock5X9hQ3lchGoXZCurMI5lxOyN4ijAkLzgnKmb",
      color: "bg-lime-100",
    },
  ],
  box3: [
    {
      image: "https://uploadthing.com/f/3avCIVBvIocks3BXSKs7e6FTifoCzdQ8Xx0ykZPn4UBDHMLI",
      color: "bg-orange-100",
    },
    {
      image: "https://uploadthing.com/f/3avCIVBvIockNegIW6r3rAsqXcoSxHR8v4yju1ZmMLbfdIOK",
      color: "bg-amber-100",
    },
    {
      image: "https://uploadthing.com/f/3avCIVBvIockbfWzEManHSngtQOCDZPzsbh0xRdlp15Lk7jN",
      color: "bg-yellow-100",
    },
    {
      image: "https://uploadthing.com/f/3avCIVBvIockzhfCMisLNCRpTEuxIvKQ08VX3jMJO1qo4AHD",
      color: "bg-red-100",
    },
  ],
  box4: [
    {
      image: "https://uploadthing.com/f/3avCIVBvIockNegIW6r3rAsqXcoSxHR8v4yju1ZmMLbfdIOK",
      color: "bg-rose-100",
    },
    {
      image: "https://uploadthing.com/f/3avCIVBvIockzhfCMisLNCRpTEuxIvKQ08VX3jMJO1qo4AHD",
      color: "bg-pink-100",
    },
    {
      image: "https://uploadthing.com/f/3avCIVBvIock5X9hQ3lchGoXZCurMI5lxOyN4ijAkLzgnKmb",
      color: "bg-fuchsia-100",
    },
    {
      image: "https://uploadthing.com/f/3avCIVBvIock5sIp5HlchGoXZCurMI5lxOyN4ijAkLzgnKmb",
      color: "bg-purple-100",
    },
  ],
};

export default function WebsiteBuilder() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTypes, setFilteredTypes] = useState(websiteTypes);
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();

  const [indices, setIndices] = useState({
    box1: 0,
    box2: 0,
    box3: 0,
    box4: 0,
  });
  const [showing, setShowing] = useState({
    box1: true,
    box2: true,
    box3: true,
    box4: true,
  });

  useEffect(() => {
    const filtered = websiteTypes.filter((type) =>
      type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTypes(filtered);
    setIsTyping(searchQuery.length > 0);
  }, [searchQuery]);

  useEffect(() => {
    const intervals = ["box1", "box2", "box3", "box4"].map((box, index) => {
      return setInterval(() => {
        setShowing((prev) => ({ ...prev, [box]: false }));
        setTimeout(() => {
          setIndices((prev) => ({
            ...prev,
            [box]:
              (prev[box as keyof typeof prev] + 1) %
              templates[box as keyof typeof templates].length,
          }));
          setShowing((prev) => ({ ...prev, [box]: true }));
        }, 300);
      }, 5000 + index * 1250);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const handleContinue = () => {
    if (searchQuery) {
      router.push(`/templates?type=${encodeURIComponent(searchQuery)}#templates`);
    } else {
      router.push("/templates#templates");
    }
  };

  const handleSkip = () => {
    router.push("/templates#templates");
  };

  const handleExampleClick = (type: string) => {
    router.push(`/templates?type=${encodeURIComponent(type)}#templates`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-8 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">
          What type of website do you want to create?
        </h1>

        <div className="relative mb-6 flex items-center">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for your business or site type"
            className="pl-10 flex-grow"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="ml-4" variant="secondary" onClick={handleContinue}>
            Continue
          </Button>
        </div>

        <div className="space-y-1">
          {isTyping ? (
            <>
              <p className="text-sm text-gray-500 uppercase mb-2">
                SEARCH RESULTS
              </p>
              {filteredTypes.map((type) => (
                <button
                  key={type}
                  className="block w-full text-left px-2 py-2 rounded hover:bg-gray-100 transition-colors"
                  onClick={() => handleExampleClick(type)}
                >
                  {type}
                </button>
              ))}
            </>
          ) : (
            <>
              <p className="text-sm text-gray-500 uppercase mb-2">Most Search</p>
              {websiteTypes.map((type) => (
                <button
                  key={type}
                  className="block w-full text-left px-2 py-2 rounded hover:bg-gray-100 transition-colors"
                  onClick={() => handleExampleClick(type)}
                >
                  {type}
                </button>
              ))}
            </>
          )}
        </div>

        <div className="mt-auto flex justify-between items-center">
          <Link href="/">
          <Button variant="ghost" className="text-gray-600">
            ← Back
          </Button>
          </Link>
          <Button
            variant="ghost"
            className="text-gray-600 lg:hidden"
            onClick={handleSkip}
          >
            Skip
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-gray-50 p-8">
        <div className="relative h-[500px] mx-auto max-w-[600px]">
          {/* Box 1 - Top Left */}
          <div
            className={`absolute left-0 top-0 w-[280px] h-[200px] overflow-hidden rounded-2xl transition-all duration-500 shadow-lg ${
              templates.box1[indices.box1].color
            }`}
            style={{ transform: "translate(0, 0)" }}
          >
            <div
              className={`transition-opacity duration-300 ${
                showing.box1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={templates.box1[indices.box1].image}
                alt="Template preview"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-200 hover:scale-105"
              />
            </div>
          </div>

          {/* Box 2 - Top Right */}
          <div
            className={`absolute right-0 top-0 w-[280px] h-[200px] overflow-hidden rounded-2xl transition-all duration-500 shadow-lg ${
              templates.box2[indices.box2].color
            }`}
            style={{ transform: "translate(0, 60px)" }}
          >
            <div
              className={`transition-opacity duration-300 ${
                showing.box2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={templates.box2[indices.box2].image}
                alt="Template preview"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-200 hover:scale-105"
              />
            </div>
          </div>

          {/* Box 3 - Bottom Left */}
          <div
            className={`absolute left-0 bottom-0 w-[280px] h-[200px] overflow-hidden rounded-2xl transition-all duration-500 shadow-lg ${
              templates.box3[indices.box3].color
            }`}
            style={{ transform: "translate(0, -60px)" }}
          >
            <div
              className={`transition-opacity duration-300 ${
                showing.box3 ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={templates.box3[indices.box3].image}
                alt="Template preview"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-200 hover:scale-105"
              />
            </div>
          </div>

          {/* Box 4 - Bottom Right */}
          <div
            className={`absolute right-0 bottom-0 w-[280px] h-[200px] overflow-hidden rounded-2xl transition-all duration-500 shadow-lg ${
              templates.box4[indices.box4].color
            }`}
            style={{ transform: "translate(0, 0)" }}
          >
            <div
              className={`transition-opacity duration-300 ${
                showing.box4 ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={templates.box4[indices.box4].image}
                alt="Template preview"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-200 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-start gap-4">
          <div className="w-8 h-9 flex items-center justify-center">
            <svg
              width="76"
              height="84"
              viewBox="0 0 76 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.6306 59.3567L50.72 59.28L50.7067 59.2899C50.6776 59.3115 50.6538 59.3292 50.6306 59.3567Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29 83.62C29.99 83.71 30.99 83.77 31.99 83.83C32.3661 83.8569 32.7422 83.8677 33.0608 83.8769L33.0626 83.8769L33.17 83.88C33.4113 83.88 33.6525 83.8775 33.8925 83.875L33.8941 83.875C34.131 83.8725 34.3667 83.87 34.6 83.87C35.57 83.87 36.37 83.07 36.37 82.1C36.37 81.13 35.56 80.33 34.6 80.33C33.84 80.33 33.07 80.32 32.3 80.31C31.793 80.3021 31.2922 80.2691 30.7878 80.2358C30.6555 80.2271 30.523 80.2183 30.39 80.21C30.1421 80.1888 29.894 80.1678 29.6457 80.1467C27.0895 79.9303 24.5146 79.7122 21.99 79.22C20.92 78.99 19.87 78.7 18.83 78.38L18.6994 78.33C18.3987 78.2148 18.0855 78.0947 17.78 77.99C17.6582 77.9451 17.5343 77.9023 17.4096 77.8592C17.1458 77.768 16.8779 77.6754 16.62 77.56C16.3776 77.453 16.1342 77.3479 15.8911 77.243C15.3621 77.0147 14.8337 76.7866 14.32 76.54L14.3238 76.5438L14.3191 76.5409C14.317 76.5396 14.3148 76.5382 14.3124 76.5368C14.3087 76.5346 14.3046 76.5323 14.3 76.53C14.3 76.52 14.29 76.52 14.29 76.52C14.26 76.51 14.2301 76.4901 14.2002 76.4701L14.14 76.44L14.145 76.4408C14.1484 76.4417 14.1517 76.4434 14.155 76.445C14.16 76.4475 14.165 76.45 14.17 76.45C13.27 75.99 12.4 75.49 11.55 74.93C11.1 74.61 10.67 74.28 10.24 73.92C9.79 73.5 9.35 73.07 8.93 72.62C8.63 72.26 8.34002 71.9 8.07002 71.52C7.70002 70.96 7.37002 70.38 7.07002 69.79C6.65002 68.93 6.28003 68.04 5.96003 67.14C5.54003 65.89 5.22999 64.62 4.91999 63.33L4.91108 63.2785C4.70089 62.0653 4.49219 60.8607 4.38965 59.6298C4.38891 59.5905 4.38674 59.5513 4.38033 59.512C4.38013 59.5048 4.38002 59.4974 4.38002 59.49V59.46C4.33002 58.44 4.33002 57.43 4.38002 56.42C4.45002 55.5 4.57 54.6 4.74 53.7C4.93 52.8 5.17999 51.92 5.47999 51.04C5.46499 51.075 5.4525 51.11 5.44001 51.145C5.42753 51.18 5.41504 51.215 5.40004 51.25C5.89004 49.87 6.45999 48.53 7.09999 47.22C7.86999 45.73 8.72003 44.29 9.64003 42.9C9.78475 42.7 9.92926 42.4998 10.0738 42.2996C11.3675 40.5075 12.6628 38.7131 14.12 37.04C14.76 36.32 15.43 35.62 16.14 34.97C17.4917 33.7986 18.9732 32.7652 20.4457 31.7381C20.6073 31.6254 20.7688 31.5128 20.93 31.4C21.26 31.195 21.5875 30.9875 21.915 30.78C22.2425 30.5725 22.57 30.365 22.9 30.16C23.9 29.54 24.92 28.96 25.97 28.43C25.9338 28.4541 25.894 28.4746 25.8528 28.4958C25.8257 28.5098 25.7978 28.5242 25.77 28.54C26.76 28.05 27.76 27.61 28.8 27.23C29.92 26.85 31.06 26.57 32.22 26.32C32.5397 26.2601 32.8603 26.2 33.18 26.15C32.8039 26.5324 32.4435 26.9384 32.084 27.3433C31.8701 27.5843 31.6564 27.825 31.44 28.06C31.1844 28.3441 30.9389 28.6432 30.6927 28.9432C30.5922 29.0656 30.4915 29.1883 30.39 29.31C30.2978 29.4176 30.2028 29.5251 30.1073 29.6332C29.8919 29.877 29.674 30.1237 29.48 30.38C29.2803 30.652 29.0747 30.9192 28.8693 31.1862C28.4781 31.6947 28.0875 32.2023 27.74 32.74C27.5947 32.9594 27.4462 33.1788 27.2971 33.3988C26.9232 33.9511 26.5461 34.508 26.21 35.08C26.0913 35.2811 25.9721 35.4817 25.853 35.6821C25.2493 36.6975 24.6478 37.7094 24.13 38.77C23.08 40.9 22.33 43.21 22.04 45.56C21.84 47.21 21.65 48.85 21.73 50.52C21.78 51.64 21.87 52.75 22.02 53.86C22.29 55.85 22.67 57.86 23.45 59.73C24.4 62.01 25.79 64.15 27.68 65.77C29.59 67.41 31.91 68.46 34.39 68.89C36.86 69.32 39.49 69.26 41.91 68.53C42.99 68.21 44.05 67.8 45.06 67.28C45.5596 67.0102 46.0692 66.7504 46.5788 66.4906L46.58 66.49C48.18 65.66 49.72 64.62 51.12 63.48L51.3387 63.3012C52.5864 62.2813 53.8346 61.261 54.94 60.08C56.72 58.18 58.1 55.99 59.15 53.62C60.26 51.12 61.07 48.49 61.28 45.76C61.49 43.08 61.42 40.29 60.64 37.7C59.95 35.38 58.87 33.18 57.26 31.36C56.34 30.31 55.26 29.36 54.14 28.51C53.16 27.77 52.15 27.05 51.1 26.43C48.79 25.05 46.3 24 43.7 23.31L43.5453 23.2705C43.0887 23.1539 42.6383 23.0389 42.18 22.94C42.5819 22.6406 42.9838 22.3473 43.3906 22.0505L43.72 21.81C44.3689 21.3707 45.0279 20.9314 45.6868 20.4922L45.69 20.49C46.1595 20.1793 46.6433 19.8877 47.1282 19.5954C47.3456 19.4644 47.5634 19.3331 47.78 19.2C48.9278 18.487 50.1285 17.8496 51.3229 17.2155C51.5022 17.1203 51.6813 17.0253 51.86 16.93C52.18 16.78 52.4975 16.63 52.815 16.48C53.1325 16.33 53.45 16.18 53.77 16.03C54.1613 15.8504 54.5691 15.6996 54.9774 15.5486C55.2057 15.4642 55.4341 15.3797 55.66 15.29C57.06 14.82 58.47 14.36 59.89 13.94C59.945 14 59.9975 14.06 60.05 14.12C60.1025 14.18 60.155 14.24 60.21 14.3C60.6 14.76 60.97 15.22 61.31 15.71C61.62 16.19 61.9 16.68 62.17 17.18C62.4 17.65 62.61 18.13 62.8 18.63C62.9907 19.2079 63.1413 19.7992 63.2924 20.3922C63.4028 20.8253 63.5134 21.2596 63.64 21.69C63.94 22.73 64.39 24.12 65.56 24.44C66.56 24.72 67.54 24.11 67.93 23.19C68.1902 22.5721 68.3578 21.921 68.5243 21.2746C68.5626 21.126 68.6008 20.9776 68.64 20.83C68.8519 20.0195 69.1231 19.2259 69.3912 18.4415L69.46 18.24C69.79 17.41 70.13 16.61 70.5 15.8C71.04 14.76 71.63 13.75 72.22 12.74C72.51 12.24 72.8 11.73 72.99 11.18C73.05 11.02 73.08 10.85 73.1 10.69H73.18C73.26 10.68 73.35 10.68 73.43 10.68H73.55C74.52 10.69 75.32 9.87003 75.32 8.91003C75.32 8.04003 74.66 7.27003 73.79 7.16003C73.7551 7.15006 73.7227 7.14008 73.6902 7.13011C73.6577 7.12011 73.625 7.11003 73.59 7.10003C73.187 6.95753 72.7845 6.81453 72.3821 6.67158L72.3793 6.67059C70.9757 6.17192 69.5737 5.67387 68.16 5.20004C66.6789 4.70355 65.1766 4.24954 63.6769 3.79631C63.3945 3.71095 63.1121 3.62562 62.83 3.54004C61.6178 3.1708 60.391 2.84523 59.1632 2.5194C58.6286 2.37753 58.0939 2.23562 57.56 2.09002C57.2694 2.01127 56.9783 1.93005 56.6868 1.84867C55.4235 1.4961 54.15 1.14065 52.85 0.970029C52.12 0.870029 51.47 1.23001 51.08 1.83001C51.08 1.84001 51.07 1.85003 51.07 1.85003C50.7 2.42003 50.75 3.32001 51.2 3.83001C51.3867 4.04339 51.5912 4.2301 51.7957 4.41681C51.8979 4.51011 52 4.60341 52.1 4.70004C52.1886 4.78533 52.2782 4.87061 52.3682 4.95625C52.5525 5.13161 52.7386 5.30866 52.92 5.49002C53.2438 5.80625 53.5449 6.15082 53.8446 6.49386C53.9429 6.60636 54.0413 6.7189 54.14 6.83001C54.2741 6.99687 54.4088 7.16297 54.5433 7.32873C54.9006 7.769 55.2559 8.20687 55.59 8.65002C55.7808 8.89916 55.97 9.14981 56.1595 9.4008C56.4568 9.79456 56.7546 10.1892 57.06 10.58C57.115 10.65 57.1725 10.7225 57.2301 10.7951C57.2876 10.8676 57.345 10.9401 57.4 11.01C56.64 11.25 55.87 11.5 55.11 11.76L55.109 11.7604C54.6893 11.9103 54.2697 12.0602 53.86 12.22C53.7 12.2834 53.5378 12.3434 53.3756 12.4034C53.0511 12.5234 52.7267 12.6434 52.42 12.79C52.1899 12.898 51.9582 13.0035 51.7263 13.1091L51.725 13.1097C51.1409 13.3757 50.555 13.6425 49.99 13.95C49.835 14.033 49.6799 14.1156 49.5249 14.1981L49.5235 14.1989C48.8193 14.5741 48.1163 14.9487 47.42 15.35C45.65 16.36 43.94 17.44 42.24 18.57C40.62 19.65 39.1 20.85 37.59 22.08C37.5002 22.1599 37.4003 22.2398 37.3005 22.3197C36.7405 22.2997 36.18 22.31 35.61 22.34C34.27 22.41 32.96 22.58 31.65 22.84C30.45 23.08 29.24 23.35 28.09 23.75C26.82 24.19 25.61 24.7 24.41 25.29C23.54 25.72 22.66 26.16 21.84 26.68C20.9329 27.2482 20.0158 27.8264 19.0987 28.4046L19.09 28.41C18.49 28.7901 17.9166 29.2057 17.3432 29.6212C17.0566 29.829 16.7699 30.0367 16.48 30.24C14.75 31.45 13.16 32.84 11.75 34.42C10.52 35.81 9.37999 37.27 8.28999 38.77C8.13961 38.9795 7.9886 39.1883 7.83763 39.397C7.14531 40.3543 6.45396 41.3102 5.83003 42.32C4.41003 44.6 3.16003 47.03 2.27003 49.58C1.83003 50.86 1.44003 52.15 1.21003 53.48C0.980033 54.77 0.850028 56.08 0.830028 57.38C0.810028 58.74 0.880009 60.11 1.06001 61.47C1.12996 62.0197 1.22989 62.5693 1.32983 63.1189L1.33003 63.12C1.50439 64.1274 1.74443 65.1161 1.98653 66.1133L2.01002 66.21C2.24002 67.2 2.57001 68.17 2.94001 69.11C3.37001 70.21 3.85001 71.31 4.44001 72.34C5.71001 74.54 7.46 76.38 9.55 77.82C11.08 78.88 12.73 79.69 14.43 80.44C15.34 80.84 16.26 81.18 17.2 81.52C18.01 81.82 18.84 82.08 19.68 82.29C20.79 82.57 21.93 82.84 23.07 82.98C25.05 83.23 27.02 83.45 29 83.62ZM4.38043 59.5154L4.38002 59.51L4.38033 59.512L4.38043 59.5154ZM4.38043 59.5154C4.38125 59.541 4.38313 59.5655 4.38502 59.59C4.38752 59.6225 4.39003 59.655 4.39003 59.69C4.39003 59.67 4.39002 59.6499 4.38965 59.6298C4.38796 59.6096 4.38631 59.5894 4.38468 59.5691C4.38324 59.5512 4.38183 59.5333 4.38043 59.5154ZM34.2508 30.2684C35.0627 29.3826 35.8713 28.5005 36.73 27.66C37.33 27.07 37.94 26.51 38.59 25.96C39.37 26.04 40.15 26.15 40.92 26.3C42.16 26.56 43.37 26.89 44.57 27.28C44.5644 27.2744 44.5556 27.272 44.5455 27.2691C44.5376 27.2669 44.5288 27.2644 44.52 27.26L44.61 27.29C44.6162 27.2962 44.6224 27.2986 44.6309 27.3018C44.6362 27.3038 44.6424 27.3062 44.65 27.31C45.7 27.68 46.73 28.11 47.73 28.6C48.74 29.12 49.71 29.7 50.66 30.34C50.6348 30.3292 50.6109 30.3158 50.5878 30.3012L50.4979 30.2392C50.4886 30.2326 50.4793 30.2262 50.47 30.22L50.4979 30.2392L50.5187 30.2539C50.5412 30.27 50.5641 30.2862 50.5878 30.3012C51.5059 30.9364 52.3971 31.6072 53.2372 32.3377C53.736 32.7839 54.2164 33.2486 54.67 33.74C54.98 34.11 55.26 34.48 55.53 34.86C55.8 35.26 56.04 35.67 56.26 36.09C56.56 36.71 56.82 37.34 57.06 37.98C57.25 38.57 57.42 39.16 57.55 39.77C57.69 40.49 57.78 41.21 57.84 41.94C57.89 42.95 57.89 43.97 57.84 44.99V45.03L34.2508 30.2684ZM50.6306 59.3567C50.6271 59.3609 50.6235 59.3653 50.62 59.37C51.39 58.69 52.12 57.99 52.81 57.25C53.27 56.73 53.69 56.18 54.09 55.61C54.59 54.85 55.04 54.07 55.46 53.26C56 52.17 56.46 51.05 56.87 49.91C57.12 49.15 57.33 48.39 57.5 47.6C57.6599 46.7508 57.7698 45.9015 57.8399 45.0423L34.2508 30.2684L34.02 30.52C33.7592 30.8312 33.4983 31.1403 33.2384 31.4483C32.9304 31.8133 32.6237 32.1767 32.32 32.54C32.1292 32.7662 31.9534 33.0123 31.7784 33.2573C31.7058 33.3588 31.6333 33.4604 31.56 33.56L30.75 34.64C29.54 36.47 28.36 38.32 27.36 40.27C27.03 40.95 26.73 41.65 26.47 42.36C26.18 43.22 25.95 44.09 25.76 44.98C25.57 45.98 25.42 47 25.34 48.02C25.27 49.06 25.27 50.09 25.33 51.14C25.45 52.58 25.61 54.01 25.88 55.43C26.06 56.25 26.27 57.05 26.54 57.84C26.73 58.35 26.94 58.84 27.18 59.33C27.46 59.87 27.77 60.4 28.1 60.9C28.4 61.33 28.71 61.73 29.05 62.13C29.35 62.45 29.66 62.76 29.98 63.05C30.3 63.32 30.62 63.56 30.95 63.8C31.3 64.03 31.65 64.23 32.02 64.42C32.41 64.61 32.81 64.78 33.22 64.93C33.71 65.09 34.2 65.22 34.71 65.33C35.31 65.44 35.91 65.53 36.52 65.58C37.13 65.61 37.73 65.61 38.33 65.58C38.91 65.53 39.47 65.45 40.04 65.35C40.6 65.23 41.15 65.07 41.68 64.9C42.26 64.69 42.82 64.44 43.38 64.19C43.605 64.075 43.8275 63.96 44.05 63.845C44.2725 63.73 44.495 63.615 44.72 63.5C45.5876 63.0566 46.4274 62.5388 47.2482 62.0004C47.2171 62.0203 47.1848 62.0401 47.15 62.06C48.3577 61.2225 49.5178 60.309 50.6306 59.3567ZM53.2553 32.3534C53.2762 32.3723 53.2974 32.3912 53.32 32.41L53.2553 32.3534Z"
                fill="black"
              />
              <path
                d="M14.34 76.53C14.35 76.53 14.36 76.53 14.36 76.54C14.36 76.54 14.35 76.53 14.34 76.53Z"
                fill="black"
              />
              <path
                d="M14.34 76.52C14.335 76.515 14.33 76.5125 14.325 76.51C14.32 76.5075 14.315 76.505 14.31 76.5C14.32 76.5 14.33 76.51 14.34 76.52Z"
                fill="black"
              />
            </svg>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            From an online store to a personal blog and everything in between,
            we offer a wide range of professional tools and apps for the type of
            site you want to build.
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            variant="ghost"
            className="text-gray-600 hidden lg:inline-flex"
            onClick={handleSkip}
          >
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
}
