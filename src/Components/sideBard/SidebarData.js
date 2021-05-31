import React from 'react';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Programacion rutas',
    path: '/',
    icon: <IoIcons.IoIosMap />,
    cName: 'nav-text'
  },
  {
    title: 'Gestion de operaciones',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Perfiles',
    path: '/products',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Roles',
    path: '/team',
    icon: <IoIcons.IoIosGitNetwork />,
    cName: 'nav-text'
  },
  {
    title: 'Usuario',
    path: '/messages',
    icon: <IoIcons.IoMdContact />,
    cName: 'nav-text'
  },
  {
    title: 'Reportes',
    path: '/support',
    icon: <IoIcons.IoIosDocument />,
    cName: 'nav-text'
  }
];
