import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
export default function Home() {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [draggedDistance, setDragDistance] = useState(0);
  const text = "//Working in the shadows to turn your_";
  function onDrag(event, info) {
    let x = info.offset.x;
    const percentage = x / trackWidth;
    let dragAmount = width * percentage;
    if (dragAmount > width) {
      dragAmount = width;
    } else if (dragAmount < 10) {
      dragAmount = 0;
    }
    setDragDistance(dragAmount);
  }
  useEffect(() => {
    setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
    setTrackWidth(trackRef.current.offsetWidth);
  }, []);

  return (
    <>
      <Head>
        <title>Shadow Labs</title>
        <meta
          name="description"
          content="Working in the shadows to turn your vision into reality."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.topContainer}>
            <div className={styles.desktopInfoContainer}>
              <nav className={styles.contactNavigation}>
                <ul>
                  <li className={styles.navigationItem}>Contact</li>
                  <li className={styles.navigationItem}>
                    <a
                      href="https://twitter.com/_shadowlabs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className={styles.navigationItem}>
                    <a href="#" target="_blank" rel="noreferrer">
                      Discord
                    </a>
                  </li>
                </ul>
              </nav>
              <p className={`${styles.missionStatement} ${styles.desktop}`}>
                {text}
                <span className={styles.highlight}>vision into reality.</span>
              </p>
              <p className={`${styles.comingSoonText} ${styles.desktop}`}>
                /SHADOWPASS.coming soon
              </p>
            </div>
            <div className={styles.logoContainer}>
              <Image
                src={"/logo.svg"}
                width={957}
                height={600}
                layout={"intrinsic"}
                alt={"Shadow Labs Logo"}
              />
            </div>
            <p className={styles.missionStatement}>
              Working in the shadows to turn your{" "}
              <span className={styles.highlight}>vision into reality.</span>
            </p>
          </div>
          <div className={styles.gradientLine}></div>
          <p className={styles.comingSoonText}>/SHADOWPASS.coming soon</p>
          <div className={styles.serviceSlider} ref={sliderRef}>
            <motion.div
              className={styles.innerSlider}
              style={{
                transform: `translateX(-${draggedDistance}px)`,
              }}
            >
              <article className={styles.service}>
                <span>
                  Marketing &amp; <br />
                  Strategic Consulting
                </span>
              </article>
              <article className={styles.service}>
                <span>
                  Web3
                  <br />
                  Integration
                </span>
              </article>
              <article className={styles.service}>
                <span>
                  Full Project <br /> Launch Plan
                </span>
              </article>
              <article className={styles.service}>
                <span>
                  Smart &amp; Token <br />
                  Contract Development
                </span>
              </article>
              <article className={styles.service}>
                <span>
                  Community <br />
                  Management
                </span>
              </article>
            </motion.div>
            <div className={styles.track} ref={trackRef}>
              <motion.div
                className={styles.thumb}
                drag="x"
                dragConstraints={{
                  right: trackWidth - 5,
                  left: 0,
                }}
                dragElastic={0}
                dragPropagation
                dragMomentum={true}
                onDrag={(event, info) => onDrag(event, info)}
              ></motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
