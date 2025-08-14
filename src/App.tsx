import React from 'react';
import { Example } from './example/base-use';
import { FullSubscribe, PartSubscribe } from './example/part-subscribe';

function App() {
  // return <Example />;
  return (
    <div>
      {/* <FullSubscribe /> */}
      <PartSubscribe />
    </div>
  );
}

export default <App />;
