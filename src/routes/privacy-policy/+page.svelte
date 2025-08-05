<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import { META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';
	import InformationCircleIcon from '$lib/icons/InformationCircleIcon.svelte';
	import ShieldCheckIcon from '$lib/icons/ShieldCheckIcon.svelte';
</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}privacy-policy`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">{$_('privacy_policy.title')}</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: $_('privacy_policy.breadcrumb_home'), href: '/' }]} />
</div>

<article class="px-4">
	<div class="flex gap-2 mb-4">
		<a
			href="/privacy-policy/"
			class="flex items-center gap-2 cursor-pointer p-2 rounded-md bg-secondary"
		>
			<ShieldCheckIcon />
			{$_('privacy_policy.privacy_policy_link')}</a
		>
		<a
			href="/terms-of-service/"
			class="flex items-center gap-2 cursor-pointer p-2 rounded-md bg-secondary"
		>
			<InformationCircleIcon />
			{$_('privacy_policy.terms_of_service_link')}</a
		>
	</div>

	<p class="mb-4">
		{$_('privacy_policy.intro')}
	</p>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">{$_('privacy_policy.why_we_collect_title')}</h2>
		<p>
			{$_('privacy_policy.why_we_collect_p')}
		</p>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">{$_('privacy_policy.how_we_protect_title')}</h2>
		<p>
			{$_('privacy_policy.how_we_protect_p')}
		</p>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">{$_('privacy_policy.data_storage_title')}</h2>
		<p>
			{$_('privacy_policy.data_storage_p')}
		</p>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">{$_('privacy_policy.cookies_title')}</h2>
		<p>
			{$_('privacy_policy.cookies_p')}
		</p>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">{$_('privacy_policy.links_title')}</h2>
		<p>
			{$_('privacy_policy.links_p')}
		</p>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">{$_('privacy_policy.consent_title')}</h2>
		<p>
			{$_('privacy_policy.consent_p')}
		</p>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">{$_('privacy_policy.disclosure_title')}</h2>
		<p>
			{$_('privacy_policy.disclosure_p')}
		</p>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">{$_('privacy_policy.business_transfers_title')}</h2>
		<p>
			{$_('privacy_policy.business_transfers_p')}
		</p>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">{$_('privacy_policy.changes_title')}</h2>
		<p>
			{$_('privacy_policy.changes_p')}
		</p>
	</CardShadow>

	<p class="mb-4">
		{$_('privacy_policy.questions')}
	</p>

	<p class="mb-4">
		<small><i>{$_('privacy_policy.last_updated')}</i></small>
	</p>
</article>
