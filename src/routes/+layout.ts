import { load } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import '$lib/i18n';

export const prerender = true;
export const trailingSlash = 'always';

export const load: LayoutLoad = async () => {
  await load();
};
