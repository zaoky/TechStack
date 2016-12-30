import { actionCreator } from './actionCreator';

export const selectLibrary = actionCreator<{libraryId: number}>("select_library");