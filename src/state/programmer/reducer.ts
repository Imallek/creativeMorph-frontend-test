import {
  ProgrammerState,
  RemoveProgrammerActionTypes,
  Programmer,
  AddProgrammerActionTypes,
  ChangeProgrammerLevelActionTypes,
  GetListProgrammerActionTypes,
  AddLikesActionTypes,
} from './types';
import { element } from 'prop-types';

const defaultState: ProgrammerState = {
  programmersArray: [],
  LikesArray: [],
  selectedProgrammersArray: [],
  isSecondTabOpen: false,
  loader: false,
};

export default function programmer(state = defaultState, action: any) {
  switch (action.type) {
    case GetListProgrammerActionTypes.GET_PROGRAMMER_INIT:
      return {
        ...state,
        loader: action.payload.loader,
      };
    case GetListProgrammerActionTypes.GET_PROGRAMMER:
      return {
        ...state,
        loader: action.payload.loader,
        programmersArray: action.payload.programmersArray,
      };
    case AddProgrammerActionTypes.ADD_PROGRAMMER:
      return {
        ...state,
        loader: action.payload.loader,
        selectedProgrammersArray: [
          ...state.selectedProgrammersArray,
          action.payload.selectedProgrammersArray,
        ],
        isSecondTabOpen: action.payload.isSecondTabOpen,
      };
    case RemoveProgrammerActionTypes.REMOVE_PROGRAMMER:
      return {
        ...state,
        loader: action.payload.loader,
        selectedProgrammersArray: state.selectedProgrammersArray.filter(
          item => item.name != action.payload.name,
        ),
      };
    case ChangeProgrammerLevelActionTypes.CHANGE_PROGRAMMER_LEVEL:
      return {
        ...state,
        selectedProgrammersArray: [
          ...state.selectedProgrammersArray.map(element => {
            element.name === action.payload.name ? (element.level = action.payload.level) : '';
            return element;
          }),
        ],
      };
    case AddLikesActionTypes.ADD_LIKE:
      return {
        ...state,
        LikesArray: [
          ...state.LikesArray,
          {
            ...action.payload,
          },
        ],
      };
    default:
      return {
        ...state,
      };
  }
}
