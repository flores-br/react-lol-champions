import './styles.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Card = () => {
  const imgUrl =
    'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rammus_0.jpg';

  const [data, setData] = useState([]);

  // load all data on first load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json'
        );
        setData(Object.keys(res['data']['data']));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cards">
      <div className="card" style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className="card-content">
          <h1 className="card-title">Rammus</h1>
          <h2 className="card-subtitle">the Armordillo</h2>
          <h3 className="card-class">Champion Class</h3>
          <p className="card-body">
            Idolized by many, dismissed by some, mystifying to all, the curious
            being Rammus is an enigma. Protected by a spiked shell, he inspires
            increasingly disparate theories on his origin wherever he goes—from
            demigod, to sacred oracle, to a mere beast transformed by magic.
            Whatever the truth may be, Rammus keeps his own counsel and stops
            for no one as he roams the Shuriman desert.
          </p>
          <div className="stats">
            <div className="one-third">
              <div className="stat-value">8</div>
              <div className="stat-name">Attack</div>
            </div>
            <div className="one-third">
              <div className="stat-value">4</div>
              <div className="stat-name">Defense</div>
            </div>
            <div className="one-third no-border">
              <div className="stat-value">3</div>
              <div className="stat-name">Magic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
