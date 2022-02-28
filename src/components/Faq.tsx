import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from '../styles/components/Faq.module.css';
import { FaqScroll } from './ScrollReveal';

interface Questions {
  id: number;
  title: string;
  answer: string;
  isActive: boolean;
}

export default function Faq() {
  const [questions, setQuestions] = useState<Questions[]>([
    {
      id: 1,
      title: 'Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isActive: false,
    },
    {
      id: 2,
      title: 'O que está incluído no Xbox Series X?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isActive: false,
    },
    {
      id: 3,
      title: 'Como sei se minha TV é compatível com 4K?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isActive: false,
    },
  ]);

  const handleOpenQuestion = (questionId: Number) => {
    const newQuestion = questions.map((question) => {
      if (question.id == questionId) {
        return { ...question, isActive: !question.isActive };
      } else {
        return question;
      }
    });
    setQuestions(newQuestion);
  };

  return (
    <FaqScroll>
      <div className={styles.faqContainer}>
        <h2>
          Perguntas <span>frenquentes</span>
        </h2>

        <div className={styles.questions}>
          {questions.map((question) => (
            <div key={question.id}>
              <div onClick={() => handleOpenQuestion(question.id)}>
                <h4>{question.title}</h4>
                <div className={`${styles.arrow} ${question.isActive ? 'active' : ''}`}>
                  {question.isActive ? (
                    <IoIosArrowUp className={styles.iconUp} />
                  ) : (
                    <IoIosArrowDown className={styles.icon} />
                  )}
                </div>
              </div>
              {question.isActive && <p>{question.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </FaqScroll>
  );
}
