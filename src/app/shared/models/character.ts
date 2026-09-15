export interface Character {
  name: string;
  class: string;
  race: string;
  level?: number;
  levelCap?: boolean;
  gearQuality: string | number;
  game: string;

}
