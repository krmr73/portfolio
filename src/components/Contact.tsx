import { FaGithub } from "react-icons/fa"; // GitHub アイコンをインポート
import { AiOutlineMail } from "react-icons/ai"; // メールアイコンをインポート

import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.contactItem}>
        <AiOutlineMail className={styles.icon} />
        <p className={styles.email}>n.iwahashi2213544@gmail.com</p>
      </div>

      <div className={styles.contactItem}>
        <a
          href="https://github.com/krmr73"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.icon} />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
