import styles from "../styles/Skills.module.css";
// import styles from "../styles/global.scss";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 3 },
      { name: "C", level: 3 },
      { name: "C++", level: 2 },
      { name: "Java", level: 1 },
      { name: "JavaScript", level: 1 },
      { name: "TypeScript", level: 1 },
      { name: "Julia", level: 1 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 1 },
      { name: "HTML", level: 1 },
      { name: "CSS", level: 1 },
    ],
  },
  {
    category: "Database",
    skills: [{ name: "SQL", level: 1 }],
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "GCP", level: 1 },
      { name: "AWS", level: 1 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 2 },
      { name: "Docker", level: 1 },
      { name: "figma", level: 1 },
    ],
  },
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
    </section>
  );
};

export default Skills;
