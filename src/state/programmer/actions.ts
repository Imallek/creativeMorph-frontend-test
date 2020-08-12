import {
  AddProgrammerActionTypes,
  Programmer,
  ChangeProgrammerLevelActionTypes,
  ProgrammerState,
  RemoveProgrammerActionTypes,
  GetListProgrammerActionTypes,
} from './types';
import { Dispatch } from 'redux';
import {
  getProgrammersList,
  filterProgrammerArray,
  changeLevelOfProgrammer,
} from './programmersArray';

const GetProgrammers = () => {
  return (dispatch: Dispatch) => {
    const payload = {
      loader: true,
    };
    dispatch(requestInit(payload));
    const programmersArray = getProgrammersList();
    const successPayload = {
      loader: false,
      programmersArray,
    };
    dispatch(requestSuccess(successPayload));
  };
  function requestInit(payload: any) {
    return { type: GetListProgrammerActionTypes.GET_PROGRAMMER_INIT, payload };
  }
  function requestSuccess(payload: any) {
    return { type: GetListProgrammerActionTypes.GET_PROGRAMMER, payload };
  }
};
const RemoveProgrammer = (name: string) => {
  return (dispatch: Dispatch) => {
    const payload = {
      loader: true,
    };
    dispatch(requestInit(payload));

    dispatch(requestSuccess({ name, loader: false }));
  };
  function requestInit(payload: any) {
    return { type: GetListProgrammerActionTypes.GET_PROGRAMMER_INIT, payload };
  }
  function requestSuccess(payload: any) {
    return { type: RemoveProgrammerActionTypes.REMOVE_PROGRAMMER, payload };
  }
};
const AddProgrammer = (name: string) => {
  return (dispatch: Dispatch) => {
    const payload = {
      loader: true,
    };
    dispatch(requestInit(payload));
    const filteredArray = filterProgrammerArray(name);
    const successPayload = {
      loader: false,
      selectedProgrammersArray: { ...filteredArray[0] },
      isSecondTabOpen: true,
    };
    dispatch(requestSuccess(successPayload));
  };
  function requestInit(payload: any) {
    return { type: GetListProgrammerActionTypes.GET_PROGRAMMER_INIT, payload };
  }
  function requestSuccess(payload: any) {
    return { type: AddProgrammerActionTypes.ADD_PROGRAMMER, payload };
  }
};
const ChangeLevelValue = (payload: any) => {
  return (dispatch: Dispatch) => {
    const returnedObject = changeLevelOfProgrammer(payload);
    dispatch(requestSuccess(returnedObject));
  };
  function requestSuccess(payload: any) {
    return { type: ChangeProgrammerLevelActionTypes.CHANGE_PROGRAMMER_LEVEL, payload };
  }
};
export default { GetProgrammers, AddProgrammer, RemoveProgrammer, ChangeLevelValue };
