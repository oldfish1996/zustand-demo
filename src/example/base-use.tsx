import React from 'react';
import { create } from 'zustand';

interface State {
  name: string;
  age: number;
}

interface Action {
  updateName: (name: State['name']) => void;
  updateAge: (age: State['age']) => void;
}

const useStore = create<State & Action>((set) => ({
  name: 'chen',
  age: 0,
  updateAge: (age) => set(() => ({ age })),
  updateName: (name) => set(() => ({ name })),
}));

export default function Example() {
  const { name, updateName, age, updateAge } = useStore();

  return (
    <main>
      <label>
        name: <input onChange={(e) => updateName(e.target.value)}></input>
      </label>
      <br />
      <label>
        age: <input onChange={(e) => updateAge(Number(e.target.value))}></input>
      </label>
      <p>
        My name is <strong>{name}</strong>, I am <strong>{age}</strong> years
        old.
      </p>
    </main>
  );
}
