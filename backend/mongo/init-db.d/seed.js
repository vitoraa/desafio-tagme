db.createUser(
  {
    user: "tagme-api",
    pwd: "example",
    roles: [{ role: "readWrite", db: "tagme" }]
  }
);
db.recipes.drop();
db.recipes.insertMany([
  {
    name: 'Arroz de Mariscos para 2 pessoas',
    description: 'Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com pimentões e cebola juliene, temperos e um leve toque de açafrão. Servidos na paellera. Rico em sabor e apresentação.',
    minutesToPrepare: 25,
    image: {
      small: 'prato-arroz-marisco-peq.jpg',
      normal: 'prato-arroz-marisco-grande.jpg'
    },
    ingredients: [{ name: 'cebola', quantity: 1 }, { name: 'dentes de alho', quantity: 2 }, { name: 'colheres de sopa de Azeite', quantity: 3 }, { name: 'tomates', quantity: 4 }],
    steps: [
      { order: 1, description: 'Faça um refogado com o azeite a cebola e os dentes de alho bem picados. Esmague os tomates maduros sem pele e junte ao refogado. Tempere com sal. Deixe "namorar" durante alguns minutos.' },
      { order: 2, description: 'Deixe a descongelar a embalagem de cocktail de marisco e delícias do mar, retire-as também do congelador e ponha-as de parte.' },
      { order: 3, description: 'Junte os mariscos (as delícias ficam para mais tarde) ao refogado e mexa. Com o lume brando, tape o tacho e deixe "namorar" durante 15 minutos.' },
      { order: 4, description: 'Junte água a tapar esta mistura e assim que ferver deite o arroz e mexa. Quando retomar a fervura, deixe cozer tapado durante 10 minutos, vá mexendo para não pegar.' }
    ]
  },
  {
    name: 'Moqueca Tropical',
    description: 'Escolha entre Camarão ou Peixe ou a combinação dos dois | De origem indígena. A moqueca é um cozido de peixe ou camarão ou com mistura de peixe e camarão com tomate, cebola, pimentões e cheiro-verde refogados. Leve toque de azeite de dendê e leite de coco natural. Na versão tropical, acrescentamos manga e abacaxi. Acompanha arroz branco, pirão de camarão e farofa de dendê',
    minutesToPrepare: 40,
    image: {
      small: 'prato-moqueca-peq.jpg',
      normal: 'prato-moqueca-grande.jpg'
    },
    ingredients: [{ name: 'kg de robalo cortado em postas com couro', quantity: 2 }, { name: 'cebolas grandes', quantity: 4 }, { name: 'cabeça de alho', quantity: 1 }, { name: 'tomates grandes', quantity: 4 }],
    steps: [
      { order: 1, description: 'Prepare o caldo de peixe com as espinhas e cabeça.' },
      { order: 2, description: 'Acrescente cebola, pimentão, tomate, alho, sal e pimenta ao caldo até apurar.' },
      { order: 3, description: 'Coloque as bananas por baixo da terrine, intercale com o molho e o peixe.' },
      { order: 4, description: 'Tempere com sal e pimenta.' }
    ]
  },
  {
    name: 'Frutos do Mar ao Azeite de Ervas',
    description: 'Para apreciadores de frutos do mar, com leve aroma de azeite de ervas finas. Mexilhões, polvo, peixe, camarão e lula salteados com azeite, champignon, cebola picada,pimentão, alho, alcaparras e brócolis. Servidos com arroz de brócolis e legumes salteados',
    minutesToPrepare: 30,
    image: {
      small: 'prato-fruto-peq.jpg',
      normal: 'prato-fruto-grande.jpg'
    },
    ingredients: [{ name: 'gr fettuccine', quantity: 250 }, { name: 'gr lula', quantity: 250 }, { name: 'unidades de vieira', quantity: 6 }, { name: 'unidades de camarão rosa', quantity: 6 }],
    steps: [
      { order: 1, description: 'Junte todas as ervas e pique muito bem com a faca. Some a 150 ml de azeite e deixe' },
      { order: 2, description: 'Limpe as lulas, descartando as nadadeiras e a pele, e guardando os corpos e as cabeças.' },
      { order: 3, description: 'Encha de água uma panela grande e leve ao fogo alto até ferver' },
      { order: 4, description: 'Junte água a tapar esta mistura e assim que ferver deite o arroz e mexa. Quando retomar a fervura, deixe cozer tapado durante 10 minutos, vá mexendo para não pegar' }
    ]
  }
]);
