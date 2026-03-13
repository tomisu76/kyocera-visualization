// ===== PRÍPAD SKAČANY v3.0 – KOMPLETNÉ DÁTA =====

const people = [
  // POŠKODENÍ (červená)
  {
    id: 'struhar', label: 'Ing. Ivan Struhár', group: 'victim', role: 'Oznamovateľ, vlastník pozemkov',
    detail: 'Hlavný poškodený. Právny nástupca rodiny Hýbalových (kúpna a darovacia zmluva). Podával trestné oznámenia od 2019, osobne predkladal dôkazy. Adresa: Veľká Okružná 1129/54, Partizánske. Neustále sa domáhal správneho konania – ústne na OZ aj písomne.'
  },
  {
    id: 'struhara', label: 'Ing. Anna Struhárová', group: 'victim', role: 'Spoluvlastníčka pozemkov',
    detail: 'Manželka Ivana Struhára. Spolupodávateľka sťažností. Detailne popísala 7 pochybení Baránikovej a žiadala vypočutie. Sťažnosť zo dňa 11.9.2024.'
  },
  {
    id: 'tomas', label: 'Tomáš Struhár', group: 'victim', role: 'Syn, pôvodný oznamovateľ',
    detail: 'Podal oznámenie cez GP SR pod ČVS: ORP-58/VYS-PE-2025 s prílohami cez Google Drive. Otcovi udelil generálnu plnú moc.'
  },

  // PODOZRIVÍ – KATASTER & OBEC (oranžová)
  {
    id: 'baranikova', label: 'Ing. Oľga Barániková', group: 'suspect', role: 'Vedúca katastra OÚ PE',
    detail: 'KĽÚČOVÁ PODOZRIVÁ a vodkyňa organizovanej skupiny. 2005: prevzala dohody o vydaní veci (PEČIATKA!), no klamala že ich nedostala. 2006: vydala DVE verzie toho istého ROEP rozhodnutia – raz SPF, raz neexistujúci ONV Topoľčany (nejestvuje od 1990!). Sfalšovala hospodárske zmluvy s Mlynmi – dopísala pozemky do zoznamu strojov. 2009: zatajila dohody pred OÚ Trenčín. Manipulovala starostu a poslancov. RIADI celú skupinu spolu s Dolným.'
  },
  {
    id: 'klizan', label: 'Ing. Juraj Kližan', group: 'suspect', role: 'Starosta Skačany (2. volebné obdobie)',
    detail: 'OSOBNÝ ZÁUJEM: pozemok SUSEDÍ s reštituovaným! Bránil Struhárovi vystúpiť. Odpredával pozemky susedom (Dávid, Krajča). Sfalšoval Protokol – vydal len 2 riadky, ostatný text VYMAZAL. 4 roky nevytýčil správne konanie. Porušil §3, §17, §18 infozákona. Povedal, aby sa Struhár "neopakoval a nezdôrazňoval infozákon".'
  },
  {
    id: 'dolny', label: 'JUDr. Peter Dolný', group: 'suspect', role: 'Právnik obce Skačany',
    detail: 'Vypracoval ZAVÁDZAJÚCU právnu analýzu (11.6.2018). Priznal v nej, že reštitúcia na OÚ Prievidza nie je ukončená – a napriek tomu uvádzal poslancov do omylu. Klamal, že Struhár "nepredložil žiadne právne relevantné listiny". Obec analýzu nechcela vydať – "advokát nedal súhlas". Vydala ju až po 4 mesiacoch! Nikdy nebol políciou vypočutý.'
  },
  {
    id: 'pavlik', label: 'Ing. Peter Pavlík', group: 'suspect', role: 'Bývalý prednosta OÚ PE',
    detail: 'Bývalý prednosta Okresného úradu Partizánske. Nmal rešpektovať rozhodnutie OÚ Prievidza. Spolupodozrivý s Baránikovovou.'
  },
  {
    id: 'poslanci', label: 'Poslanci OZ Skačany', group: 'suspect', role: 'Obecné zastupiteľstvo',
    detail: 'Odhlasovali odpredaj reštituovaných pozemkov. 28.2.2023 zamietli Struhárovi vstúpenie. Poslanec M. Krajčo a V. Knápek osobitne aktívni. Nepoznajú reštitučné zákony, nerozumejú im, no rozhodujú o nich.'
  },
  {
    id: 'bartko', label: 'PhDr. Bartková', group: 'suspect', role: 'Hlavná kontrolórka obce',
    detail: 'PhDr. Šaneta Bartková – hlavná kontrolórka obce Skačany. Kryje všetky pochybenia obce. Bola upozornená na priestupok – nezaznamenala, nenahlásila, odignorovala. Podieľala sa na nepravdivých informáciách.'
  },
  {
    id: 'klizanova', label: 'Daša Kližanová', group: 'suspect', role: 'Pracovníčka OÚ, švagriná',
    detail: 'Pracovníčka Obecného úradu Skačany a ŠVAGRINÁ starostu Kližana. Rodinné prepojenie starostu na obecný úrad. Podieľala sa na nepravdivých informáciách.'
  },

  // KUPCI POZEMKOV
  {
    id: 'krajca', label: 'Martin Krajča', group: 'buyer', role: 'Kupec pozemkov, sused starostu',
    detail: 'Kúpil časti reštituovaných pozemkov od obce. SUSED STAROSTU. Poslanec OZ. Vedúci prokuratúry Masár priznal, že sa s ním "veľmi dobre pozná, pozná jeho manželku a rodinu, navštevujú sa". Kúpa od začiatku NEPLATNÁ podľa zák. 87/1991. Získal pozemky priamo cez neoprávnený prepis Baránikovou.'
  },
  {
    id: 'stanielava', label: 'Dávid Stanielava', group: 'buyer', role: 'Kupec pozemkov, sused',
    detail: 'Ďalší kupec častí reštituovaných pozemkov. Spomenutý v návrhu prokuratúry. Kúpa od začiatku NEPLATNÁ podľa zák. 87/1991 Zb. §9. Priamy prijímateľ neoprávneného prepisu od Baránikovej.'
  },

  // PODOZRIVÍ – OÚ TRENČÍN
  {
    id: 'kramarova', label: 'JUDr. Kramárová', group: 'suspect', role: 'OÚ Trenčín – Protokol 2009',
    detail: 'JUDr. Mária Kramárová – vtedajšia pracovníčka Obvodného úradu Trenčín. V roku 2009 VYHOTOVILA nezákonný protokol o prevode vlastníctva z ONV Topoľčany na obec Skačany. ONV Topoľčany v 2009 neexistoval 19 rokov! Teraz pracovníčka OÚ Trenčín, majetkoprávny odbor.'
  },
  {
    id: 'filo', label: 'JUDr. Peter Filo', group: 'suspect', role: 'Vedúci majetkoprávn. odboru OÚ TN',
    detail: 'Vedúci majetkoprávneho odboru na Okresnom úrade v Trenčíne. Spoluzodpovedný za nezákonný protokol z 2009. Mal vedomosť o prebiehajúcej reštitúcii.'
  },

  // POLÍCIA
  {
    id: 'hlavacka', label: 'kpt. Mgr. Hlavačka', group: 'police', role: 'Vyšetrovateľ č.4, OR PZ PE',
    detail: 'Najnovší vyšetrovateľ. IGNOROVAL odporúčania Čepka na doplnenie dokazovania. Nevypočul Dolného, Kramárovú, Fila. Škodu označil ako "minimálnu malú" (v skutočnosti 25 420+ € / trhová 300 000+). Vydal ORP-54 (15.4.2025) aj ORP-58 (28.6.2025) – oba ODMIETNUTÉ. Argumentoval ne bis in idem.'
  },
  {
    id: 'cepko', label: 'kpt. Ing. Čepko', group: 'police_good', role: 'Vyšetrovateľ (15.9.2024) ✓',
    detail: 'UZNESENÍM zo dňa 15.9.2024 VYHOVEL sťažnosti a ZRUŠIL odmietavé uznesenie. Sťažnosť DÔVODNÁ. Nariadil: doplniť dokazovanie, vypočuť oznamovateľa, preveriť dôkazy, doručiť príkaz KRPZ. Dôvod prerozdelenia: ukončenie pôsobenia Vožňákovej.'
  },
  {
    id: 'voznakova', label: 'PhDr. Vožňáková', group: 'police', role: 'Vyšetrovateľka č.1',
    detail: 'mjr. PhDr. Silvia Vožňáková – pôvodná vyšetrovateľka OR PZ Partizánske. Ukončila pôsobenie v Policajnom zbore, preto bol spis prerozdelený.'
  },
  {
    id: 'terlanda', label: 'npor. Mgr. Terlanda', group: 'police', role: 'Vyšetrovateľ č.2',
    detail: 'Vypočúval Baránikovú, ale NEZACIELENE. Struhár mu dal doklad s pečiatkou katastra z 2005 – Terlanda na to "ZABUDOL" a Baránikovej to neukázal. Vypočúval starostu jednostranne. Prebieha voči nemu trestné stíhanie.'
  },
  {
    id: 'svikova', label: 'mjr. Mgr. Sviková', group: 'police', role: 'Riaditeľka PZ PE',
    detail: 'mjr. Mgr. Gabriela Sviková – riaditeľka Odboru vyšetrovania OR PZ Partizánske. Prebieha voči nej trestné stíhanie. Struhár žiadal vylúčiť PZ PE z vyšetrovania pre konflikt záujmov.'
  },

  // PROKURATÚRA
  {
    id: 'dobrik', label: 'JUDr. Dobrík', group: 'prosecutor', role: 'Prokurátor OP PE – dozor',
    detail: 'Dozorujúci prokurátor. ZAMIETOL sťažnosti 23.7.2025 (1Pn 147/24/3305-32). „Absentuje zavinenie." Struhár mu osobne odovzdával dôkazy, Dobrík ubezpečil – nový vyšetrovateľ si ich vyžiada. NESTALO SA. Ďalšia sťažnosť NEPRÍPUSTNÁ.'
  },
  {
    id: 'masar', label: 'JUDr. Masár', group: 'prosecutor', role: 'Vedúci prokuratúry PE',
    detail: 'Vedúci prokuratúry v Partizánskom. Počas zápisnice PRIZNAL osobný vzťah s Martinom Krajčom – "veľmi dobre sa poznajú, pozná jeho manželku a rodinu, navštevujú sa". Napriek tomu nič neurobil. Struhár žiadal protest prokurátora – bezvýsledne.'
  },
  {
    id: 'gp', label: 'Generálny prokurátor', group: 'prosecutor', role: 'GP SR',
    detail: 'Príkazom IV/3 Gn 253/24/1000-11 zo 17.6.2025 vec Krajskej prokuratúre NEODŇAL. Poveril KP Trenčín prešetrením.'
  },
  {
    id: 'kp', label: 'Krajská prokurátorka', group: 'prosecutor', role: 'KP Trenčín',
    detail: 'Príkazom 1Kn 100/25/3300-34 z 24.6.2025 vec Okresnej prokuratúre NEODŇALA. Mala príkaz GP vyše mesiaca a Struhára NEINFORMOVALA.'
  },

  // ĎALŠIE STRANY
  {
    id: 'krpz', label: 'KRPZ Trenčín', group: 'police', role: 'Krajské riaditeľstvo PZ',
    detail: 'KRPZ-TN-OKP1-505-001/2024 – krajský riaditeľ rozhodol, že vec NEODNÍMA PZ Partizánske. Bez vyjadrenia oznamovateľa, príkaz mu nebol doručený.'
  },
  {
    id: 'naka', label: 'NAKA + Inšpekcia', group: 'police', role: 'Národná kriminálna agentúra',
    detail: 'Polícia roztriedila dôkazy: časť NAKA, časť Inšpekcia, časť ZATAJILA. Výsledok: nikto nemal VŠETKY dôkazy. "Stačí aby chýbal jeden dôležitý doklad a vyšetrovanie je zmarené."'
  },
  {
    id: 'leitman', label: 'Ing. Ignác Leitman', group: 'police_good', role: 'Riaditeľ OPÚ Prievidza',
    detail: 'KĽÚČOVÝ SVEDOK A AUTOR ROZHODNUTIA. Podpísal rozhodnutie OPU 515/2005-1905-1 zo dňa 31.3.2005: ZÁKAZ prevodu vlastníctva podľa §4 ods.2 zák. 503/2003 – „takýto úkon je NEPLATNÝ". Rozhodnutie bez odvolania, preskúmateľné súdom. Napriek tomu Barániková v 2006 pozemky previedla. OČTK toto rozhodnutie systematicky ignorujú.'
  },
  {
    id: 'ombudsman', label: 'Ombudsman', group: 'neutral', role: 'Verejný ochranca práv',
    detail: 'Vec prešetruje aj Ombudsman. Struhár osobne navštívil aj ministra vnútra.'
  },

  // INŠTITÚCIE – neoprávnení nadobúdatelia
  {
    id: 'spf', label: 'Slovenský pozemkový fond', group: 'neutral', role: 'SPF – správa pozemkov',
    detail: 'V roku 2006 Barániková na základe ROEP previedla pozemky do správy SPF. SPF pritom potvrdil platnosť reštitúcie (1 z 8 inštitúcií v 2019). Pozemky nemali byť nikdy v správe SPF.'
  },
  {
    id: 'svp', label: 'SVP š.p. Piešťany', group: 'neutral', role: 'Slovenský vodohospodársky podnik',
    detail: 'SVP š.p. Piešťany – subjekt, do ktorého správy Barániková v 2006 neoprávnene previedla pozemky na základe sfalšovaných ROEP údajov.'
  },
  {
    id: 'onv', label: 'ONV Topoľčany', group: 'neutral', role: 'Neexistujúci orgán (od 1990)',
    detail: 'Okresný národný výbor Topoľčany – ZRUŠENÝ v roku 1990! Barániková v 2006 (16 rokov po zrušení) a Kramárová v 2009 (19 rokov po zrušení) naň previedli pozemky. KĽÚČOVÝ dôkaz podvodu.'
  },
  {
    id: 'gazova', label: 'Ing. Jaroslava Gažová', group: 'police_good', role: 'Znalkyňa – posudok č. 30/2022',
    detail: 'Súdna znalkyňa. Vypracovala znalecký posudok č. 30/2022 – vyčíslila škodu na pozemkoch na 25 420,32 €. Trhová hodnota pozemkov je 300 000+ €. Vyšetrovateľ Hlavačka napriek tomu kvalifikoval škodu ako "minimálnu malú".'
  },
  {
    id: 'rybanska', label: 'JUDr. Rybánska', group: 'neutral', role: 'Právnička – oznámenie 2019',
    detail: 'JUDr. Vlasta Rybánska – zaslala oznámenie z 24.6.2019 Struhárovi. Súvisí s informovaním o stave vlastníckych práv.'
  },
];

