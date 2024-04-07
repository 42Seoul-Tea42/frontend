import React from 'react';
import TagButton from './TagButton';
import { Tag } from '../../../redux/thunks/interface';

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0) + str.slice(1).toLowerCase();
};

const TagSelector: React.FC = () => {
  return (
    <>
      {Object.entries(Tag)
        .filter(([_, value]) => typeof value === 'number')
        .map(([key, dtoValue], index) => {
          const text = capitalizeFirstLetter(key.replace('_', ' / '));

          return (
            <TagButton
              key={index}
              text={text}
              gradientFrom={'blue'}
              gradientTo={'purple'}
              dtoValue={dtoValue as number}
            />
          );
        })}
    </>
  );
};

export default TagSelector;
