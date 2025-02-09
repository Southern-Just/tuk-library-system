import React from 'react';
import HeroCover from "@/components/HeroCover";

const Hero = () => {
    return (
        <div className="flex">
        <div className="hero-text">
            <p className="hero-text-h1">TCP/IP</p>
            <p className="hero-text-description">TCP, IPv4, IPv6, DHCP, and DNS. In addition, the text explains new trends in Internet systems, including packet classification, Software Defined Networking (SDN), and mesh protocols used in The Internet of Things.</p>
            <div className="hero-text-add">
                <p >Author: Douglas E Comer</p>
                <p >All: 132</p>
                <p>Available:<span> 36</span></p>
            </div>
        </div>
        <HeroCover/></div>
    );
}

export default Hero;
