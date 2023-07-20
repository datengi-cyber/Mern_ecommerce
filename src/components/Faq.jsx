import { useState } from "react";
import QuestionsAnswer from "./accordion/QuestionsAnswer";

export default function FAQ() {
    const questions = [
        {
            question: "Are this products real?",
            answer:
                "I wish they were real :(",
        },

        {
            question: "What are the features in the website?",
            answer:
                "It have dynamic routing, skeleton loading on the images, cart functionality, sorting and searching functionality.",
        },

        {
            question: "How did you make this?",
            answer:
                "I made this with pure react and vanila css. I havent use any frameworks here.",
        },

        {
            question: "Is this your first project?",
            answer:
                "Yes this is my first react project which have helped me a lot.",
        },
        {
            question: "How long did it take to make this site?",
            answer:
                "It took me 3 days to make this site.",
        },
    ];

  
    return (
        <>
            <dii className="faq-section">
                <div className="faq-container">
                    <div className="faq-contents">
                        <div className="faq-title">
                        <h1>FAQ</h1>
                        </div>
                      
                        {questions.map((question) => {
                            return (
                              <QuestionsAnswer question = {question.question} answer = {question.answer}/>
                            )
                        })}
                    </div>
                </div>
            </dii>
        </>
    );
}
