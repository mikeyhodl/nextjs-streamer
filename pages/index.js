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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1653663273/scale_vpdzyr.jpg"
        data-setup=""
        loop
      >
        <source
          src="https://nw7.seedr.cc/ff_get/1172198405/Rio.2.2014.1080p.BluRay.x264.YIFY.mp4?st=SKBVNwU1ov4NDKLSSTkvGg&e=1653749814"
          type="video/mp4"
        />
      </video>
      <>
        <Script src="https://vjs.zencdn.net/5.4.6/video.js"></Script>
      </>
    </div>
  );
}