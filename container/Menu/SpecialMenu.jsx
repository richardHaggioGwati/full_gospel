import Image from 'next/image';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="ministry">
    <div className="app__specialMenu-title">
      <SubHeading title="Jesus Christ that saves all." />
      <h1 className="headtext__cormorant">AREAS OF MINISTRY</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Evangelism</p>
        <div className="app__specialMenu_menu_items">
          {data.evangelism.map((evan, index) => (
            <MenuItem
              key={`${evan.title + index}`}
              title={evan.title}
              price={evan.verse}
              tags={evan.info}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <Image
          src={images.menu}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          alt="menu__img"
        />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">
          Rooted Praise and Worship
        </p>
        <div className="app__specialMenu_menu_items">
          {data.praise.map((praises, index) => (
            <MenuItem
              key={`${praises.title + index}`}
              title={praises.title}
              price={praises.verse}
              tags={praises.info}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        Learn More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
