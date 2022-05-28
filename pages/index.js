import "swiper/css";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  const text = "//Working in the shadows to turn your_";
  const swiperBreakpoints = {
    600: {
      slidesPerView: 2,
      slidesOffsetBefore: 45,
      slidesOffsetAfter: 45,
    },
    768: {
      slidesPerView: 2.5,
      slidesOffsetBefore: 45,
      slidesOffsetAfter: 45,
    },
    900: {
      slidesPerView: 3,
      slidesOffsetBefore: 45,
      slidesOffsetAfter: 45,
    },
    1200: {
      slidesPerView: 3.5,
      slidesOffsetBefore: 45,
      slidesOffsetAfter: 45,
    },
    1400: {
      slidesPerView: 4,
      slidesOffsetBefore: 130,
      slidesOffsetAfter: 130,
    },
    1700: {
      slidesPerView: 5,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
  };
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
          <div className={styles.serviceSlider}>
            <Swiper
              spaceBetween={40}
              slidesPerView={1.4}
              centerInsufficientSlides={true}
              grabCursor={true}
              slidesOffsetBefore={45}
              slidesOffsetAfter={45}
              breakpoints={swiperBreakpoints}
            >
              <SwiperSlide>
                {" "}
                <article className={`${styles.service} ${styles.first}`}>
                  <span>
                    Marketing &amp; <br />
                    Strategic Consulting
                  </span>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <article className={styles.service}>
                  <span>
                    Web3
                    <br />
                    Integration
                  </span>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <article className={styles.service}>
                  <span>
                    Full Project <br /> Launch Plan
                  </span>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <article className={styles.service}>
                  <span>
                    Smart &amp; Token <br />
                    Contract Development
                  </span>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <article className={styles.service}>
                  <span>
                    Community <br />
                    Management
                  </span>
                </article>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </main>
    </>
  );
}
