export interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
  role: string;
  instagram: string;
}

export const users: User[] = [
  {
    id: 1,
    name: 'Parri',
    username: '@parri',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=parri',
    role: 'developer',
    instagram: 'ezpzlemonsquizy'
  },
  {
    id: 2,
    name: 'Fachtur',
    username: '@fachtur',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=fachtur',
    role: 'designer',
    instagram: 'fachtur.design'
  },
  {
    id: 3,
    name: 'Jaya',
    username: '@jaya',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=jaya',
    role: 'content',
    instagram: 'jaya.content'
  },
  {
    id: 4,
    name: 'Ferr',
    username: '@ferr',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=ferr',
    role: 'marketing',
    instagram: 'ferr.mktg'
  }
]; 