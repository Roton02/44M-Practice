import Price from "./Price";

const PriceOption = () => {
    const prices = [
        {
          "name": "Basic",
          "price": 29.99,
          "features": [
            "Access to cardio machines",
            "Access to strength training equipment",
            "Access to group fitness classes",
            "Access to changing rooms",
            "Access to drinking water station"
          ]
        },
        {
          "name": "Standard",
          "price": 49.99,
          "features": [
            "All Basic plan features",
            "Access to personal training sessions",
            "Access to sauna",
            "Access to locker rooms",
            "Discounts on additional services",
            "Monthly fitness assessment"
          ]
        },
        {
          "name": "Premium",
          "price": 79.99,
          "features": [
            "All Standard plan features",
            "24/7 access",
            "WiFi access",
            "Towel service",
            "Access to exclusive premium classes",
            "Priority booking for classes and sessions",
            "Complimentary smoothie at the gym's cafe"
          ]
        }
      ]

    return (
        <div className="mt-10" >
            <h1 className="text-4xl text-center font-extrabold" >Best prices in the town </h1>
            <div className="grid md:grid-cols-3 gap-10">
            {
                prices.map(p => <Price key={p.name} option={p}></Price>)
            }
            </div>
        </div>
    );
};

export default PriceOption;