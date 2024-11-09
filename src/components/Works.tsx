"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

import styles from "../styles/Works.module.scss";

type Link = {
  type: "論文" | "GitHub" | "デモサイト";
  title?: string;
  url: string;
};

type Work = {
  title: string;
  period: string;
  image: string;
  techStack: string[];
  description: string;
  category: "research" | "other";
  links?: Link[];
};

const worksData: Work[] = [
  {
    title: "社会的ネットワークを捉える数理モデル",
    period: "2023年",
    image: "/images/works/urn_model.png",
    techStack: ["Python", "Julia"],
    description:
      "社会的ネットワークにおける多様な相互作用を捉えるエージェントベースモデルに関する研究（チーム開発）",
    category: "research",
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
    category: "research",
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
    category: "research",
  },
  {
    title: "AI Scientistで生成されるアイディア改善",
    period: "2024年",
    image: "/images/works/ai_scientist.png",
    techStack: ["Python", "OpenAI API"],
    description:
      "ネットワーク生成モデルの新しいアイデアの提案をAI Scientist によって行い、生成されるアイデアの品質を改善する",
    category: "research",
  },
  {
    title: "Nanami Iwahashi Portfolio",
    period: "2024年",
    image: "/images/works/portfolio.png",
    techStack: ["React", "Next.js", "TypeScript", "HTML/CSS"],
    description: "このポートフォリオサイト。",
    category: "other",
    links: [{ type: "GitHub", url: "https://github.com/krmr73/portfolio" }],
  },
];

const Works: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Works</h2>
      <WorkSection
        title="Research"
        works={worksData}
        category="research"
        onSelectWork={setSelectedWork}
      />
      <WorkSection
        title="Others"
        works={worksData}
        category="other"
        onSelectWork={setSelectedWork}
      />
      {selectedWork && (
        <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </section>
  );
};

const WorkSection: React.FC<{
  title: string;
  works: Work[];
  category: Work["category"];
  onSelectWork: (work: Work) => void;
}> = ({ title, works, category, onSelectWork }) => {
  const filteredWorks = works.filter((work) => work.category === category);

  return (
    <>
      <h3 className={styles.subtitle}>{title}</h3>
      <div className={styles.grid}>
        {filteredWorks.map((work, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => onSelectWork(work)}
          >
            <h3 className={styles.cardTitle}>{work.title}</h3>
            <Image
              src={work.image}
              alt={work.title}
              className={styles.image}
              width={1000}
              height={600}
              quality={90}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const WorkModal: React.FC<{ work: Work; onClose: () => void }> = ({
  work,
  onClose,
}) => {
  const paperLinks = work.links?.filter((link) => link.type === "論文") || [];
  const githubLink = work.links?.find((link) => link.type === "GitHub");

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <h3 className={styles.modalTitle}>{work.title}</h3>
        <Image
          src={work.image}
          alt={work.title}
          className={styles.modalImage}
          width={1000}
          height={600}
          quality={90}
        />
        <p className={styles.modalPeriod}>{work.period}</p>
        <p className={styles.modalDescription}>{work.description}</p>

        {paperLinks.length > 0 && (
          <div className={styles.publishedSection}>
            <h4>Published</h4>
            <ul className={styles.publishedList}>
              {paperLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link.title || "View Paper"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.techSection}>
          <h4>Tech Stack</h4>
          <ul className={styles.techList}>
            {work.techStack.map((tech, i) => (
              <li key={i} className={styles.techItem}>
                {tech}
              </li>
            ))}
            {githubLink && (
              <li className={styles.techItem}>
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubIcon}
                >
                  <FaGithub size={24} />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Works;
