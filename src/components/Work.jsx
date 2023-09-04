import React from "react";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";

const Work = () => {
  const trend = [
    {
      img: t1,
      head: "Pick Meals",
      desc: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      img: t2,
      head: "Choose How Often",
      desc: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      img: t3,
      head: "Fast Deliveries",
      desc: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];

  return (
    <div
      name="testimonals"
      className="flex flex-col p-[1rem] items-center justify-center min-h-screen"
    >
      <div className="flex flex-col gap-[4rem]">
        <div className="flex flex-col items-center justify-center gap-[.5rem]">
          <p className="text-[#FE9E0D] text-[2rem] font-bold">Work</p>
          <p className="text-[#4C4C4C] font-bold md:text-[4rem] text-[2rem]">
            How It Works
          </p>
          <p className="text-[#828282] text-center font-bold text-[1rem] mt-[.5rem] md:mt-[0rem]">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt
            <br className="md:flex hidden" />
            magna non et elit. Dolor turpis molestie dui
            <br className="md:flex hidden" />
            magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-[2rem] self-center">
          {trend.map((item) => (
            <div className="bg-[#f6f6f6] text-[#505050] rounded-[1rem] w-[18rem] h-[26rem] inline-block p-1.5 cursor-pointer flex items-center justify-center">
              <div className="flex flex-col items-center justify-between rounded-md w-[18rem] h-full">
                <div className="flex h-[10rem] items-center justify-center">
                  <img
                    className="rounded-[0.5rem]"
                    src={item.img}
                    alt="trend"
                  />
                </div>
                <p className="font-bold text-[1.5rem]">{item.head}</p>
                <div className="flex h-[10rem] items-center justify-center">
                  <p className="text-center">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
