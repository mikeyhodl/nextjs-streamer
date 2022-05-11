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
        poster="https://see.news/wp-content/uploads/2021/07/1231-1024x512-1.jpg"
        data-setup=""
        loop
      >
        <source
          src="https://imdb-video.media-imdb.com/vi1637073689/1434659607842-pgv4ql-1633426737408.mp4?Expires=1652356789&Signature=NuDhJV5IFvEpeGuSQXE8U15vHjrwG5AOvV6x3hBEvHJpcSBzL06P7JdQLRPYaixjW5jpecaR5lnDiJ6y5GzqUIskPZG7EuOgwPsvdXboDsqwAMl4d62taoWG7FvdU0KUlrVcf2pNCrcbuQcEqvO0fFkvkS7qq5RWk5IzM0rHIGnHGLOSPqyADPazpCAIhi3rltBOz4xDC6bDO1PBtPkOw7H741YBsJQhgxyQW~OO9Up5vjiYa9au0WjOqJLgc3SYI3gWRjaQog1LufntLMMLFobxUrgq89fKkow670obb7NrlbPIIzTzz6vwCiQEcd-n6sbJ698SkgrlPgaUohnEeQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
          type="video/mp4"
        />
      </video>
      <>
        <Script src="https://vjs.zencdn.net/5.4.6/video.js"></Script>
      </>
    </div>
  );
}
