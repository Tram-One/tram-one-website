const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-style': require('../../elements/code-style'),
  'code-block': require('../../elements/code-block'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const counter = `
module.exports = ({
  init: () => 0,
  upvote: (votes) => votes + 1,
  downvote: (votes) => votes - 1
})
`

const app = `
const Tram = require('tram-one')
const app = new Tram()

app.addRoute('/', require('./page'))
app.addActions({ votes: require('./vote-actions') })
`

const page = `
const Tram = require('tram-one')
const html = Tram.html()

module.exports = (store, actions) => html\`
  <div>
    <h1> My New Blog Post </h1>
    <span> Total Likes: \${store.votes} </span>
    <button onclick=\${actions.upvote}> Like </button>
    <button onclick=\${actions.downvote}> Dislike </button>
  </div>
\`
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <anchor-clip tag="h3" id="state-management" header="State Management"/>
        </div>
        <div>
          Tram-One follows a Flux-like architecture model with
          <a href="https://github.com/Tram-One/hover-engine">Hover-Engine</a>.
          If you're familiar with redux, it's very similar.
        </div>
        <div empty />
      </section-block>
      <section-block>
        <div empty />
        <div>
          First, we build a set of actions. Each action is a function which
          takes the previous state, and returns an updated state.
        </div>
        <div>
          <code-block background=${attrs.background} filename="vote-actions.js">
            ${counter}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div empty />
        <div>
          To use these actions, we'll need to add them to our app.
        </div>
        <div>
          <code-block background=${attrs.background} filename="app.js">
            ${app}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div empty />
        <div>
          Now we can reference the store values, and call these actions on our
          page. Pages have access to the different stores, and an
          <code-style>actions</code-style>
          object with all the methods we defined before.
        </div>
        <div>
          <code-block background=${attrs.background} filename="page.js">
            ${page}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
