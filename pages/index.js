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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/c_scale,w_1280/v1647843623/wallhaven-83g6zy_i52wko.png"
        data-setup=""
        loop
      >
        <source
          src="https://imdb-video.media-imdb.com/vi1032176153/1434659607842-pgv4ql-1652199562792.mp4?Expires=1652354731&Signature=LGRrC4UP~lpEqhvZawVJPySbkXnQcJh5AbqH5rGVhe3THcTNQIjzWmR2TwlO1Xyg04OGwtD9bgvZcyRaVCwDjDPnCs1uha4NZom63vXEjBpkL2sWu~r5scHyd13Osz21AGHCsnegptso3c7xOuctK3AjpSHNg0IBqdPCM7jtaXVU1jADr4RC-ynR3TyqDnuO8X5TnFkSTnDdLjoWNDWLgkrqRjHkBmzVjSbg--lFNlebVqKIRfSSNLNsSkCj5B3sh47T3rfUGLDjexresR9JZblveBlUQy2rAx1c3CIFa7zNWbFSub0CxCrImF3ryg0Ssl1rTPIA3JWh8YU87YpSlA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
          type="video/mp4"
        />
      </video>
      <>
        <Script src="https://vjs.zencdn.net/5.4.6/video.js"></Script>
      </>
    </div>
  );
}
