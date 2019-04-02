import { TextlintKernel } from '@textlint/kernel'
import x from 'textlint-rule-no-todo'
import m from '@textlint/textlint-plugin-markdown'

const k = new TextlintKernel()
k.lintText('- [ ] TODO', {
  ext: '.md',
  rules: [
    {
      ruleId: 'no-todo',
      rule: x as any
    }
  ],
  plugins: [
    {
      pluginId: 'md',
      plugin: m as any
    }
  ]
}).then(results => {
  console.log(results)
})
