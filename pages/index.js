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
        poster="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E412AE1A9527DD9D4B6DDCB089DCA8369DB54EB1E05AD65ADDA124B7E7830C97/scale?width=1200&aspectRatio=1.78&format=jpeg"
        data-setup=""
        loop
      >
        <source
          src="https://rs2.seedr.cc/ff_get/1181918094/Chip.n.Dale.Rescue.Rangers.2022.1080p.WEBRip.x265-RARBG.mp4?st=_AZUZgE_TCUE8n3L_NJ33g&e=1655051437"
          type="video/mp4"
        />
      </video>
      <>
        <Script src="https://vjs.zencdn.net/5.4.6/video.js"></Script>
      </>
    </div>
  );
}
