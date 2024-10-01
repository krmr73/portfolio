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
          <p>初めまして。岩橋七海と申します。</p>
        </div>
      </div>
    </section>
  );
};

export default About;
