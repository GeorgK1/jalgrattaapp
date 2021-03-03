export const questions = [
	//TEST 1
	{
		questionText: 'Kes ületab esimesena ristmikul teed?',
		imgPath: require('./assets/test.png'),

		answerOptions: [
			{ answerText: 'Kollane auto.', isCorrect: false },
			{ answerText: 'Roheline auto.', isCorrect: false },
			{ answerText: 'Jalgrattur.', isCorrect: true },
		],
	},
	{
		questionText: 'Kellele annad teed?',
		imgPath: require('./assets/test2.png'),
		answerOptions: [
			{ answerText: 'Autole.', isCorrect: true },
			{ answerText: 'Lähed ise.', isCorrect: false },
		],
	},

	{
		questionText: 'Millistes suundades tohib jalgrattur sõitu jätkata?',
		imgPath: require('./assets/test3.png'),
		answerOptions: [
			{ answerText: 'Ainult otse.', isCorrect: true },
			{ answerText: 'Otse ja paremale.', isCorrect: false },
			{ answerText: 'Otse ja vasakule.', isCorrect: false },
			{ answerText: 'Kõikides suundades.', isCorrect: false },
		],
	},

	{
		questionText: 'Milline on ristmiku ületamise õige järjekord?',
		imgPath: require('./assets/test4.png'),
		answerOptions: [
			{ answerText: 'Auto A- jalgratas - auto B.', isCorrect: false },
			{ answerText: 'Jalgratas - auto A- auto B.', isCorrect: true },
			{ answerText: 'Auto A- Auto B- jalgratas.', isCorrect: false },
		],
	},

	{
		questionText: 'Kes ületab ristmiku esimesena ja miks?',
		imgPath: require('./assets/test5.png'),
		answerOptions: [
			{
				answerText:
					'Jalgrattur, sest paremalt ei ole lähenemas sõidukeid.',
				isCorrect: false,
			},
			{
				answerText:
					'Auto B, sest temal ei ole vasakult lähenemas sõidukeid.',
				isCorrect: false,
			},
			{ answerText: 'Auto A, sest see sõidab otse.', isCorrect: true },
		],
	},
	{
		questionText: 'Kes peab andma teed?',
		imgPath: require('./assets/test6.png'),
		answerOptions: [
			{ answerText: 'Jalgrattur A.', isCorrect: true },
			{ answerText: 'Jalgrattur B.', isCorrect: false },
		],
	},
	{
		questionText:
			'Kuidas peab jalgrattur enne pööret paremale suunamärguannet näitama?',

		answerOptions: [
			{
				answerText: 'Tõstma õla kõrgusele väljasirutatud parema käe.',
				isCorrect: true,
			},
			{
				answerText:
					'Tõstma õla kõrgusele küünarnukist ülespoole painutatud käe',
				isCorrect: false,
			},
			{ answerText: 'Tõstma parema käe sirgelt üles', isCorrect: false },
			{ answerText: 'Suunda ei pea näitama', isCorrect: false },
		],
	},
	{
		questionText:
			'Kas maanteel sõitvat jalgratturit ohustavad mööduvad suured veoautod?',
		imgPath: require('./assets/test7.png'),
		answerOptions: [
			{
				answerText:
					'Jah, sest möödasõitva suure veoauto poolt tekitatud tuulehoog võib jalgratturi tasakaalust välja viia.',
				isCorrect: true,
			},
			{
				answerText:
					'Ei, kui jalgrattur sõidab võimalikult sõidutee parema ääre lähedal, pole karta midagi.',
				isCorrect: false,
			},
			{
				answerText:
					'Ei, kui jalgrattur sõidab kiiresti ja kannab kiivrit.',
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			'Kas pimeda ajal või halva nähtavuse korral peab jalgrattal põlema ees valge ja taga punane tuli?',
		answerOptions: [
			{
				answerText:
					'Põlema peab ainult esituli. Tagumise punase tule asemel võib olla ka punane helkur.',
				isCorrect: false,
			},
			{
				answerText: 'Jah, põlema peavad mõlemad tuled.',
				isCorrect: true,
			},
			{ answerText: 'Kumbki tuli ei pea põlema.', isCorrect: false },
		],
	},
	{
		questionText: 'Kiirabi kutsumiseks helistan:',
		answerOptions: [
			{ answerText: '211.', isCorrect: false },
			{ answerText: '002.', isCorrect: false },
			{ answerText: '112.', isCorrect: true },
		],
	},
	//TEST 2.
	{
		questionText: 'Millistes suundades tohib jalgrattur sõitu jätkata?',
		imgPath: require('./assets/test8.png'),
		answerOptions: [
			{ answerText: 'Otse ja vasakule.', isCorrect: false },
			{ answerText: 'Ainult vasakule', isCorrect: false },
			{ answerText: 'Otse ja tagasi', isCorrect: true },
			{ answerText: 'Kõikides suundades', isCorrect: false },
		],
	},
	{
		questionText: 'Kes peab andma ristmikul teed ja miks?',
		imgPath: require('./assets/test.png'),
		answerOptions: [
			{
				answerText: 'Autojuht, sest auto ületab jalgrattateed.',
				isCorrect: false,
			},
			{
				answerText:
					'Autojuht, sest autol on paremalt lähenemas jalgratas.',
				isCorrect: true,
			},
			{
				answerText:
					'Jalgrattur, sest ta sõidab jalgrattateel, mis ristub ristmikevahelise teega.',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'Milline on ristmiku ületamise õige järjekord?',
		imgPath: require('./assets/test10.png'),
		answerOptions: [
			{
				answerText: 'Jalgratas B, Jalgratas A, Jalgratas C',
				isCorrect: true,
			},
			{
				answerText: 'Jalgratas C, Jalgratas A, Jalgratas B',
				isCorrect: false,
			},
			{
				answerText: 'Jalgratas C, Jalgratas B, Jalgratas A',
				isCorrect: false,
			},
		],
	},

	{
		questionText: 'Miks jalgrattur peab autole teed andma?',
		imgPath: require('./assets/test11.png'),
		answerOptions: [
			{ answerText: 'Sest auto on raskem sõiduk.', isCorrect: false },
			{ answerText: 'Sest nii kohustab liiklusmärk.', isCorrect: true },
			{ answerText: 'Sest auto tuleb vasakult.', isCorrect: false },
		],
	},
	{
		questionText: 'Milline on ristmiku ületamise õige järjekord?',
		imgPath: require('./assets/test12.png'),
		answerOptions: [
			{
				answerText: 'Jalgratas C, Jalgratas B, Jalgratas A',
				isCorrect: true,
			},
			{
				answerText: 'Jalgratas A, Jalgratas B, Jalgratas C',
				isCorrect: false,
			},
			{
				answerText: 'Jalgratas A, Jalgratas C, Jalgratas B',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'Kes peab andma teed?',
		imgPath: require('./assets/test13.png'),
		answerOptions: [
			{ answerText: 'Jalgrattur A.', isCorrect: false },
			{ answerText: 'Jalgrattur B.', isCorrect: true },
		],
	},
	{
		questionText: 'Millistes suundades tohib jalgrattur sõitu jätkata?',
		imgPath: require('./assets/test14.png'),
		answerOptions: [
			{ answerText: 'Ainult paremale.', isCorrect: false },
			{ answerText: 'Ainult otse ja paremale.', isCorrect: false },
			{ answerText: 'Otse, paremale ja vasakule.', isCorrect: true },
			{ answerText: 'Ainult otse.', isCorrect: false },
			{ answerText: 'Sõita ei tohi.', isCorrect: false },
		],
	},
	{
		questionText:
			'Kas enne ristmikule jõudmist peab jalgrattur olema tähelepanelik ja jälgima teiste liiklejate käitumist?',
		answerOptions: [
			{
				answerText:
					'Ei pea, kui jalgrattur liikleb täpselt liiklusreeglite järgi.',
				isCorrect: false,
			},
			{
				answerText:
					'Jah peab, kuna teised liiklejad võivad eksida ja võib tekkida ohtlik olukord.',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'Kumb väide on õige? Jalgratta- ja jalgteel sõites...',
		answerOptions: [
			{
				answerText:
					'ei pea jalgrattur seal liikuvate jalakäijatega arvestama, kuna ta on kiirem liikleja.',
				isCorrect: false,
			},
			{
				answerText:
					'peab jalgrattur jalakäijast möödumisel olema ettevaatlik ja tagama tema ohutuse.',
				isCorrect: true,
			},
		],
	},
	{
		questionText:
			'Kas jalgrattur tohib ületada sõidutee ülekäigurajal sõites?',
		answerOptions: [
			{ answerText: 'Ei tohi.', isCorrect: false },
			{
				answerText:
					'Tohib, kuid tal puudub sõidukijuhtide suhtes eesõigus.',
				isCorrect: true,
			},
			{
				answerText: 'Tohib ning sõidukijuhid peavad talle teed andma.',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'Helistades hädaabinumbrile 112:',
		answerOptions: [
			{
				answerText:
					'kirjeldad rahulikult ja selgelt mis juhtus ning katkestad kohe kõne.',
				isCorrect: false,
			},
			{
				answerText:
					'kirjeldad rahulikult ja selgelt mis juhtus ning jooksed kohe veel abi otsima.',
				isCorrect: false,
			},
			{
				answerText:
					'kirjeldad rahulikult ja selgelt mis juhtus ja vastad päästekorraldaja küsimustele. Kõne ise ei lõpeta, ootad kuni abi saabub',
				isCorrect: true,
			},
		],
	},
	//TEST 3
	{
		questionText: 'Millistes suundades tohib jalgrattur sõitu jätkata?',
		imgPath: require('./assets/test15.png'),
		answerOptions: [
			{ answerText: 'Ainult paremale ja vasakule.', isCorrect: false },
			{ answerText: 'Paremale, otse ja vasakule.', isCorrect: true },
			{ answerText: 'Ainult paremale ja otse.', isCorrect: false },
			{ answerText: 'Kõikides suundades.', isCorrect: false },
		],
	},
	{
		questionText: 'Kes ületab ristmiku esimesena?',
		imgPath: require('./assets/test16.png'),
		answerOptions: [
			{ answerText: 'Jalgrattur A.', isCorrect: true },
			{ answerText: 'Jalgrattur B.', isCorrect: false },
		],
	},
	{
		questionText: 'Millistes suundades tohib jalgrattur sõitu jätkata?',
		imgPath: require('./assets/test17.png'),
		answerOptions: [
			{ answerText: 'Ainult paremale.', isCorrect: false },
			{ answerText: 'Ainult otse ja paremale.', isCorrect: false },
			{ answerText: 'Otse, paremale ja vasakule.', isCorrect: true },
			{ answerText: 'Sõita ei tohi.', isCorrect: false },
		],
	},
	{
		questionText: 'Ohutuks sõitmiseks jalgrattaga...',
		answerOptions: [
			{
				answerText:
					'piisab, kui ma igas olukorras tegutsen täpselt liiklusreeglite järgi.',
				isCorrect: false,
			},
			{
				answerText:
					'pean tundma liiklusreegleid ja nende järgi käituma. Alati pean olema valmis, et keegi võib liikluses eksida ja tekkida ohtlik olukord.',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'Sõiduteel tohib iseseisvalt jalgratast juhtida...',
		answerOptions: [
			{
				answerText: 'Alates 8-aastaselt, omades jalgratturi juhiluba.',
				isCorrect: false,
			},
			{
				answerText:
					'Alates 12-aastaselt, jalgratturi juhiluba ei pea olema.',
				isCorrect: false,
			},
			{
				answerText: 'Alates 10-aastaselt, omades jalgratturi juhiluba.',
				isCorrect: true,
			},
		],
	},
	{
		questionText:
			'Missugused helkurid peavad jalgrattal olema ees ja taga?',
		answerOptions: [
			{
				answerText: 'Jalgrattal ei pea ees ja taga helkureid olema.',
				isCorrect: false,
			},
			{
				answerText:
					'Jalgrattal peab olema ees valge ja taga punane helkur.',
				isCorrect: true,
			},
			{
				answerText:
					'Jalgrattal peab olema ees valge ja taga punane helkur vaid pimedas sõites.',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'Õnnetuskohale sattudes, pöörad tähelepanu kõigepealt:',
		answerOptions: [
			{
				answerText: 'kannatanutele, kes jooksevad ringi ja karjuvad.',
				isCorrect: false,
			},
			{
				answerText: 'kannatanutele, kes on autos ja nutavad.',
				isCorrect: false,
			},
			{
				answerText: 'kannatanutele, kes lamavad teadvuseta.',
				isCorrect: true,
			},
		],
	},
	//test 4
	
	{
		questionText: 'Millistes suundades võib jalgrattur suunda jätkata?',
		imgPath: require('./assets/test19.png'),
		answerOptions: [
			{ answerText: 'Kõikides suundades.', isCorrect: false },
			{ answerText: 'Ainult vasakule.', isCorrect: true },
			{ answerText: 'Otse ja vasakule.', isCorrect: false },
			{ answerText: 'Vasakule ja tagasi.', isCorrect: false },
		],
	},
	{
		questionText: 'Kes peab andma teed ja miks?',
		imgPath: require('./assets/test20.png'),
		answerOptions: [
			{
				answerText:
					'Autojuht peab andma teed jalgratturile, kuna auto sõidab parklast välja.',
				isCorrect: true,
			},
			{
				answerText:
					'Jalgrattur peab andma teed autole, kuna see tuleb paremalt.',
				isCorrect: false,
			},
			{
				answerText:
					'Jalgrattur peab andma teed autole, kuna auto on mootorsõiduk.',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'Milline on ristmiku ületamise õige järjekord?',
		imgPath: require('./assets/test21.png'),
		answerOptions: [
			{
				answerText: 'Jalgratas B, jalgratas A, jalgratas C.',
				isCorrect: false,
			},
			{
				answerText: 'Jalgratas A, jalgratas C, jalgratas B.',
				isCorrect: true,
			},
			{
				answerText: 'Jalgratas C, jalgratas A, jalgratas B.',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'Kes ületab ristmiku esimesena?',
		imgPath: require('./assets/test22.png'),
		answerOptions: [
			{ answerText: 'Jalgrattur A.', isCorrect: true },
			{ answerText: 'Jalgrattur B.', isCorrect: false },
		],
	},
	//test 4 kys 6
	{
		questionText: 'Suunamärguande näitamise lõpetab jalgrattur ...',
		answerOptions: [
			{
				answerText: 'siis, kui tal käsi ära väsib.',
				isCorrect: false,
			},
			{
				answerText: 'siis, kui pööre on lõpetatud.',
				isCorrect: false,
			},
			{
				answerText:
					'vahetult enne pööramist. Pöörde ajal peavad mõlemad käed hoidma kinni juhtrauast.',
				isCorrect: true,
			},
		],
	},

	{
		questionText:
			'Sõidan peateel ja kõrvalteelt lähenevad sõidukijuhid peavad andma mulle teed, kuid ohutuse huvides ...',
		answerOptions: [
			{
				answerText:
					'pean ma olema veendunud, et nad kavatsevad mulle teed anda.',
				isCorrect: true,
			},
			{
				answerText:
					'ei ole tähtis, kuidas käituvad ristmikule lähenevate sõidukite juhid, sest minul on õigus ületada ristmik esimesena.',
				isCorrect: false,
			},
			{
				answerText: 'helistan jalgrattakella ja viibutan kätt.',
				isCorrect: false,
			},
		],
	},

	{
		questionText: 'Kuni 16.a jalgrattur ei tohi ...',
		answerOptions: [
			{
				answerText: 'sõita koduõues ümber maja.',
				isCorrect: false,
			},
			{
				answerText: 'sõita jalgratta ja jalgteel.',
				isCorrect: false,
			},
			{
				answerText: 'sõita üksi ja ilma juhiloata sõiduteel.',
				isCorrect: true,
			},
		],
	},

	{
		questionText:
			'Millised helkurid peavad olema jalgratta külgedel (kodarate küljes)',
		answerOptions: [
			{
				answerText:
					'Vähemalt ühe ratta kummalgi küljel peab olema kollane või valge helkur.',
				isCorrect: true,
			},
			{
				answerText: 'Helkureid ei pea olema.',
				isCorrect: false,
			},
		],
	},

	{
		questionText: 'Hädaabinumbrile 112 tuleb helistada kui:',
		answerOptions: [
			{
				answerText: 'on igav ja tahad kellegagi rääkida.',
				isCorrect: false,
			},
			{
				answerText: 'jalgrattarehv läks katki.',
				isCorrect: false,
			},
			{
				answerText:
					'on juhtunud õnnetus, kellegi elu ja tervis on ohus.',
				isCorrect: true,
			},
		],
	},

	//Test 5
	{
		questionText:
			'Milline liiklusmärk kohustab jalgratturil ristmikul pöörama ainult paremale?',
		imgPath: require('./assets/test23.png'),
		answerOptions: [
			{
				answerText: '1',
				isCorrect: false,
			},
			{
				answerText: '2',
				isCorrect: false,
			},
			{
				answerText: '3',
				isCorrect: true,
			},
			{
				answerText: '4',
				isCorrect: false,
			},
			{
				answerText: '5',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'Millistes suundades ei tohi jalgrattur sõitu jätkata?',
		imgPath: require('./assets/test24.png'),
		answerOptions: [
			{ answerText: 'Vasakule ja otse.', isCorrect: false },
			{ answerText: 'Ainult tagasi.', isCorrect: true },
			{ answerText: 'Ainult vasakule.', isCorrect: false },
			{ answerText: 'Kõikides suundades.', isCorrect: false },
		],
	},
	{
		questionText: 'Milline on ristmiku ületamise õige järjekord?',
		imgPath: require('./assets/test25.png'),
		answerOptions: [
			{ answerText: 'Jalgratas B, Jalgratas A.', isCorrect: false },
			{ answerText: 'Jalgratas A, Jalgratas B.', isCorrect: false },
			{
				answerText:
					'Jalgratturid võivad sõita korraga, kui on veendunud, et ristmiku ületamine on ohutu.',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'Milline on ristmiku ületamise õige järjekord?',
		imgPath: require('./assets/test26.png'),
		answerOptions: [
			{
				answerText: 'Sõiduauto, sest see on kiirem sõiduk.',
				isCorrect: false,
			},
			{
				answerText: 'Sõiduauto, sest ta pöörab vasakule..',
				isCorrect: false,
			},
			{
				answerText: 'Jalgratas, sest sõiduauto läheneb vasakult.',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'Kes peab andma teed?',
		imgPath: require('./assets/test27.png'),
		answerOptions: [
			{
				answerText: 'Jalgrattur A.',
				isCorrect: false,
			},
			{
				answerText: 'Jalgrattur B.',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'Suunamärguannet peab jalgrattur andma ...',

		answerOptions: [
			{
				answerText: 'ainult siis, kui tema taga sõidab mõni sõiduk.',
				isCorrect: false,
			},
			{
				answerText:
					'alati, kui ta sooritab pööret või vahetab sõidurada.',
				isCorrect: true,
			},
			{
				answerText:
					'suunamärguande andmine ei ole jalgratturile kohustuslik.',
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			'Kas sõites sõiduteel, pean ma kogu aeg jälgima liiklust?',

		answerOptions: [
			{
				answerText: 'Ei pea, kuna ma ise sõidan liiklusreeglite järgi.',
				isCorrect: false,
			},
			{
				answerText: 'Jah pean, kuna teised juhid võivad eksida.',
				isCorrect: true,
			},
		],
	},
	{
		questionText:
			'Jalgrattatee ja sõidutee lõikumiskohal on soovitatav sõidutee ületada jalgrattalt maha tulles jalakäijana, sest..',

		answerOptions: [
			{
				answerText:
					'keerulistes liiklusoludes on jalakäijana sõidutee ületamine ohutum.',
				isCorrect: true,
			},
			{
				answerText: 'liiklusreeglid ei luba sõiduteed ületada sõites.',
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			'Pimedas ja hämaras sõitmiseks on piisav, kui valgustusseadmetest on jalgrattal ...',

		answerOptions: [
			{
				answerText:
					'kodarahelkurid ning ees valge ja taga punane helkur.',
				isCorrect: false,
			},
			{
				answerText:
					'kodarahelkurid, taga punane helkur ning ees põleb valge tuli.',
				isCorrect: false,
			},
			{
				answerText:
					'kodarahelkurid, ees valge ja taga punane helkur ning ees põleb valge ja taga punane tuli.',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'Liiklusõnnetuse korral abi saamiseks helistan ...',

		answerOptions: [
			{
				answerText: 'numbril 211.',
				isCorrect: false,
			},
			{
				answerText: 'numbril 122.',
				isCorrect: false,
			},
			{
				answerText: '112.',
				isCorrect: true,
			},
		],
	},
    //test 6
];
