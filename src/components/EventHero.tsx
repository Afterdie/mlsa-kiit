import { Just_Another_Hand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar4Week } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
const anotherHand = Just_Another_Hand({
  subsets: ["latin"],
  weight: "400",
});
const EventHero = () => {
  return (
    <>
      <div className="absolute inset-0 max-w-[1920px] mx-auto">
        <Image
          src="/heroLeft.png"
          alt="hero left gradient"
          width={700}
          height={700}
          className="z-1 absolute left-0 top-0 h-[60%] w-[80%] md:h-full md:w-[50%] max-w-[1920px] "
        />
        <div className="z-20 absolute right-0 top-[22rem] h-[120vh] w-[50%] max-w-[1920px] lg:h-[100vh] lg:w-[40%] opacity-60">
          <Image
            src="/heroRight.png"
            alt="hero right gradient"
            width={1000}
            height={800}
            className="h-full w-full z-8"
          />
        </div>
      </div>
      <div className="relative">
        <div className=" no-repeat h-[400px] md:h-[88vh] w-full bg-[url('/EventHero.png')] bg-cover  bg-center bg-no-repeat">
          <div className="  mx-auto h-[100px] w-[93%]  text-right text-white">
            .
            <div className="  mx-auto mt-[5rem] h-[10rem]  border-[1px] border-[#858585] border-solid flex items-center   justify-between rounded-xl bg-[#25252580] text-white shadow-gray  lg:w-[100%] ">
              {/* <Image
                // src="/eventImages/android.png"
                src='/logo_metallic.png'
                alt="feature Image"
                width={350}
                height={250}

                className=" ml-6 sm:ml-10 h-[111px] w-[126px] md:h-[115px] md:w-[120px] lg:h-[175px] lg:w-[230px] " /> */}
              <div></div>


              <div className="flex cursor-default flex-col  items-end justify-between pr-3 pt-3  text-right md:text-lg lg:text-xl font-normal capitalize">
                <div className="flex flex-col">
                  <h1 className="text-[15px] font-semibold md:leading-2 lg:leading-4 md:py-1 md:text-xl lg:text-2xl">
                    New Event Coming Soon!
                  </h1>

                  <div className="my-2 flex items-center justify-end gap-1">
                    <BsCalendar4Week />
                    <p>Will be Notified Soon</p>
                  </div>
                  {/* <div className="duration-50 mb-2 mt-1 h-[2px] w-[100%] bg-gradient-to-r from-transparent to-[#ffffff]  my-1 lg:my-2 "></div> */}
                  {/* <div className="flex items-center md:text-lg lg:text-xl justify-end gap-1">
                    <LuAlarmClock />
                    <p className="">2nd September,12 AM</p>
                  </div> */}

                  {/* <p className="py-1 lg:py-2 text-xs font-[100px] md:text-base lg:text-[18px]">Last day to register</p> */}
                </div>
                {/* <div className=" flex flex-row gap-[2]">

                  <button className=" mb-[15px] w-[45%] items-center justify-center whitespace-nowrap rounded-[100px] bg-gradient-to-r from-[#0070C5] to-[#3BABCF]  px-2  py-1 lg:py-2 text-[7px] md:text-xs lg:text-[11px]   ">
                    <Link href={"https://stark-expo.vercel.app/"}> Know More</Link>
                  </button>


                  <button className=" mb-[15px] flex w-[45%] items-center justify-center whitespace-nowrap rounded-[100px] bg-gradient-to-r from-[#0070C5] to-[#3BABCF]  px-2  py-1 lg:py-2 text-[7px] md:text-xs lg:text-[11px]   "
                    style={{ marginLeft: "0.7rem" }}>
                    <Link href={"https://registrations-mlsa.vercel.app"}>Register Now</Link>
                  </button>

                </div> */}

              </div>
            </div>
            {/* <div className={`${anotherHand.className} registerNow  mr-[9%] mt-2 md:mt-4 lg:mt-6`}>
              <p className="text-[27px] relative md:text-[35px] lg:text-[50px]">Register Now
                <Image
                  width={50}
                  height={60}
                  src="/arrow.svg"
                  alt="arrow"
                  className="absolute w-[18%] h-[100%] right-[-11.8%] top-[-20px] md:top-[-25px] lg:top-[-30px]"
                /></p>

            </div> */}

          </div>

        </div>
        <div className="text-left  text-3xl md:text-4xl lg:text-5xl px-10 absolute bottom-[-3px] jj w-[100vw]">
          <h1 className="mx-[-10px] lg:mx-[19px] bg-gradient-to-br from-[#5051F9]  to-[#DFDFFF] leading-20 font-semibold text-transparent bg-clip-text">Events</h1>
          <h2 className="mx-[-10px] lg:mx-[19px] text-[18px] md:text-[25px] lg:py-1 lg:text-[33px]">Our past successful events</h2>
        </div>
      </div>
    </>

  );
};

export default EventHero;
