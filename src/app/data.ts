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
    buttonLink: '/modulos/suppliers',
    meta: getMeta(1, '8 min', 'resource'),
  },
  {
    id: 'budget-model',
    title: 'Modelo de Orçamento pra Drywall',
    description: 'Um modelo pronto para você adaptar e enviar orçamentos profissionais para seus clientes.',
    imageId: 'drywall-budget-model',
    buttonText: 'Visualizar Modelo',
    buttonLink: '#',
    meta: getMeta(1, '5 min', 'resource'),
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
        },
        {
          id: 'suppliers-2',
          title: 'Ficha Técnica - Knauf Acessórios_0',
          url: 'https://drive.google.com/file/d/171iRgvSmTtignOOpvDOQxraRAmPooFk0/view?usp=sharing',
          embedUrl: 'https://drive.google.com/file/d/171iRgvSmTtignOOpvDOQxraRAmPooFk0/preview'
      },
      {
        id: 'suppliers-3',
        title: 'Ficha Técnica - Knauf Cimenticia 8mm',
        url: 'https://drive.google.com/file/d/1ENZRRAvxsBT-Nat7vapv8EfoCbs3zqOW/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1ENZRRAvxsBT-Nat7vapv8EfoCbs3zqOW/preview'
      },
      {
        id: 'suppliers-4',
        title: 'Ficha Técnica - Knauf Cleaneo Retangular Aleatório',
        url: 'https://drive.google.com/file/d/1T18gVCAtMJZvOpqkDcQ43kaSHTlE2jGo/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1T18gVCAtMJZvOpqkDcQ43kaSHTlE2jGo/preview'
      },
      {
        id: 'suppliers-5',
        title: 'Ficha Técnica - Knauf Cleaneo_0',
        url: 'https://drive.google.com/file/d/1AQ0v8K60N4dCFm6RfwXIAGotYkPOwHgT/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1AQ0v8K60N4dCFm6RfwXIAGotYkPOwHgT/preview'
      },
      {
        id: 'suppliers-6',
        title: 'Ficha Técnica - Knauf Danoline_1',
        url: 'https://drive.google.com/file/d/13lgLVLAn3N4rgxXoF-rlxIkwx26dMBgt/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/13lgLVLAn3N4rgxXoF-rlxIkwx26dMBgt/preview'
      },
      {
        id: 'suppliers-7',
        title: 'Ficha Técnica - Knauf Fita de Cantos',
        url: 'https://drive.google.com/file/d/1rUjDms0b5QIB05ySxMXDirtVYCxNXTsR/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1rUjDms0b5QIB05ySxMXDirtVYCxNXTsR/preview'
      },
      {
        id: 'suppliers-8',
        title: 'Ficha Técnica - Knauf Fita de Isolamento',
        url: 'https://drive.google.com/file/d/1mrC9sa50KK0K50kM2DB_d3JGq1Ty7UTL/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1mrC9sa50KK0K50kM2DB_d3JGq1Ty7UTL/preview'
      },
      {
        id: 'suppliers-9',
        title: 'Ficha Técnica - Knauf Fita de Junta',
        url: 'https://drive.google.com/file/d/1w3HF29bS1NXVAHPmo4A4MdZN5ZFBK0Ht/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1w3HF29bS1NXVAHPmo4A4MdZN5ZFBK0Ht/preview'
      },
      {
        id: 'suppliers-10',
        title: 'Ficha Técnica - Knauf Flexboard',
        url: 'https://drive.google.com/file/d/1x4DD69RlcRnmkQ3ejzWhDrTplsn3KZ2H/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1x4DD69RlcRnmkQ3ejzWhDrTplsn3KZ2H/preview'
      },
      {
        id: 'suppliers-11',
        title: 'Ficha Técnica - Knauf Hardboard',
        url: 'https://drive.google.com/file/d/1b39uxvDpjUUIruQGPADs9IZv3ftLtHt_/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1b39uxvDpjUUIruQGPADs9IZv3ftLtHt_/preview'
      },
      {
        id: 'suppliers-12',
        title: 'Ficha Técnica - Knauf Kleanboard - Final',
        url: 'https://drive.google.com/file/d/1p4ie_O0vZayIy_pBbUwzDTZcxh3ayKii/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1p4ie_O0vZayIy_pBbUwzDTZcxh3ayKii/preview'
      },
      {
        id: 'suppliers-13',
        title: 'Ficha Técnica - Knauf Massa Safeboard',
        url: 'https://drive.google.com/file/d/1rwziWMgG3PIh5yL92L6my2km4ynS2f7y/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1rwziWMgG3PIh5yL92L6my2km4ynS2f7y/preview'
      },
      {
        id: 'suppliers-14',
        title: 'Ficha Técnica - Knauf Parafusos',
        url: 'https://drive.google.com/file/d/1us-RUkQkadlKY0SZi5gkDOBnlNsepjNX/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1us-RUkQkadlKY0SZi5gkDOBnlNsepjNX/preview'
      },
      {
        id: 'suppliers-15',
        title: 'Ficha Técnica - Knauf Perfis',
        url: 'https://drive.google.com/file/d/1uLz_p3qaiO3qM48Hu7oks_IpDQb-hlvn/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1uLz_p3qaiO3qM48Hu7oks_IpDQb-hlvn/preview'
      },
      {
        id: 'suppliers-16',
        title: 'Ficha Técnica - Knauf Readyfix_0',
        url: 'https://drive.google.com/file/d/10HL_WOGU8wOt4SbM6aZrUnMLwUAdibOw/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/10HL_WOGU8wOt4SbM6aZrUnMLwUAdibOw/preview'
      },
      {
        id: 'suppliers-17',
        title: 'Ficha Técnica - Knauf RF',
        url: 'https://drive.google.com/file/d/1_7HtTqOWDTS6C52zM_8RI_2p9ZxJV0NF/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1_7HtTqOWDTS6C52zM_8RI_2p9ZxJV0NF/preview'
      },
      {
        id: 'suppliers-18',
        title: 'Ficha Técnica - Knauf RU',
        url: 'https://drive.google.com/file/d/1qrVOTbg3td-lBwc7wLaIleE_s0suQV3i/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1qrVOTbg3td-lBwc7wLaIleE_s0suQV3i/preview'
      },
      {
        id: 'suppliers-19',
        title: 'Ficha Técnica - Knauf Safeboard_1',
        url: 'https://drive.google.com/file/d/1uroXyFTCMRHixJcmsA9QEpAKSPOQcJIv/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1uroXyFTCMRHixJcmsA9QEpAKSPOQcJIv/preview'
      },
      {
        id: 'suppliers-20',
        title: 'Ficha Técnica - Knauf ST',
        url: 'https://drive.google.com/file/d/1AIa0hpXzBFTYJlYXxzwMxH3PjPmAlPD3/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1AIa0hpXzBFTYJlYXxzwMxH3PjPmAlPD3/preview'
      },
      {
        id: 'suppliers-21',
        title: 'Ficha Técnica - Tampa ABS',
        url: 'https://drive.google.com/file/d/1uJSESPXosVWSnUlzwUz-PjoCqrOu3Ejw/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1uJSESPXosVWSnUlzwUz-PjoCqrOu3Ejw/preview'
      },
      {
        id: 'suppliers-22',
        title: 'Ficha Técnica - Tampa Premium_1',
        url: 'https://drive.google.com/file/d/1-LCyTPA5klQY5g6dhoo5IJIUyXqVHuCV/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1-LCyTPA5klQY5g6dhoo5IJIUyXqVHuCV/preview'
      },
      {
        id: 'suppliers-23',
        title: 'Ficha-Técnica-Knauf-AMF-Forros-e-Tetos-Removiveis',
        url: 'https://drive.google.com/file/d/1gVyfoBXDq3oqOSA3yFpI96YnD94hOmkf/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1gVyfoBXDq3oqOSA3yFpI96YnD94hOmkf/preview'
      },
      {
        id: 'suppliers-24',
        title: 'Phonik Knauf 2018',
        url: 'https://drive.google.com/file/d/1NFzCoRRgv7sTZyVUoTCRnMLY77iIDxGl/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1NFzCoRRgv7sTZyVUoTCRnMLY77iIDxGl/preview'
      }
    ]
  };

  export const budgetSheetResource: PdfResource = {
    id: 'budget-model-1',
    title: 'Modelo de Orçamento pra Drywall',
    url: 'https://docs.google.com/spreadsheets/d/1LPg9AxxxKx0x4ZNc6bmnsnUBmqOD5XQc/edit?usp=sharing&ouid=113534566966728872736&rtpof=true&sd=true',
    embedUrl: 'https://docs.google.com/spreadsheets/d/1LPg9AxxxKx0x4ZNc6bmnsnUBmqOD5XQc/edit?usp=sharing&ouid=113534566966728872736&rtpof=true&sd=true'
  }
  

    