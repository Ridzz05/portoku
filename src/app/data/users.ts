export interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
  role: string;
}

export const users: User[] = [
  {
    id: 1,
    name: 'Parri',
    username: '@parri',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=parri',
    role: 'developer'
  },
  {
    id: 2,
    name: 'Fachtur',
    username: '@fachtur',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=fachtur',
    role: 'designer'
  },
  {
    id: 3,
    name: 'Jaya',
    username: '@jaya',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=jaya',
    role: 'content'
  },
  {
    id: 4,
    name: 'Ferr',
    username: '@ferr',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=ferr',
    role: 'content'
  }
]; 