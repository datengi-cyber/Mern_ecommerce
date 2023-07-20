import { useState } from "react"

export default function QuestionsAnswer({ question, answer }) {
    const [show, setShow] = useState(false)

    return (
        <div className="questions_answers"  onClick={() => setShow(!show)}>
            <div className="flex">
                <h1 className="question small-font">{question}</h1>
                <img src="images/icon-arrow-down.svg" 
                className={show?"arrow-down rotate":"arrow-down"}></img>
            </div>

            {show && <p>{answer}</p>}

        </div>
    )

}



