import styles from "../styles/Skills.module.css";

const skills = [
  { name: "Python", level: 3 },
  { name: "C", level: 3 },
  { name: "C++", level: 2 },
  { name: "Java", level: 1 },
  { name: "JavaScript", level: 1 },
  { name: "TypeScript", level: 1 },
  { name: "Julia", level: 1 },
  { name: "React", level: 1 },
  { name: "HTML", level: 1 },
  { name: "CSS", level: 1 },
  { name: "Processing", level: 1 },
  { name: "SQL", level: 1 },
];

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
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
    </section>
  );
};

export default Skills;
