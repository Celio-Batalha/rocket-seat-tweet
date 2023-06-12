import { ArrowsClockwise, ChatCircle, Heart } from '@phosphor-icons/react'
import './Tweet.css'
import { Link } from 'react-router-dom'

interface propsTweets {
   content: string
}

export function Tweet(props: propsTweets) {
   return (
      <div className="container">
         <Link className="tweet" to="/status">
            <img src="https://github.com/celio-batalha.png" alt="Celio Batalha" />
            <div className="tweet-content">
               <div className="tweet-content-header">
                  <strong>Celio Batalha</strong>
                  <span>@celiobatalha</span>
               </div>
               <p>
                  {/* Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br />
                  <br />
                  ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br />
                  ✅ npm build: De 120s para 22s<br />
                  <br />
                  Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥 */}
                  {props.content}
               </p>
               <div className="tweet-content-footer">
                  <button type="button">
                     <ChatCircle /> 20
                  </button>
                  <button type="button">
                     <ArrowsClockwise /> 20
                  </button>
                  <button type="button">
                     <Heart /> 20
                  </button>
               </div>
            </div>
         </Link>
      </div>
   )

}