import { create } from 'zustand';

export interface Partition {
  title?: string;
  desctiption?: string;
}

interface PartialHeaderStore extends Partition {
  setState: (state: Partition) => void;
}

export const usePartialHeaderStore = create<PartialHeaderStore>()(set => ({
  title: '',
  desctiption: '',
  setState: state => set(state),
}));
