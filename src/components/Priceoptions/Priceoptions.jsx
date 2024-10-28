import Priceoption from "../Priceoption/Priceoption";

const Priceoptions = () => {
    const pricingOptions = [
        {
          id: 1,
          name: "Basic Membership",
          duration: "1 Month",
          price: 40,
          features: [
            "Access to gym equipment",
            "Locker included",
            "1 personal training session"
          ]
        },
        {
          id: 2,
          name: "Premium Membership",
          duration: "6 Months",
          price: 110,
          features: [
            "Access to gym equipment",
            "Locker included",
            "3 personal training sessions",
            "Access to yoga classes"
          ]
        },
        {
          id: 3,
          name: "Platinum Membership",
          duration: "12 Months",
          price: 200,
          features: [
            "Access to gym equipment",
            "Locker included",
            "5 personal training sessions",
            "Access to yoga and Zumba classes",
            "Nutrition consultation"
          ]
        }
      ];
      
    return (
        <div className="m-6">
            <h2 className="text-5xl mb-2">Best Prices in the Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                pricingOptions.map(price => <Priceoption key={price.id} option={price}></Priceoption>)
            }
            </div>
        </div>
    );
};

export default Priceoptions;