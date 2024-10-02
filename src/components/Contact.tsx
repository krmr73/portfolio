"use client"; // クライアントコンポーネントとして宣言

import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai"; // メールアイコンをインポート
import { FaGithub } from "react-icons/fa"; // GitHub アイコンをインポート

import styles from "../styles/Contact.module.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("送信中...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({ name: "", email: "", message: "" });
      setStatus("ご意見ありがとうございました！");
    } else {
      setStatus("送信に失敗しました。もう一度お試しください。");
    }
  };

  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.contactItem}>
        <AiOutlineMail className={styles.icon} />
        <p className={styles.text}>n.iwahashi2213544@gmail.com</p>
      </div>

      <div className={styles.contactItem}>
        <a
          href="https://github.com/krmr73"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.icon} />
          <p className={styles.text}>krmr73</p>
        </a>
      </div>

      {/* 問い合わせフォーム */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Share Your Thoughts</h3>
        <p className={styles.description}>
          このポートフォリオに関するご意見やアドバイス等、いただけるとありがたいです。
          （例：もっと知りたい情報・あったらいい機能・見やすさなど）
        </p>
        <div className={styles.formGroup}>
          <label htmlFor="name">お名前（任意）</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">メール（任意）</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your-email@example.com"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">ご意見・アドバイス</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          送信する
        </button>
        {status && <p className={styles.status}>{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
