import React, { Fragment, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Lint from './Lint'

export default () => {
  const [text, setText] = useState('')
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
