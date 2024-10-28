import Feature from "../Feature/Feature";

const Priceoption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="flex flex-col bg-sky-500 text-white rounded-md p-4">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mo</span>
            </h2>
            <h4 className="text-3xl text-center my-4">{name}</h4>
            <div className="pl-6 flex-grow mb-2">
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className="p-4 rounded-lg bg-white w-full font-bold text-black hover:bg-green-400">Buy Now</button>
        </div>
    );
};

export default Priceoption;