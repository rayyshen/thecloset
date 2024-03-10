import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Cards() {
    return (
        <div className="flex flex-auto content-center justify-center  space-y-5 md:space-y-0 flex-col md:flex-row md:mb-10 md:space-x-7">
            <Card className="w-[350px]">
                <CardHeader><CardTitle>Shop at the Closet</CardTitle></CardHeader>
                <CardContent>
                    <p>Whether you are looking for great prices, a great selection, or amazing unique items, there’s nowhere better to shop than at The Closet.  We do have sales periodically, but with our everyday low prices you don’t need sales to get a bargain when you shop at The Closet. </p>
                </CardContent>
                <CardFooter>
                    Our shopping hours are <br/> Monday – Saturday 10am – 5pm

                    plus <br/> Monday and Thursday 5pm – 8pm.
                </CardFooter>
            </Card>
            <Card className="w-[350px]">
                <CardHeader><CardTitle>Volunteer at The Closet</CardTitle></CardHeader>
                <CardContent>
                    <p>The Closet relies heavily upon volunteers who perform a variety of jobs involved with running the thrift shop. If you would like to give back to community, consider volunteering at The Closet. For more see our <a href="/volunteer" className="underline">Volunteering at The Closet page.</a></p>
                </CardContent>
            </Card>
            <Card className="w-[350px]">
                <CardHeader><CardTitle>Donate to the Closet</CardTitle></CardHeader>
                <CardContent>
                    <p>Everything which The Closet sells is donated to us, so we rely upon your donations to keep the store stocked with high quality merchandise.  Whether it’s last year’s outfit which your child has outgrown, or a good quality kitchen appliance you have replaced, or a set of dishes you won’t need in the new house, consider bringing it to The Closet.  See our donations page <a href="/donate" className="underline">How to Donate Goods for more information.</a></p>
                </CardContent>
            </Card>
        </div>
    )
}