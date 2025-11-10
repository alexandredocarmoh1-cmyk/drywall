import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type Lesson = {
  id: string;
  title: string;
  duration: string;
  videoId: string;
};

type Module = {
  id: string;
  title: string;
  description: string;
  imageId: string;
  lessons?: Lesson[];
  duration?: string;
  buttonText: string;
  buttonLink: string;
  meta: { icon: string; text: string }[];
};

type PdfResource = {
  id: string;
  title: string;
  description: string;
  url: string;
};

function getMeta(lessons: number, duration: string, type: 'video' | 'resource' | 'community') {
    if (type === 'video') {
        return [
            { icon: 'BookOpen', text: `${lessons} aulas` },
            { icon: 'Clock', text: duration },
        ]
    }
    if (type === 'resource') {
        return [
            { icon: 'FileText', text: 'PDF' },
            { icon: 'Clock', text: duration },
        ]
    }
    return [
        { icon: 'Users', text: 'Comunidade' },
        { icon: 'Gift', text: 'Sorteios' },
    ]
}


export const mainModules: Module[] = [
  {
    id: 'walls',
    title: 'Materiais de Apoio - PDF',
    description: 'Baixe apostilas e listas com tudo que você precisa pra começar.',
    imageId: 'drywall-walls',
    buttonText: 'Acessar Materiais',
    buttonLink: '/modulos/walls',
    meta: getMeta(5, '32 min', 'resource'),
  },
  {
    id: 'ceilings',
    title: 'Instalação Completa do Drywall na Prática',
    description: 'Aprenda a instalar drywall do início ao fim, direto na prática.',
    imageId: 'drywall-ceilings',
    lessons: [
      { id: '1', title: 'Aula 1 — Preparando Estrutura e Materiais', duration: '8min 32s', videoId: 'dQw4w9WgXcQ' },
      { id: '2', title: 'Aula 2 — Montagem da Estrutura Metálica', duration: '10min 15s', videoId: 'dQw4w9WgXcQ' },
      { id: '3', title: 'Aula 3 — Fixação das Placas de Drywall', duration: '7min 48s', videoId: 'dQw4w9WgXcQ' },
      { id: '4', title: 'Aula 4 — Acabamento e Aplicação de Massa', duration: '9min 40s', videoId: 'dQw4w9WgXcQ' },
      { id: '5', title: 'Aula 5 — Lixamento e Preparação para Pintura', duration: '11min 20s', videoId: 'dQw4w9WgXcQ' },
      { id: '6', title: 'Aula 6 — Dicas de Pintura Profissional', duration: '12min 05s', videoId: 'dQw4w9WgXcQ' },
      { id: '7', title: 'Aula 7 — Tratamento de Juntas e Cantos', duration: '8min 55s', videoId: 'dQw4w9WgXcQ' },
      { id: '8', title: 'Aula 8 — Instalação de Rodapés e Acabamentos', duration: '9min 10s', videoId: 'dQw4w9WgXcQ' },
      { id: '9', title: 'Aula 9 — Recortes para Tomadas e Interruptores', duration: '6min 30s', videoId: 'dQw4w9WgXcQ' },
      { id: '10', title: 'Aula 10 — Manutenção e Reparos Comuns', duration: '7min 15s', videoId: 'dQw4w9WgXcQ' },
      { id: '11', title: 'Aula 11 — Ferramentas Avançadas e Dicas Extras', duration: '10min 00s', videoId: 'dQw4w9WgXcQ' },
    ],
    duration: '11 aulas',
    buttonText: 'Acessar Aulas',
    buttonLink: '/modulos/ceilings',
    meta: getMeta(11, '1h 30min', 'video'),
  },
  {
    id: 'finishing',
    title: 'Parede em Drywall - Passo a Passo',
    description: 'Veja passo a passo como montar paredes firmes e bem acabadas.',
    imageId: 'drywall-finishing',
    lessons: [],
    duration: '18 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '#',
    meta: getMeta(3, '18 min', 'video'),
  },
  {
    id: 'budget',
    title: 'Forro de Drywall - Passo a Passo',
    description: 'Aprenda a fazer forros bonitos, nivelados e seguros em drywall.',
    imageId: 'drywall-budget',
    lessons: [],
    duration: '25 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '#',
    meta: getMeta(4, '25 min', 'video'),
  },
  {
    id: 'structures',
    title: 'Sanca em Drywall - Passo a Passo',
    description: 'Monte sancas modernas e decorativas pra deixar o ambiente mais bonito.',
    imageId: 'drywall-structures',
    lessons: [],
    duration: '40 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '#',
    meta: getMeta(5, '40 min', 'video'),
  },
  {
    id: 'acoustic-insulation',
    title: 'Móveis Planejados em Drywall',
    description: 'Crie móveis planejados com drywall de forma simples e prática.',
    imageId: 'drywall-acoustic',
    lessons: [],
    duration: '22 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '#',
    meta: getMeta(3, '22 min', 'video'),
  },
];

export const bonusModules: Module[] = [
  {
    id: 'tools',
    title: 'Lista de Ferramentas',
    description: 'PDF completo com as ferramentas essenciais pra começar no drywall.',
    imageId: 'drywall-tools',
    buttonText: 'Baixar PDF',
    buttonLink: '#',
    meta: getMeta(1, '10 min', 'resource'),
  },
  {
    id: 'suppliers',
    title: 'Guia de Fornecedores',
    description: 'Principais lojas e marcas com descontos e materiais de qualidade.',
    imageId: 'drywall-suppliers',
    buttonText: 'Baixar Guia',
    buttonLink: '#',
    meta: getMeta(1, '8 min', 'resource'),
  },
  {
    id: 'community',
    title: 'Grupo VIP no WhatsApp',
    description: 'Entre no grupo de alunos pra trocar experiências e participar dos sorteios mensais.',
    imageId: 'drywall-community',
    lessons: [],
    duration: '',
    buttonText: 'Entrar no Grupo',
    buttonLink: '#',
    meta: getMeta(0, '', 'community'),
  },
];

export const allModules = [...mainModules, ...bonusModules];

export const pdfResources: PdfResource[] = [
  {
    id: '1',
    title: 'Guia de Instalação de Drywall',
    description: 'Um guia completo para a instalação de drywall.',
    url: 'https://drive.google.com/file/d/1BNBvJkv1HxXjvI5QFtY7tQCj4y9X1Akh/view?usp=sharing',
  },
];
