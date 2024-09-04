import "./InfoContainer.css";
import imageTransform from "../../assets/desktop/image-transform.jpg";
import imageStandOut from "../../assets/desktop/image-stand-out.jpg";
const InfoContainer = () => {
  return (
    <>
      <section className="info-container">
        <div className="container">
          <div className="text-container">
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <h3 className="learn-1">Learn More</h3>
          </div>
          <div className="image-container">
            <img src={imageTransform} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="image-container">
            <img src={imageStandOut} alt="" />
          </div>
          <div className="text-container">
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <h3 className="learn-2">Learn More</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoContainer;
