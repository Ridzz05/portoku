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
    avatar: '/me/me.svg',
    role: 'Junior Web Developer',
    instagram: 'ezpzlemonsquizy'
  }
]; 