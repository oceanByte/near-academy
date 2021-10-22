import * as React from 'react'
import * as PropTypes from 'prop-types'

import { ChapterView } from './ChapterContent.view'

interface IChapter {
  title: string,
  chapter: string,
}

export const Chapter: any = ({ title, chapter }: IChapter) => <ChapterView title={title} chapter={chapter} />

ChapterView.propTypes = {
  chapter: PropTypes.string,
  title: PropTypes.string,
}

ChapterView.defaultProps = {}
