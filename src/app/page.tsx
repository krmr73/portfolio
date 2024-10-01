import styles from "@/styles/page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>

      <section>
        <h1>About</h1>
        <div>
          <h2>About Me</h2>
          <Image
            src="/images/profile.PNG"
            layout="responsive"
            width={500}
            height={500}
            style={{ maxWidth: "300px", height: "auto" }}
            alt="profile"
          />
          <p>初めまして。岩橋七海と申します。</p>
        </div>

        <div>
          <h2>Skills</h2>
          <ul>
            <li>
              <strong>Programming Languages:</strong> Python, C, C++, Java,
              JavaScript, TypeScript, Julia
            </li>
            <li>
              <strong>Frontend:</strong> React, HTML, CSS
            </li>
            <li>
              <strong>Backend & Database:</strong> SQL
            </li>
            <li>
              <strong>Data Science & AI:</strong> OpenAI API (LLM), Processing
            </li>
            <li>
              <strong>Cloud Platforms:</strong> GCP, AWS
            </li>
            <li>
              <strong>Other Tools:</strong> Figma
            </li>
          </ul>
        </div>

        <div>
          <h2>Certifications</h2>
          <ul>
            <li>基本情報技術者</li>
            <li>応用情報技術者</li>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <p>email: n.iwahashi2213544@gmail.com</p>
          <a href="https://github.com/krmr73">GitHub</a>
        </div>
      </section>
    </main>
  );
}
