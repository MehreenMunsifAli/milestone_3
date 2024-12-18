import { Card, CardTitle, CardDescription, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

type BlogData = {
    blogName: string,
    blogDescription: string,
    blogContent: string
}

export default function BlogComponent({blogName, blogDescription, blogContent}: BlogData) {

    return(
            <Card className="flex flex-col text-center bg-orange-200 dark:bg-black transform transition-transform duration-200 hover:scale-105 pb-6">
                <CardHeader className="text-center">
                    <CardTitle className="leading-tight tracking-normal ">{blogName}</CardTitle>
                    <CardDescription className="text-xs mt-2">Type: {blogDescription}</CardDescription>
                </CardHeader>
                <CardContent className="line-clamp-3 leading-tight pb-0">{blogContent}</CardContent>
            </Card>
    )
}