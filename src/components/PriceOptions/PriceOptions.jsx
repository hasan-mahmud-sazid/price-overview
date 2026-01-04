import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Starter",
      price: 30,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 Fitness assessment per month",
        "Open gym hours only",
        "Free water refills",
      ],
    },
    {
      id: 2,
      name: "Pro",
      price: 60,
      features: [
        "Everything in Starter",
        "Unlimited group classes",
        "Access to sauna & steam room",
        "Personalized workout plan",
        "10% discount on supplements",
        "Access during peak hours",
      ],
    },
    {
      id: 3,
      name: "Elite",
      price: 100,
      features: [
        "Everything in Pro",
        "4 Personal training sessions",
        "Nutritional meal planning",
        "2 Guest passes per month",
        "Complimentary towel service",
        "VIP locker & shower access",
        "Free protein shake after workout",
      ],
    },
  ];

  return (
    <div className="m-8">
      <h2 className="text-5xl text-center font-bold mb-12 text-blue-900">
        Best Prices In the town
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} prOption={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
