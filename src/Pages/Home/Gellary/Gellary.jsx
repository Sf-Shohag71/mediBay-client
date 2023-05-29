import { MdToys } from "react-icons/md";
const Gellary = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-16">
        <h3 className="text-5xl text-center font-bold mb-8" data-aos="fade-right">Latest Toys</h3>
        <div className="divider text-6xl text-orange-500"><MdToys></MdToys></div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/3 flex-wrap">
          <div className="w-full p-1 md:p-2"  data-aos="zoom-in-down">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/9wMxfGJ/B6-Whisper-Ultra-Clean-XL-Wings-15-pads.jpg"
            />
          </div>
        </div>
        <div className="flex w-1/3 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/Fzdfnk2/Veet-Easy-Gel-Bikini-Underarm-Wax-Strips-Sensitive-Skin.jpg"
            />
          </div>
        </div>
        <div className="flex w-1/3 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/dk91sw5/ACCU-CHEK-Active.png"
            />
          </div>
        </div>
        <div className="flex w-1/3 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/FzHrxc6/Rossmax-Thermometer.jpg"
            />
          </div>
        </div>
        <div className="flex w-1/3 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/1m0qJ0J/Yuwell-Electronic-BP-Monitor-YE660-D.jpg"
            />
          </div>
        </div>
        <div className="flex w-1/3 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/BtrSNSh/Salost-Tablet-150mg.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gellary;