const edges = [
  // RODINA
  { from: 'struhara', to: 'struhar', label: 'manželia', color: '#9ca3af', weight: 1 },
  { from: 'tomas', to: 'struhar', label: 'syn → otec (plná moc)', color: '#9ca3af', weight: 1 },

  // BARÁNIKOVÁ → všetci
  { from: 'baranikova', to: 'struhar', label: 'prepísala pozemky, sfalšovala zmluvy', color: '#ef4444', weight: 3 },
  { from: 'baranikova', to: 'klizan', label: 'kamarátka, riadi skupinu', color: '#f97316', weight: 3 },
  { from: 'baranikova', to: 'pavlik', label: 'spolupráca (OÚ PE)', color: '#f97316', weight: 2 },
  { from: 'baranikova', to: 'kramarova', label: 'zatajila dohody → nezákonný protokol', color: '#ef4444', weight: 3 },
  { from: 'baranikova', to: 'dolny', label: 'spoluriadenie skupiny', color: '#f97316', weight: 3 },

  // STAROSTA → kupci
  { from: 'klizan', to: 'struhar', label: 'bránil, pozemok SUSEDÍ', color: '#ef4444', weight: 3 },
  { from: 'klizanova', to: 'klizan', label: 'ŠVAGRINÁ', color: '#f97316', weight: 2 },
  { from: 'klizan', to: 'krajca', label: 'odpredaj, SUSEDIA', color: '#f97316', weight: 2 },
  { from: 'klizan', to: 'stanielava', label: 'odpredaj, SUSEDIA', color: '#f97316', weight: 2 },
  { from: 'dolny', to: 'klizan', label: 'právna "podpora"', color: '#f97316', weight: 2 },
  { from: 'dolny', to: 'poslanci', label: 'zavádzajúca analýza', color: '#f97316', weight: 2 },
  { from: 'poslanci', to: 'struhar', label: 'zamietli vystúpenie', color: '#ef4444', weight: 2 },
  { from: 'bartko', to: 'klizan', label: 'kontrolórka – kryje obce', color: '#f97316', weight: 1 },

  // OÚ TRENČÍN
  { from: 'kramarova', to: 'filo', label: 'vyhotovila protokol 2009', color: '#f97316', weight: 2 },

  // POLÍCIA REŤAZ
  { from: 'voznakova', to: 'terlanda', label: 'spis pridelený', color: '#9ca3af', weight: 1 },
  { from: 'terlanda', to: 'cepko', label: 'prerozdelenie', color: '#9ca3af', weight: 1 },
  { from: 'cepko', to: 'hlavacka', label: 'nariadil doplniť → IGNOROVANÉ', color: '#22c55e', weight: 3 },
  { from: 'hlavacka', to: 'struhar', label: 'ODMIETOL 2× (ORP-54, ORP-58)', color: '#ef4444', weight: 3 },
  { from: 'terlanda', to: 'baranikova', label: 'vypočul nezacielene', color: '#f97316', weight: 2 },
  { from: 'svikova', to: 'hlavacka', label: 'riaditeľka PZ PE', color: '#3b82f6', weight: 1 },
  { from: 'krpz', to: 'svikova', label: 'NEODŇAL z PE', color: '#ef4444', weight: 2 },
  { from: 'naka', to: 'struhar', label: 'nedostali VŠETKY dôkazy', color: '#f97316', weight: 2 },

  // PROKURATÚRA
  { from: 'dobrik', to: 'hlavacka', label: 'dozor – stotožnil sa', color: '#a855f7', weight: 2 },
  { from: 'dobrik', to: 'struhar', label: 'ZAMIETOL (23.7.2025)', color: '#ef4444', weight: 3 },
  { from: 'masar', to: 'krajca', label: 'OSOBNÝ VZŤAH (priznal)', color: '#ef4444', weight: 3 },
  { from: 'masar', to: 'struhar', label: 'nič neurobil', color: '#ef4444', weight: 2 },
  { from: 'struhar', to: 'gp', label: 'sťažnosť na GP SR', color: '#3b82f6', weight: 1 },
  { from: 'gp', to: 'dobrik', label: 'NEODŇAL (17.6.2025)', color: '#ef4444', weight: 2 },
  { from: 'struhar', to: 'kp', label: 'sťažnosť na KP TN', color: '#3b82f6', weight: 1 },
  { from: 'kp', to: 'dobrik', label: 'NEODŇALA (24.6.2025)', color: '#ef4444', weight: 2 },

  // OMBUDSMAN
  { from: 'struhar', to: 'ombudsman', label: 'podnet', color: '#06b6d4', weight: 1 },

  // LEITMAN – kľúčové rozhodnutie OPU 515/2005
  { from: 'leitman', to: 'struhar', label: 'OPU 515/2005: CHRÁNIL vlastníctvo', color: '#22c55e', weight: 3 },
  { from: 'baranikova', to: 'leitman', label: 'PORUŠILA jeho ZÁKAZ prevodu (2006)', color: '#ef4444', weight: 3 },
  { from: 'hlavacka', to: 'leitman', label: 'IGNOROVAL rozhodnutie vo vyšetrovaní', color: '#ef4444', weight: 2 },
  { from: 'dobrik', to: 'leitman', label: 'IGNOROVAL rozhodnutie v dozore', color: '#ef4444', weight: 2 },

  // KUPCI → STRUHÁR (škoda)
  { from: 'krajca', to: 'struhar', label: 'kúpil jeho pozemky (NEPLATNÉ)', color: '#eab308', weight: 2 },
  { from: 'stanielava', to: 'struhar', label: 'kúpil jeho pozemky (NEPLATNÉ)', color: '#eab308', weight: 2 },

  // PROKURATÚRA – hierarchia
  { from: 'masar', to: 'dobrik', label: 'vedúci → dozorový (hierarchia)', color: '#a855f7', weight: 1 },
  { from: 'gp', to: 'kp', label: 'poveril prešetrením', color: '#a855f7', weight: 1 },

  // INŠTITÚCIE – neoprávnené prevody + Priame prepisy Baránikovej
  { from: 'baranikova', to: 'spf', label: 'ROEP prevod 2006', color: '#f97316', weight: 2 },
  { from: 'baranikova', to: 'svp', label: 'neoprávnený prepis', color: '#ef4444', weight: 3 },
  { from: 'baranikova', to: 'krajca', label: 'neoprávnený prepis', color: '#ef4444', weight: 3 },
  { from: 'baranikova', to: 'stanielava', label: 'neoprávnený prepis', color: '#ef4444', weight: 3 },
  { from: 'baranikova', to: 'onv', label: 'prevod na NEEXISTUJÚCI orgán!', color: '#ef4444', weight: 3 },
  { from: 'kramarova', to: 'onv', label: 'protokol z neexistujúceho ONV (2009)', color: '#ef4444', weight: 3 },
  { from: 'kramarova', to: 'klizan', label: 'protokol → prevod na obec', color: '#f97316', weight: 2 },

  // ZNALKYŇA
  { from: 'gazova', to: 'struhar', label: 'posudok: škoda 25 420 €', color: '#22c55e', weight: 2 },
  { from: 'hlavacka', to: 'gazova', label: 'IGNOROVAL posudok ("minimálna")', color: '#ef4444', weight: 2 },

  // TRESTNÉ STÍHANIE voči polícii
  { from: 'svikova', to: 'terlanda', label: 'obaja: prebieha trestné stíhanie', color: '#ef4444', weight: 1 },
];

