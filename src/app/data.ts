import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type Module = {
  id: string;
  title: string;
  description: string;
  imageId: string;
  lessons: number;
  duration: string;
  buttonText: string;
  buttonLink: string;
  meta: { icon: string; text: string }[];
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
    description: 'Aprenda a montar paredes retas, curvas, acústicas e corta-fogo com acabamento profissional.',
    imageId: 'drywall-walls',
    lessons: 5,
    duration: '32 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '#',
    meta: getMeta(5, '32 min', 'video'),
  },
  {
    id: 'ceilings',
    title: 'Execução Completa do Drywall na Prática',
    description: 'Monte forros rebaixados, tabicados e com iluminação indireta, direto da obra.',
    imageId: 'drywall-ceilings',
    lessons: 4,
    duration: '27 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '#',
    meta: getMeta(4, '27 min', 'video'),
  },
  {
    id: 'finishing',
    title: 'Parede em Drywall - Passo a Passo',
    description: 'Aprenda a nivelar, aplicar massa e dar o toque final pra deixar o serviço impecável.',
    imageId: 'drywall-finishing',
    lessons: 3,
    duration: '18 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '#',
    meta: getMeta(3, '18 min', 'video'),
  },
  {
    id: 'budget',
    title: 'Forro de Drywall - Passo a Passo',
    description: 'Descubra como calcular materiais, cobrar certo e aumentar seus lucros com segurança.',
    imageId: 'drywall-budget',
    lessons: 4,
    duration: '25 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '#',
    meta: getMeta(4, '25 min', 'video'),
  },
  {
    id: 'structures',
    title: 'Sanca em Drywall - Passo a Passo',
    description: 'Domine a montagem de perfis, guias e montantes para garantir a solidez do seu projeto.',
    imageId: 'drywall-structures',
    lessons: 5,
    duration: '40 min',
    buttonText: 'Acessar Aulas',
    buttonLink: '#',
    meta: getMeta(5, '40 min', 'video'),
  },
  {
    id: 'acoustic-insulation',
    title: 'Móveis Planejados em Drywall',
    description: 'Aprenda a usar lã de rocha e outros materiais para criar ambientes com som controlado.',
    imageId: 'drywall-acoustic',
    lessons: 3,
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
    lessons: 1,
    duration: '10 min',
    buttonText: 'Baixar PDF',
    buttonLink: '#',
    meta: getMeta(1, '10 min', 'resource'),
  },
  {
    id: 'suppliers',
    title: 'Guia de Fornecedores',
    description: 'Principais lojas e marcas com descontos e materiais de qualidade.',
    imageId: 'drywall-suppliers',
    lessons: 1,
    duration: '8 min',
    buttonText: 'Baixar Guia',
    buttonLink: '#',
    meta: getMeta(1, '8 min', 'resource'),
  },
  {
    id: 'community',
    title: 'Grupo VIP no WhatsApp',
    description: 'Entre no grupo de alunos pra trocar experiências e participar dos sorteios mensais.',
    imageId: 'drywall-community',
    lessons: 0,
    duration: '',
    buttonText: 'Entrar no Grupo',
    buttonLink: '#',
    meta: getMeta(0, '', 'community'),
  },
];

export const allModules = [...mainModules, ...bonusModules];
