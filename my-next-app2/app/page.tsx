import React from 'react';

interface Props {
  name: string;
}

const ExampleComponent: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a simple example component.</p>
    </div>
  );
};

export default ExampleComponent;