const timeline = [
  { id: 't1', year: '1951–52', title: 'Znárodnenie majetku', desc: 'Majetková podstata rodiny Hýbalových znárodnená rozh. OS Partizánske. Vlastníctvo → Čs. štát → Nitrianske mlyny n.p.Nitra → Mlyny a cestovinárne š.p. Piešťany. Výmer č. C-28379/50-VI/2.', type: 'info' },
  { id: 't2', year: '19.12.1991', title: '✓ Reštitúcia – Dohoda č.1', desc: 'Dohoda o vydaní veci medzi Mlynmi (Ing. Jozef Šubrt, likvidátor) a rodinou Hýbalovou. Zaregistrovaná na Štátnom notárstve Topoľčany. Konštitutívny charakter – všeobecná platnosť.', type: 'approved' },
  { id: 't3', year: '28.4.1992', title: '✓ Reštitúcia – Dohoda č.2', desc: 'Druhá dohoda. Registrácia notárom = rovnocenné s dnešným vkladom do katastra (§64 ods.3 zák. 95/1963). Potvrdzuje: 8 inštitúcií vrátane SPF, Strediska geodézie, bývalej notárky.', type: 'approved' },
  { id: 't_gp', year: '2.5.1997', title: 'Registrácia GP 76/97', desc: 'Geometrický plán č. 76/97 bol osobne doručený na katastrálny úrad. Ing. Oľga Barániková (vtedy Nemčeková) prevzala a potvrdila prevzatie tohto dokladu. Kľúčový dôkaz vedomosti o hraniciach pozemkov.', type: 'approved' },
  { id: 't4', year: '27.12.2004', title: 'Reštitučný nárok Ing. A. Hýbala', desc: 'Ing. Alexander Hýbal uplatnil nárok na OPÚ Prievidza pod sp.zn. OPU 1448/2004-5299.', type: 'info' },
  { id: 't5', year: '31.3.2005', title: '🔒 Rozhodnutie OPÚ Prievidza', desc: 'OPU 515/2005-1905-1 (Ing. Ignác Leitman): ZÁKAZ prevodu. „Od účinnosti zák. 503/2003 §4 ods.2 nie je možné previesť veci do vlastníctva iného – takýto úkon je NEPLATNÝ." Bez odvolania, preskúmateľné súdom.', type: 'approved' },
  { id: 't6', year: '2005', title: 'Prevzatie dohôd katastrom', desc: 'Struhár doložil Dohody na kataster. Existuje PEČIATKA KATASTRA o prevzatí. Barániková neskôr klamala – „nikdy ich nedostala".', type: 'info' },
  { id: 't7', year: '2006', title: '⚠ ROEP podvod – 2 verzie rozhodnutia', desc: 'Barániková vydala 2 rozhodnutia s rovnakým č.: (1) pozemky → SPF, (2) pozemky → ONV Topoľčany (neexistuje od 1990 = 16 rokov!). Sfalšovala hospodárske zmluvy s Mlynmi – dopísala pozemky do zoznamu strojov/zariadení.', type: 'denied' },
  { id: 't8', year: '15.12.2009', title: '⚠ Nezákonný Protokol OÚ Trenčín', desc: 'JUDr. Kramárová vyhotovila protokol o prevode z ONV Topoľčany → obec. ONV neexistoval 19 rokov! Barániková zatajila dohody. Protokol má len deklaratívny charakter (vs konštitutívne dohody). Nesprávne aplikovaný zák. 138/1991.', type: 'denied' },
  { id: 't9', year: '30.10.2017', title: 'Žiadosť o zastavenie odpredaja', desc: 'Struhár zaslal obci žiadosť o zastavenie konania odpredaja pozemkov p.č. 3893/1 a 3895/1. Začaté správne konanie podľa §18 zák. 71/1967. Obec IGNOROVALA.', type: 'warning' },
  { id: 't10', year: '11.6.2018', title: 'Zavádzajúca právna analýza Dolného', desc: 'JUDr. Dolný vypracoval analýzu – priznal, že reštitúcia nie je ukončená, no napriek tomu uvádzal poslancov do omylu. Obec ju vydala až po 4 mesiacoch, "advokát nedal súhlas".', type: 'warning' },
  { id: 't11', year: '6.11.2018', title: 'Zastupiteľstvo – odpredaj pozemkov', desc: 'Obecné zastupiteľstvo Skačany aj napriek nesporným faktom odpredalo časti reštituovaných pozemkov kupcom (susedom starostu) Dávidovi a Krajčovi.', type: 'denied' },
  { id: 't12', year: '2019', title: '8 inštitúcií potvrdilo reštitúciu', desc: 'Platnosť potvrdili: Štátne notárstvo, Stredisko geodézie, obec Skačany (1992!), JUDr. Valjent, SPF Bratislava, SPF Trenčín, ŠN Topoľčany, OÚ Prievidza (reštitučné odd.).', type: 'approved' },
  { id: 't13', year: '19.11.2021', title: 'Trestné oznámenie č.1 (ORP-184)', desc: 'Ing. Ivan Struhár podal na PZ PE. Vec: organizovaná skupina vedená Baránikovovou. ČVS: ORP-184/VYS-PE-2021.', type: 'info' },
  { id: 't_waste', year: '2021', title: 'Environmental Incident (Odpad)', desc: 'Na reštituovaných pozemkoch bol navedzený odpad. Znalkyňa vyčíslila škodu na 25 420,32 EUR. Polícia a prokuratúra incident ignorovali alebo bagatelizovali.', type: 'denied' },
  { id: 't14', year: '24.5.2022', title: '✓ Rozhodnutie OÚ Prievidza', desc: 'OU-PD-PLO-2022/019214-003: Struhárovi sú PRÁVOPLATNÍ VLASTNÍCI. Právoplatné od 1.6.2022. Záväzné pre všetkých vrátane polície a prokuratúry.', type: 'approved' },
  { id: 't15', year: '2022', title: 'Znalecký posudok – 25 420 €', desc: 'Ing. Jaroslava Gažová, posudok č. 30/2022. Trhová hodnota 300 000+ €.', type: 'info' },
  { id: 't16', year: '28.2.2023', title: 'Odmietnutie na zastupiteľstve, ORP-27', desc: '5 minút, skákali mu do reči, hlasovaním zamietli. ČVS: ORP-27/VYS-PE-2023.', type: 'denied' },
  { id: 't17', year: '13.3.2024', title: 'Zápisnica OP PE + dôkazy Dobríkovi', desc: 'Žiadal vylúčiť PZ PE (prebieha stíhanie Terlandu a Skikovej). Odovzdal dôkazy prokurátorovi – ubezpečil, že vyšetrovateľ si ich vyžiada. NESTALO SA.', type: 'info' },
  { id: 't18', year: '20.8.2024', title: 'Odmietnutie ORP-54 – bez dôkazov', desc: 'Vyšetrovateľ nemal od Struhára žiadne doklady – prokurátor ich neodovzdal! "Duplicitné" oznámenie.', type: 'denied' },
  { id: 't19', year: '15.9.2024', title: '✓ Čepko ZRUŠIL odmietnutie', desc: 'kpt. Ing. Čepko §190 ods.1 TP: sťažnosť DÔVODNÁ. Nariadil vypočuť oznamovateľa, preveriť podklady. Dôvod prerozdelenia: koniec PhDr. Vožňákovej v PZ.', type: 'approved' },
  { id: 't20', year: '15.4.2025', title: 'Hlavačka: opäť odmietol (ORP-54)', desc: 'IGNOROVAL Čepkove odporúčania. Nevypočul kľúčových svedkov. Opäť odmietol.', type: 'denied' },
  { id: 't21', year: '5.6.2025', title: 'Návrh: Upozornenie prokurátora', desc: 'Pripravený návrh na §13 ods.1 zák. 153/2001 Z.z. – upozornenie orgánu štátnej správy. Žiadosť: pozastavenie konaní, náprava zápisov, kontrolný mechanizmus.', type: 'info' },
  { id: 't_transfer', year: 'Jún 2025', title: 'Postúpenie spisu', desc: 'Okresná prokuratúra postúpila spis vyšetrovateľovi bez oznamovateľa. Procesné pochybenie, ktoré znemožňuje efektívnu kontrolu postupu.', type: 'warning' },
  { id: 't22', year: '17.6.2025', title: 'GP SR: neodňal', desc: 'Príkaz IV/3 Gn 253/24/1000-11. Poveril KP Trenčín prešetrením.', type: 'denied' },
  { id: 't23', year: '24.6.2025', title: 'KP Trenčín: neodňala', desc: 'Príkaz 1Kn 100/25/3300-34. Mala príkaz GP mesiace, Struhára NEINFORMOVALA.', type: 'denied' },
  { id: 't24', year: '28.6.2025', title: 'Hlavačka: odmietol ORP-58', desc: '"Duplicitné" podanie. Škoda "minimálna malá". Ne bis in idem argument.', type: 'denied' },
  { id: 't25', year: '23.7.2025', title: '❌ Dobrík: FINÁLNE zamietol', desc: '1Pn 147/24/3305-32. „Absentuje zavinenie." SŤAŽNOSŤ NEPRÍPUSTNÁ. Všetky opravné prostriedky vyčerhal. → ÚS SR / ESĽP.', type: 'denied' },
  { id: 't_deadline', year: '31.12.2025', title: 'Koniec lehoty / Nečinnosť', desc: 'Kritický hraničný termín pre prokuratúru na vykonanie nápravy. Po tomto dátume hrozí premlčanie niektorých úkonov.', type: 'denied' },
];

