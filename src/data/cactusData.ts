export interface CactusSpecies {
  id: string;
  name: string;
  scientificName: string;
  family: string;
  description: string;
  origin: string;
  care: {
    watering: string;
    light: string;
    temperature: string;
    soil: string;
  };
  image: string;
  blooming: string;
  size: string;
  difficulty: 'Легкий' | 'Средний' | 'Сложный';
}

export const cactusData: CactusSpecies[] = [
  {
    id: '1',
    name: 'Сагуаро',
    scientificName: 'Carnegiea gigantea',
    family: 'Cactaceae',
    description: 'Величественный гигант пустыни Сонора, символ американского Юго-Запада. Может достигать высоты до 12 метров и жить более 150 лет.',
    origin: 'Пустыня Сонора, США и Мексика',
    care: {
      watering: 'Редкий полив раз в 2-3 недели летом',
      light: 'Яркий прямой солнечный свет',
      temperature: '18-35°C, минимум 10°C зимой',
      soil: 'Хорошо дренированная кактусовая смесь'
    },
    image: '/img/5785449a-ab71-44ac-a472-c37c9bcb887b.jpg',
    blooming: 'Май-июнь, белые цветы',
    size: 'До 12 м в высоту',
    difficulty: 'Средний'
  },
  {
    id: '2',
    name: 'Бочковый кактус',
    scientificName: 'Ferocactus cylindraceus',
    family: 'Cactaceae',
    description: 'Округлый кактус с мощными колючками и яркими цветами. Отличный накопитель воды, способен выживать в экстремальных условиях.',
    origin: 'Пустыни Мохаве и Сонора',
    care: {
      watering: 'Умеренный полив раз в 3-4 недели',
      light: 'Яркое освещение, переносит полутень',
      temperature: '15-30°C, устойчив к заморозкам',
      soil: 'Песчано-гравийная смесь'
    },
    image: '/img/50ad3ef9-6be6-420a-87a5-cacb1a368e35.jpg',
    blooming: 'Июль-сентябрь, желтые цветы',
    size: '1-3 м в высоту',
    difficulty: 'Легкий'
  },
  {
    id: '3',
    name: 'Опунция',
    scientificName: 'Opuntia ficus-indica',
    family: 'Cactaceae',
    description: 'Плоский кактус с съедобными плодами, широко культивируется в Средиземноморье. Один из самых адаптивных видов кактусов.',
    origin: 'Мексика, натурализована по всему миру',
    care: {
      watering: 'Регулярный полив весной и летом',
      light: 'Полное солнце или легкая полутень',
      temperature: '5-40°C, морозостойкая',
      soil: 'Любая хорошо дренированная почва'
    },
    image: '/img/e130d63b-e4ce-4afd-9c7e-344ec4d335a5.jpg',
    blooming: 'Июнь-август, желтые цветы',
    size: '2-5 м в высоту',
    difficulty: 'Легкий'
  },
  {
    id: '4',
    name: 'Рождественский кактус',
    scientificName: 'Schlumbergera truncata',
    family: 'Cactaceae',
    description: 'Эпифитный кактус-суккulent из тропических лесов Бразилии. Популярное комнатное растение, цветущее зимой яркими цветами.',
    origin: 'Атлантические леса Бразилии',
    care: {
      watering: 'Регулярный полив, не допускать пересыхания',
      light: 'Яркий рассеянный свет, избегать прямого солнца',
      temperature: '15-21°C, прохладный период для цветения',
      soil: 'Рыхлая, хорошо дренированная почва для эпифитов'
    },
    image: '/img/a13fce8a-f444-49f3-a129-50dac170c908.jpg',
    blooming: 'Ноябрь-январь, розовые, красные цветы',
    size: '30-60 см в диаметре',
    difficulty: 'Легкий'
  },
  {
    id: '5',
    name: 'Органная труба',
    scientificName: 'Stenocereus thurberi',
    family: 'Cactaceae',
    description: 'Величественный колонновидный кактус с множественными стволами. Получил название из-за сходства с органными трубами.',
    origin: 'Пустыня Сонора, Мексика и Аризона',
    care: {
      watering: 'Минимальный полив раз в месяц',
      light: 'Полное солнце, очень светолюбив',
      temperature: '20-40°C, не переносит заморозки',
      soil: 'Каменистая, хорошо дренированная почва'
    },
    image: '/img/990602a5-090a-41df-aad7-7caf177eeb7d.jpg',
    blooming: 'Апрель-июнь, белые или розовые цветы',
    size: '6-8 м в высоту',
    difficulty: 'Сложный'
  },
  {
    id: '6',
    name: 'Старик',
    scientificName: 'Cephalocereus senilis',
    family: 'Cactaceae',
    description: 'Уникальный кактус, покрытый длинными белыми волосками, защищающими от солнца и холода. Символ мексиканской флоры.',
    origin: 'Центральная Мексика, штат Идальго',
    care: {
      watering: 'Очень редкий полив раз в 4-6 недель',
      light: 'Яркое солнце, переносит полутень',
      temperature: '18-30°C, минимум 5°C',
      soil: 'Известковая, щелочная почва с отличным дренажем'
    },
    image: '/img/30c6f9ec-da18-4a41-bdaa-0706f77379d6.jpg',
    blooming: 'Редко цветет в культуре, розовые цветы',
    size: '12-15 м в природе, до 2 м дома',
    difficulty: 'Средний'
  },
  {
    id: '7',
    name: 'Золотая бочка',
    scientificName: 'Echinocactus grusonii',
    family: 'Cactaceae',
    description: 'Сферический кактус с золотистыми колючками. Один из самых популярных декоративных кактусов, символ мексиканских пустынь.',
    origin: 'Центральная Мексика',
    care: {
      watering: 'Редкий полив раз в 3-4 недели летом',
      light: 'Яркий прямой солнечный свет',
      temperature: '20-35°C, минимум 8°C',
      soil: 'Песчаная кактусовая смесь с добавлением перлита'
    },
    image: '/img/dbba7852-b254-44ac-be1b-7d8661608c56.jpg',
    blooming: 'Июнь-сентябрь, желтые цветы на верхушке',
    size: 'До 1,3 м в диаметре',
    difficulty: 'Легкий'
  },
  {
    id: '8',
    name: 'Царица ночи',
    scientificName: 'Epiphyllum oxypetalum',
    family: 'Cactaceae',
    description: 'Эпифитный кактус с огромными ароматными цветами, раскрывающимися только ночью. Одно из самых эффектных цветений в мире кактусов.',
    origin: 'Тропические леса Центральной Америки',
    care: {
      watering: 'Обильный полив в период роста, зимой сократить',
      light: 'Яркий рассеянный свет, избегать прямого солнца',
      temperature: '18-24°C, повышенная влажность',
      soil: 'Рыхлая эпифитная смесь с корой и мхом'
    },
    image: '/img/f9bef502-4863-4bfd-83c7-77ad0573b8ef.jpg',
    blooming: 'Лето, огромные белые цветы ночью',
    size: '2-3 м в длину плетей',
    difficulty: 'Средний'
  },
  {
    id: '9',
    name: 'Епископская шапка',
    scientificName: 'Astrophytum myriostigma',
    family: 'Cactaceae',
    description: 'Звездообразный кактус без колючек с характерными белыми пятнами. Форма напоминает епископскую митру, отсюда и название.',
    origin: 'Северо-восточная Мексика',
    care: {
      watering: 'Очень осторожный полив раз в 3-4 недели',
      light: 'Яркое солнце, но защищать от полуденного зноя',
      temperature: '22-28°C, зимой 10-15°C',
      soil: 'Минеральная смесь с большим содержанием песка'
    },
    image: '/img/943b2e6b-c3aa-4056-baaf-debce8636624.jpg',
    blooming: 'Лето, желтые цветы на верхушке',
    size: '15-20 см в диаметре',
    difficulty: 'Сложный'
  }
];