import {LitElement, html, css} from 'lit';
import sharedStyles from '../styles/shared-styles.js';
import './hg-tip-text-base.js';

export class HgWarningText extends LitElement {
  static properties = {
    text: String,
  };
  static styles = [sharedStyles, css`
    :host {
      display: block;
      color: var(--error-color);
      background: var(--error-background-color);
    }
  `];
  render() {
    return html`
      <hg-tip-text-base
        .icon=${'warning'}
        .text=${this.text}>
      </hg-tip-text-base>
    `;
  }
}
customElements.define('hg-warning-text', HgWarningText);
