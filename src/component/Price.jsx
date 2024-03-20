import PropTypes from 'prop-types';
import { FaCheck } from "react-icons/fa";
const Price = ({option}) => {
    // console.log(option);
    const {name, price, features} = option;
    return (
        <div className="my-10  flex flex-col  p-10 text-black text-center bg-pink-500 rounded-2xl">
            <div className=' flex-grow'>
            <h1 className="font-bold"> 
            <span className="text-5xl"> {price} </span>
             <span className="text-3xl">  /mon</span> </h1>
            <h1 className="text-3xl  text-white font-extrabold "> {name} </h1>
            
            <ul className="text-start  pl-10 p-4 ">
                {
                    features.map((f, idx) =>   <li key={idx} className="flex gap-2 items-center"> <FaCheck></FaCheck>  {f} </li>)
                }
            </ul>
            </div>
           <button className="btn w-full  py-2 hover:bg-pink-800 
             text-center text-2xl"> Buy Now  </button>
        </div>
    );
};

Price.propTypes ={
    option: PropTypes.object.isRequired
}
export default Price;