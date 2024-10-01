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
          <p>はじめまして。岩橋七海と申します。</p>
          <p>
            情報工学を学んでいる大学院生です。ユーザーやお客様にとっての価値にこだわれるエンジニアを目指して就職活動を行っています。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
