import { DECOY_KEYS, requestDOMPermit } from '@abcnews/env-utils';
import styles from './styles.scss';

const FALLBACK_CLASS_NAME = 'article-takeover-container';

interface App {
  el: HTMLElement;
}

class App {
  constructor({ addClass }) {
    this.el = document.createElement('div');
    this.el.className = `${styles.root} `;
    this.el.classList.add(addClass || FALLBACK_CLASS_NAME);
    this.el.innerHTML = ``;
  }
}

interface ConfigOptions {
  addClass?: string;
}

export const takeover = async (config?: ConfigOptions) => {
  // Request DOM permit from PL
  await requestDOMPermit(DECOY_KEYS.ARTICLE);

  // Remove sidebar
  const sidebarEl: any = document.querySelector(
    "[data-component='ArticleSidebar']"
  )?.parentElement;
  sidebarEl.classList.add('nodisplay');

  // Create the root container
  // (Assumes first .Sidebar is main content)
  const root = document.querySelector('[data-component="Sidebar"]');
  render(new App({ addClass: config?.addClass }).el, root);

  // Fade in content
  root?.classList.add('unveiled');

  return config?.addClass || FALLBACK_CLASS_NAME;
};

function render(el, parentEl) {
  if (parentEl === null) {
    throw new Error('parentEl is not an Element');
  }

  while (parentEl.firstElementChild) {
    parentEl.removeChild(parentEl.firstElementChild);
  }

  parentEl.appendChild(el);
}
