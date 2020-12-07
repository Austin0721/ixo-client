import styled from 'styled-components'
import { LayoutWrapper } from 'common/components/Wrappers/LayoutWrapper'

export const Layout = styled(LayoutWrapper)`
  background: #F0F3F9 !important;
  font-weight: 400;
  padding-bottom: 10rem;
`

export const ActionButton = styled.button`
  outline: none !important;
  border-radius: 0.25rem;
  font-weight: bold;

  &.btn-save {
    color: ${ (props: any): string => props.theme.fontSkyBlue };
    border: 1px solid ${ (props: any): string => props.theme.fontSkyBlue };
    width: 6.25rem;
    height: 2.25rem;
  }

  &.btn-submit {
    color: white;
    border: 1px solid ${ (props: any): string => props.theme.fontSkyBlue };
    background: ${ (props: any): string => props.theme.fontSkyBlue };
    width: 8rem;
    height: 2.25rem;
  }
`

export const SubmitContainer = styled.div`
  text-align: right;
  svg {
    vertical-align: top;
    margin-left: 0.5rem;
  }
`

export const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`