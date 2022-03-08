import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaqScroll } from '../ScrollReveal';

import * as S from './styles';

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

  const handleOpenQuestion = (questionId: number) => {
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
      <S.FaqContainer>
        <S.FaqTitle>
          Perguntas <S.FaqTitleSpan> frenquentes</S.FaqTitleSpan>
        </S.FaqTitle>

        <S.FaqQuestionsContainer>
          {questions.map((question) => (
            <S.FaqQuestion key={question.id}>
              <S.FaqQuestionHeader onClick={() => handleOpenQuestion(question.id)}>
                <S.FaqQuestionTitle>{question.title}</S.FaqQuestionTitle>

                <S.FaqQuestionIcon
                  color={question.isActive ? '#9bf00b' : '#777777'}
                  transform={question.isActive ? '180' : ''}
                >
                  <IoIosArrowDown />
                </S.FaqQuestionIcon>
              </S.FaqQuestionHeader>

              <S.FaqQuestionText display={question.isActive ? 'block' : 'none'}>{question.answer}</S.FaqQuestionText>
            </S.FaqQuestion>
          ))}
        </S.FaqQuestionsContainer>
      </S.FaqContainer>
    </FaqScroll>
  );
}
