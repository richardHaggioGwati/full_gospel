import { Dispatch, SetStateAction, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import Link from 'next/link';
import styles from './DropDown.module.css';

const dropDown = {
  '/ministry/evangelism': {
    name: 'Evangelism',
  },
  '/ministry/help': {
    name: 'Ministry of Helps',
  },
  '/ministry/band': {
    name: 'Praise And Worship',
  },
  '/ministry/school': {
    name: 'Shalom Sunday School',
  },
  '/ministry/women': {
    name: 'Women Of Destiny',
  },
  '/ministry/youth': {
    name: 'Yahweh Youth',
  },
};

interface DropDownOptions {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DropDownItem: React.FC<DropDownOptions> = ({ open, setOpen }) => {
  return (
    <ul className={styles.app__drop_down}>
      {Object.entries(dropDown).map(([path, { name }]) => {
        return (
          <li
            key={path}
            onClick={() => setOpen(!open)}
            className="p__opensans"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            aria-hidden="true"
          >
            <Link href={path}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

const DropDown: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="custom__button"
      >
        Areas Of Ministry <FaCaretDown />
      </button>
      {open ? <DropDownItem open={open} setOpen={setOpen} /> : ''}
    </>
  );
};

export default DropDown;
