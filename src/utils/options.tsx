// Assets
import { images } from "../assets";

// Mocks
export const coffeeOptionsList = [
  {
    id: '1',
    title: 'Expresso Tradicional',
    ingredients: 'TRADICIONAL',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.90,
    imgSource: images.Traditional,
  },
  {
    id: '2',
    title: 'Expresso Americano',
    ingredients: 'TRADICIONAL',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.90,
    imgSource: images.American,
  },
  {
    id: '3',
    title: 'Expresso Cremoso',
    ingredients: 'TRADICIONAL',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.90,
    imgSource: images.Cream,
  },
  {
    id: '4',
    title: 'Expresso Gelado',
    ingredients: [
      {
        id: '1',
        value: 'TRADICIONAL'
      },
      {
        id: '2',
        value: 'GELADO'
      },
    ],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.90,
    imgSource: images.Ice
  },
  {
    id: '5',
    title: 'Café com Leite',
    ingredients: [
      {
        id: '1',
        value: 'TRADICIONAL'
      },
      {
        id: '2',
        value: 'COM LEITE'
      },
    ],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.90,
    imgSource: images.Milky,
  },
  {
    id: '6',
    title: 'Latte',
    ingredients: [
      {
        id: '1',
        value: 'TRADICIONAL'
      },
      {
        id: '2',
        value: 'COM LEITE'
      },
    ],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.90,
    imgSource: images.Latte,
  },
  {
    id: '7',
    title: 'Capuccino',
    ingredients: [
      {
        id: '1',
        value: 'TRADICIONAL'
      },
      {
        id: '2',
        value: 'COM LEITE'
      },
    ],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.90,
    imgSource: images.Capuccino,
  },
  {
    id: '8',
    title: 'Macchiato',
    ingredients: [
      {
        id: '1',
        value: 'TRADICIONAL'
      },
      {
        id: '2',
        value: 'COM LEITE'
      },
    ],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.90,
    imgSource: images.Macchiato,
  },
  {
    id: '9',
    title: 'Mocaccino',
    ingredients: [
      {
        id: '1',
        value: 'TRADICIONAL'
      },
      {
        id: '2',
        value: 'COM LEITE'
      },
    ],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.90,
    imgSource: images.Mocaccino,
  },
  {
    id: '10',
    title: 'Chocolate Quente',
    ingredients: [
      {
        id: '1',
        value: 'TRADICIONAL'
      },
      {
        id: '2',
        value: 'COM LEITE'
      },
    ],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.90,
    imgSource: images.HotChocolate,
  },
  {
    id: '11',
    title: 'Cubano',
    ingredients: [
      {
        id: '1',
        value: 'ESPECIAL'
      },
      {
        id: '2',
        value: 'ALCOÓLICO'
      },
      {
        id: '3',
        value: 'GELADO'
      },
    ],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.90,
    imgSource: images.Cuban,
  },
  {
    id: '12',
    title: 'Havaiano',
    ingredients: 'ESPECIAL',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.90,
    imgSource: images.HawainKona,
  },
  {
    id: '13',
    title: 'Árabe',
    ingredients: 'ESPECIAL',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.90,
    imgSource: images.Arabic,
  },
  {
    id: '14',
    title: 'Irlandês',
    ingredients: [
      {
        id: '1',
        value: 'ESPECIAL'
      },
      {
        id: '2',
        value: 'ALCOÓLICO'
      },
    ],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.90,
    imgSource: images.Irish,
  },
]

export const BillItems =[
  {
    id: '1',
    title: 'Expresso Tradicional',
    ingredients: 'TRADICIONAL',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.90,
    imgSource: images.Traditional,
  },
  {
    id: '2',
    title: 'Expresso Americano',
    ingredients: 'TRADICIONAL',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.90,
    imgSource: images.American,
  },
  {
    id: '12',
    title: 'Havaiano',
    ingredients: 'ESPECIAL',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.90,
    imgSource: images.HawainKona,
  },
]

export const AvailableLocs = [
  {
    id: '1',
    value: 'Porto Alegre, RS',
  },
  {
    id: '2',
    value: 'Caxias do Sul, RS',
  },
  {
    id: '3',
    value: 'Santa Maria, RS',
  },
  {
    id: '4',
    value: 'Pelotas, RS',
  },
  {
    id: '5',
    value: 'Canela, RS',
  },
  {
    id: '6',
    value: 'Gramado, RS',
  },
  {
    id: '7',
    value: 'Rio Grande, RS',
  },
]