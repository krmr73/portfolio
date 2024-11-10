import styles from "../styles/Skills.module.css";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "Python",
        level: 4,
        description:
          "研究に利用（数理モデル・データ分析・可視化）、授業（強化学習）",
      },
      { name: "C", level: 3, description: "Arduinoの電子工作に利用" },
      { name: "C++", level: 2, description: "競技プログラミングの授業で利用" },
      { name: "Java", level: 2, description: "授業でゲームAIの作成に利用" },
      { name: "JavaScript", level: 2, description: "Webアプリの作成に利用" },
      {
        name: "TypeScript",
        level: 2,
        description: "webアプリの作成に利用（サマーインターン・本サイト）",
      },
      { name: "Julia", level: 1, description: "研究に利用" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        level: 2,
        description: "webアプリの作成に利用（サマーインターン・本サイト）",
      },
      { name: "HTML/CSS", level: 2, description: "Webアプリの作成に利用" },
    ],
  },
  {
    category: "Database",
    skills: [{ name: "SQL", level: 1, description: "授業や研究で少し利用" }],
  },
  {
    category: "Cloud Platforms",
    skills: [
      {
        name: "GCP",
        level: 1,
        description: "研究でCompute Engine, Cloud Storageを利用",
      },
      {
        name: "AWS",
        level: 1,
        description: "サマーインターンでサーバ構築、データ分析を少し体験",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 2, description: "基本的な操作が可能" },
      { name: "Docker", level: 1, description: "研究で少し利用" },
      {
        name: "figma",
        level: 2,
        description: "論文やプレゼンに使う図の作成に利用",
      },
    ],
  },
];

const qualifications = [
  { name: "基本情報技術者(FE)" },
  { name: "応用情報技術者(AP)" },
];

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h2>Skills</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className={styles.skillCategory}>
          <h3>{category.category}</h3>
          <div className={styles.skillsContainer}>
            {category.skills.map((skill, index) => (
              <div key={index} className={styles.skill}>
                <span className={styles.skillName}>{skill.name}</span>
                <p className={styles.skillDescription}>{skill.description}</p>
                <div className={styles.levelBar}>
                  <div
                    className={`${styles.levelIndicator} ${styles[`level${skill.level}`]}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className={styles.skillCategory}>
        <h3>Qualifications</h3>
        <div className={styles.qualificationContainer}>
          {qualifications.map((qualification, index) => (
            <div key={index}>
              <span className={styles.skillName}>{qualification.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
