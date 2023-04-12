import { Photo } from './photo';

export interface Member {
  id: number;
  userName: string;
  photoUrl: string;
  age: number;
  knownAs: string;
  created: string;
  introduction: string;
  lastActive: string;
  gender: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  photos: Photo[];
}
