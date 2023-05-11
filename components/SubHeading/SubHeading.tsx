interface HeadingProp {
  title: string;
}

const SubHeading: React.FC<HeadingProp> = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
  </div>
);

export default SubHeading;
