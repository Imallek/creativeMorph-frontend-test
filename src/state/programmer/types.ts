export interface ProgrammerState {
  programmersArray: Programmer[];
  LikesArray: Likes[];
  selectedProgrammersArray: Programmer[];
  isSecondTabOpen: boolean;
  loader: boolean;
}

export interface Programmer {
  name: string;
  language: string;
  level: number;
}

export interface Likes {
  photoLink: string;
  LikedOrDisliked: boolean;
  breedName: string;
}

export enum AddProgrammerActionTypes {
  ADD_PROGRAMMER = 'ADD_PROGRAMMER',
}
export enum RemoveProgrammerActionTypes {
  REMOVE_PROGRAMMER = 'REMOVE_PROGRAMMER',
}
export enum AddLikesActionTypes {
  ADD_LIKE = 'ADD_LIKES',
}
export enum GetListProgrammerActionTypes {
  GET_PROGRAMMER_INIT = 'GET_PROGRAMMER_INIT',
  GET_PROGRAMMER = 'GET_PROGRAMMER',
}
export enum ChangeProgrammerLevelActionTypes {
  CHANGE_PROGRAMMER_LEVEL = 'CHANGE_PROGRAMMER_LEVEL',
}
