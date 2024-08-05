import "./Main.scss";

import { data } from "../../helper/data";
import Card from "./Card";

const Main = () => {
  console.log(data);
  return (
    <div>
      <div className="header">
        <h1>Popular Tour Places</h1>
      </div>
      <div className="card-container">
        {data.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Main;
