const Tram = require('tram-one')
const html = Tram.html({
  'scroll-anchor': require('../elements/scroll-anchor'),
  'nav-link': require('../elements/nav-link')
})

const navGrid = `
  display: flex;
  flex-wrap: no wrap;
  margin-bottom: 0.8em;
`

const linkStyle = `
  padding: 0.4em 0.8em 0em 0.0em;
`

module.exports = (attrs) => {
  return html`
    <div style="${navGrid}${attrs.style}">
      <scroll-anchor style=${linkStyle} href="#introduction">Introduction</scroll-anchor>
      <scroll-anchor style=${linkStyle} href="#features">Features</scroll-anchor>
      <scroll-anchor style=${linkStyle} href="#install">Install</scroll-anchor>
      <scroll-anchor style=${linkStyle} href="#api">API</scroll-anchor>
      <nav-link style=${linkStyle} href="#remix">Remix</nav-link>
      <nav-link style=${linkStyle} href="https://join.slack.com/t/tram-one/shared_invite/enQtMjY0NDA3OTg2MzQyLWUyMGIyZTYwNzZkNDJiNWNmNzdiOTMzYjg0YzMzZTkzZDE4MTlmN2Q2YjE0NDIwMGI3ODEzYzQ4ODdlMzQ2ODM">Slack</nav-link>
      <nav-link style=${linkStyle} href="https://github.com/Tram-One">Github</nav-link>
      <nav-link style=${linkStyle} href="https://www.npmjs.com/package/tram-one">NPM</nav-link>
    </div>
  `
}