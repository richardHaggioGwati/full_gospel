import './Loader.css';

const Loader: React.FC = () => {
  return (
    <div className="app__preloader__icn app__center">
      <div className="app__preloader__cut">
        <div className="app__preloader__donut" />
      </div>
    </div>
  );
};

export default Loader;
