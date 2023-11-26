import image from "../../assets/Frame 50.png"
import { IoIosHeartEmpty } from "react-icons/io";
import { CiStar, CiRuler, CiShoppingCart } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiAward, BiDockTop } from "react-icons/bi";
import { CgGift } from "react-icons/cg";
import { FaRupeeSign } from "react-icons/fa";
import colorImg from "../../assets/color4.png"
import colorImg1 from "../../assets/color5.png"
import colorImg2 from "../../assets/color6.png"
const Banner = () => {
    return (
        <div className="md:flex  card-side bg-base-100 md:px-10">
            <div className="space-y-5 mt-10 h-full hidden md:block">
                <img className="w-32" src={image} alt="Movie" />
                <img className="w-32" src={image} alt="Movie" />
                <img className="w-32" src={image} alt="Movie" />
                <img className="w-32" src={image} alt="Movie" />
                <img className="w-32" src={image} alt="Movie" />
            </div>
            <img className="md:ml-8 p-4 md:h-[570px] w-full" src={image} alt="frame" />
            <div className="w-full md:px-16 px-6">
                <div className="flex justify-between mb-10">
                    <h2 className="card-title text-3xl text-[#733D00] font-bold">Kurti</h2>
                    <p className="text-orange-100 text-3xl font-bold"><IoIosHeartEmpty /></p>
                </div>
                <div className="text-start">
                    <p className="text-[#703C01] font-bold my-5 w-full">Chikankari</p>
                    <p className="my-3 text-justify">emarkably renowned for its extraordinary rustic charm,Madhubani painting is widley praticed thoughtout Bihar's Mithila region. Women from variation...</p>
                    <button className="cursor-pointer underline mb-3">Read more</button>
                    <div className="flex items-center mb-5">
                        <div className="flex items-center bg-yellow-50 px-2 rounded">
                            <span><CiStar className="text-xl" /></span>
                            <p>5/5</p>
                        </div>
                        <p className="ml-1">124 ratings</p>
                    </div>
                    <hr />

                    <div className="my-2">
                        <div className="flex">
                            <p className="flex items-center"><FaRupeeSign /> <span>6000*</span></p>
                            <p className="flex items-center text-xs ml-4 mt-2"><FaRupeeSign /> <span className="line-through">9000*</span>25% off</p>
                        </div>
                        <p className="text-orange-300 ">Inclusive off all taxes</p>
                    </div>
                    <hr />
                    <div className="mb-6">
                        <h2>Select color</h2>
                        <div className="flex justify-between">
                            <div className="flex">
                                <img src={colorImg} alt="" />
                                <img src={colorImg1} alt="" />
                                <img src={colorImg2} alt="" />
                            </div>
                            <button className="underline">View simillar</button>
                        </div>

                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <h2>Select size</h2>
                            <button className="underline flex items-center"> <CiRuler className="text-2xl" /> Select Guide</button>
                        </div>
                        <div className="md:flex justify-between">
                            <div className="flex gap-2">
                                <button className="border px-2 py-1 rounded">32</button>
                                <button className="border px-2 py-1 rounded">32</button>
                                <button className="border px-2 py-1 rounded">34</button>
                                <button className="border px-2 py-1 rounded">36</button>
                                <button className="border px-2 py-1 rounded">38</button>
                                <button className="border px-2 py-1 rounded">40</button>
                                <button className="border px-2 py-1 rounded">+</button>
                            </div>
                        </div>

                    </div>

                    <div className="flex gap-1 my-5 w-full">
                        <button className="btn btn-outline lg:flex md:w-1/2 w-1/2 border-2 border-[#703C01] lg:text-lg">Add to Cart <CiShoppingCart className="md:text-2xl text-[#703C01] md:font-extraboldbold " /></button>
                        <button className="btn btn-outline md:w-1/2 w-1/2 bg-[#703C01] text-lg text-white">Buy Now</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full gap-2 justify-between items-center text-center">
                    <div className="p-2 space-y-2">
                        <MdOutlineLocalShipping className="w-1/2 mx-auto text-xl" />
                        <p>Free Shipping <br /> in India</p>
                    </div>
                    <div className="p-2 space-y-2">
                        <BiAward className="w-1/2 mx-auto text-xl space-y-2" />
                        <p>Assured <br /> Quality</p>
                    </div>
                    <div className="p-2 space-y-2">
                        <CgGift className="w-1/2 mx-auto text-xl" />
                        <p>Easy Return</p>
                    </div>
                    <div className="p-1 space-y-2">
                        <BiDockTop className="w-1/2 mx-auto text-xl space-y-2" />
                        <p>Safe Payment <br /> Options</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;