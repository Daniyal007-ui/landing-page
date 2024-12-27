"use client";


import Image from "next/image";
import { OrderForm } from "./order";


export default function Hero() {
 {/* const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    color: "",
    quantity: "",
    size: "M",
  });

  // Handle form data changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    console.log("Form submitted:", formData);

   
    alert("Form Submitted Successfully!");
  };*/}

  return (
    <div className="h-auto w-full bg-gray-100 flex flex-col sm:flex-row  justify-around items-center py-10 px-4 sm:px-6 md:px-12">
      {/* Image Section */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-1/3 mb-6 sm:mb-0">
        <div className="md:w-full sm:w-1/2 mb-4">
          <Image src={"/t-shirt.jpg"} alt="t-shirt" width={400} height={400} className="h-auto w-full object-cover" />
        </div>
        <div className="flex space-x-3 mb-2 md:ml-5 sm:mb-0 sm:ml-0">
          <div><Image src={"/pic1.jpg"} alt="pic1" height={100} width={100} className="rounded-md" /></div>
          <div><Image src={"/pic2.jpg"} alt="pic2" height={100} width={100} className="rounded-md" /></div>
          <div><Image src={"/pic3.jpg"} alt="pic3" height={100} width={100} className="rounded-md" /></div>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="w-full sm:w-1/3 text-center sm:text-left sm:ml-6 mb-6 sm:mb-0">
        <h1 className="text-black font-bold text-2xl sm:text-3xl">T-SHIRTS</h1>
        <p className="text-xl text-gray-400 mt-2">Men T-Shirts</p>
        <h2 className="text-black font-bold text-xl sm:text-2xl mt-4">PRICE</h2>
        <div className="flex justify-center sm:justify-start gap-2 items-center">
        <p className="text-lg font-bold text-green-600">$10.00</p>
        <p className="text-sm line-through text-gray-400">$14.00</p>
        </div>

        <h2 className="text-black font-bold text-xl sm:text-2xl mt-4">SIZE:</h2>
        <div className="flex justify-center sm:justify-start space-x-2 text-gray-400 mt-2">
          <div className="border border-green-500 h-8 w-8 text-center leading-8">S</div>
          <div className="border border-gray-500 h-8 w-8 text-center leading-8">M</div>
          <div className="border border-gray-500 h-8 w-8 text-center leading-8">L</div>
          <div className="border border-gray-500 h-8 w-8 text-center leading-8">XL</div>
          <div className="border border-gray-500 h-8 w-9 text-center leading-8 text-sm">2XL</div>
        </div>

        <div className="mt-3">
          <h1 className="text-2xl">Color: <span className="text-2xl font-bold text-gray-600">WHITE</span></h1>
          <div className="flex  mt-2 justify-center sm:justify-start items-center ">
            <div className="h-[25px] ml-2 w-[30px] border border-1px border-black bg-gray-300"></div>
            <div className="h-[25px] ml-2 w-[30px] bg-red-600"></div>
            <div className="h-[25px] ml-2 w-[30px] bg-blue-800"></div>
            <div className="h-[25px] ml-2 w-[30px] bg-yellow-500"></div>
            <div className="h-[25px] ml-2 w-[30px] bg-black"></div>
          </div>
        </div>

        <h2 className="text-gray-600 font-bold mt-4 text-xl">DESCRIPTION:</h2>
        <p className="text-gray-400 mt-2">
          Online Shopping is a form of electronic commerce that allows consumers to directly buy goods and services...
        </p>

        <div className="w-auto mt-2 border border-1px border-gray-300"></div>
        <p className="mt-2 text-gray-400">5 interest-free payments of $19.39 CAD with Kalena.</p>
        <p>⭐⭐⭐⭐⭐ | 120 reviews.</p>
      </div>

      {/* Order Form Section */}
     <OrderForm/>
    </div>
  );
}
