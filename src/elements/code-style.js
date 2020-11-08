import { registerHtml } from 'tram-one'

const html = registerHtml()

const codeStyle = `
  margin: 0;
  font-size: 1em;
  color: #134ba2;
  font-family: 'Source Code Pro', monospace;
`

module.exports = (attrs, children) => html`
  <span class="code-style" style=${codeStyle}>
    ${children}
  </span>
`