const Card = (item) => {
  const { id, title, desc, image } = item;

  return (
    <div className="card">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <img src={image} alt="img" />
      <div className="desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
