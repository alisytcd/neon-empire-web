
function Music() {
  return (
    <div className="music">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wSTGgCdqPQA?si=62QijZP7Jilo5CTt"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bSfvROWYnNk?si=GAy1jz2wsbhzg-66"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Thb5yV6lNTk?si=a025a5qXGVYNYw-x"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <a href="https://www.youtube.com/@NeonEmpireOfficial/videos"
        className="moreMusicButton"
        target="_blank">
        More Music Videos
      </a>

    </div>
  )
}

export default Music