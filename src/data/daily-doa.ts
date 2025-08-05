export type DailyDoaItem = {
	title: string;
	arabic: string;
	latin: string;
	translation: string;
};

const dailyDoa: DailyDoaItem[] = [
	{
		title: 'Bønn før måltidet',
		arabic: 'اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
		latin: "Alloohumma barik lanaa fiimaa razatanaa waqinaa 'adzaa bannar",
		translation:
			'Å Allah, velsign oss i det Du har gitt oss og beskytt oss mot helvetes pinsler.'
	},
	{
		title: 'Bønn etter måltidet',
		arabic: 'اَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ',
		latin: "Alhamdu lillaahil ladzii ath'amanaa wa saqoonaa wa ja'alnaa muslimiin",
		translation:
			'All pris tilhører Allah som har gitt oss mat og drikke, og gjort oss til muslimer.'
	},
	{
		title: 'Bønn etter å ha drukket',
		arabic:
			'اَلْحَمْدُ ِللهِ الَّذِىْ جَعَلَهُ عَذْبًا فُرَاتًا بِرَحْمَتِهِ وَلَمْ يَجْعَلْهُ مِلْحًا اُجَاجًا بِذُنُوْبِنَا',
		latin:
			"Alhamdu lillaahil ladzi ja'alahuu 'adzbam furootam birohmatihii wa lamyaj'alhu milhan ujaajam bidzunuubinaa",
		translation:
			'All pris tilhører Allah som har gjort dette (vannet) friskt og leskende ved Sin nåde, og ikke gjorde det salt og bittert på grunn av våre synder.'
	},
	{
		title: 'Bønn når man glemmer å be før måltidet',
		arabic: 'بِسْمِ اللهِ فِىِ أَوَّلِهِ وَآخِرِهِ',
		latin: 'Bismillaahi fii awwalihi wa aakhirihi',
		translation: 'I Allahs navn, i begynnelsen og på slutten.'
	},
	{
		title: 'Bønn før man legger seg',
		arabic: 'بِسْمِكَ اللّٰهُمَّ اَحْyَا وَاَمُوْتُ',
		latin: 'Bismikallohumma ahya wa amuutu',
		translation: 'I Ditt navn, Å Allah, lever jeg og dør jeg.'
	},
	{
		title: 'Bønn ved mareritt',
		arabic: 'اَللّٰهُمَّ إِنّىِ أَعُوْذُ بِكَ مِنْ عَمَلِ الشَّيْطَانِ وَسَيِّئاَتِ اْلأَحْلاَمِ',
		latin: "Allaahumma innii a'uudzubika min 'amalisy syaithaani wa sayyiaatil ahlami",
		translation:
			'Å Allah, jeg søker tilflukt hos Deg fra Satans gjerninger og fra vonde drømmer.'
	},
	{
		title: 'Bønn ved en god drøm',
		arabic: 'اَلْحَمْدُ ِللهِ الَّذِيْ قَطْلَ الْحَاجَتِ',
		latin: 'Alhamdulillahil ladzii qodzoo haajaati',
		translation: 'All pris tilhører Allah som har oppfylt mitt ønske.'
	},
	{
		title: 'Bønn når man våkner',
		arabic: 'اَلْحَمْدُ ِللهِ الَّذِىْ اَحْيَانَا بَعْدَمَآ اَمَاتَنَا وَاِلَيْهِ النُّشُوْرُ',
		latin: "Alhamdu lillahil ladzii ahyaanaa ba'da maa amaa tanaa wa ilahin nusyuuru",
		translation:
			'All pris tilhører Allah som har gitt oss liv etter at Han lot oss dø (vekket oss fra søvnen), and til Ham er oppstandelsen.'
	},
	{
		title: 'Bønn før man går inn på badet eller toalettet',
		arabic: 'اَللّٰهُمَّ اِنّىْ اَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَآئِثِ',
		latin: "Alloohumma Innii a'uudzubika minal khubutsi wal khoaaitsi",
		translation:
			'Å Allah, jeg søker tilflukt hos Deg fra de mannlige og kvinnelige djevlene.'
	},
	{
		title: 'Bønn for Istinja (renselse etter toalettbesøk)',
		arabic: 'اَللّٰهُمَّ حَسِّنْ فَرْجِىْ مِنَ الْفَوَاخِشِ وَظَهِّرْ قَلْبِيْ مِنَ النِّفَاقِ',
		latin: 'Alloohumma thahhir qolbii minan nifaaqi wa hashshin fajrii minal fawaahisyi',
		translation:
			'Å min Herre, rens mitt hjerte fra hykleri og beskytt mine private deler fra umoralske handlinger.'
	},
	{
		title: 'Bønn etter å ha forlatt badet eller toalettet',
		arabic: 'غُفْرَانَكَ الْحَمْدُ ِللهِ الَّذِىْ اَذْهَبَ عَنّى اْلاَذَى وَعَافَانِىْ',
		latin: 'Ghufraanaka. Alhamdulillaahil ladzii adzhaba ‘annjil adzaa wa’aafaanii',
		translation:
			'Jeg søker Din tilgivelse. All pris tilhører Allah som har fjernet fra meg det som var skadelig og gitt meg velvære.'
	},
	{
		title: 'Bønn før Fajr-bønnen',
		arabic: 'اَللّٰهُمَّ اِنِّى اَعُوْذُ بِكَ مِنْ ضِيْقِ الدُّنْيَا وَضِيْقِ يَوْمِ الْقِيَامَةِ',
		latin: "Alloohumma inni a'udzubika min dzhiiqid-dunyaa wa dzhiiqi yaumal-qiyaamati",
		translation:
			'Å Allah, jeg søker tilflukt hos Deg fra denne verdens trengsler og fra Dommedagens trengsler. (HR. Abu Daud)'
	},
	{
		title: 'Bønn ved morgengry',
		arabic:
			'اَللّٰهُمَّ بِكَ اَصْبَحْنَا وَبِكَ اَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ النُّشُوْرُ',
		latin:
			'Alloohumma bika ashbahnaa wa bika amsainaa wa bika nahyaa wa bika namuutu wa ilaikan nusyuuru',
		translation:
			'Å Allah, ved Deg når vi morgenen og ved Deg når vi kvelden, ved Deg lever vi og ved Deg dør vi, og til Deg er oppstandelsen.'
	},
	{
		title: 'Bønn ved kveldstid',
		arabic:
			'اَللّٰهُمَّ بِكَ اَمْسَيْنَا وَبِكَ اَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ الْمَصِيْرُ',
		latin:
			'Alloohumma bika amsainaa wa bika ashbahnaa wa bika nahyaa wa bika namuutu wa ilaikal mashiir',
		translation:
			'Å Allah, ved Deg når vi kvelden og ved Deg når vi morgenen, ved Deg lever vi og ved Deg dør vi, og til Deg er vår endelige tilbakekomst.'
	},
	{
		title: 'Bønn når man ser seg i speilet',
		arabic: 'اَلْحَمْدُ ِللهِ كَمَا حَسَّنْتَ خَلْقِىْ  فَحَسِّـنْ خُلُقِىْ',
		latin: 'Alhamdulillaahi kamaa hassanta kholqii fahassin khuluqii',
		translation:
			'All pris tilhører Allah. Å Allah, slik som Du har gjort mitt ytre vakkert, gjør også min karakter vakker.'
	},
	{
		title: 'Bønn når man går inn i huset',
		arabic:
			'اَللّٰهُمَّ اِنّىْ اَسْأَلُكَ خَيْرَالْمَوْلِجِ وَخَيْرَالْمَخْرَجِ بِسْمِ اللهِ وَلَجْنَا وَبِسْمِ اللهِ خَرَجْنَا وَعَلَى اللهِ رَبّنَا تَوَكَّلْنَا',
		latin:
			"Allahumma innii as-aluka khoirol mauliji wa khoirol makhroji bismillaahi wa lajnaa wa bismillaahi khorojnaa wa'alallohi robbina tawakkalnaa",
		translation:
			'Å Allah, jeg ber Deg om det gode ved å gå inn og det gode ved å gå ut. I Allahs navn går vi inn, og i Allahs navn går vi ut, og på Allah, vår Herre, stoler vi.'
	},
	{
		title: 'Bønn når man forlater huset / Bønn for reise',
		arabic: 'بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ لاَحَوْلَ وَلاَقُوَّةَ اِلاَّ بِالله',
		latin: "Bismillaahi tawakkaltu 'alalloohi laa hawlaa walaa quwwata illaa bilaahi",
		translation:
			'I Allahs navn, jeg stoler på Allah. Det er ingen makt eller styrke utenom hos Allah.'
	},
	{
		title: 'Bønn når man tar på seg klær',
		arabic:
			'بِسْمِ اللهِ اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَاهُوَ لَهُ وَاَعُوْذُبِكَ مِنْ شَرِّهِ وَشَرِّمَا هُوَلَهُ',
		latin:
			"Bismillaahi, Alloohumma innii as-aluka min khoirihi wa khoiri maa huwa lahuu wa'a'uu dzubika min syarrihi wa syarri maa huwa lahuu",
		translation:
			'I Ditt navn, Å Allah, ber jeg Deg om det gode i dette plagget og det gode det er laget for, og jeg søker tilflukt hos Deg fra det onde i det og det onde det er laget for.'
	},
	{
		title: 'Bønn når man tar på seg nye klær',
		arabic:
			'اَلْحَمْدُ لِلّٰهِ الَّذِىْ كَسَانِىْ هَذَا وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّىْ وَلاَقُوَّةٍ',
		latin:
			'Alhamdu lillaahil ladzii kasaanii haadzaa wa rozaqoniihi min ghoiri hawlim minni wa laa quwwatin',
		translation:
			'All pris tilhører Allah som har kledd meg med dette og gitt meg det, uten noen makt eller styrke fra meg.'
	},
	{
		title: 'Bønn når man tar av seg klær',
		arabic: 'بِسْمِ اللهِ الَّذِيْ لاَ إِلَهَ إِلَّا هُوَ',
		latin: 'Bismillaahil ladzii laa ilaaha illaa huwa',
		translation: 'I Allahs navn, Han som det ikke finnes noen annen gud enn.'
	},
	{
		title: 'Bønn om nyttig kunnskap',
		arabic:
			'اَللّٰهُمَّ اِنِّى اَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً',
		latin:
			"Alloohumma innii as-aluka 'ilmaan naafi'aan wa rizqoon thoyyibaan wa 'amalaan mutaqobbalaan",
		translation:
			'Å Allah, jeg ber Deg om nyttig kunnskap, god næring og aksepterte gjerninger. (HR. Ibnu Majah)'
	},
	{
		title: 'Bønn før man studerer',
		arabic: 'يَارَبِّ زِدْنِىْ عِلْمًا وَارْزُقْنِىْ فَهْمًا',
		latin: "Yaa robbi zidnii 'ilman warzuqnii fahmaa",
		translation: 'Å Herre, øk min kunnskap og gi meg forståelse.'
	},
	{
		title: 'Bønn etter man har studert',
		arabic:
			'اَللّٰهُمَّ اِنِّى اِسْتَوْدِعُكَ مَاعَلَّمْتَنِيْهِ فَارْدُدْهُ اِلَىَّ عِنْدَ حَاجَتِىْ وَلاَ تَنْسَنِيْهِ يَارَبَّ الْعَالَمِيْنَ',
		latin:
			"Allaahumma innii astaudi'uka maa 'allamtaniihi fardud-hu ilayya 'inda haajatii wa laa tansaniihi yaa robbal 'alamiin",
		translation:
			'Å Allah, jeg betror Deg det Du har lært meg, så bring det tilbake til meg når jeg trenger det, og la meg ikke glemme det, Å Verdens Herre.'
	},
	{
		title: 'Bønn for reise',
		arabic:
			'اَللّٰهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِعَنَّابُعْدَهُ اَللّٰهُمَّ اَنْتَ الصَّاحِبُ فِى السَّفَرِوَالْخَلِيْفَةُفِى الْاَهْلِ',
		latin:
			"Alloohumma hawwin 'alainaa safaranaa hadzaa waatwi 'annaa bu'dahu. Alloohumma antashookhibu fiissafari walkholiifatu fiil ahli",
		translation:
			'Å Allah, gjør denne reisen lett for oss, og gjør avstanden kort. Å Allah, Du er vår ledsager på reisen og den som våker over vår familie.'
	},
	{
		title: 'Bønn når man stiger på et kjøretøy',
		arabic:
			'سُبْحَانَ الَّذِىْ سَخَّرَلَنَا هَذَا وَمَاكُنَّالَهُ مُقْرِنِيْنَ وَاِنَّآ اِلَى رَبِّنَا لَمُنْقَلِبُوْنَ',
		latin:
			'Subhaanalladzii sakkhara lanaa hadza wama kunna lahu muqriniin wa-inna ilaa rabbina lamunqalibuun.',
		translation:
			'Ære være Ham som har stilt dette til vår tjeneste, noe vi ikke selv kunne ha klart, og til vår Herre skal vi vende tilbake.'
	},
	{
		title: 'Bønn når man går ombord i et skip',
		arabic: 'بِسْمِ اللهِ مَجْرَهَا وَمُرْسَهَآاِنَّ رَبِّىْ لَغَفُوْرٌرَّحِيْمٌ',
		latin: 'Bismillaahi majrahaa wa mursaahaa inna robbii laghofuurur rohiim',
		translation:
			'I Allahs navn, når det seiler og når det ankrer. Sannelig, min Herre er tilgivende og barmhjertig.'
	},
	{
		title: 'Bønn når man ankommer bestemmelsesstedet',
		arabic: 'اَلْحَمْدُ ِللهِ الَّذِى سَلَمَنِى وَالَّذِى اَوَنِى وَالَّذِى جَمَعَ الشَّمْلَ بِ',
		latin: 'Alhamdulillahil ladzi sallamani wal ladzi awani wal ladzi jama’asy syamla bi',
		translation:
			'All pris tilhører Allah, som har frelst meg, beskyttet meg og gjenforent meg med min familie.'
	},
	{
		title: 'Bønn på vei til moskeen',
		arabic:
			'اَللّٰهُمَّ اجْعَلْ فِىْ قَلْبِى نُوْرًا وَفِى لِسَانِىْ نُوْرًا وَفِىْ بَصَرِىْ نُوْرًا وَفِىْ سَمْعِىْ نُوْرًا وَعَنْ يَسَارِىْ نُوْرًا وَعَنْ يَمِيْنِىْ نُوْرًا وَفَوْقِىْ نُوْرًا وَتَحْتِىْ نُوْرًا وَاَمَامِىْ نُوْرًا وَخَلْفِىْ نُوْرًا وَاجْعَلْ لِّىْ نُوْرًا',
		latin:
			"Alloohummaj-'al fii qolbhii nuuroon wa fii lisaanii nuuroon wa fii bashorii nuuroon wa fii sam'ii nuuroon wa'an yamiinii nuuroon wa'an yasaarii nuuroon wa fauqii nuuroo wa tahtii nuuroo wa amaamii nuuroon wa khofii nuuroon waj-'al lii nuuroon",
		translation:
			'Å Allah, plasser lys i mitt hjerte, på min tunge, i mitt syn, i min hørsel, til høyre for meg, til venstre for meg, over meg, under meg, foran meg, bak meg, og gi meg lys. (HR. Bukhari og Muslim)'
	},
	{
		title: 'Bønn når man går inn i moskeen',
		arabic: 'اَللّٰهُمَّ افْتَحْ لِيْ اَبْوَابَ رَحْمَتِكَ',
		latin: 'Allahummaf tahlii abwaaba rohmatik',
		translation: 'Å Allah, åpne for meg portene til Din nåde.'
	},
	{
		title: 'Bønn når man forlater moskeen',
		arabic: 'اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ فَضْلِكَ',
		latin: 'Allahumma innii asaluka min fadlik',
		translation: 'Å Allah, jeg ber Deg om Din gunst.'
	},
	{
		title: 'Bønn før man leser Koranen',
		arabic:
			'اَللّٰهُمَّ افْتَحْ عَلَىَّ حِكْمَتَكَ وَانْشُرْ عَلَىَّ رَحْمَتَكَ وَذَكِّرْنِىْ مَانَسِيْتُ يَاذَاالْجَلاَلِ وَاْلاِكْرَامِ',
		latin:
			"Alloohummaftah 'alayya hikmataka wansyur 'alayya rohmataka wa dzakkirnii maanasiitu yaa dzal jalaali wal ikhroomi",
		translation:
			'Å Allah, åpne for meg Din visdom og spre over meg Din nåde, og minn meg på det jeg har glemt, Å Eier av majestet og ære.'
	},
	{
		title: 'Bønn etter man har lest Koranen',
		arabic:
			'اَللّٰهُمَّ ارْحَمْنِىْ بِالْقُرْآنِ. وَاجْعَلْهُ لِىْ اِمَامًا وَنُوْرًا وَّهُدًى وَّرَحْمَةً. اَللّٰهُمَّ ذَكِّرْنِىْ مِنْهُ مَانَسِيْتُ وَعَلِّمْنِىْ مِنْهُ مَاجَهِلْتُ. وَارْزُقْنِىْ تِلاَ وَتَهُ آنَآءَ اللَّيْلِ وَاَطْرَافَ النَّهَارٍ. وَاجْعَلْهُ لِىْ حُجَّةً يَارَبَّ الْعَالَمِيْنَ',
		latin:
			"Allahummarhamnii bil qur'aani. waj'alhu lii imaaman wa nuuran wa hudan wa rohman. Allahumma dzakkirnii minhu maa nasiitu wa'allimnii minhu maa jahiltu. wazuqnii tilaa watahu aanaa-al laili wa athroofan nahaari. waj'alhu lii hujjatan yaa robbal 'aalamiina.",
		translation:
			'Å Allah, ha barmhjertighet med meg ved Koranen. Gjør den til en leder for meg, et lys, en veiledning og en nåde. Å Allah, minn meg på det jeg har glemt av den, og lær meg det jeg er uvitende om. Gi meg anledning til å resitere den om natten og om dagen, og gjør den til et bevis for meg, Å Verdens Herre.'
	},
	{
		title: 'Intensjon for Wudhu (rituell vask)',
		arabic: 'نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى',
		latin: "Nawaitul whudu-a lirof'il hadatsii ashghori fardhon lillaahi ta'aalaa",
		translation:
			'Jeg har til hensikt å utføre wudhu for å fjerne den mindre rituelle urenheten, som en plikt overfor Allah, den Høyeste.'
	},
	{
		title: 'Bønn etter Wudhu (rituell vask)',
		arabic:
			'اَشْهَدُ اَنْ لاَّاِلَهَ اِلاَّاللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًاعَبْدُهُ وَرَسُوْلُهُ. اَللّٰهُمَّ اجْعَلْنِىْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِىْ مِنَ الْمُتَطَهِّرِيْنَ، وَجْعَلْنِيْ مِنْ عِبَادِكَ الصَّالِحِيْنَ',
		latin:
			"Asyhadu allaa ilaaha illalloohu wahdahuu laa syariika lahu wa asyhadu anna muhammadan ‘abduhuuwa rosuuluhuu, alloohummaj’alnii minat tawwaabiina waj’alnii minal mutathohhiriina, waj'alnii min 'ibadikash shaalihiina",
		translation:
			'Jeg bevitner at det ikke finnes noen annen gud enn Allah, den Ene, uten partner, og jeg bevitner at Muhammad er Hans tjener og sendebud. Å Allah, gjør meg til en av dem som angrer, og gjør meg til en av dem som renser seg, og gjør meg til en av Dine rettferdige tjenere.'
	},
	{
		title: 'Bønn før man bader',
		arabic:
			'اَللّٰهُمَّ اغْفِرْلِى ذَنْبِى وَوَسِّعْ لِى فِىْ دَارِىْ وَبَارِكْ لِىْ فِىْ رِزْقِىْ',
		latin: "Alloohummaghfirlii dzambii wa wassi'lii fii daarii wa baarik lii fii rizqii",
		translation:
			'Å Allah, tilgi mine synder, gjør mitt hjem romslig for meg, og velsign min næring.'
	}
];

export default dailyDoa;
