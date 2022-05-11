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
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/weknow-creators/image/upload/v1646741025/nficon2016_vtrp5i_g2oels.png"
        />
        <link rel="stylesheet" href="https://cdn.plyr.io/3.6.12/plyr.css" />
      </head>
      <video
        id="my-video"
        class="video-js"
        controls
        preload="auto"
        poster="https://www.heavenofhorror.com/wp-content/uploads/2022/05/Candy-2022-review-hulu.jpg"
        data-setup=""
        loop
      >
        <source
          src="https://nw13.seedr.cc/ff_get/1162424306/Candy.2022.S01E03.WEB.x264-TORRENTGALAXY.mkv?st=KHkuiUyZkCBy49US2oxWiQ&e=1652365255"
          type="video/mp4"
        />
      </video>
      <>
        <Script src="https://vjs.zencdn.net/5.4.6/video.js"></Script>
      </>
    </div>
  );
}
