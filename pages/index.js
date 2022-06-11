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
        poster="https://www.techaiapp.com/wp-content/uploads/2022/04/%E2%80%98Chip-%E2%80%98N-Dale-Rescue-Rangers-Gets-New-Trailer-Poster.jpg"
        data-setup=""
        loop
      >
        <source
          src="https://rs3.seedr.cc/ff_get/1181920267/Chip.n.Dale.Rescue.Rangers.2022.WEBRip.x264-ION10.mp4?st=uDTcH9OqtD15QNW02TtV0g&e=1655055123"
          type="video/mp4"
        />
      </video>
      <>
        <Script src="https://vjs.zencdn.net/5.4.6/video.js"></Script>
      </>
    </div>
  );
}
