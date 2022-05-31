import "swiper/css";
import "swiper/css/navigation";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function Home() {
  const text = "//Working in the shadows to turn your_";
  const swiperBreakpoints = {
    600: {
      slidesPerView: 2,
      slidesOffsetBefore: 45,
      slidesOffsetAfter: 45,
    },
    860: {
      slidesPerView: 2.5,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
    1000: {
      slidesPerView: 3,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
    1200: {
      slidesPerView: 3.5,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
    1500: {
      slidesPerView: 4,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
    1800: {
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
                  <li className={styles.navigationItem}>
                    <a
                      href="https://forms.gle/osQvb3si2dukttMW6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Contact
                    </a>
                  </li>
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
                Our formula. Your future.
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
            <p className={styles.missionStatement}>Our formula. Your future.</p>
          </div>
          <div className={styles.gradientLine}></div>
          <p className={styles.comingSoonText}>/SHADOWPASS.coming soon</p>
          <div className={styles.sliderOuter}>
            <div className={styles.serviceSlider}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={1.4}
                centerInsufficientSlides={true}
                grabCursor={true}
                slidesOffsetBefore={45}
                slidesOffsetAfter={45}
                breakpoints={swiperBreakpoints}
                navigation
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
        </div>
      </main>
    </>
  );
}
