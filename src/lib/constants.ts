import { get } from 'svelte-i18n';

export const TITLE_CONSTANTS = {
	PATH: 'https://www.les-koranen.no/',
	TITLE: get('app.title'),
	TITLE_META: get('app.title_meta'),
	LAST_READ: get('app.last_read'),
	FAVORITE: get('app.favorite'),
	RECOMMENDATION: get('app.recommendation'),
	ERROR: get('app.error'),
	SEARCH_PAGE: get('app.search_page'),
	AYAT_KURSI: get('app.ayat_kursi'),
	ASMAUL_HUSNA: get('app.asmaul_husna'),
	DAILY_DOA: get('app.daily_doa'),
	TAHLIL: get('app.tahlil'),
	WIRID: get('app.wirid'),
	JUZ_AMMA: get('app.juz_amma'),
	TASBIH: get('app.tasbih'),
	SURAT_LIST: get('app.surat_list'),
	ABOUT: get('app.about')
};

export const CONSTANTS = {
	STORAGE_KEY: {
		TRANSLATION: 'trsla',
		TAFSIR: 'tfsr',
		MUKADIMAH: 'mkdmh',
		AUDIO: 'aud',
		AUTO_NEXT: 'anxt',
		PINNED_SURAH: 'srh',
		LAST_VERSES: 'vres',
		LOCATION: 'loc',
		PRAYER: 'pryr',
		THEME: 'theme',
		LOG_PRAYER: 'log'
	},
	BISMILLAH: '﷽'
};

export const META_TITLE = get('meta.title', { title_meta: get('app.title_meta') });
export const META_DESC = get('meta.description');

export const META_TITLE_ALL_SURAH = get('meta.all_surah_title', { title_meta: get('app.title_meta') });
export const META_DESC_ALL_SURAH = get('meta.all_surah_description');

export const META_TITLE_MAKKIYAH = get('meta.makkiyah_title', { title_meta: get('app.title_meta') });
export const META_DESC_MAKKIYAH = get('meta.makkiyah_description');

export const META_TITLE_MADANIYAH = get('meta.madaniyah_title', { title_meta: get('app.title_meta') });
export const META_DESC_MADANIYAH = get('meta.madaniyah_description');

export const META_TITLE_JUZ_AMMA = get('meta.juz_amma_title', { title_meta: get('app.title_meta') });
export const META_DESC_JUZ_AMMA = get('meta.juz_amma_description');

export const META_TITLE_ASMAUL_HUSNA = get('meta.asmaul_husna_title', { title_meta: get('app.title_meta') });
export const META_DESC_ASMAUL_HUSNA = get('meta.asmaul_husna_description');

export const META_TITLE_AYAT_KURSI = get('meta.ayat_kursi_title', { title_meta: get('app.title_meta') });
export const META_DESC_AYAT_KURSI = get('meta.ayat_kursi_description');

export const META_TITLE_DAILY_DOA = get('meta.daily_doa_title', { title_meta: get('app.title_meta') });
export const META_DESC_DAILY_DOA = get('meta.daily_doa_description');

export const META_TITLE_TAHLIL = get('meta.tahlil_title', { title_meta: get('app.title_meta') });
export const META_DESC_TAHLIL = get('meta.tahlil_description');

export const META_TITLE_WIRID = get('meta.wirid_title', { title_meta: get('app.title_meta') });
export const META_DESC_WIRID = get('meta.wirid_description');

export const META_TITLE_TASBIH = get('meta.tasbih_title', { title_meta: get('app.title_meta') });
export const META_DESC_TASBIH = get('meta.tasbih_description');

export const META_TITLE_JADWAL_SHOLAT = get('meta.jadwal_sholat_title', { title_meta: get('app.title_meta') });
export const META_DESC_JADWAL_SHOLAT = get('meta.jadwal_sholat_description');

export const META_TITLE_PENCATAT_IBADAH = get('meta.pencatat_ibadah_title', { title_meta: get('app.title_meta') });
export const META_DESC_PENCATAT_IBADAH = get('meta.pencatat_ibadah_description');

export const META_TITLE_SURAH = (name: string) =>
	get('meta.surah_title', { name, title_meta: get('app.title_meta') });
export const META_DESC_SURAH = (name: string) => get('meta.surah_description', { name });

export const META_TITLE_AYAH = (
	verseid: string,
	surahid?: string,
	name?: string,
	translation?: string
) =>
	get('meta.ayah_title', {
		surahid,
		verseid,
		name,
		translation,
		title_meta: get('app.title_meta')
	});

export const META_DESC_AYAH = (
	verseid: string,
	surahid?: string,
	name?: string,
	translation?: string
) =>
	get('meta.ayah_description', {
		surahid,
		verseid,
		name,
		translation
	});

export type SeoArgs = {
	surahLatin: string;
	verseNumber?: string;
};

export type PageVariant =
	| 'ALL_SURAH'
	| 'ASMAUL_HUSNA'
	| 'AYAT_KURSI'
	| 'DAILY_DOA'
	| 'JUZ_AMMA'
	| 'TAHLIL'
	| 'WIRID'
	| 'SURAH_DETAIL'
	| 'AYAT_DETAIL'
	| 'TASBIH'
	| 'MAKKIYAH'
	| 'MADANIYAH'
	| 'JADWAL_SHOLAT'
	| 'CATAT_IBADAH';

export const SEO_TEXT = {
	ALL_SURAH: get('seo.all_surah'),
	MAKKIYAH: get('seo.makkiyah'),
	MADANIYAH: get('seo.madaniyah'),
	ASMAUL_HUSNA: get('seo.asmaul_husna'),
	AYAT_KURSI: get('seo.ayat_kursi'),
	DAILY_DOA: get('seo.daily_doa'),
	JUZ_AMMA: get('seo.juz_amma'),
	TAHLIL: get('seo.tahlil'),
	WIRID: get('seo.wirid'),
	TASBIH: get('seo.tasbih'),
	JADWAL_SHOLAT: get('seo.jadwal_sholat'),
	CATAT_IBADAH: get('seo.catat_ibadah'),
	SURAH_DETAIL: '',
	AYAT_DETAIL: ''
};

export const SEO_TEXT_DYNAMIC = {
	SURAH_DETAIL: ({ surahLatin }: SeoArgs) =>
		get('seo.surah_detail', { surahLatin }),
	AYAT_DETAIL: ({ surahLatin, verseNumber }: SeoArgs) =>
		get('seo.ayat_detail', { surahLatin, verseNumber })
};

export const THEMES = [
	{
		name: 'light',
		bg: 'white',
		border: '#142C66'
	},
	{
		name: 'dark',
		bg: '#142C66',
		border: '#FFF'
	},
	{
		name: 'forest',
		bg: '#016A70',
		border: '#FFF'
	},
	{
		name: 'pinky',
		bg: '#FF597B',
		border: '#FFF'
	},
	{
		name: 'halloween',
		bg: '#451952',
		border: '#FFF'
	}
];
