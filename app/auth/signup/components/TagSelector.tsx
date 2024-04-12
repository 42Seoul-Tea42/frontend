import React, { useEffect } from 'react';
import TagButton from './TagButton';
import { Interests } from '../../../redux/interface/submodules/utilInterface';

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0) + str.slice(1).toLowerCase();
};

const TagSelector: React.FC = () => {
  const userInterests: Interests = {
    SPORTS: 1 << 0,
    TRAVEL: 1 << 1,
    FOOD: 1 << 2,
    GAME: 1 << 3,
    BOOK: 1 << 4,
    IT_SCIENCE: 1 << 5,
    VIDEO: 1 << 6,
    LANGUAGE: 1 << 7,
    FASHION: 1 << 8,
    PETS: 1 << 9,
    ART: 1 << 10,
    SMOKE: 1 << 11,
    DRINK: 1 << 12
  };

  const keys = Object.keys(userInterests);
  const texts = keys.map((key) => capitalizeFirstLetter(key.replace('_', ' / ')));

  return (
    <>
      {texts.map((text, index) => (
        <TagButton
          onClick={() => {}}
          key={index}
          text={text}
        />
      ))}
    </>
  );
};

export default TagSelector;
