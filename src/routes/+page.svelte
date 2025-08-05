<script lang="ts">
	import { _ } from 'svelte-i18n';
	import CardShadow from '$lib/CardShadow.svelte';
	import LastReadVerses from '$lib/LastReadVerses.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import PinnedSurah from '$lib/PinnedSurah.svelte';
	import { META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';

	const actionIcons = [
		{
			href: '/all-surah/',
			title: $_('page.home.all_surah')
		},
		{
			href: '/surah/1/1/',
			title: $_('page.home.by_verse')
		},
		{
			href: '/juz-amma/',
			title: $_('page.home.juz_amma')
		},
		{
			href: '/asmaul-husna/',
			title: $_('page.home.asmaul_husna')
		},
		{
			href: '/daily-doa/',
			title: $_('page.home.daily_doa')
		},
		{
			href: '/wirid/',
			title: $_('page.home.wirid')
		},
		{
			href: '/tasbih/',
			title: $_('page.home.tasbih')
		},
		{
			href: '/tahlil/',
			title: $_('page.home.tahlil')
		},
		{
			href: '/ayat-kursi/',
			title: $_('page.home.ayat_kursi')
		},
		{
			href: '/jadwal-sholat/',
			title: $_('page.home.jadwal_sholat')
		},
		{
			href: '/pencatat-ibadah/',
			title: $_('page.home.pencatat_ibadah')
		}
	];
</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}`} />
</svelte:head>

<div class="px-4 flex flex-col gap-2">
	<PinnedSurah />
	<LastReadVerses />

	<div class="flex gap-2 mt-2 mb-2">
		<h2 class="text-xl font-bold">{$_('page.home.features')}</h2>
	</div>

	<div class="grid grid-cols-2 gap-2">
		{#each actionIcons as item (item.href)}
			<CardShadow href={item.href} _as="a">
				{item.title}
			</CardShadow>
		{/each}
	</div>
</div>