const laws = [
  { num: '87/1991 Zb.', name: 'Reštitučný zákon (mimosúdna rehabilitácia)', severity: 'critical', desc: '§3 – oprávnené osoby, §5 – vydanie veci, §9 – povinná osoba. Schválený Federálnym zhromaždením ČSFR. VYŠŠIA právna sila ako zákon 138/1991. Dohody o vydaní majú konštitutívny charakter.' },
  { num: '503/2003 Z.z.', name: 'O navrátení vlastníctva k pozemkom', severity: 'critical', desc: '§4 ods.2: "Povinná osoba nemôže previesť pozemok do vlastníctva iného – takýto úkon je NEPLATNÝ." OPÚ Prievidza rozhodol 31.3.2005.' },
  { num: '229/1991 Zb.', name: 'O pôde (reštitúcia)', severity: 'high', desc: 'Zákon o úprave vlastníckych vzťahov k pôde a inému poľnohospodárskemu majetku.' },
  { num: '95/1963 Zb.', name: 'Notársky zákon', severity: 'high', desc: '§64 ods.3: "Účinky registrácie nastávajú dňom vydania rozhodnutia." Registrácia = dnešné zavkladovanie do katastra. V 1991-92 neexistovali katastre.' },
  { num: '71/1967 Zb.', name: 'Správny poriadok', severity: 'high', desc: '§3 ods.4 – svedomité zaobchádzanie s každou vecou. §14 ods.1 – účastník konania. §18 ods.1 – začatie konania. Obec 4 roky nevytýčila správne konanie!' },
  { num: '162/1995 Z.z.', name: 'Katastrálny zákon', severity: 'high', desc: '§44 – plomba na pozemky. Barániková nedala plombu na sporné pozemky, čím umožnila ďalšie prevody.' },
  { num: '211/2000 Z.z.', name: 'Infozákon (slobodný prístup k informáciám)', severity: 'medium', desc: '§3 – každý má právo na prístup. §17 – vybavenie do 8 dní. §18 – rozhodnutie s odôvodnením. §21a – priestupok (pokuta do 1650€). Obec porušila VŠETKO.' },
  { num: '138/1991 Zb.', name: 'O majetku obcí', severity: 'medium', desc: 'Nesprávne aplikovaný pri prevode 2009! Pozemky nikdy nepatrili pod MNV Skačany ani ONV Topoľčany – boli v správe Mlynov a cestovin. 40 rokov.' },
  { num: '300/2005 Z.z.', name: 'Trestný zákon', severity: 'critical', desc: '§326 ods.1a) – zneužitie právomoci verejného činiteľa. §221 ods.1 – podvod. Uvedenie do omylu, využitie omylu na škodu cudzieho majetku.' },
  { num: '395/2002 Z.z.', name: 'Zákon o archívnictve', severity: 'medium', desc: 'Účelové vymazanie textu z Protokolu 2009 pred jeh vydaním na základe infozákona. Vydané len 2 riadky.' },
  { num: '40/1964 Zb.', name: 'Občiansky zákonník', severity: 'high', desc: '§39 – Neplatnosť právneho úkonu, ktorý svojim obsahom alebo účelom odporuje zákonu (všetky prevody po roku 2005).' },
  { num: 'Ústava SR', name: 'Čl. 20 – ochrana vlastníckeho práva', severity: 'critical', desc: 'Vlastnícke právo je chránené Ústavou SR aj Chartou ľudských práv OSN a medzinárodnými paktmi. Vlastnícke práva všetkých občanov sú si rovné.' },
];

