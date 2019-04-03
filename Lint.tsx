import React, { useEffect, useState } from 'react'
import NoMixedZenkakuAndHankakuAlphabet from 'textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet'
import NoTodo from 'textlint-rule-no-todo'
import { TextLintCore } from 'textlint/src/textlint-core'

interface Props {
  text: string
}

export default ({ text }: Props) => {
  const [messages, setMessages] = useState<string[]>([])
  useEffect(() => {
    const core = new TextLintCore()
    core.setupRules({
      'no-mixed-zenkaku-and-hankaku-alphabet': NoMixedZenkakuAndHankakuAlphabet,
      'no-todo': NoTodo,
    })
    core.lintText(text, '.md')
      .then(({ messages }) => {
        setMessages(messages.map(m => m.message))
      })
  }, [text])
  return (
    <ul>
      {messages.map((m, i) => (
        <li key={i}>{m}</li>
      ))}
    </ul>
  )
}
