import Slider from "react-slick";
import BannerStyles from "./BannerStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../assets/banner1.jpeg";
import Banner2 from "../../assets/banner2.jpg";

const RotatingBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <BannerStyles.BannerContainer>
      <BannerStyles.BannerTitle>Nome da sua Rifa</BannerStyles.BannerTitle>
      <Slider {...settings}>
        <div>
          <BannerStyles.BannerImage src={Banner1} alt="Banner 1" />
        </div>
        <div>
          <BannerStyles.BannerImage src={Banner2} alt="Banner 2" />
        </div>
      </Slider>
    </BannerStyles.BannerContainer>
  );
};

export default RotatingBanner;
