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
    name: 'Ki/Ri',
    username: '@parri',
    avatar: '/me/me.jpg',
    role: 'developer',
    instagram: 'ezpzlemonsquizy'
  }
]; 