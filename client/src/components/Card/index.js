import './styles.css';

const Card = ({ data }) => {
  return (
    <div className="cards">
      {data.map(d => (
        <div
          className="card"
          key={d.data.key}
          style={{ backgroundImage: d.data.image }}
        >
          <div className="card-content">
            <h1 className="card-title">{d.data.name}</h1>
            <h2 className="card-subtitle">{d.data.title}</h2>
            <h3 className="card-class">{d.data.tags[0]}</h3>
            <p className="card-body">{d.data.lore}</p>
            <div className="stats">
              <div className="one-third">
                <div className="stat-value">{d.data.info.attack}</div>
                <div className="stat-name">Attack</div>
              </div>
              <div className="one-third">
                <div className="stat-value">{d.data.info.defense}</div>
                <div className="stat-name">Defense</div>
              </div>
              <div className="one-third no-border">
                <div className="stat-value">{d.data.info.magic}</div>
                <div className="stat-name">Magic</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
