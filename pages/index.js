import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Resume from "../components/Resume/Resume";
import Skills from "../components/Skills/Skills";
import Social from "../components/Social/Social";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.App}>
      <Head>
        <title>Adaji -Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar />
      <section id="home">
        <Hero />
        <Social />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
