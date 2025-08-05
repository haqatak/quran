import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'no';

register('no', () => import('./locales/no.json'));

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale,
});
