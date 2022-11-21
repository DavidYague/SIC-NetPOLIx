import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Funcionalidades',
    group: true,
  },
  {
    title: 'Landing-Page',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Inicio',
        link: '/pages/landing-page/inicio',
      },
      // {
      //   title: 'Series',
      //   link: '/pages/landing-page/series',
      // },
      // {
      //   title: 'Peliculas',
      //   link: '/pages/landing-page/peliculas',
      // },
      // {
      //   title: 'Colecciones',
      //   link: '/pages/landing-page/colecciones',
      // },
    ],
  },
  {
    title: 'Gestionar',
    icon: 'grid-outline',
    children: [
      {
        title: 'Gestión Videos',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Crud usuarios',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Mostrar PQRs',
        link: '/pages/forms/inputs',
      },
    ],
  },
];
