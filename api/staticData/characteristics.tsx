import { Link as CLink } from '@chakra-ui/react';
import { gaLogEvent } from '@utils/googleAnalytics';
import { AiFillApple, AiOutlineHome, AiOutlineLaptop } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { CgGames } from 'react-icons/cg';
import { GiFriedFish } from 'react-icons/gi';
import { MdChildCare } from 'react-icons/md';
import { RiBrushLine } from 'react-icons/ri';

export const characteristics = [
  {
    icon: AiOutlineLaptop,
    desc: 'works full-time as a software engineer',
  },
  { icon: AiOutlineHome, desc: 'work from home' },
  {
    icon: RiBrushLine,
    desc: (
      <>
        UI designer {'-> '}
        <CLink
          href="https://www.behance.net/gifaeriyanto"
          isExternal
          color="highlight"
          onClick={() => {
            gaLogEvent('See my behance', 'Curious about me');
          }}
        >
          behance
        </CLink>
      </>
    ),
  },
  {
    icon: BiPencil,
    desc: (
      <>
        writer {'-> '}
        <CLink
          href="https://medium.com/@gifa.eriyanto"
          isExternal
          color="highlight"
          onClick={() => {
            gaLogEvent('See my medium', 'Curious about me');
          }}
        >
          medium
        </CLink>
      </>
    ),
  },
  { icon: MdChildCare, desc: 'have 2 children' },
  {
    icon: CgGames,
    desc: (
      <>
        dota 2 player {'-> '}
        <CLink
          href="https://www.dotabuff.com/players/156239585"
          isExternal
          color="highlight"
          onClick={() => {
            gaLogEvent('See my dotabuff', 'Curious about me');
          }}
        >
          dotabuff
        </CLink>
      </>
    ),
  },
  { icon: AiFillApple, desc: 'apple fanboy' },
  { icon: GiFriedFish, desc: 'breeding Betta Fish' },
];
