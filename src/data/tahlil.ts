export type TahlilItem = {
	id: number;
	title: string;
	arabic: string;
	translation: string;
};

const source =
	'https://islam.nu.or.id/post/read/107344/susunan-bacaan-tahlil-doa-arwah-lengkap-dan-terjemahannya';
const basedOn = "Majmu' Syarif";
const tahlilData: TahlilItem[] = [
	{
		id: 1,
		title: 'Introduksjon til Al-Fatihah',
		arabic:
			'اِلَى حَضْرَةِ النَّبِيِّ صَلَّى اللهُ عَلَيهِ وَسَلَّمَ وَاَلِهِ وصَحْبِهِ شَيْءٌ لِلهِ لَهُمُ الْفَاتِحَةُ',
		translation:
			'I Allahs, den nåderike, den barmhjertiges navn. Til den ærede profeten Muhammad SAW, hele hans familie og hans følgesvenner. Denne resitasjonen av Al-Fatihah er rettet til Allah, og dens belønning er for dem alle. Al-Fatihah...'
	},
	{
		id: 2,
		title: 'Al-Fatihah',
		arabic:
			'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ . اَلْحَمْدُ لِلهِ رَبِّ الْعَالَمِيْنَ . اَلرَّحْمَنِ الرَّحِيْمِ. مَالِكِ يَوْمِ الدِّيْنِ . اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ . اِهْدِنَا الصِّرَاطَ الَّمُسْتَقِيْمَ . صِرَاطَ الَّذِ يْنَ اَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّالِّيْنَ . اَمِينْ',
		translation:
			'Jeg søker tilflukt hos Allah fra den utstøtte Satan. I Allahs, den nåderike, den barmhjertiges navn. All pris tilhører Allah, verdens Herre. Den nåderike, den barmhjertige. Dommedagens hersker. Deg alene tilber vi, og Deg alene ber vi om hjelp. Led oss på den rette vei, veien til dem Du har vist nåde, ikke veien til dem som har pådratt seg Din vrede, og heller ikke veien til dem som farer vill. Måtte Du bønnhøre vår bønn.'
	},
	{
		id: 3,
		title: 'Surat Al-Ikhlas (3 ganger)',
		arabic:
			'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ . قُلْ هُوَ اللهُ اَحَدٌ . اَللهُ الصَّمَدُ . لَمْ يَلِدْ وَلَمْ يُوْلَدْ . وَلَمْ يَكٌنْ لَهُ كُفُوًا اَحَدٌ',
		translation:
			'I Allahs, den nåderike, den barmhjertiges navn. Si: "Han er Allah, den Ene. Allah, den Selvtilstrekkelige. Han har ikke avlet, og er heller ikke født. Og det finnes ingen som er lik Ham". (3 ganger)'
	},
	{
		id: 4,
		title: 'Tahlil og Takbir',
		arabic: 'لاَ اِلَهَ اِلاَّ اللهُ وَاللهُ اَكْبَرُ',
		translation: 'Det er ingen gud utenom Allah. Allah er størst.'
	},
	{
		id: 5,
		title: 'Surat Al-Falaq',
		arabic:
			'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِ. مِنْ شَرِّ مَا خَلَقَ. وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَ. وَمِنْ شَرِّ النَّفَاثاتِ فِى الْعُقَدِ. وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ',
		translation:
			'I Allahs, den nåderike, den barmhjertiges navn. Si: "Jeg søker tilflukt hos morgengryets Herre, mot det onde i det Han har skapt, mot mørkets ondskap når det senker seg, og mot ondskapen til trollkvinnene som blåser på knuter, og mot en misunnelig persons ondskap når han misunner."'
	},
	{
		id: 6,
		title: 'Tahlil og Takbir',
		arabic: 'لاَ اِلَهَ اِلاَّ اللهُ وَاللهُ اَكْبَرُ',
		translation: 'Det er ingen gud utenom Allah. Allah er størst.'
	},
	{
		id: 7,
		title: 'Surat An-Nas',
		arabic:
			'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. قُلْ اَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. اِلَهِ النَّاسِ. مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِى يُوَسْوِسُ فِى صُدُوْرِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ',
		translation:
			'I Allahs, den nåderike, den barmhjertiges navn. Si: "Jeg søker tilflukt hos menneskenes Herre, menneskenes Konge, menneskenes Gud, mot ondskapen til den hviskende (Satan) som trekker seg tilbake, som hvisker ondskap i menneskenes bryst, fra jinner og mennesker."'
	},
	{
		id: 8,
		title: 'Tahlil og Takbir',
		arabic: 'لاَ اِلَهَ اِلاَّ اللهُ وَاللهُ اَكْبَرُ',
		translation: 'Det er ingen gud utenom Allah. Allah er størst.'
	},
	{
		id: 9,
		title: 'Al-Fatihah',
		arabic:
			'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ . اَلْحَمْدُ لِلهِ رَبِّ الْعَالَمِيْنَ . اَلرَّحْمَنِ الرَّحِيْمِ. مَالِكِ يَوْمِ الدِّيْنِ . اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ . اِهْدِنَا الصِّرَاطَ الَّمُسْتَقِيْمَ . صِرَاطَ الَّذِ يْنَ اَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّالِّيْنَ . اَمِينْ',
		translation:
			'Jeg søker tilflukt hos Allah fra den utstøtte Satan. I Allahs, den nåderike, den barmhjertiges navn. All pris tilhører Allah, verdens Herre. Den nåderike, den barmhjertige. Dommedagens hersker. Deg alene tilber vi, og Deg alene ber vi om hjelp. Led oss på den rette vei, veien til dem Du har vist nåde, ikke veien til dem som har pådratt seg Din vrede, og heller ikke veien til dem som farer vill. Måtte Du bønnhøre vår bønn.'
	},
	{
		id: 10,
		title: 'Starten på Surat Al-Baqarah',
		arabic:
			'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. المّ. ذَلِكَ الكِتابُ لاَرَيْبَ فِيْهِ هُدَى لِلْمُتَّقِيْنَ. الَّذِيْنَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيْمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ. وَالَّذِيْنَ يُؤْمِنُونَ بِمَا اُنْزِلَ اِلَيْكَ وَمَا اُنْزِلَ مِن قَبْلِكَ وَبِالْاَخِرَةِ هُمْ يُوقِنُونَ. اُولَئِكَ عَلَى هُدًى مِّن رَّبِّهِمْ، وَاُولَئِكَ هُمُ الْمُفْلِحُونَ',
		translation:
			'I Allahs, den nåderike, den barmhjertiges navn. Alif Lam Mim. Dette er Boken, uten tvil. En veiledning for de gudfryktige. De som tror på det usynlige, forretter bønnen, og gir av det Vi har gitt dem. Og de som tror på det som er åpenbart for deg (Muhammad SAW) og det som ble åpenbart før deg, og de er overbevist om det hinsidige. De er de som følger veiledningen fra sin Herre. De er de som vil lykkes.'
	},
	{
		id: 11,
		title: 'Surat Al-Baqarah vers 163',
		arabic: 'وَاِلَهُكُمْ اِلَهٌ وَّاحِدٌ لاَ اِلَهَ اِلاَّ هُوَ الرَّحْمَنُ الرَّحِيمُ',
		translation:
			'Deres Gud er én Gud. Det er ingen gud utenom Ham, den Nåderike, den Barmhjertige.'
	},
	{
		id: 12,
		title: 'Ayat Kursi (Surat Al-Baqarah vers 255)',
		arabic:
			'اللهُ لاَ اِلَهَ اِلاَّ هُوَ الْحَىُّ الْقَيُّومُ، لاَ تَاْ خُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَّهُ مَا فِى السَّمَوَاتِ وَمَا فِى الْاَرْضِ، مَنْ ذَا الَّذِى يَشْفَعُ عِنْدَهُ اِلاَّ بِاِذْنِهِ، يَعْلَمُ مَا بَينَ اَيْدِيْهِمِ وَمَا خَلْفَهُمْ، وَلاَ يُحْيِطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ اِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالْاَرْضَ، وَلاَ يَئُودُهُ حِفْظُهُمُا، وَهُوَ الْعَلِىُّ الْعَظِيْمُ',
		translation:
			'Allah, det er ingen gud utenom Ham, den Levende, den Evigvarende. Søvnighet overmanner Ham ikke, og heller ikke søvn. Ham tilhører alt som er i himlene og på jorden. Hvem er det som kan gå i forbønn hos Ham uten Hans tillatelse? Han vet hva som er foran dem og hva som er bak dem. De kan ikke fatte noe av Hans kunnskap utenom det Han vil. Hans Trone strekker seg over himlene og jorden. Han blir ikke trett av å bevare dem. Han er Den Høyeste, Den Største.'
	},
	{
		id: 13,
		title: 'Surat Al-Baqarah vers 284-286',
		arabic:
			'لِلَّهِ مَا فِى السَّمَوَاتِ وَمَا فِى الْاَرْضِ. وَاِنْ تُبْدُوْا مَا فِى اَنْفُسِكُمْ اَوْ تَخْفُوْهُ يُحَاسِبْكُمْ بِهِ اللهُ. فَيَغْفِرُ لَمِنْ يَّشَاءُ وَيُعَذِّبُ مَنْ يَّشَاءُ. وَاللهُ عَلَى كُلِّ شَىْءٍ قَدِيْرٌ. اَمَنَ الرَّسُوْلُ بِمَا اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهِ وَالْمُؤْمِنُوْنَ. كُلٌّ اَمَنَ بِاللهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ. لَانًفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهِ. وَقَالُوْا سَمِعْنَا وَاَطَعْنَا غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ الْمَصِيْرُ. لَا يُكَلِّفُ اللهُ نَفْسًا اِلَّا وُسْعَهَا. لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكَتْسَبَتْ. رَبَّنَا لَا تُؤَاخِذْنَا اِنْ نَسِيْنَا اَوْ اَخْطَاْنَا. رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا اِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِيْنَ مِنْ قَبْلِنَا. رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ. وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا اَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِيْنَ',
		translation:
			'Allah tilhører alt som er i himlene og på jorden. Enten dere viser eller skjuler det som er i deres hjerter, vil Allah stille dere til regnskap for det. Han tilgir den Han vil og straffer den Han vil. Allah har makt over alle ting. Sendebudet og de troende tror på det som er åpenbart for ham fra hans Herre. Alle tror på Allah, Hans engler, Hans bøker og Hans sendebud. "Vi gjør ingen forskjell på noen av Hans sendebud." De sa: "Vi har hørt og vi adlyder. Din tilgivelse, vår Herre, søker vi. Til Deg er vår endelige tilbakekomst." Allah pålegger ingen sjel mer enn den kan bære. Den får belønning for det den har gjort, og straff for det den har gjort. "Vår Herre, straff oss ikke hvis vi glemmer eller feiler. Vår Herre, legg ikke på oss en byrde som Du la på dem før oss. Legg ikke på oss det vi ikke har styrke til å bære. Tilgi oss. Ha barmhjertighet med oss. Du er vår Beskytter. Hjelp oss mot de vantro."'
	},
	{
		id: 14,
		title: 'Surat Hud vers 73 (3 ganger)',
		arabic: 'ارْحَمْنَا، يَا اَرْحَمَ الرَّاحِمِيْنَ',
		translation: 'Ha barmhjertighet med oss, Å Du mest barmhjertige av de barmhjertige. (3 ganger)'
	},
	{
		id: 15,
		title: 'Surat Hud vers 73',
		arabic: 'رَحْمَتُ اللهِ وَبَرَكَاتُهُ عَلَيْكُمْ اَهْلَ الْبَيْتِ اِنَّهُ حَمِيْدٌ مَّجِيْدٌ',
		translation:
			'Og Allahs nåde og velsignelser (håper vi) er over dere, Å husets folk. Sannelig, Han er prisverdig og ærerik.'
	},
	{
		id: 16,
		title: 'Surat Al-Ahzab vers 33',
		arabic:
			'اِنَّمَا يُريِدُ اللهُ لِيُذْهِبَ عَنْكُمُ الرِّجْسَ اَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيْرًا',
		translation:
			'Sannelig, Allah ønsker å fjerne all urenhet fra dere, Å husets folk, og å rense dere fullstendig.'
	},
	{
		id: 17,
		title: 'Surat Al-Ahzab vers 56',
		arabic:
			'اِنَّ اللهَ وَمَلاَئِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ، يَا أَيُّهَا الَّذِيْنَ آمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوا تَسْلِيْمًا',
		translation:
			'Sannelig, Allah og Hans engler sender velsignelser over profeten. Å dere som tror, be om velsignelser for ham og hils ham med en verdig hilsen.'
	},
	{
		id: 18,
		title: 'Profetens velsignelser (3 ganger)',
		arabic:
			'اَلَّلهُمَّ صَلِّ أَفْضَلَ صَلَاةٍ عَلَى أَسْعَدِ مَخْلُوْقَاتِكَ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اَلِهِ وَصَحْبِهِ وَسَلِّمْ، عَدَدَ مَعْلُوْمَاتِكَ وَمِدَادَ كَلِمَاتِكَ كُلَّمَا ذَكَرَكَ الذَّاكِرُوْنَ وَغَفَلَ عَنْ ذِكْرِكَ الْغَافِلُوْنَ',
		translation:
			'Å Allah, gi nåde og fred til vår leder og herre, profeten Muhammad SAW, og hans familie, så mye som Din kunnskap og så mye som blekket i Dine ord, når de som husker Deg husker, og når de som er uvitende om å huske Deg er uvitende.'
	},
	{
		id: 19,
		title: 'Profetens hilsen',
		arabic:
			'وَسَلِّمْ وَرَضِيَ اللهُ تَعَالَى عَنْ اَصْحَابِ سَيِّدِنَا رَسُوْلِ اللهِ اَجْمَعِيْنَ',
		translation:
			'Måtte Allah, den Høyeste og Hellige, være tilfreds med alle følgesvennene til vår leder (Allahs sendebud).'
	},
	{
		id: 20,
		title: 'Surat Ali Imran vers 173 og Surat Al-Anfal vers 40',
		arabic: 'حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ. نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرُ',
		translation:
			'Allah er nok for oss. Han er den beste beskytter. (Surat Ali Imran vers 173). Han er den beste leder og hjelper." (Surat Al-Anfal vers 40)'
	},
	{
		id: 21,
		title: 'Hauqalah',
		arabic: 'وَلَاحَوْلَ وَلَا قُوَّةَ اِلَّا بِاللهِ العَلِيِّ الْعَظِيْمِ',
		translation:
			'Det er ingen makt eller styrke utenom hos Allah, den Høyeste, den Største.'
	},
	{
		id: 22,
		title: 'Istighfar (3 ganger)',
		arabic: 'اَسْتَغْفِرُاللهَ الْعَظِيْمَ',
		translation:
			'Jeg ber Allah, den Største, om tilgivelse." (3 ganger). (Allah) som det ikke finnes noen annen gud enn, den Levende, den Evigvarende. Jeg vender meg i anger til Ham.'
	},
	{
		id: 23,
		title: 'Hadith om fortreffeligheten av Tahlil',
		arabic:
			'الَّذِيْ لَا اِلَهَ اِلَّا هُوَ الحَيُّ القَيُّوْمُ وَأَتُوْبُ إِلَيْهِ، اَفْضَلُ الذِّكْرِ فَاعْلَمْ اَنَّهُ لَااِلَهَ اِلَّا اللهُ، حَيٌّ مَوْجُوْدٌ',
		translation:
			'Den beste dhikr - vit det - er uttrykket "La ilaha illallah", det er ingen gud utenom Allah, den Levende, den Eksisterende.'
	},
	{
		id: 24,
		title: 'Hadith om fortreffeligheten av Tahlil',
		arabic: 'لَااِلَهَ اِلَّا اللهُ، حَيٌّ مَعْبُوْدٌ',
		translation: 'Det er ingen gud utenom Allah, den Levende, den Tilbedte.'
	},
	{
		id: 25,
		title: 'Hadith om fortreffeligheten av Tahlil',
		arabic: 'لَااِلَهَ اِلَّا اللهُ، حَىٌّ بَاقٍ الَّذِيْ لَا يَمُوْتُ',
		translation: 'Det er ingen gud utenom Allah, den Evige som aldri dør.'
	},
	{
		id: 26,
		title: 'Tahlil 160 ganger',
		arabic: 'لَااِلَهَ اِلَّا اللهُ',
		translation: 'Det er ingen gud utenom Allah." (160 ganger)'
	},
	{
		id: 27,
		title: 'To trosbekjennelser',
		arabic: 'لَا اِلَهَ اِلَّا اللهُ مُحَمَّدٌ رَّسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ',
		translation: 'Det er ingen gud utenom Allah. Profeten Muhammad SAW er Hans sendebud.'
	},
	{
		id: 28,
		title: 'Tahlil-bønn',
		arabic:
			'الْحَمْدُ لِلهِ رَبِّ الْعَالَمِيْنَ حَمْدًا يُّوَافِى نِعَمَهُ وَيُكَافِىءُ مَزِيْدَهُ، يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِيْ لِجَلَالِ وَجْهِكَ وَعَظِيْمِ سُلْطَانِكَ، سُبْحَانَكَ لَا نُحْصِى ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ، فَلَكَ الحَمْدُ قَبْلَ الرِّضَى وَلَكَ الحَمْدُ بَعْدَ الرِّضَى وَلَكَ الحَمْدُ إِذَا رَضِيْتَ عَنَّا دَائِمًا أَبَدًا',
		translation:
			'Jeg søker tilflukt hos Allah fra den utstøtte Satan. I Allahs, den nåderike, den barmhjertiges navn. All pris tilhører Allah, verdens Herre, som en takknemlig persons lovprisning, en lovprisning som tilsvarer Hans nåde, og en lovprisning som muliggjør dens økning. Vår Herre, all pris tilhører Deg, slik som det sømmer seg Din majestet og Din store makt. Ære være Deg, vi kan ikke telle lovprisningene over Deg slik Du har prist Deg Selv. All pris tilhører Deg før tilfredshet. All pris tilhører Deg etter tilfredshet. All pris tilhører Deg når Du er tilfreds med oss for alltid.'
	},
	{
		id: 29,
		title: 'Velsignelse for den fullkomne essens',
		arabic:
			'اللَّهُمَّ صَلِّ علَى الذَّاتِ المُكَمَّلَةِ وَالرَّحْمَةِ المُنَزَّلَةِ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اَلِهِ وَصَحْبِهِ وَسَلِّمْ',
		translation:
			'Å Allah, send velsignelser og fred over den fullkomne essens og den nedsendte nåde, nemlig profeten Muhammad SAW, hans familie og hans følgesvenner.'
	},
	{
		id: 30,
		title: 'Velsignelse for den fullkomne essens',
		arabic: 'وَصَلِّ اللَّهُمَّ عَلَيْهِ يَا ذَا البَهَاءِ وَالجَلَالِ بُكْرَةً وَأَصِيْلًا',
		translation:
			'Å Allah, Å Eier av skjønnhet og majestet, send velsignelser over profeten Muhammad SAW om morgenen og om kvelden.'
	},
	{
		id: 31,
		title: 'Bønn for ytre og indre godhet',
		arabic:
			'اللَّهُمَّ كَمَا خَصَّصْتَنَا بِكِتَابِكَ الكَرِيْمِ وَهَدَيْتَنَا إِلَى صِرَاطكَ المُسْتَقِيْمِ، وأَصْلِحْ بِهِ مِنَّا جَمِيْعَ مَا فَسَدَ، وَطَهِّرْ بِهِ مِنَّا مَا ظَهَرَ وَمَا بَطَنَ',
		translation:
			'Å Allah, slik som Du har beæret oss med Din hellige Bok og ledet oss til den rette vei, så gi oss godhet som erstatning for fordervelse og rens oss fra synlig og skjult urenhet.'
	},
	{
		id: 32,
		title: 'Bønn for Koranens velsignelse',
		arabic:
			'اللَّهُمَّ اشْرَحْ بِالقُرْآنِ صُدُوْرَنَا وَيَسِّرْ بِهِ أُمُوْرَنَا وَعَظِّمْ بِهِ أُجُوْرَنَا وَحَسِّنْ بِهِ أَخْلَاقَنَا وَوَسِّعْ بِهِ أَرْزَاقَنَا وَنَوِّرْ بِهِ قُبُوْرَنَا',
		translation:
			'Å Allah, ved Koranen, åpne våre hjerter, gjør våre anliggender lette, mangedoble vår belønning, forbedre vår moral, utvid vår næring og opplys våre graver.'
	},
	{
		id: 33,
		title: 'Wahbah-bønn for profetens følgesvenner og Allahs venner',
		arabic:
			'اللَّهُمَّ اجْعَلْ ثَوَاَبَ مَا قَرَأْنَاهُ وَبَرَكَةَ مَا تَلَوْنَاهُ وَصَلَّيْنَاهُ عَلَى نَبِيِّكَ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَمَا هَلَلْنَا هَدِيَّةً بَالِغَةً وَرَحْمَةً مِنْكَ نَازِلَةً نُقَدِّمُهَا وَنُهْدِيْهَا اِلَى حَضَرَاتِ النَّبِيِّ الأَكْرَمِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، ثُمَّ اِلَى أَرْوَاحِ آبَائِهِ وَإِخْوَانِهِ مِنَ النَّبِيِّيْنَ وَالمُرْسَلِيْنَ وَإِلَى مَلَائِكَةِ اللهِ الْمُقَرَّبِيْنَ وَالكَرُّوْبِيِّيْنَ، وَاِلَى أَرْوَاحِ سَادَاتِنَا أَبِي بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيٍّ، وَإِلَى البَقِيَّةِ العَشْرَةِ المُبَشَّرَةِ بِالجَنَّةِ وَسَائِرِ الصَّحَابَةِ وَالقَرَابَةِ وَالتَّابِعِيْنَ وَإِلَى أَرْوَاحِ الحَسَنِ وَالحُسَيْنِ وَأُمِّهِمَا سَيِّدَتِنَا فَاطِمَةَ الزَّهْرَاءِ وَسَيِّدَتِنَا خَدِيْجَةَ الكُبْرَى وَسَيِّدِنَا حَمْزَةَ وَالعَبَّاسِ وَالشُّهَدَاءِ البَدْرِيِّيْنَ وَالأُحُدِيِّيْنَ وَإِلَى أَرْوَاحِ الخِضْرِ وَإِلْيَاسَ وَسَيِّدِنَا عَبْدِ اللهِ ابْنِ عَبَّاسٍ وَإِلَى أَرْوَاحِ الأَرْبَعَةِ الأَئِمَّةِ المُجْتَهِدِيْنَ وَمُقَلِّدِيْهِمْ فِي الدِّيْنِ وَإِلَى أَرْوَاحِ العُلَمَاءِ العَامِلِيْنَ وَالقُرَّاءِ وَأَئِمَّةِ الحَدِيْثِ وَالمُفَسِّرِيْنَ وَسَادَاتِنَا الصُّوْفِيَّةِ المُحَقِّقِيْنَ وَإِلَى رُوْحِ القُطْبِ الرَّبَّانِيِّ وَالعَارِفِ الصَّمَدَانِيِّ سَيِّدِيْ عَبْدِ القَادِرِ الجَيْلَانِيّ وَسَيِّدِيْ أَحْمَدَ البَدَوِيِّ وَسَيِّدِيْ أَحْمَدَ الرِّفَاعِيِّ وَسَيِّدِيْ إِبْرَاهِيْمَ الدَّسُوْقِيِّ وَسَيِّدِيْ أَبِي القَاسِمِ الجُنَيْدِ البَغْدَادِيِّ وَسَيِّدِيْ أَحْمَدَ ابْنِ عَلْوَانَ وَسَيِّدِيْ أَبِي طَالِبٍ المَكِّيِّ وَإِلَى أَرْوَاحِ كُلِّ وَلِيٍّ وَوَلِيَّةٍ لِلهِ مِنْ مَشَارِقِ الأَرْضِ وَمَغَارِبِهَا بَرِّهَا وَبَحْرِهَا أَيْنَمَا كَانُوْا وَكَانَ الكَائِنُ فِي عِلْمِكَ وَحَلَّتْ أَرْوَاحُهُمْ يَا رَبَّ العَالَمِيْنَ',
		translation:
			'Å Allah, gjør belønningen og velsignelsen av vår lesning, våre velsignelser og vår tahlil til en gave som når fram og en nåde fra Deg som stiger ned, som vi presenterer og gir til den mest ærede profeten Muhammad SAW, sjelene til hans forfedre, hans brødre blant profetene og sendebudene, de nærstående englene og kerubene, sjelene til våre ledere Abu Bakr RA, Umar RA, Uthman RA, Ali RA, de ti følgesvennene som ble lovet paradis, alle følgesvenner, slektninger, tabi‘in, sjelene til Hasan, Husayn, deres mor Sayyidah Fatimah Az-Zahra, Sayyidah Khadijah Al-Kubra, Sayyidina Hamzah, Abbas RA, martyrene fra Badr og Uhud, sjelene til Khidr, Ilyas, Sayyidina Abdullah bin Abbas RA, sjelene til de fire mujtahid-imamene og deres følgere i religionen, sjelene til de lærde, qari-ene, hadith-imamene, mufassirene, de sufi-mestre som har oppnådd sannheten, sjelen til den guddommelige polen og den samadanske mystikeren Sheikh Abdul Qadir Al-Jailani, Sayyid Ahmad Badawi, Sayyid Ahmad Ar-Rifa‘i, Sayyid Ibrahim Ad-Dasuqi, Sayyid Abul Qasim Al-Junaid Al-Baghdadi, Sayyid Ahmad bin Alwan, Sayyid Abu Thalib Al-Makki, alle Allahs mannlige og kvinnelige venner fra øst til vest, både på land og til sjøs; hvor enn de og deres sjeler måtte være. Mens alt som eksisterer, er i Din kunnskap, Å verdens Herre.'
	},
	{
		id: 34,
		title:
			'Bønn for sjelene til innbyggerne på gravlundene Mualla, Syubaikah, Baqi‘ og de som aldri blir besøkt',
		arabic:
			'وَإِلَى أَرْوَاحِ سَادَاتِنَا أَهْلِ المُعَلَّا وَالشُّبَيْكَةِ وَالبَقِيْعِ وَأَمْوَاتِ المُسْلِمِيْنَ كَافَّةً عَامَّةً وَفِي صَحَائِفِ مَنْ لَا زَائِرَ لَهُ وَلَا ذَاكِرَ لَهُ عُمَّ الجَمِيْعَ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ',
		translation:
			'Og til sjelene til våre ledere, nemlig de gravlagte på Mualla, Syubaikah, Baqi‘, alle sjelene til muslimer, og på sidene til de gravlagte som ikke har noen besøkende og ingen som minnes dem, omfavn dem alle med Din nåde, Å Du mest barmhjertige av de barmhjertige.'
	},
	{
		id: 35,
		title: 'Bønn om nåde og velsignelse fra Koranen',
		arabic:
			'اللَّهُمَّ ارْحَمْهُ بِالقُرْآنِ العَظِيْمِ رَحْمَةً وَاسِعَةً، وَاغْفِرْ لَهُ مَغْفِرَةً جَامِعَةً يَا مَالِكَ الدُّنْيَا وَالآخِرَةِ يَا رَبَّ العَالَمِيْنَ',
		translation:
			'Å Allah, send ned en vidstrakt nåde over ham (den avdødes sjel) ved den store Koranens velsignelse, tilgi ham med en omfattende tilgivelse, Å Hersker over denne verden og den neste, verdens Herre.'
	},
	{
		id: 36,
		title: 'Bønn om fred for den avdøde',
		arabic:
			'اللَّهُمَّ أَنْزِلْ فِيْ قَبْرِهِ الرَّحْمَةَ وَالضِّيَاءَ وَالنُّوْرَ، وَالبَهْجَةَ وَالرَوْحَ وَالرَيْحَانَ وَالسُّرُوْرَ، مِنْ يَوْمِنَا هَذَا إِلَى يَوْمِ البَعْثِ وَالنُّشُوْرِ، إِنَّكَ مَلِكٌ رَبٌّ غَفُوْرٌ',
		translation:
			'Å Allah, send ned i hans grav nåde, lys, glede, velvære, vellukt og lykke fra denne dag til oppstandelsens dag. Sannelig, Du er en tilgivende Herre og Konge.'
	},
	{
		id: 37,
		title: 'Bønn om Koranens forbønn',
		arabic:
			'اللَّهُمَّ اجْعَلِ القُرْآنَ العَظِيْمَ فِي قَبْرِهِ مُؤْنِسًا، وَفِي القِيَامَةِ شَافِعًا، وَفِي الحَشْرِ ضِيَاءً وَظِلًّا وَدَلِيْلًا، وَفِي المِيْزَانِ رَاجِحًا، وَعَلَى الصِّرَاطِ نُوْرًا وَقَائِدًا، وَعَنِ النَّارِ سِتْرًا وَحِجَابًا، وَفِي الجَنَّةِ رَفِيْقًا',
		translation:
			'Å Allah, gjør Koranen til en venn i hans grav, en forbeder på Dommedag, et lys, en skygge og en veiviser på samlingsstedet (mahsyar), en som veier tungt på vektskålen for gode gjerninger, et lys og en leder på sirath-broen, et vern og et slør mot helvetesilden, og en ledsager i paradis.'
	},
	{
		id: 38,
		title: 'Bønn for en ny avdød',
		arabic:
			'اللَّهُمَّ عَبْدُكَ وَابْنَ عَبْدَيْكَ خَرَجَ مِنْ رَّوْحِ الدُّنْيَا وَسَعَتِهَا وَمَحْبُوْبِهِ وَاَحِبَّائِهِ فِيْهَا اِلَى ظـُـلْمَةِ اْلقَبْرِ وَمَا هُوَ لَا قِيْهِ كـَانَ يَشْهَـدُ اَنْ لَا اِلَهَ اِلَّا اَنْتَ وَاَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلـُـكَ وَاَنْتَ اَعْلَمُ بِهِ',
		translation:
			'Å Allah, dette er Din tjener og sønn av Dine to tjenere. Han har forlatt verdens glede og vidde, sine kjære og elskede i den, for gravens mørke og det han vil møte der. Han pleide å vitne om at det ikke finnes noen annen gud enn Deg, og at profeten Muhammad SAW er Din tjener og sendebud. Du vet best om dette.'
	},
	{
		id: 39,
		title: 'Bønn om en romslig grav',
		arabic:
			'اللَّهُمَّ اِنَّهُ نَزَلَ بِكَ وَاَنْتَ خَيْرُ مَنْزُوْلٍ بِهِ وَاَصْبَحَ فـَـقِـيْرًا اِلـَى رَحْمَتِكَ، وَاَنْتَ غَنِيٌّ عَنْ عَذَابِهِ وَقـَـدْ جِئْنَاكَ رَاغِبِيْنَ اِلـَـيْكَ شُفـَـعَاءَ لـَـهُ، اللـّٰهُمَّ اِنْ كَانَ مُحْسِنًا فَزِدْ فِيْ اِحْسَانِهِ وَاِنْ كـَانَ مُسِيْئًا فَتَجَاوَزْ عَنْهُ وَلـَـقـِّـهِ بِرَحْمَتِكَ رِضَاكَ وَقِهِ فِتْنَةَ اْلقـَـبْرِ وَعَــَذابَهُ وَافْسَحْ لـَـهُ فِيْ قـَــبْرِهِ وَجَافِ اْلاَرْضَ عَنْ جَنْبَيْهِ وَلـَــقـِّـهِ بِرَحْمَتِكَ اْلاَمْنَ مِنْ عَذَابِكَ حَتَّى تَبْعَثَــهُ آمِنًا اِلـَى جَنَّتِكَ بِرَحْمَتِكَ يَااَرْحَمَ الرَّاحِمِيْنَ',
		translation:
			'Å Allah, han har vendt tilbake til Deg. Du er det beste stedet å vende tilbake til. Han trenger Din nåde. Mens Du ikke trenger å straffe ham. Vi kommer til Deg og håper på at Du kan gi ham forbønn. Å Allah, hvis han var en god person, øk hans godhet. Hvis han var en dårlig person, tilgi hans feil. La ham møte Din tilfredshet ved Din nåde. Beskytt ham mot gravens prøvelser og straff. Gjør hans grav romslig. Hold jordens vegger borte fra sidene av kroppen hans. La ham møte trygghet ved Din nåde fra Din straff, inntil Du vekker ham opp i trygghet til Ditt paradis ved Din nåde, Å Du mest barmhjertige av de barmhjertige.'
	},
	{
		id: 40,
		title: 'Bønn for den avdøde (mann)',
		arabic: 'اللهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ يَا رَبَّ العَالَمِيْنَ',
		translation:
			'Å Allah, tilgi ham, ha barmhjertighet med ham, gi ham velvære og tilgi ham, Å verdens Herre.'
	},
	{
		id: 41,
		title: 'Bønn for den avdøde (kvinne)',
		arabic: 'اللهُمَّ اغْفِرْ لَها وَارْحَمْها وَعَافِها وَاعْفُ عَنْها يَا رَبَّ العَالَمِيْنَ',
		translation:
			'Å Allah, tilgi henne, ha barmhjertighet med henne, gi henne velvære og tilgi henne, Å verdens Herre.'
	},
	{
		id: 42,
		title: 'Bønn spesielt for den besøkte avdøde',
		arabic:
			'وَاجْعَلِ اللهُمَّ ثَوَابًا مِثْلَ ثَوَابِ ذَالِكَ فِي صَحَائِفِنَا وَفِي صَحَائِفِ وَالِدِيْنَا وَمَشَائِخِنَا وَالسَّادَاتِ الحَاضِرِيْنَ وَوَالِدِيْهِمْ وَمَشَائِخِهِمْ خَاصَّةً وَإِلَى أَمْوَاتِ المُسْلِمِيْنَ عَامَّةً',
		translation:
			'Å Allah, gjør denne belønningen lik belønningen som er nedtegnet på våre sider, sidene til våre foreldre, våre lærere, de fremtredende som er til stede, deres foreldre og deres lærere spesielt, og sjelene til muslimer generelt.'
	},
	{
		id: 43,
		title: 'Bønn om å huske og forstå Koranen',
		arabic:
			'اللهُمَّ ذَكِّرْنَا مِنْهُ مَا نَسِيْنَا وَعَلِّمْنَاهُ مَا جَهِلْنَا وَارْزُقْنَا تِلَاوَتَهُ آنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ، وَاجْعَلْهُ حُجَّةً لَّنَا وَلَا تَجْعَلْهُ حُجَّةً عَلَيْنَا',
		translation:
			'Å Allah, minn oss på de versene i Koranen som vi har glemt. Lær oss det vi ikke vet. Gi oss muligheten til å lese den hele natten og på dagtid. Gjør Koranen til et forsvar for oss. Ikke gjør Koranen til en anklager mot oss i det hinsidige.'
	},
	{
		id: 44,
		title: 'Bønn om Allahs nåde og tilfredshet',
		arabic:
			'اللهُمَّ بِفَضْلِكَ عُمَّنَا، وَبِلُطْفِكَ حُفَّنَا، وَعَلَى الإِسْلَامِ وَالإِيْمَانِ جَمْعًا تَوَفَّنَا وَأَنْتَ رَاضٍ عَنَّا، وَاخْتِمْ بِالصَّالِحَاتِ أَعْمَالَنَا. رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ، بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ، وَالحَمْدُ لِلهِ رَبِّ العَالَمِيْنَ',
		translation:
			'Å Allah, omfavn oss med Din nåde. Omslutt oss med Din mildhet. La oss dø i islam og tro, mens Du er tilfreds med oss. Avslutt våre gjerninger med rettferdighet. Vår Herre, gi oss det gode i denne verden og det gode i det hinsidige. Beskytt oss mot helvetes pinsler, ved Din nåde, Å Du mest barmhjertige av de barmhjertige. All pris tilhører Allah, verdens Herre.'
	}
];

export default {
	source: "Kilde: " + source,
	basedOn: "Basert på: " + basedOn,
	data: tahlilData
};
