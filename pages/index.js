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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1654934371/EG18buCUcAM49GC_uvkn51.jpg"
        data-setup=""
        loop
      >
        <source
          src="https://rs18.seedr.cc/ff_get/1181675861/Garfield.A.Tail.Of.Two.Kitties.2006.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4?st=SUsWhjOosb1fKKp0Gpg08A&e=1655020473"
          type="video/mp4"
        />
      </video>
      <>
        <Script src="https://vjs.zencdn.net/5.4.6/video.js"></Script>
      </>
    </div>
  );
}
