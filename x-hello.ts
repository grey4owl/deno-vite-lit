import { css, html, LitElement } from "npm:lit";
import { customElement, property } from "npm:lit/decorators.js";

@customElement("x-hello")
export class Hello extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = "World";

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
