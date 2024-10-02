import About from "../components/About";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default Home;
