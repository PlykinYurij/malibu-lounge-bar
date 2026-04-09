import type { FoodItem } from '@data/types';

export const MENU: FoodItem[] = [
  /** Основное Меню*/
  {
    id: '1',
    name: 'Classic',
    category: 'hookahs',
    variants: [{ price: 1000 }],
  },
  {
    id: '2',
    name: 'Premium',
    category: 'hookahs',
    variants: [{ price: 1300 }],
  },
  {
    id: '3',
    name: 'Картофель фри',
    category: 'snacks',
    variants: [{ price: 180 }],
  },
  {
    id: '4',
    name: 'Картофель по-деревенски',
    category: 'snacks',
    variants: [{ price: 180 }],
  },
  {
    id: '5',
    name: 'Наггетсы',
    category: 'snacks',
    variants: [{ price: 220 }],
  },
  {
    id: '6',
    name: 'Креветки в панировке',
    category: 'snacks',
    variants: [{ price: 350 }],
  },
  {
    id: '7',
    name: 'Чечел жареный',
    category: 'snacks',
    variants: [{ price: 250 }],
  },
  {
    id: '37',
    name: 'Куриная грудка с салатом',
    category: 'mainCourses',
    variants: [{ price: 350, volume: '450', unit: 'гр' }],
  },
  {
    id: '38',
    name: 'Тёплый салат с баклажанами',
    category: 'mainCourses',
    variants: [{ price: 350 }],
  },
  {
    id: '28',
    name: 'Масик',
    category: 'burgers',
    variants: [{ price: 480 }],
  },
  {
    id: '8',
    name: 'ДаблМасик',
    category: 'burgers',
    variants: [{ price: 870 }],
  },
  {
    id: '9',
    name: 'Чечел',
    category: 'snacks',
    variants: [{ price: 170 }],
  },
  {
    id: '10',
    name: 'Гренки чесночные',
    category: 'snacks',
    variants: [{ price: 120 }],
  },
  {
    id: '12',
    name: 'Моцарелла в панировке',
    category: 'snacks',
    variants: [{ price: 300 }],
  },
  {
    id: '13',
    name: 'Монетки сырные с халопеньо',
    category: 'snacks',
    variants: [{ price: 350 }],
  },
  {
    id: '15',
    name: 'Пельмени жареные',
    category: 'snacks',
    variants: [{ price: 300 }],
  },
  {
    id: '16',
    name: 'Луковые кольца в панировке',
    category: 'snacks',
    variants: [{ price: 200 }],
  },
  {
    id: '18',
    name: 'Кольца кальмара в панировке',
    category: 'snacks',
    variants: [{ price: 300 }],
  },
  {
    id: '25',
    name: 'Пита с курицей',
    category: 'snacks',
    variants: [{ price: 280 }],
  },
  {
    id: '34',
    name: 'Пита с креветками',
    category: 'snacks',
    variants: [{ price: 400 }],
  },

  {
    id: '21',
    name: 'Арахис жареный',
    category: 'snacks',
    variants: [{ price: 100 }],
  },
  {
    id: '22',
    name: 'Миндаль жареный',
    category: 'snacks',
    variants: [{ price: 130 }],
  },

  {
    id: '24',
    name: 'Фисташки',
    category: 'snacks',
    variants: [{ volume: '50', unit: 'гр', price: 100 }],
  },
  {
    id: '26',
    name: 'Карбонара',
    category: 'pastes',
    variants: [{ price: 400 }],
  },
  {
    id: '27',
    name: 'Паста с курицей и грибами',
    category: 'pastes',
    variants: [{ price: 400 }],
  },

  {
    id: '29',
    name: 'Сырная тарелка',
    category: 'snacks',
    variants: [{ price: 650 }],
  },
  {
    id: '30',
    name: 'Фруктовая тарелка',
    category: 'snacks',
    variants: [{ price: 400 }],
  },
  {
    id: '31',
    name: 'Чика',
    category: 'burgers',
    variants: [{ price: 350 }],
  },
  {
    id: '32',
    name: 'ГудМорнинг',
    category: 'burgers',
    variants: [{ price: 590 }],
  },
  {
    id: '33',
    name: 'Бургер с брусничным соусом',
    category: 'burgers',
    variants: [{ price: 750 }],
  },

  {
    id: '35',
    name: 'Паста "Том Ям"',
    category: 'pastes',
    variants: [{ price: 450 }],
  },
  {
    id: '36',
    name: 'Бургер Скуф',
    category: 'burgers',
    variants: [{ price: 550 }],
  },
  /** */

  /** Соусы*/
  {
    id: '1',
    name: 'Соусы',
    category: 'sauces',
    variants: [{ price: 50 }],
    kind: [
      'сырный',
      'кисло-сладкий',
      'барбекю',
      'терияки',
      'чесночный',
      'кетчуп',
    ],
  },

  /** Дессерты*/
  {
    id: '1',
    name: 'Чизкейк ягодный',
    category: 'desserts',
    variants: [{ price: 250 }],
  },
  {
    id: '2',
    name: 'Торт красный бархат',
    category: 'desserts',
    variants: [{ price: 250 }],
  },
  {
    id: '3',
    name: 'Торт брусничный с белым шоколадом',
    category: 'desserts',
    variants: [{ price: 270 }],
  },
  {
    id: '4',
    name: 'Торт лиманчелло',
    category: 'desserts',
    variants: [{ price: 190 }],
  },
  {
    id: '6',
    name: 'Торт малина-фисташка',
    category: 'desserts',
    variants: [{ price: 250 }],
  },
  {
    id: '7',
    name: 'Пироженое брауни',
    category: 'desserts',
    variants: [{ price: 300 }],
  },
  /** */

  /** Классический чай */
  {
    id: '1',
    name: 'Кенийский черный чай',
    category: 'tea',
    variants: [{ volume: '0.9', unit: 'л', price: 250 }],
  },
  {
    id: '2',
    name: 'Зеленый Те Гуань Инь',
    category: 'tea',
    variants: [{ volume: '0.9', unit: 'л', price: 250 }],
  },
  {
    id: '3',
    name: 'Жасминовый',
    category: 'tea',
    variants: [{ volume: '0.9', unit: 'л', price: 250 }],
  },
  {
    id: '4',
    name: 'Молочный улун "Сердце дракона"',
    category: 'tea',
    variants: [{ volume: '0.9', unit: 'л', price: 250 }],
  },
  {
    id: '5',
    name: 'Эрл грей',
    category: 'tea',
    variants: [{ volume: '0.9', unit: 'л', price: 250 }],
  },
  {
    id: '6',
    name: 'Гречишный',
    category: 'tea',
    variants: [{ volume: '0.9', unit: 'л', price: 250 }],
  },
  {
    id: '7',
    name: 'Пуэр Ча',
    category: 'tea',
    variants: [{ volume: '0.9', unit: 'л', price: 250 }],
  },
  {
    id: '8',
    name: 'Шу Пуэр 4 летний',
    category: 'tea',
    variants: [{ volume: '0.9', unit: 'л', price: 250 }],
  },
  {
    id: '9',
    name: 'Каркаде',
    category: 'tea',
    variants: [{ volume: '0.9', unit: 'л', price: 250 }],
  },

  /** Фирменный чай */
  {
    id: '1',
    name: 'Клюквенно-ванильный',
    category: 'signatureTea',
    variants: [{ volume: '0.9', unit: 'л', price: 400 }],
    ingredients: 'Черный чай, клюква пюре, сироп ваниль',
  },
  {
    id: '2',
    name: 'Тропический',
    category: 'signatureTea',
    variants: [{ volume: '0.9', unit: 'л', price: 400 }],
    ingredients: 'Зеленый чай, апельсин, мята, сироп маракуйя',
  },
  {
    id: '3',
    name: 'Сливовый',
    category: 'signatureTea',
    variants: [{ volume: '0.9', unit: 'л', price: 400 }],
    ingredients: 'Черный чай, слива пюре, сахарный сироп',
  },
  {
    id: '4',
    name: 'Цитрусовый микс',
    category: 'signatureTea',
    variants: [{ volume: '0.9', unit: 'л', price: 400 }],
    ingredients: 'Чай на выбор, апельсин, лимон, грейпфрут',
  },
  {
    id: '5',
    name: 'Облепиховый',
    category: 'signatureTea',
    variants: [{ volume: '0.9', unit: 'л', price: 400 }],
    ingredients: 'Чай на выбор, облепиха пюре, лимон, мята мед',
  },
  {
    id: '6',
    name: 'Имбирный',
    category: 'signatureTea',
    variants: [{ volume: '0.9', unit: 'л', price: 400 }],
    ingredients: 'Чай на выбор, имбирь пюре, лимон, мята мед',
  },
  {
    id: '7',
    name: 'Ягодный',
    category: 'signatureTea',
    variants: [{ volume: '0.9', unit: 'л', price: 400 }],
    ingredients:
      'Чай на выбор, малина, вишня, черная смородина, листья смородины',
  },
  {
    id: '8',
    name: 'Массала',
    category: 'signatureTea',
    variants: [{ volume: '0.9', unit: 'л', price: 400 }],
    ingredients:
      'Черный чай, молоко, черный перец, кардамон, корица, имбирь, мускатный орех, гвоздика, бадьян',
  },
  {
    id: '9',
    name: 'Сакура',
    category: 'signatureTea',
    variants: [{ volume: '0.9', unit: 'л', price: 400 }],
    ingredients: 'Черный чай, лепистки роз, клубника',
  },
  {
    id: '10',
    name: 'Мароканский',
    category: 'signatureTea',
    variants: [{ volume: '0.9', unit: 'л', price: 400 }],
    ingredients: 'Зеленый чай, мята, лайм, бадьян, корица, гвоздика',
  },

  /** Кофе*/
  {
    id: '1',
    name: 'Эспрессо',
    category: 'coffee',
    variants: [{ price: 150 }],
  },
  {
    id: '2',
    name: 'Американо',
    category: 'coffee',
    variants: [{ price: 150 }],
  },
  {
    id: '3',
    name: 'Капучино',
    category: 'coffee',
    variants: [{ price: 180 }],
  },
  {
    id: '4',
    name: 'Латте',
    category: 'coffee',
    variants: [{ price: 300 }],
  },
  {
    id: '5',
    name: 'Раф классический',
    category: 'coffee',
    variants: [{ price: 320 }],
  },
  {
    id: '6',
    name: 'Бамбл карамельный',
    category: 'coffee',
    variants: [{ price: 320 }],
  },

  /** Барная карта*/
  {
    id: '1',
    name: 'Фреши',
    category: 'drinks',
    variants: [{ volume: '300', unit: 'мл', price: 300 }],
    description: 'Мы обещаем, что будем с ними понежнее',
    kind: ['Апельсиновый', 'Грейпфрутовый'],
  },
  {
    id: '2',
    name: 'Смузи',
    category: 'drinks',
    variants: [{ volume: '300', unit: 'мл', price: 310 }],
    description: 'А, ты из этих? Да, без добавления сиропов',
    kind: ['Банан, клубника', 'Яблоко, киви', 'Малина, персик'],
  },
  {
    id: '3',
    name: 'Лимонады б/а',
    category: 'drinks',
    variants: [{ volume: '400', unit: 'мл', price: 250 }],
    description: 'Лимонады отличаются от коктейлей. Чем? Спроси у официанта',
    kind: [
      'Тропики',
      'Грейпфрут-малина',
      'Киви-яблоко',
      'Лаванда-черная смородига',
    ],
  },
  {
    id: '4',
    name: 'Коктейли б/а',
    category: 'drinks',
    variants: [{ volume: '400', unit: 'мл', price: 310 }],
    description: 'Без алкоголя, не прячем, под баром нет, по тихой не нальем',
    kind: ['Мохито (Classic, Orange, Strawberry)', 'Пина-колада', 'Санрайз'],
  },

  /** Акоголь*/
  {
    id: '1',
    name: 'Наличие и цены уточняйте у официанта',
    category: 'alcohol',
    variants: [],
  },
];

export const VIP_ZONE: Pick<FoodItem, 'id' | 'name' | 'variants'>[] = [
  { id: '1', name: 'Игровая зона', variants: [{ price: 150 }] },
  { id: '2', name: 'VIP комната - половина', variants: [{ price: 350 }] },
  { id: '3', name: 'VIP комната - целая', variants: [{ price: 700 }] },
];

export const OPENING_HOURS: { day: string; time: string }[] = [
  { day: 'Пн - Чт', time: '17:00-01:00' },
  { day: 'Пт-Сб', time: '17:00-03:00' },
  { day: 'Вс', time: '17:00-01:00' },
];

export const RULES: { id: string; description: string }[] = [
  { id: 'age', description: 'Вход строго 18+' },
  {
    id: 'alco',
    description: 'Со своими пивными и безалкогольными напитками вход воспрещен',
  },
  {
    id: 'time',
    description: 'Кальян рассчитан на 1,5 часа покура на 4 человека',
  },
];
