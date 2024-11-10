import About from "../components/About";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Works from "../components/Works";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default Home;
