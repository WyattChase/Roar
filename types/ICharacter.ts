import ICharacterPool from "~/types/ICharacterPool";
import { Maybe } from "~/utils/Maybe";
import { BattleId } from "~/types/battle/IBattle";

export type CharacterId = string;

export interface ICharacter {
  id: CharacterId;
  userId: string;
  name: string;
  village: Village;
  rank: CharacterRank;
  offensiveNinjutsu: number;
  offensiveTaijutsu: number;
  offensiveGenjutsu: number;
  offensiveBukijutsu: number;
  defensiveNinjutsu: number;
  defensiveTaijutsu: number;
  defensiveGenjutsu: number;
  defensiveBukijutsu: number;
  speed: number;
  intelligence: number;
  strength: number;
  endurance: number;
  isInBattle: boolean;
  currentBattleId?: BattleId;
  characterPool: Maybe<ICharacterPool>;
}

export interface CreateCharacterCommand {
  userId: string;
  name: string;
  village: Village;
}

export type Village = "SAND" | "LEAF" | "STONE" | "CLOUD" | "MIST";

export type CharacterRank = "STUDENT" | "GENIN" | "CHUNIN" | "JONIN";
