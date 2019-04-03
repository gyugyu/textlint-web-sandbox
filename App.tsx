import debounce from 'debounce'
import React, { Fragment, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Lint from './Lint'

export default () => {
  const [text, setText] = useState('')
  const lint = debounce((text: string) => (
    <Lint text={text} />
  ), 1000)
  return (
    <Fragment>
      <TextField
        fullWidth
        multiline
        onChange={event => setText(event.target.value)}
        value={text}
        variant='outlined'
      />
      {text !== '' && <Lint text={text} />}
    </Fragment>
  )
}
