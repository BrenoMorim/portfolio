import React, { useContext } from "react";
import LanguageContext from "../src/context/LanguageContext";
import Footer from "../src/components/Footer";
import ContactInfo from "../src/components/ContactInfo";
import Header from "../src/components/Header";
import AboutMe from "../src/components/AboutMe";
import TechStack from "../src/components/TechStack";
import Projects from "../src/components/Projects";

export default function HomePage() {

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