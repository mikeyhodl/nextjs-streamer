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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1653727178/SagjlE_dtip3s.jpg"
        data-setup=""
        loop
      >
        <source
          src="https://imdb-video.media-imdb.com/vi1425785369/1434659607842-pgv4ql-1653593128777.mp4?Expires=1654262423&Signature=rOQr9xvH9JXUUSRAsH16EsJ1qWTaCy9pQYzHypaISNHfO9joeeReS2qMvSyt-HLv~IzrylSivc2pjgT4YHorqfrmJfb7I1NRUd-Nb~qjz32e~TrGI4fN-YWeKcYkI1EzjNtkM2d52bpsW8YZ-ycEhhGpBfOFfwo3H6kyFHYJDlmsccuoYhnGG1BJjvzhQlIV-0JMYdRIYFMX6a1d6jNrIiM9dDjHIroI3RjP7SuDgGpQ6xAPwbdIrf3UjMJo7dPdSJ9o1IqYYwRhefOvijz-GXtRkDTzPRTqtbGnAoA~S4i~WKXsMP4MOCVSfkix8nAu-5rzjf8EnlC54NCAR8nAYA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
          type="video/mp4"
        />
      </video>
      <>
        <Script src="https://vjs.zencdn.net/5.4.6/video.js"></Script>
      </>
    </div>
  );
}
