import styled from 'styled-components';


export const FaqContainer = styled.div`
  width: 100%;
`

export const FaqTitle = styled.h2`
  display: inline-flex;
  font-weight: 600;
  font-size: 3rem;
  line-height: 100%;
  color: var(--primary);
  margin-bottom: 3.75rem;
`

export const FaqTitleSpan = styled.span`
  margin-left: .7rem;
  color: var(--light);
`

export const FaqQuestionsContainer = styled.ul`
  list-style: none;
`

export const FaqQuestion = styled.li`
  padding: 2.6rem 0;

  &:first-child{
    border-bottom: 2px solid var(--gray);
  }

  &:last-child{
    border-top: 2px solid var(--gray);
  }
`

export const FaqQuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const FaqQuestionTitle = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
`

export const FaqQuestionIcon = styled.div`

  & > svg{
    font-size: 2rem;
    color: var(--gray);
  };

`

export const FaqQuestionText = styled.p`
  padding-top: 2rem;
  padding-left: 1rem;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: var(--gray-light);
`





