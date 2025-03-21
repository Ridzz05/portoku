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
    name: 'Budi',
    username: '@budi',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=budi',
    role: 'designer'
  },
  {
    id: 3,
    name: 'Andi',
    username: '@andi',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=andi',
    role: 'content'
  },
  {
    id: 4,
    name: 'Dedi',
    username: '@dedi',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=dedi',
    role: 'marketing'
  },
  {
    id: 5,
    name: 'Rudi',
    username: '@rudi',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=rudi',
    role: 'support'
  }
]; 