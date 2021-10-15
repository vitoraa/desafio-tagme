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
    ingredients: [{ name: 'cebola', quantity: 1 }, { name: 'dentes de alho', quantity: 2 }],
    steps: [
      { order: 1, description: 'Faça um refogado com o azeite a cebola e os dentes de alho bem picados. Esmague os tomates maduros sem pele e junte ao refogado. Tempere com sal. Deixe "namorar" durante alguns minutos.' },
      { order: 2, description: 'Deixe a descongelar a embalagem de cocktail de marisco e delícias do mar, retire-as também do congelador e ponha-as de parte.' }
    ]
  }
]);
