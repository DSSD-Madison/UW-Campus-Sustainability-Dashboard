import React from 'react';
import AboutCard from "@/components/AboutCard.tsx";

const About: React.FC = () => {
    return (
        <>
            <AboutCard title={"Why is sustainability important"} imageFileName={"image.png"} paragraphContent={`Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit faucibus
                        quis euismod vestibulum nostra lorem efficitur turpis. Elementum
                        maecenas magnis habitant, ut lectus ante. Ultricies sapien id sit vitae
                        eget primis id nullam. Ex facilisis nibh varius orci dui faucibus nullam
                        lectus. Commodo sit est platea porta sem. Elementum eleifend per eros
                        praesent; posuere inceptos.`} imageOnLeft={true}/>
            <AboutCard title={"Why is sustainability important"} imageFileName={"image.png"} paragraphContent={`Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit faucibus
                        quis euismod vestibulum nostra lorem efficitur turpis. Elementum
                        maecenas magnis habitant, ut lectus ante. Ultricies sapien id sit vitae
                        eget primis id nullam. Ex facilisis nibh varius orci dui faucibus nullam
                        lectus. Commodo sit est platea porta sem. Elementum eleifend per eros
                        praesent; posuere inceptos.`} imageOnLeft={false}/>
            <AboutCard title={"Why is sustainability important"} imageFileName={"image.png"} paragraphContent={`Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit faucibus
                        quis euismod vestibulum nostra lorem efficitur turpis. Elementum
                        maecenas magnis habitant, ut lectus ante. Ultricies sapien id sit vitae
                        eget primis id nullam. Ex facilisis nibh varius orci dui faucibus nullam
                        lectus. Commodo sit est platea porta sem. Elementum eleifend per eros
                        praesent; posuere inceptos.`} imageOnLeft={true}/>
        </>
    );
};

export default About;
