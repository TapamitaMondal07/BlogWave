import React from 'react';
import { TextInput } from 'flowbite-react';

function TestInput() {
  return (
    <div className="p-4">
      <TextInput
        type="text"
        placeholder="Search..."
        className="block w-full"
      />
    </div>
  );
}

export default TestInput;
