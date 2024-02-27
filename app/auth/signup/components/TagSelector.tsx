import React from 'react';
import TagButton from './TagButton';
import { TagType } from '../../../store/slices/signupSlice';

const TagSelector: React.FC = () => {
  return (
    <>
      {Object.keys(TagType).map((key, index) => {
        const text = key;
        const gradientFrom = 'purple';
        const gradientTo = 'blue';
        const dtoValue = TagType[key as keyof typeof TagType];

        return (
          <TagButton
            key={index}
            text={text}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
            dtoValue={dtoValue}
          />
        );
      })}
    </>
  );
};

export default TagSelector;
