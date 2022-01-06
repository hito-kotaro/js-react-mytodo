import { atom } from 'recoil';

export const todoListState = atom({ key: 'TODO_LIST_STATE', default: [] });
// export const isFirst = atom({ key: 'IS_FIRST', default: true });

export default todoListState;
