import React from "react";
import styles from "../styles/Works.module.css";

// Worksセクションで使用するプロジェクトデータの型
type Work = {
  title: string;
  period: string;
  image: string;
  techStack: string[];
  description: string;
  links?: {
    type: "論文" | "GitHub" | "デモサイト";
    title?: string;
    url: string;
  }[]; // 複数のリンクを持てるように
};

// プロジェクトデータの例
const worksData: Work[] = [
  {
    title: "社会的ネットワークを捉える数理モデル",
    period: "2023年",
    image: "/images/works/urn_model.png",
    techStack: ["Python", "Julia"],
    description:
      "社会的ネットワークにおける多様な相互作用を捉えるエージェントベースモデルに関する研究（チーム開発）",
    links: [
      {
        type: "論文",
        title:
          "An Agent-based Model for Capturing Diverse Interactions in Social Networks",
        url: "https://cir.nii.ac.jp/crid/1050580837530681984",
      },
      {
        type: "論文",
        title: "Simulating emergence of novelties using agent-based models",
        url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0294228",
      },
      {
        type: "GitHub",
        url: "https://github.com/tsukuba-websci/MPS-TOM-Urnmodel",
      },
    ],
  },
  {
    title: "LLMを用いた画像アノテーション生成",
    period: "2023年",
    image: "/images/works/anotation.png",
    techStack: ["Python", "OpenAI API"],
    description: "LLMを用いた画像アノテーション生成（チーム開発）",
    links: [
      {
        type: "論文",
        title: "Can Generative Agents Predict Emotion?",
        url: "https://arxiv.org/abs/2402.04232",
      },
    ],
  },
  {
    title: "GenSQLを用いたテーブルデータ分析",
    period: "2024年",
    image: "/images/works/genSQL.png",
    techStack: ["Python", "GenSQL"],
    description: "GenSQLを適用し、テーブルデータの分析を行う",
  },
  {
    title:
      "AI Scientistのネットワーク生成モデル適用 における性能評価と改善提案",
    period: "2024年",
    image: "/images/works/ai_scientist.png",
    techStack: ["Python", "OpenAI API"],
    description:
      "ネットワーク生成モデルの新しいアイデアの提案をAI Scientist によって行い、生成されるアイデアの品質を改善する",
  },
  {
    title: "Nanami Iwahashi Portfolio",
    period: "2024年",
    image: "/images/works/portfolio.png",
    techStack: ["React", "Next.js", "TypeScript", "HTML/CSS"],
    description: "このポートフォリオサイト。",
    links: [{ type: "GitHub", url: "https://github.com/krmr73/portfolio" }],
  },
  // 他のプロジェクトを追加
];

// Worksコンポーネント
const Works: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Works</h2>
      <div className={styles.grid}>
        {worksData.map((work, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{work.title}</h3>
            <img src={work.image} alt={work.title} className={styles.image} />
            <p className={styles.period}>{work.period}</p>
            <p className={styles.description}>{work.description}</p>
            <ul className={styles.techList}>
              {work.techStack.map((tech, i) => (
                <li key={i} className={styles.techItem}>
                  {tech}
                </li>
              ))}
            </ul>

            <div className={styles.links}>
              {work.links?.map((link, i) => (
                <div key={i} className={styles.linkItem}>
                  <span className={styles.linkType}>{link.type}:</span>{" "}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link.title || link.type}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
