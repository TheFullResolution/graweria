import React from 'react'
import {HomeDataQuery} from '../../graphql-types'

interface Props {
    data: HomeDataQuery
}

export const HomePage: React.FC<Props> = () => {
    return <div>HomePage</div>
}
