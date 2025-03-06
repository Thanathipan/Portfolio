"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "./../ui/card";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.headingContainer}
        >
          <h2 className={styles.heading}>
            About{" "}
            <span className={styles.highlight}>Me</span>
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            Get to know more about me, my background, and what drives me as a developer.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.imageContainer}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/profile.jpg"
                alt="Thanathipan"
                fill
                className={styles.profileImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.circleBottom}></div>
            <div className={styles.circleTop}></div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className={styles.textContainer}
          >
            <h3 className={styles.subHeading}>Full-Stack Developer</h3>
            <p className={styles.text}>
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I specialize in building robust and scalable applications using Next.js, React, 
              TypeScript, and Node.js. With a strong foundation in both frontend and backend, 
              I create seamless user experiences while ensuring solid architecture.
            </p>

            <p className={`${styles.text} ${styles.hiddenOnDesktop}`}>
              My journey in software development has equipped me with a problem-solving mindset 
              and attention to detail. I'm constantly learning and adapting to new technologies 
              to deliver the best solutions for complex challenges.
            </p>

            {/* Info Cards */}
            <div className={styles.cardGrid}>
              <InfoCard title="Experience" content="Full-Stack Developer" />
              <InfoCard title="Education" content="Computer Science" />
              <InfoCard title="Location" content="Remote" />
              <InfoCard title="Languages" content="English" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Reusable Info Card Component
function InfoCard({ title, content }: { title: string; content: string }) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.cardText}>{content}</p>
      </CardContent>
    </Card>
  );
}
