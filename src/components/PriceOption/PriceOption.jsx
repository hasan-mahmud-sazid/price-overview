import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";

const PriceOption = ({ prOption }) => {
  const { name, price, features } = prOption;

  return (
    <div className="bg-linear-to-b from-blue-600 to-blue-900 rounded-3xl p-8 text-white flex flex-col shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 hover:-translate-y-3 group">
      {/* Plan Name & Badge */}
      <div className="text-center mb-6">
        <h4 className="text-2xl font-medium uppercase tracking-widest text-blue-200">
          {name}
        </h4>
      </div>

      {/* Price Section */}
      <div className="text-center mb-8">
        <span className="text-7xl font-black italic">${price}</span>
        <span className="text-xl font-light opacity-80"> / month</span>
      </div>

      {/* Features List */}
      <div className="grow space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 group/item">
            <AiFillCheckCircle className="text-green-400 text-xl mt-1 shrink-0 group-hover/item:scale-125 transition-transform" />
            <p className="text-lg font-light leading-relaxed">{feature}</p>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button className="bg-white text-blue-900 w-full py-4 font-black text-xl rounded-2xl shadow-lg hover:bg-yellow-400 hover:text-black hover:scale-105 active:scale-95 transition-all duration-300">
        GET STARTED
      </button>

      {/* Small decorative element */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <span className="text-4xl">💪</span>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  prOption: PropTypes.object.isRequired,
};

export default PriceOption;
