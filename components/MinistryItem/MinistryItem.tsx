import './MinistryItem.css';

interface MinistryItemProp {
  prop: {
    title: string;
    verse: string;
    information: string;
  };
}

const MinistryItem: React.FC<MinistryItemProp> = ({
  prop: { title, verse, information },
}) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>
          {title}
        </p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{verse}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>
        {information}
      </p>
    </div>
  </div>
);

export default MinistryItem;
