"use client"; // クライアントコンポーネントとして宣言

import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai"; // メールアイコンをインポート
import { FaGithub } from "react-icons/fa"; // GitHub アイコンをインポート

import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({ name: "", email: "", message: "" });
      setStatus("Message sent successfully!");
    } else {
      setStatus("Error sending message.");
    }
  };

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
          <p>GitHub</p>
        </a>
      </div>

      {/* 問い合わせフォーム */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Send Message
        </button>
        {status && <p className={styles.status}>{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
