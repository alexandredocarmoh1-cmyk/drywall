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
    imageId: 'drywall-guides',
    buttonText: 'Acessar Materiais',
    buttonLink: '/modulos/walls',
    meta: getMeta(3, '3 guias', 'resource'),
  },
  {
    id: 'ceilings',
    title: 'Instalação Completa do Drywall na Prática',
    description: 'Aprenda a instalar drywall do início ao fim, direto na prática.',
    imageId: 'drywall-practice-installation',
    lessons: [
      { id: '1', title: 'Passo a passo da preparação corte e medidas', duration: '8min 32s', videoId: 'GwuhgZ4MIh8' },
      { id: '2', title: 'Teto', duration: '10min 15s', videoId: 'pu-pPsVKq90' },
      { id: '3', title: 'Medir e Cortar', duration: '7min 48s', videoId: 'aNrACgQeEsQ' },
      { id: '4', title: 'Ferramentas', duration: '9min 40s', videoId: 'QSWi7Z4YsQ8' },
      { id: '5', title: 'Fita e Massa', duration: '11min 20s', videoId: 'O8d_MSPLCiw' },
      { id: '6', title: 'Revestimento do Drywall - Parte 1', duration: '12min 05s', videoId: '9awHCmPvZF0' },
      { id: '7', title: 'Revestimento do Drywall - Parte 2', duration: '8min 55s', videoId: 'uCkad7WHbCI' },
      { id: '8', title: 'Camada Final', duration: '9min 10s', videoId: 'fn7qg1Mviog' },
      { id: '9', title: 'Verificação final', duration: '6min 30s', videoId: 'Ewdr-8aZZ74' },
      { id: '10', title: 'Lixamento', duration: '7min 15s', videoId: 'YWjS28gudDY' },
      { id: '11', title: 'Pintura do Drywall', duration: '10min 00s', videoId: 'f29BOCZTyns' },
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
    imageId: 'drywall-walls',
    lessons: [
      { id: '1', title: 'Montagem Completa de Parede em Drywall (Passo a Passo Prático)', duration: '18min', videoId: 'YXRcEY-ZavM' },
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
    imageId: 'drywall-ceilings',
    lessons: [
      { id: '1', title: 'Instalação Completa de Forro Tabicado em Drywall (Passo a Passo)', duration: '25min', videoId: 'p9yHpVjGlXU' },
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
        { id: '1', title: 'Aprenda a Fazer Sanca em Drywall com Acabamento Perfeito', duration: '40min', videoId: 'C8Uw6yGEE0A' },
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
        { id: '1', title: 'Como Fazer Móveis Planejados em Drywall (Passo a Passo Profissional)', duration: '22min', videoId: 'hL2YQ0V08SQ' },
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
    buttonText: 'Visualizar Lista',
    buttonLink: '#',
    meta: getMeta(1, '10 min', 'resource'),
  },
  {
    id: 'suppliers',
    title: 'Lista de Materiais e Fornecedor',
    description: 'Principais lojas e marcas com descontos e materiais de qualidade.',
    imageId: 'drywall-suppliers',
    buttonText: 'Visualizar Lista',
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
    buttonLink: '/grupo-vip',
    meta: getMeta(0, '', 'community'),
  },
];

export const allModules = [...mainModules, ...bonusModules];

export const pdfResourceGroups: Record<string, PdfResource[]> = {
    walls: [
        {
        id: 'walls-1',
        title: 'Guia Completo Sobre Drywall',
        url: 'https://drive.google.com/file/d/1BNBvJkv1HxXjvI5QFtY7tQCj4y9X1Akh/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1BNBvJkv1HxXjvI5QFtY7tQCj4y9X1Akh/preview'
      },
      {
        id: 'walls-2',
        title: 'Drywall Lucrativo',
        url: 'https://drive.google.com/file/d/1lBAZQRveyVeHFnWgh9x6_SdMba7a0AvO/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1lBAZQRveyVeHFnWgh9x6_SdMba7a0AvO/preview'
      },
      {
        id: 'walls-3',
        title: 'Como Instalar Drywall no Forro',
        url: 'https://drive.google.com/file/d/1gTZvP-gqzoXf_hxUUlvQRGqmQUABhpjE/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1gTZvP-gqzoXf_hxUUlvQRGqmQUABhpjE/preview'
      },
    ],
    tools: [
        {
            id: 'tools-1',
            title: 'Lista de Ferramentas para Iniciantes em Drywall',
            url: 'https://drive.google.com/file/d/1TDxhL1HDCKaTtCypUh_R1QEGPYgxddTW/view?usp=sharing',
            embedUrl: 'https://drive.google.com/file/d/1TDxhL1HDCKaTtCypUh_R1QEGPYgxddTW/preview'
        }
    ],
    suppliers: [
        {
            id: 'suppliers-1',
            title: 'Lista de Fornecedores e Materiais',
            url: 'https://drive.google.com/file/d/1TDxhL1HDCKaTtCypUh_R1QEGPYgxddTW/view?usp=sharing',
            embedUrl: 'https://drive.google.com/file/d/1TDxhL1HDCKaTtCypUh_R1QEGPYgxddTW/preview'
        }
    ]
  };
