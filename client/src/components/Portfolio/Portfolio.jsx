import { useEffect, useState } from "react";

// import InstagramEmbed from "react-instagram-embed";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "dance",
      title: "Dancing Reel",
    },
    {
      id: "teach",
      title: "Teaching Reel",
    },
    {
      id: "coaching",
      title: "Coaching",
    },
    {
      id: "fitness",
      title: "Fitness",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "dance":
        setData(data);
        break;
      case "teach":
        setData();
        break;
      case "coaching":
        setData();
        break;
      case "fitness":
        setData();
        break;
      default:
        setData();
    }
  }, [selected, data]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <img src="" alt="" />
        <h3>Reels</h3>
        {/* {data.map((d) => (
          <div className="item" >
            <img src={d.img} alt="" />
            
          </div>
        ))} */}
      </div>
    </div>
  );
}
