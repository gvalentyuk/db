import styled from 'styled-components'

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
`

export const TotalContainer = styled.div`
    font-size: 36px;
`

export const EmptyMessageContainer = styled.p`
      font-size: 2rem;
      margin: 2rem 0;
`

export const CheckoutOptions = styled.div`
      margin-top: 2rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
`