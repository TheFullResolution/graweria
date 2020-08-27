import React from 'react'
import { Header } from '../../components/Header/Header'
import * as styles from './Page.module.scss'

interface Props {

}

export const Page: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
