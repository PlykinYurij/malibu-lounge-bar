const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const { slugify } = require('transliteration');

// Пути к файлам
const inputPath = path.join(__dirname, '../data/catalog.xlsx');
const outputPath = path.join(__dirname, '../data/menu.json');

// Проверяем, существует ли входной файл
if (!fs.existsSync(inputPath)) {
  console.error(`Файл не найден: ${inputPath}`);
  process.exit(1);
}

// Читаем Excel-файл
const workbook = XLSX.readFile(inputPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Преобразуем в JSON
const jsonData = XLSX.utils.sheet_to_json(worksheet);

// Фильтруем и преобразуем данные
const filteredData = jsonData
  .filter(row => {
    // Исключаем строки без "Код раздела" (это "Еда склад")
    return row['Код раздела'] && row['Код раздела'].trim() !== '';
  })
  .filter(row => {
    // Исключаем саму строку "Еда склад"
    return !(typeof row['Наименование'] === 'string' && row['Наименование'].toLowerCase().includes('еда склад'));
  })
  .map(row => ({
    name: row['Наименование'],
    price: row['Цена'],
    code: row['Код раздела']
  }));

// Маппинг кодов в названия категорий (на основе анализа структуры)
const categoryMap = {
  'X6089212': 'Кальяны',
  'X6015757': 'Время/Услуги',
  'X6183982': 'Еда',
  'X6101688': 'Чай',
  'X5174477': 'Чай тропический',
  'X3913254': 'Кофе',
  'X6149654': 'Лимонады',
  'X6899917': 'Смузи',
  'X6889074': 'Фреш',
  'X3486314': 'Десерты',
  'X6531437': 'Дополнительно',
  'X9897915': 'Алкогольные напитки',
  'X5618215': 'Табак',
  'X3273409': 'Соусы',
  'X4389721': 'Напитки',
  'X2494662': 'Вино',
  'X2997387': 'Коктейли',
  'X4579645': 'Дополнительно',
  'X9507546': 'Напитки',
  'X1984886': 'Продукты'
};

// Группируем по коду категории
const groupedData = filteredData.reduce((acc, item) => {
  const categoryName = categoryMap[item.code] || item.code; // Используем маппинг или код как категорию

  // Проверяем, существует ли уже категория
  let category = acc.find(cat => cat.category === categoryName);
  if (!category) {
    category = {
      category: categoryName,
      code: item.code,
      items: []
    };
    acc.push(category);
  }

  category.items.push({
    name: item.name,
    price: item.price
  });

  return acc;
}, []);

// Маппинг категорий в фиксированные id
const categoryIds = {
  'Кальяны': 'hookah',
  'Время/Услуги': 'services',
  'Еда': 'food',
  'Чай': 'tea',
  'Чай тропический': 'designer_tea',
  'Кофе': 'coffee',
  'Лимонады': 'lemonades',
  'Смузи': 'smoothie',
  'Фреш': 'fresh',
  'Десерты': 'desserts',
  'Дополнительно': 'additionally',
  'Алкогольные напитки': 'alcoholic_drinks',
  'Табак': 'tobacco',
  'Соусы': 'sauces',
  'Напитки': 'drinks',
  'Коктейли': 'cocktails'
};

// Убираем служебные поля (code) из итогового JSON и добавляем id
const finalData = groupedData
  .filter(category => 
    category.category !== 'Продукты' && // Исключаем "Продукты"
    category.category !== 'Вино'    &&  // Исключаем "Вино"
    category.category !== 'Алкогольные напитки'
  )
  .map(({ category, items }) => ({
    id: categoryIds[category] || slugify(category, { lower: true }), // Используем фиксированный id или транслитерацию
    category,
    items
  }));

// Создаём директорию, если не существует
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Сохраняем в JSON
fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 2));
console.log(`Меню успешно конвертировано в ${outputPath}`);

// Удаляем временные файлы (если существуют)
const tempFiles = [
  path.join(__dirname, 'inspect-catalog.js'),
  path.join(__dirname, 'find-category-codes.js'),
  path.join(__dirname, 'find-food-sklad.js'),
  path.join(__dirname, 'debug-categories.js')
];

tempFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
  }
});