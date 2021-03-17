# kassebon-analytics

Reads your Kassebons to give you insights on your groceries habits

## Work in progress

Parsing result of a Rewe Kassebon:

```javascript
{
  items: [
    {
      unit: 'kg',
      type: 'product',
      weight: '0,607',
      description: 'ENTRECOTE DRY',
      extra: ' B',
      total: '27,25'
    },
    {
      description: 'RD-HACKFLEISCH',
      extra: ' B',
      total: '1,99',
      type: 'product'
    },
    {
      description: 'HACKFLEISCH GEM.',
      extra: ' B',
      total: '1,99',
      type: 'product'
    },
    {
      description: 'HAEHNCHEN FLUEGE',
      extra: ' B',
      total: '3,63',
      type: 'product'
    },
    {
      description: 'HAND.HINTERSCHIN',
      extra: ' B',
      total: '1,99',
      type: 'product'
    },
    {
      description: 'REWE KOCHSCHINK.',
      extra: ' B',
      total: '1,89',
      type: 'product'
    },
    {
      description: 'PAPRIKA SALAMI',
      extra: ' B',
      total: '1,59',
      type: 'product'
    },
    {
      description: 'HOLL. EDAMER',
      extra: ' B',
      total: '1,99',
      type: 'product'
    },
    {
      price: '1,39',
      type: 'product',
      unit: 'Stk',
      quantity: '4',
      description: 'RFW BURRATA',
      extra: ' B',
      total: '5,56'
    },
    {
      description: 'PAN OLI',
      extra: ' B',
      total: '1,35',
      type: 'product'
    },
    {
      price: '0,59',
      type: 'product',
      unit: 'Stk',
      quantity: '2',
      description: 'BUTTERSCHOKOBRO.',
      extra: ' B',
      total: '1,18'
    },
    {
      description: 'KRUSTENBROT',
      extra: ' B',
      total: '1,09',
      type: 'product'
    },
    {
      description: 'SAMMYS SANDWICH',
      extra: ' B',
      total: '1,79',
      type: 'product'
    },
    {
      price: '1,59',
      type: 'product',
      unit: 'Stk',
      quantity: '3',
      description: 'ORANGENSAFT M.F.',
      extra: ' A',
      total: '4,77'
    },
    {
      description: 'EAT HAPPY SUSHI           X01',
      extra: ' B *',
      total: '3,95',
      type: 'product'
    },
    {
      description: 'EAT HAPPY SUSHI           X01',
      extra: ' B *',
      total: '6,95',
      type: 'product'
    },
    {
      description: 'EAT HAPPY SUSHI           X01',
      extra: ' B *',
      total: '12,95',
      type: 'product'
    },
    {
      price: '1,99',
      type: 'product',
      unit: 'kg',
      quantity: '0,688',
      description: 'BANANE CHIQUITA',
      extra: ' B',
      total: '1,37'
    },
    {
      description: 'ZWIEB.GEMUESE',
      extra: ' B',
      total: '1,69',
      type: 'product'
    },
    {
      description: 'RUCOLASALAT',
      extra: ' B',
      total: '1,19',
      type: 'product'
    },
    {
      price: '3,99',
      type: 'product',
      unit: 'kg',
      quantity: '0,916',
      description: 'BIO KUERBIS',
      extra: ' B',
      total: '3,65'
    },
    {
      price: '6,99',
      type: 'product',
      unit: 'kg',
      quantity: '0,376',
      description: 'TOM. CHERRY BIO',
      extra: ' B',
      total: '2,63'
    },
    {
      description: 'DULCITA CHERRYRI',
      extra: ' B',
      total: '3,29',
      type: 'product'
    },
    {
      price: '3,69',
      type: 'product',
      unit: 'kg',
      quantity: '0,580',
      description: 'PAPRIKA GRUEN',
      extra: ' B',
      total: '2,14'
    },
    {
      description: 'BIO MINIPILZE',
      extra: ' B',
      total: '3,23',
      type: 'product'
    },
    {
      description: 'PILZ AUSTERN',
      extra: ' B',
      total: '2,49',
      type: 'product'
    },
    {
      description: 'CHAMPIGNONS',
      extra: ' B',
      total: '1,29',
      type: 'product'
    },
    {
      description: 'BIO KR.SEITLINGE',
      extra: ' B',
      total: '3,23',
      type: 'product'
    },
    {
      description: 'THYMIAN',
      extra: ' B',
      total: '0,99',
      type: 'product'
    },
    {
      description: 'ROSMARIN',
      extra: ' B',
      total: '0,99',
      type: 'product'
    },
    {
      description: 'BASILIKUM',
      extra: ' B',
      total: '0,99',
      type: 'product'
    },
    {
      description: 'KR. PETERSILIE',
      extra: ' B',
      total: '0,99',
      type: 'product'
    },
    {
      description: 'SCHLEIERKRAUT',
      extra: ' B',
      total: '2,50',
      type: 'product'
    },
    {
      description: 'H-MILCH 3,8%',
      extra: ' B',
      total: '1,29',
      type: 'product'
    },
    {
      price: '0,79',
      type: 'product',
      unit: 'Stk',
      quantity: '2',
      description: 'NATURJOGH. 3,5%',
      extra: ' B',
      total: '1,58'
    },
    {
      description: 'GEBACKEN.MUESLI',
      extra: ' B',
      total: '3,49',
      type: 'product'
    },
    {
      description: 'MAGNESIUM CALC.',
      extra: ' B',
      total: '2,79',
      type: 'product'
    },
    {
      description: 'MISO SUPPENPASTE',
      extra: ' B',
      total: '2,49',
      type: 'product'
    },
    {
      description: 'INST.NUDEL. ENTE',
      extra: ' B',
      total: '0,49',
      type: 'product'
    },
    {
      description: 'WALDHONIG FL.',
      extra: ' B',
      total: '5,99',
      type: 'product'
    },
    {
      description: 'CHOCO VOLLMILCH',
      extra: ' B',
      total: '1,39',
      type: 'product'
    },
    { type: 'empty' },
    {
      description: 'KEKSE THINS',
      extra: ' B',
      total: '1,29',
      type: 'product'
    },
    {
      price: '0,89',
      type: 'product',
      unit: 'Stk',
      quantity: '2',
      description: 'LOSCHER CLUBMATE',
      extra: ' A',
      total: '1,78'
    },
    {
      price: '0,15',
      type: 'pfand',
      unit: 'Stk',
      quantity: '2',
      extra: 'A *',
      currency: 'EUR',
      total: '0,30'
    },
    {
      description: 'DOLCE GUSTO',
      extra: ' B',
      total: '4,79',
      type: 'product'
    },
    {
      description: 'DOLCEGUSTO ESPR.',
      extra: ' B',
      total: '4,79',
      type: 'product'
    },
    {
      description: 'DOL.GU.CREMA ORO',
      extra: ' B',
      total: '4,79',
      type: 'product'
    },
    {
      description: 'FIT AZR LEMON',
      extra: ' A',
      total: '1,39',
      type: 'product'
    },
    {
      description: 'REIBRAD 3ER MINI',
      extra: ' A',
      total: '2,49',
      type: 'product'
    },
    {
      description: 'PANTENE SH',
      extra: ' A',
      total: '2,69',
      type: 'product'
    },
    { type: 'empty' }
  ],
  total: { currency: 'EUR', value: '158,39' }
}
```
