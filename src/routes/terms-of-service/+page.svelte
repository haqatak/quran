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
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}terms-of-service`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">{$_('terms_of_service.title')}</h1>
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

	<section class="mb-4">
		<p class="mb-4">
			{@html $_('terms_of_service.intro_1')}
		</p>

		<p class="mb-4">
			{@html $_('terms_of_service.intro_2')}
		</p>

		<p class="mb-4">
			{@html $_('terms_of_service.intro_3')}
		</p>

		<p class="mb-4">
			{@html $_('terms_of_service.intro_4')}
		</p>

		<p class="mb-4">
			{@html $_('terms_of_service.intro_5')}
		</p>
	</section>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">{$_('terms_of_service.privacy_terms_title')}</h2>
		<p>
			{@html $_('terms_of_service.privacy_terms_p')}
		</p>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">{$_('terms_of_service.account_terms_title')}</h2>
		<div>
			<p class="mb-4">{$_('terms_of_service.account_terms_intro')}</p>
			<ol class="list-disc ml-6">
				<li class="mb-4">
					{@html $_('terms_of_service.account_terms_li_1')}
				</li>
				<li class="mb-4">
					{@html $_('terms_of_service.account_terms_li_2')}
				</li>
				<li class="mb-4">
					{@html $_('terms_of_service.account_terms_li_3')}
				</li>
				<li class="mb-4">
					{@html $_('terms_of_service.account_terms_li_4')}
				</li>
				<li class="mb-4">
					{@html $_('terms_of_service.account_terms_li_5')}
				</li>
			</ol>
		</div>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">{$_('terms_of_service.copyright_title')}</h2>
		<div>
			<ol class="list-disc ml-6">
				<li class="mb-4">
					{@html $_('terms_of_service.copyright_li_1')}
				</li>
				<li class="mb-4">
					{@html $_('terms_of_service.copyright_li_2')}
				</li>
			</ol>
		</div>
	</CardShadow>

	<p class="mb-4">
		{@html $_('terms_of_service.questions')}
	</p>

	<p class="mb-4">
		<small><i>{@html $_('privacy_policy.last_updated')}</i></small>
	</p>
</article>
