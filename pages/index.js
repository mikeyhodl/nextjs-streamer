import styles from '../styles/Home.module.css';
import Script from 'next/script';

export default function Home() {
  return (
    <div className={styles.container}>
      <head>
        <title>Strimiz</title>
        <link
          rel="stylesheet"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Questrial"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdn.plyr.io/3.6.12/plyr.css" />
      </head>
      <video
        id="my-video"
        class="video-js"
        controls
        preload="auto"
        poster="https://i.ytimg.com/vi/COXEqHGrD1k/maxresdefault.jpg"
        data-setup=""
        loop
      >
        <source
          src="https://de21.seedr.cc/ff_get/1199390532/Bolt.2008.1080p.BluRay.x264.YIFY.mp4?st=-s5Itnw4YILk-4s-8zkWyQ&e=1657385455"
          type="video/mp4"
        />
      </video>
      <>
        <Script src="https://vjs.zencdn.net/5.4.6/video.js"></Script>
      </>
    </div>
  );
}
