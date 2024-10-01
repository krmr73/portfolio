import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <p>email: n.iwahashi2213544@gmail.com</p>
      <a href="https://github.com/krmr73" className={styles.link}>
        GitHub
      </a>
    </section>
  );
};

export default Contact;
