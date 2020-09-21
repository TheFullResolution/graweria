import { Link } from 'gatsby'
import React from 'react'
import { FaArrowLeft, FaTimesCircle } from 'react-icons/all'
import { ResponsiveImg } from '../../components/ResponsiveImg/ResponsiveImg'
import { NotFoundDataQuery } from '../../graphql-types'
import * as styles from './NotFoundPage.module.scss'

interface Props {
  data: NotFoundDataQuery
}

export const NotFoundPage: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <ResponsiveImg
        image={data.notfound.picture}
        alt={'banner'}
        className={styles.banner}
        imgStyle={{objectPosition: '50% 40%'}}
      />
      <FaTimesCircle className={styles.icon} />
      <p>{data.notfound.text}</p>
      <Link to="/" className={styles.link}>
        <FaArrowLeft />
        {data.notfound.go_home_label}
      </Link>
    </div>
  )
}