const groupColors = {
  victim: '#ff3366',      // Premium Red
  suspect: '#ff7f50',     // Premium Orange
  buyer: '#f59e0b',       // Premium Yellow
  police: '#00f0ff',      // Neon Blue
  police_good: '#10b981', // Premium Green
  prosecutor: '#b366ff',  // Premium Purple
  neutral: '#06b6d4'      // Cyan
};

// ===== FORCE-DIRECTED GRAPH =====
function initGraph() {
  const canvas = document.getElementById('graph-canvas');
  const ctx = canvas.getContext('2d');
  const container = document.getElementById('graph-container');
  const tooltip = document.getElementById('graph-tooltip');
  let W, H, dragging = null, dragOff = { x: 0, y: 0 }, hoveredNode = null;
  let animFrame;

  function resize() {
    W = container.clientWidth; H = container.clientHeight;
    canvas.width = W * 2; canvas.height = H * 2;
    ctx.setTransform(2, 0, 0, 2, 0, 0);
    if (!people[0]._placed) {
      const groups = {
        victim: { cx: W * 0.35, cy: H * 0.2 }, suspect: { cx: W * 0.7, cy: H * 0.45 }, buyer: { cx: W * 0.85, cy: H * 0.25 },
        police: { cx: W * 0.2, cy: H * 0.55 }, police_good: { cx: W * 0.35, cy: H * 0.6 }, prosecutor: { cx: W * 0.4, cy: H * 0.8 }, neutral: { cx: W * 0.55, cy: H * 0.65 }
      };
      people.forEach((n, i) => {
        const g = groups[n.group] || { cx: W / 2, cy: H / 2 };
        n.x = g.cx + (Math.random() - 0.5) * W * 0.2; n.y = g.cy + (Math.random() - 0.5) * H * 0.2;
        n.vx = 0; n.vy = 0; n._placed = true;
      });
    }
    simulate();
  }
  window.addEventListener('resize', resize);

  function simulate() {
    let stable = true;
    for (let iter = 0; iter < 80; iter++) {
      // repulsion
      for (let i = 0; i < people.length; i++) {
        for (let j = i + 1; j < people.length; j++) {
          let dx = people[j].x - people[i].x, dy = people[j].y - people[i].y;
          let dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < 150) {
            let f = 1200 / (dist * dist); let fx = dx / dist * f, fy = dy / dist * f;
            people[i].x -= fx; people[i].y -= fy; people[j].x += fx; people[j].y += fy;
          }
        }
      }
      // attraction
      edges.forEach(e => {
        const a = people.find(p => p.id === e.from), b = people.find(p => p.id === e.to);
        if (!a || !b) return;
        let dx = b.x - a.x, dy = b.y - a.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;
        let ideal = 160, f = (dist - ideal) * 0.0025; // Adjusted physics for wider spread
        a.x += dx / dist * f; a.y += dy / dist * f; b.x -= dx / dist * f; b.y -= dy / dist * f;
      });
      // bounds
      people.forEach(n => {
        n.x = Math.max(50, Math.min(W - 50, n.x)); n.y = Math.max(50, Math.min(H - 50, n.y));
      });
    }
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    // edges
    edges.forEach(e => {
      const from = people.find(p => p.id === e.from), to = people.find(p => p.id === e.to);
      if (!from || !to) return;
      ctx.beginPath(); ctx.moveTo(from.x, from.y); ctx.lineTo(to.x, to.y);

      // Update edge styling for premium look
      const isHighlighted = hoveredNode === from || hoveredNode === to;
      ctx.strokeStyle = isHighlighted ? e.color + '88' : e.color + '25';
      ctx.lineWidth = isHighlighted ? (e.weight || 1) * 1.5 : (e.weight || 1);
      ctx.stroke();

      const mx = (from.x + to.x) / 2, my = (from.y + to.y) / 2;
      ctx.font = isHighlighted ? '600 8px Inter' : '500 7px Inter';
      ctx.fillStyle = isHighlighted ? '#fff' : e.color + '66';
      ctx.textAlign = 'center'; ctx.fillText(e.label, mx, my - 4);

      // arrow
      const angle = Math.atan2(to.y - from.y, to.x - from.x);
      const ax = to.x - Math.cos(angle) * 20, ay = to.y - Math.sin(angle) * 20;
      ctx.beginPath(); ctx.moveTo(ax, ay);
      ctx.lineTo(ax - Math.cos(angle - 0.35) * 8, ay - Math.sin(angle - 0.35) * 8);
      ctx.lineTo(ax - Math.cos(angle + 0.35) * 8, ay - Math.sin(angle + 0.35) * 8);
      ctx.closePath(); ctx.fillStyle = isHighlighted ? e.color + 'cc' : e.color + '55'; ctx.fill();
    });

    // nodes
    people.forEach(n => {
      const c = groupColors[n.group]; const r = hoveredNode === n ? 20 : 16;
      // glow
      if (n.id === 'baranikova' || n.id === 'struhar' || n.id === 'cepko' || n.id === 'leitman' || n.id === 'onv' || hoveredNode === n) {
        ctx.beginPath(); ctx.arc(n.x, n.y, r + 15, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(n.x, n.y, r, n.x, n.y, r + 20);
        g.addColorStop(0, c + (hoveredNode === n ? '66' : '33'));
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g; ctx.fill();
      }

      ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = c + (hoveredNode === n ? '44' : '15'); ctx.fill();
      ctx.strokeStyle = c; ctx.lineWidth = hoveredNode === n ? 3 : 2; ctx.stroke();

      // inner core dot for precision feel
      ctx.beginPath(); ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#fff'; ctx.fill();

      // label
      ctx.font = hoveredNode === n ? '700 9px Outfit' : '600 8.5px Outfit';
      ctx.fillStyle = hoveredNode === n ? '#fff' : '#e2e8f0';
      ctx.textAlign = 'center';

      const parts = n.label.split(' ');
      if (parts.length <= 2) ctx.fillText(n.label, n.x, n.y + r + 14);
      else { ctx.fillText(parts.slice(0, 2).join(' '), n.x, n.y + r + 14); ctx.fillText(parts.slice(2).join(' '), n.x, n.y + r + 24); }
    });
  }

  function getNode(mx, my) {
    for (let i = people.length - 1; i >= 0; i--) {
      const n = people[i], dx = mx - n.x, dy = my - n.y;
      if (dx * dx + dy * dy < 20 * 20) return n;
    } return null;
  }

  canvas.addEventListener('mousedown', e => {
    const r = canvas.getBoundingClientRect(); const mx = e.clientX - r.left, my = e.clientY - r.top;
    const n = getNode(mx, my);
    if (n) { dragging = n; dragOff = { x: mx - n.x, y: my - n.y }; canvas.style.cursor = 'grabbing'; }
  });
  canvas.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect(); const mx = e.clientX - r.left, my = e.clientY - r.top;
    if (dragging) { dragging.x = mx - dragOff.x; dragging.y = my - dragOff.y; draw(); }
    const n = getNode(mx, my);
    if (n !== hoveredNode) { hoveredNode = n; draw(); }
    if (n) {
      canvas.style.cursor = dragging ? 'grabbing' : 'grab';
      tooltip.className = 'node-tooltip visible';
      tooltip.innerHTML = `<h4 style="color:${groupColors[n.group]}">${n.label}</h4><div class="role">${n.role}</div><div>${n.detail}</div>`;
      tooltip.style.left = Math.min(mx + 15, W - 320) + 'px'; tooltip.style.top = Math.max(my - 10, 5) + 'px';
    } else { canvas.style.cursor = 'default'; tooltip.className = 'node-tooltip'; }
  });
  canvas.addEventListener('mouseup', () => { dragging = null; canvas.style.cursor = 'default'; });
  canvas.addEventListener('mouseleave', () => { dragging = null; hoveredNode = null; draw(); tooltip.className = 'node-tooltip'; });
  resize();
}

