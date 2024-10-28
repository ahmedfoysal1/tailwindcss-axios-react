import { IoCheckmarkCircle } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="font-bold flex items-center"><IoCheckmarkCircle className="mr-2" />{feature}</p>
        </div>
    );
};

export default Feature;