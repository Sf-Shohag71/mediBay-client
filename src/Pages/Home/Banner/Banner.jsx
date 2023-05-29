import { FaShoppingCart } from "react-icons/fa";
import img1 from "../../../assets/images/banner/banner-1.jpg";
import img2 from "../../../assets/images/banner/banner-2.jpg";
import img3 from "../../../assets/images/banner/banner-3.jpg";
import img4 from "../../../assets/images/banner/banner-4.jpg";
const Banner = () => {
  return (
    <div className="container mx-auto mt-10 z-0">
      <div className="carousel w-full h-[700px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-6 md:pl-32 md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                We care Beyond what your doctor’s have Prescribed
              </h2>
              <p>
                Wenaim to be your trusted partner in wellness. Together, we can
                go beyond what your doctor has prescribed and explore new
                possibilities for improved health, vitality, and quality of
                life.
              </p>
              <div>
                <button className="btn btn-warning text-white mr-5">
                  <FaShoppingCart className="text-xl"></FaShoppingCart> &nbsp;
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-32 w-1/2">
              <h2 className="text-6xl font-bold leading-tight">
                Bringing Care to Your Doorstep: Shop Smart, Live Healthy
              </h2>
              <p>
                We strive to be your trusted partner on your wellness journey,
                delivering essential care right to your doorstep while
                empowering you to make intelligent choices for a healthier
                future.
              </p>
              <div>
                <button className="btn btn-warning text-white mr-5">
                  <FaShoppingCart className="text-xl"></FaShoppingCart> &nbsp;
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-32 w-1/2">
              <h2 className="text-6xl font-bold leading-tight">
                Medical Supplies Made Simple: Your Path to Wellness Starts Here!
              </h2>
              <p>
                At our medical e-commerce platform, we understand that having
                convenient access to the right supplies is vital for maintaining
                health, managing conditions, and supporting overall well-being.
              </p>
              <div>
                <button className="btn btn-warning text-white mr-5">
                  <FaShoppingCart className="text-xl"></FaShoppingCart> &nbsp;
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-32 w-1/2">
              <h2 className="text-6xl font-bold leading-tight">
                Bringing Care to Your Doorstep: Shop Smart, Live Healthy
              </h2>
              <p>
                We strive to be your trusted partner on your wellness journey,
                delivering essential care right to your doorstep while
                empowering you to make intelligent choices for a healthier
                future
              </p>
              <div>
                <button className="btn btn-warning text-white mr-5">
                  <FaShoppingCart className="text-xl"></FaShoppingCart> &nbsp;
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
