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
  embedUrl: string;
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
      { id: '1', title: 'Aula 1: Passo a passo da preparação corte e medidas', duration: '8min 32s', videoId: 'dQw4w9WgXcQ' },
      { id: '2', title: 'Aula 2: Teto', duration: '10min 15s', videoId: 'dQw4w9WgXcQ' },
      { id: '3', title: 'Aula 3: Medir e Cortar', duration: '7min 48s', videoId: 'dQw4w9WgXcQ' },
      { id: '4', title: 'Aula 4: Ferramentas', duration: '9min 40s', videoId: 'dQw4w9WgXcQ' },
      { id: '5', title: 'Aula 5: Fita e Massa', duration: '11min 20s', videoId: 'dQw4w9WgXcQ' },
      { id: '6', title: 'Aula 6: Revestimento do Drywall - Parte 1', duration: '12min 05s', videoId: 'dQw4w9WgXcQ' },
      { id: '7', title: 'Aula 7: Revestimento do Drywall - Parte 2', duration: '8min 55s', videoId: 'dQw4w9WgXcQ' },
      { id: '8', title: 'Aula 8: Camada Final', duration: '9min 10s', videoId: 'dQw4w9WgXcQ' },
      { id: '9', title: 'Aula 9: Verificação final', duration: '6min 30s', videoId: 'dQw4w9WgXcQ' },
      { id: '10', title: 'Aula 10: Lixamento', duration: '7min 15s', videoId: 'dQw4w9WgXcQ' },
      { id: '11', title: 'Aula 11: Pintura do Drywall', duration: '10min 00s', videoId: 'dQw4w9WgXcQ' },
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
    lessons: [
      { id: '1', title: 'Aula 1: Montagem Completa de Parede em Drywall (Passo a Passo Prático)', duration: '18min', videoId: 'dQw4w9WgXcQ' },
    ],
    duration: '18 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '/modulos/finishing',
    meta: getMeta(1, '18 min', 'video'),
  },
  {
    id: 'budget',
    title: 'Forro de Drywall - Passo a Passo',
    description: 'Aprenda a fazer forros bonitos, nivelados e seguros em drywall.',
    imageId: 'drywall-budget',
    lessons: [
      { id: '1', title: 'Aula 1: Instalação Completa de Forro Tabicado em Drywall (Passo a Passo)', duration: '25min', videoId: 'dQw4w9WgXcQ' },
    ],
    duration: '25 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '/modulos/budget',
    meta: getMeta(1, '25 min', 'video'),
  },
  {
    id: 'structures',
    title: 'Sanca em Drywall - Passo a Passo',
    description: 'Monte sancas modernas e decorativas pra deixar o ambiente mais bonito.',
    imageId: 'drywall-structures',
    lessons: [
        { id: '1', title: 'Aula 1: Aprenda a Fazer Sanca em Drywall com Acabamento Perfeito', duration: '40min', videoId: 'dQw4w9WgXcQ' },
    ],
    duration: '40 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '/modulos/structures',
    meta: getMeta(1, '40 min', 'video'),
  },
  {
    id: 'acoustic-insulation',
    title: 'Móveis Planejados em Drywall',
    description: 'Crie móveis planejados com drywall de forma simples e prática.',
    imageId: 'drywall-acoustic',
    lessons: [
        { id: '1', title: 'Aula 1: Como Fazer Móveis Planejados em Drywall (Passo a Passo Profissional)', duration: '22min', videoId: 'dQw4w9WgXcQ' },
    ],
    duration: '22 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '/modulos/acoustic-insulation',
    meta: getMeta(1, '22 min', 'video'),
  },
];

export const bonusModules: Module[] = [
  {
    id: 'tools',
    title: 'Lista de Ferramentas',
    description: 'PDF completo com as ferramentas essenciais pra começar no drywall.',
    imageId: 'drywall-tools',
    buttonText: 'Visualizar Guia',
    buttonLink: '#pdf-modal',
    meta: getMeta(1, '10 min', 'resource'),
  },
  {
    id: 'suppliers',
    title: 'Guia de Fornecedores',
    description: 'Principais lojas e marcas com descontos e materiais de qualidade.',
    imageId: 'drywall-suppliers',
    buttonText: 'Visualizar Guia',
    buttonLink: '#pdf-modal',
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
    id: 'walls',
    title: 'Guia de Instalação de Drywall',
    description: 'Um guia completo para a instalação de drywall.',
    url: 'https://docs.google.com/document/d/1X-z1g3_gTq2hQ_gA7kYwZ_zF-1jXnB3eVpI8cW_o/edit?usp=sharing',
    embedUrl: 'https://docs.google.com/document/d/1X-z1g3_gTq2hQ_gA7kYwZ_zF-1jXnB3eVpI8cW_o/preview'
  },
  {
    id: 'tools',
    title: 'Lista de Ferramentas Essenciais',
    description: 'PDF com as ferramentas essenciais para começar no drywall.',
    url: 'https://drive.google.com/file/d/1BNBvJkv1HxXjvI5QFtY7tQCj4y9X1Akh/view?usp=sharing',
    embedUrl: 'https://drive.google.com/file/d/1BNBvJkv1HxXjvI5QFtY7tQCj4y9X1Akh/preview'
  },
  {
    id: 'suppliers',
    title: 'Guia de Fornecedores',
    description: 'Principais lojas e marcas com descontos e materiais de qualidade.',
    url: 'https://docs.google.com/document/d/1s-rC7G5v3B-yM0xQ-8gJ-2nK3hY-uF9oP1qZ_w/edit?usp=sharing',
    embedUrl: 'https://docs.google.com/document/d/1s-rC7G5v3B-yM0xQ-8gJ-2nK3hY-uF9oP1qZ_w/preview'
  },
];
