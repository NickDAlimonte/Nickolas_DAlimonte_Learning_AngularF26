export interface Character {
  id: number;
  name: string;
  class: string;
  race: string;
  level?: number;
  levelCap?: boolean;
  gearQuality: string | number;
  game: string;

}
