import image1 from "../img/send.png";
import image2 from "../img/brain.png";
import image3 from "../img/sun.png";

const Carddata = () => {
  const array = [
    {
      img: image1,
      title: "Future Concept",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, magnam!",
    },

    {
      img: image2,
      title: "The Big Ideas",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, magnam!",
    },
    {
      img: image3,
      title: "Creative Solution",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, magnam!",
    },
  ];
  return (
    <div className="main">
      {array.map(({ img, title, description }) => {
        return (
          <div className="card" key={title}>
            <img src={img} alt="mypic" className="card-img" />
            <div className="card-info">
              <span className="card-title">{title}</span>
              <br /> <br />
              <span className="card-description">{description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carddata;
