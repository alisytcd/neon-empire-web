import spotifyLogo from '../assets/images/spotify_logo.png'
import instagramLogo from '../assets/images/instagram_logo.svg'
import facebookLogo from '../assets/images/facebook_logo.png'
import youtubeLogo from '../assets/images/youtube_logo.svg'

function Footer() {

  return (
    <footer className="footer">
      <a href="https://open.spotify.com/artist/26TbTM0UfjA0zStRITv6OU" target="_blank">
        <img src={spotifyLogo} />
      </a>

      <a href="https://www.instagram.com/neonempireofficial/" target="_blank">
        <img src={instagramLogo} />
      </a>

      <a href="https://www.facebook.com/neonempireofficial/" target="_blank">
        <img src={facebookLogo} />
      </a>

      <a href="https://www.youtube.com/@NeonEmpireOfficial/featured" target="_blank">
        <img src={youtubeLogo} />
      </a>

    </footer>
  )

}

export default Footer