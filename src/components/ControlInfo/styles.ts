import styled from 'styled-components';

export const ControlContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 9rem;
`
export const ControlLef = styled.div`
  max-width: 35.5rem;
  width: 100%;
`

export const ControlTitle = styled.h2`
 color: var(--primary);
  font-size: 4rem;
  padding-bottom: 2.5rem;
  font-weight: 600;
  line-height: 130%;
`

export const ControlTitleSpan = styled(ControlTitle)`
  color: var(--light);
`

export const ControlText = styled.p`
  color: var(--gray-light);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 170%;
`

export const ControlRight = styled.div``

export const ControlImage = styled.img``


