import Image from "next/image";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.profileContainer}>
        <Image
          src="/images/profile.jpeg"
          width={150}
          height={150}
          className={styles.profileImage}
          alt="profile"
        />
        <div className={styles.aboutText}>
          <h2>About Me</h2>
          <p>はじめまして。岩橋七海といいます。</p>
          <p>
            情報工学を学んでいる大学院生です。ユーザーやお客様にとって、本当に価値のあるものを提供できるエンジニアを目指し、就職活動をしています。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
