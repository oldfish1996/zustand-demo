import React from 'react';
import { create } from 'zustand';

type State = {
  numA: number;
  numB: number;
};

type Action = {
  incA: () => void;
  incB: () => void;
};

const useStore = create<State & Action>((set) => ({
  numA: 0,
  numB: 0,
  incA: () => set((s) => ({ numA: s.numA + 1 })),
  incB: () => set((s) => ({ numB: s.numB + 1 })),
}));

// full subscribe
function CompA() {
  const { numA } = useStore();
  console.log('Render CompA');
  return (
    <div>
      <h3>numA: {numA}</h3>
    </div>
  );
}

function CompB() {
  const { numB } = useStore();
  console.log('Render CompB');
  return (
    <div>
      <h3>numB: {numB}</h3>
    </div>
  );
}

export function FullSubscribe() {
  const { incA, incB } = useStore();
  return (
    <div>
      <CompA />
      <CompB />
      <button onClick={incA}>incA</button>
      <button onClick={incB}>incB</button>
    </div>
  );
}

// part subscribe
function CompAPart() {
  const numA = useStore((s) => s.numA);
  console.log('Render CompA-part');
  return (
    <div>
      <h3>numA: {numA}</h3>
    </div>
  );
}

function CompBPart() {
  const numB = useStore((s) => s.numB);
  console.log('Render CompB-part');
  return (
    <div>
      <h3>numB: {numB}</h3>
    </div>
  );
}

export function PartSubscribe() {
  const incA = useStore((s) => s.incA);
  const incB = useStore((s) => s.incB);
  return (
    <div>
      <CompAPart />
      <CompBPart />
      <button onClick={incA}>incA</button>
      <button onClick={incB}>incB</button>
    </div>
  );
}
