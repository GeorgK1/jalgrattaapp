export const module_1 = [
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
]