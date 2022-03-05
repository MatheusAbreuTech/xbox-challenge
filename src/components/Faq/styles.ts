import styled from 'styled-components';

export const FaqContainer = styled.div`
  width: 100%;
`;

export const FaqTitle = styled.h2`
  display: inline-flex;
  font-weight: 600;
  font-size: 3rem;
  line-height: 100%;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 3.75rem;

  @media screen and (max-width: 768px){
    font-size: 2rem;
  display: block;

  }
`;

export const FaqTitleSpan = styled.span`
  /* margin-left: 0.7rem; */
  color: ${props => props.theme.colors.light};
`;

export const FaqQuestionsContainer = styled.ul`
  list-style: none;
`;

export const FaqQuestion = styled.li`
  padding: 2.6rem 0;

  &:first-child {
    border-bottom: 2px solid ${props => props.theme.colors.gray};
  }

  &:last-child {
    border-top: 2px solid ${props => props.theme.colors.gray};
  }
`;

export const FaqQuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const FaqQuestionTitle = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  max-width: 80%;

  @media screen and (max-width: 990px){
    font-size: 1.3rem;
  }
`;

export const FaqQuestionIcon = styled.div<{ color: string; transform: string }>`
  & > svg {
    transition: 400ms;
    font-size: 2rem;
    color: ${(props) => props.color};
    transform: rotate(${(props) => props.transform}deg);
  }
`;

export const FaqQuestionText = styled.p<{ display: string }>`
  display: ${(props) => props.display};
  padding-top: 2rem;
  padding-left: 1rem;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: ${props => props.theme.colors.grayLight};
`;
