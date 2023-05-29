import { FaShippingFast, FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
const Features = () => {
  return (
    <div className="my-24 container mx-auto md:flex justify-center py-6 bg-gray-100 md:rounded-full" data-aos="fade-up">
      <div className="flex items-center">
        <div>
          <FaShippingFast className="text-7xl text-orange-500 px-3"></FaShippingFast>
        </div>
        <div>
          <h4 className="text-xl font-bold">Free Shipping Worldwide</h4>
          <p>On order over $150</p>
        </div>
        <div className="divider divider-horizontal"></div>
      </div>
      <div className="flex items-center">
        <div>
          <FaHandHoldingUsd className="text-7xl text-orange-500 px-3"></FaHandHoldingUsd>
        </div>
        <div>
          <h4 className="text-xl font-bold">Cash On Delivery</h4>
          <p>100% money back guarantee</p>
        </div>
        <div className="divider divider-horizontal"></div>
      </div>
      <div className="flex items-center">
        <div>
          <MdOutlineSupportAgent className="text-7xl text-orange-500 px-3"></MdOutlineSupportAgent>
        </div>
        <div>
          <h4 className="text-xl font-bold">24/7 Customer Service</h4>
          <p>Call us 24/7 at 123-456-789</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
