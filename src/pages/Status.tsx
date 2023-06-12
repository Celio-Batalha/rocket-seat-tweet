import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'

export function Status() {

   const [newAnswers, setNewAnswers] = useState('')
   const [answers, setAnswers] = useState([
      'Concordo...',
      'Olha, ta ficando legal',
      'Parabens, ta quase lá'
   ])
 
   function createNewAnswers(event: FormEvent) {
       event.preventDefault()
 
       setAnswers([newAnswers, ...answers])
       setNewAnswers('')
 
   }
   return (
      <main className="status">
         <Header title="Tweet"/>

         
         <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sit ducimus, fugit nam, modi architecto est nihil tempora ea quod aperiam dignissimos ipsum cupiditate magni ratione quis voluptatibus quisquam perferendis!" />

         <Separator />

         <form onSubmit={createNewAnswers} className="answer-tweet-form" action="">
            <label htmlFor="tweet">
               <img src="https://github.com/celio-batalha.png" alt="Celio Batalha" />
               <textarea id="tweet" placeholder="Tweet your answer"
               value={newAnswers}
               onChange={(event) => {
                  setNewAnswers(event.target.value)
               }} />
            </label>
            <button type="submit">Answer</button>
         </form>

         {answers.map(answer => {
         return <Tweet key={answer} content={answer} />
         })}
    </main>
   )
}