import React from 'react';
import { gdTheme } from '../../library/theme';
import { IMode } from '../../types/layoutTypes';
import SParagraph from '../atomic/typography/SParagraph';

const Texts: React.FC<IMode> = ({ Mode }) => (
  <>
    <SParagraph Mode={Mode}>
      Welcome to the
      {Mode}
      side! (Connected to browser however custom switcher in the app possible)
    </SParagraph>
    <SParagraph Mode={Mode} Color={gdTheme.colors.textSecondary[Mode].main}>
      Same component different Color base on props
    </SParagraph>
    <SParagraph
      Mode={Mode}
      Color={gdTheme.colors.textSecondary[Mode].main}
      as="h2"
    >
      Same component diff html tag due to &quot;as&quot; prop - cleaner way is
      new component -&gt; can inheritate styles (see box components)
    </SParagraph>
  </>
);

export default Texts;
