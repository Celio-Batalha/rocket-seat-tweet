import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'

const tweets = [
   "Primeiro tweert",
   "Vamos tweetar",
   "Tweet feito em react"
 ]

export function Timeline() {

   return (
      <main className="timeline">
      <Header title="Home"/>

      <form className="new-tweet-form" action="">
        <label htmlFor="tweet">
          <img src="https://github.com/celio-batalha.png" alt="Celio Batalha" />
          <textarea id="tweet" placeholder="What's happening" />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />
      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
   )

}