import React from "react";
import Footer from "../src/components/Footer";
import ContactInfo from "../src/components/ContactInfo";
import Header from "../src/components/Header";
import AboutMe from "../src/components/AboutMe";
import TechStack from "../src/components/TechStack";
import Projects from "../src/components/Projects";
import { useEffect } from 'react';
import reveal from '../src/util/reveal';

export default function HomePage() {

    useEffect(() => {
        window.addEventListener("scroll", reveal);
      }, []);

    return (
        <div className="container">
            <Header/>
            <main className="mainContainer">
                <AboutMe/>
                <ContactInfo/>
                <TechStack/>
                <Projects/>
            </main>
            <Footer />
        </div>
    );
}