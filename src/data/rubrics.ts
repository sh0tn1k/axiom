export const rubrics = {
  models: {
    slug: 'models',
    title: 'Модели',
    description: 'Новые языковые модели, мультимодальные системы и архитектурные сдвиги.',
  },
  tools: {
    slug: 'tools',
    title: 'Инструменты',
    description: 'Фреймворки, IDE-плагины, API и продукты для работы с ИИ.',
  },
  research: {
    slug: 'research',
    title: 'Исследования',
    description: 'Научные работы, бенчмарки и прорывы в машинном обучении.',
  },
  business: {
    slug: 'business',
    title: 'Бизнес',
    description: 'Инвестиции, регулирование, рынок и стратегии ИИ-компаний.',
  },
} as const;

export type RubricSlug = keyof typeof rubrics;

export function getRubric(slug: string) {
  return rubrics[slug as RubricSlug];
}
