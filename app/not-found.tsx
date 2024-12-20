
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex flex-col items-center min-h-[calc(100vh-300px)] justify-center">
            <div>
                <h1 className="text-3xl text-center mt-20">404 - Page Not Found</h1>
            </div>
            <div className="mt-20">
                <Button className="">
                    <Link href="/">Take me home</Link>
                </Button>
            </div>
        </div>
    )
}