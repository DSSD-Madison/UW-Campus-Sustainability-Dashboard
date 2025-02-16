import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";

interface AboutCardProps {
    title: string;
    imageFileName: string;
    paragraphContent: string;
    imageOnLeft:boolean;
}

const AboutCard: React.FC<AboutCardProps> = ({title, imageFileName, paragraphContent, imageOnLeft}) => {
    return (
        <Card className="w-3/4 mx-auto p-0">
            <CardHeader className="text-center">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4">
                    {imageOnLeft && (
                        <>
                            <img src={`src/assets/${imageFileName}`} className="w-1/3 h-auto"/>
                            <p className="text-base w-3/4 md:w-1/2">
                                {paragraphContent}
                            </p>
                        </>
                    )}
                    {!imageOnLeft && (
                        <>
                            <p className="text-base w-3/4 md:w-1/2">
                                {paragraphContent}
                            </p>
                            <img src={`src/assets/${imageFileName}`} className="w-1/3 h-auto"/>
                        </>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
export default AboutCard
