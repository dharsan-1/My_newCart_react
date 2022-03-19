import ReactPlayer from 'react-player'
import {TiArrowBack} from 'react-icons/ti'
import './index.css'

const Home2 = props => {
  const onClickBack = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="displayHomeCon">
      <div className="container_2">
        <h1 className="home_class">
          we are currently developing this website...stay tuned.our website to
          shatter the streak!!....until watch some news!!!
        </h1>
      </div>
      <div className="videoCon">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=lyeyoqwXm5o"
          controls="true"
          width="900px"
          height="700px"
        />
      </div>
      <div className="buttonCon">
        <button className="button" type="button" onClick={onClickBack}>
          <span>
            <TiArrowBack />
          </span>
          go back
        </button>
      </div>
    </div>
  )
}

export default Home2
