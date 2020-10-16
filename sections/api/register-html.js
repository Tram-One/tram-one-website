const Tram = require('tram-one')
const html = Tram.html({
  'section-block': require('../../elements/section-block'),
  'code-block': require('../../elements/code-block'),
  'code-style': require('../../elements/code-style'),
  'anchor-clip': require('../../elements/anchor-clip')
})

const code = `
import { start, registerHtml } from 'tram-one'

const html = registerHtml()

const home = () => {
    return html\`<h1>Tram-One</h1>\`
  }
}
`

const registry = `
import { registerHtml } from 'tram-one'
import customHeader from './custom-header'

const html = registerHtml({
  'custom-header': customHeader
})

const home = () => html\`
  <custom-header />
\`
`
const header = `
import { registerHtml } from 'tram-one'

const html = registerHtml()

export default () => html\`
  <h1>Tram-One</h1>
\`
`

module.exports = (attrs) => {
  return html`
    <div>
      <section-block>
        <div>
          <code-style>
            <anchor-clip tag="h4" id="register-html" header="registerHtml"/>
          </code-style>
        </div>
        <div>
          Function to generate a tagged template function for XHTML / HTML. 
          If you have no custom components, you can call this with no parameters.
        </div>
        <div>
          <code-block background=${attrs.background} filename="html-function.js">
            ${code}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div>
          <div empty />
        </div>
        <div>
          <div>
            If you want to make a new component, all you have to do is export 
            the results of the <code-style>html</code-style> function generated by
            <code-style>registerHtml</code-style>.
          </div>
        </div>
        <div>
          <code-block background=${attrs.background} filename="custom-header.js">
            ${header}
          </code-block>
        </div>
      </section-block>
      <section-block>
        <div>
          <div empty />
        </div>
        <div>
          <div>
          To import a custom component, include it in the <code-style>registerHtml</code-style>
          with the tag name you want to use. This can be hyphenated, camelcase, or whatever
          </div>
        </div>
        <div>
          <code-block background=${attrs.background} filename="custom-components.js">
            ${registry}
          </code-block>
        </div>
      </section-block>
    </div>
  `
}