// ===== TIMELINE =====
function initTimeline() {
  const el = document.getElementById('timeline-container');
  el.innerHTML = timeline.map((t, index) => `
    <div class="tl-item animate" id="${t.id || 'tl-' + index}">
      <div class="tl-dot ${t.type === 'denied' ? 'red' : t.type === 'approved' ? 'green' : t.type === 'warning' ? 'orange' : 'blue'}"></div>
      <div class="tl-year">${t.year}</div>
      <div class="tl-title">${t.title}</div>
      <div class="tl-desc">${t.desc}</div>
      <span class="tl-badge ${t.type}">${t.type === 'denied' ? 'ODMIETNUTÉ' : t.type === 'approved' ? 'SCHVÁLENÉ' : t.type === 'warning' ? 'PODOZRIVÉ' : 'INFO'}</span>
    </div>`).join('');
}

// ===== LAWS =====
function initLaws() {
  const el = document.getElementById('laws-container');
  el.innerHTML = laws.map(l => `
    <tr class="law-row animate ${l.severity}">
      <td class="law-num">${l.num}</td>
      <td class="law-name">${l.name}</td>
      <td><span class="severity-badge ${l.severity}">${l.severity === 'critical' ? 'KRITICKÉ' : l.severity === 'high' ? 'ZÁVAŽNÉ' : 'STREDNÉ'}</span></td>
      <td class="law-desc">${l.desc}</td>
    </tr>`).join('');
}

// ===== ANIMATIONS + NAV =====
function initAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.style.animationPlayState = 'running'; });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate').forEach(el => { el.style.animationPlayState = 'paused'; obs.observe(el); });
}
function initNav() {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('nav a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  });
}

// ===== CLICK & DRAG HORIZONTAL PAN =====
function initTimelinePan() {
  const slider = document.querySelector('.hex-nexus-container');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('grabbing');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('grabbing');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('grabbing');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fastness
    slider.scrollLeft = scrollLeft - walk;
  });
}

document.addEventListener('DOMContentLoaded', () => { 
  initGraph(); 
  initTimeline(); 
  initLaws(); 
  initNav(); 
  initTimelinePan();
  setTimeout(initAnimations, 100); 
});
