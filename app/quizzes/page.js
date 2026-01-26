"use client";
import { useState } from 'react';

const QUIZZES = [
    {
        id: 1,
        title: "London Landmarks",
        city: "London, UK",
        questions: [
            { q: "Which iconic clock tower is located in London?", a: ["Big Ben", "Eiffel Tower", "Leaning Tower"], correct: 0 },
            { q: "What is the name of the river that flows through London?", a: ["Nile", "Thames", "Amazon"], correct: 1 }
        ]
    },
    {
        id: 2,
        title: "NYC Skyscrapers",
        city: "New York, US",
        questions: [
            { q: "Which building was the tallest in NYC for 40 years?", a: ["Empire State", "Chrysler", "World Trade Center"], correct: 0 },
            { q: "In which borough is Central Park located?", a: ["Brooklyn", "Queens", "Manhattan"], correct: 2 }
        ]
    }
];

export default function QuizzesPage() {
    const [activeQuiz, setActiveQuiz] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const startQuiz = (quiz) => {
        setActiveQuiz(quiz);
        setCurrentQuestion(0);
        setScore(0);
        setShowResults(false);
    };

    const handleAnswer = (index) => {
        if (index === activeQuiz.questions[currentQuestion].correct) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < activeQuiz.questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    return (
        <main className="section-padding container" style={{ marginTop: '80px' }}>
            <h1 className="text-center mb-4">City Quizzes</h1>
            <p className="text-center mb-4" style={{ color: 'var(--color-gray-soft)' }}>
                Challenge yourself with trivia about the greatest cities in the UK and US.
            </p>

            {!activeQuiz ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
                    {QUIZZES.map((quiz) => (
                        <div key={quiz.id} className="social-card">
                            <span className="stat-badge">{quiz.city}</span>
                            <h3 className="mt-2 mb-2" style={{ marginTop: '15px' }}>{quiz.title}</h3>
                            <p className="mb-4" style={{ color: 'var(--color-gray-soft)' }}>
                                {quiz.questions.length} Questions • Level: Beginner
                            </p>
                            <button onClick={() => startQuiz(quiz)} className="btn-primary">Start Quiz</button>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <div className="social-card" style={{ maxWidth: '600px', margin: '40px auto' }}>
                        {!showResults ? (
                            <>
                                <h3>{activeQuiz.title}</h3>
                                <p className="mb-4" style={{ color: 'var(--color-primary)' }}>Question {currentQuestion + 1} of {activeQuiz.questions.length}</p>
                                <h4 className="mb-4">{activeQuiz.questions[currentQuestion].q}</h4>
                                <div style={{ display: 'grid', gap: '15px' }}>
                                    {activeQuiz.questions[currentQuestion].a.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(idx)}
                                            className="btn-outline"
                                            style={{ textAlign: 'left', textTransform: 'none' }}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center">
                                <h2>Quiz Completed!</h2>
                                <p className="mb-4" style={{ fontSize: '1.5rem', margin: '20px 0' }}>Your Score: {score} / {activeQuiz.questions.length}</p>
                                <button onClick={() => setActiveQuiz(null)} className="btn-primary">Back to Quizzes</button>
                            </div>
                        )}
                    </div>

                    {/* Ad Section Below Quiz */}
                    <section style={{ padding: '40px 0', textAlign: 'center' }}>
                        <div className="container">
                            <script async data-cfasync="false" src="https://pl28573155.effectivegatecpm.com/bf60bec2f0f2dd882966e7f011321553/invoke.js"></script>
                            <div id="container-bf60bec2f0f2dd882966e7f011321553"></div>
                        </div>
                    </section>
                </>
            )}

            {/* Bottom Ad Script */}
            <section style={{ padding: '40px 0', textAlign: 'center' }}>
                <script async data-cfasync="false" src="https://pl28573155.effectivegatecpm.com/bf60bec2f0f2dd882966e7f011321553/invoke.js"></script>
                <div id="container-bf60bec2f0f2dd882966e7f011321553"></div>
            </section>
        </main>
    );
}
