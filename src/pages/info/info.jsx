import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input, Collapse } from "antd";
import axios from "axios";

import img1 from "./images/Star 6.png";
import img2 from "../../assets/Img-box (1).png";
import img3 from "../../assets/Img-box (2).png";

import img11 from "./images/Mask group (1).png";
import img12 from "./images/Mask group (2).png";
import img13 from "./images/Mask group (3).png";
import img14 from "./images/Mask group (4).png";
import img15 from "./images/Mask group (5).png";
import img16 from "./images/Mask group (16).png";
import img18 from "./images/Mask group (6).png";
import img17 from "./images/Mask group.png";

let images = [
  { img: img11 },
  { img: img12 },
  { img: img13 },
  { img: img14 },
  { img: img15 },
  { img: img16 },
  { img: img17 },
  { img: img18 },
];

import { Link, useParams } from "react-router";

const Info = () => {
  const { t, i18n } = useTranslation();
  let { id } = useParams();

  let api = "http://localhost:3000/data";
  let [data, setData] = useState({});

  async function getById() {
    try {
      let { data } = await axios.get(`${api}/${id}`);
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getById();
  }, []);

  return (
    <div className=" px-[4%] lg:px-[8%]">
      <section className="bg-white rounded-2xl   my-16 flex lg:flex-row flex-col-reverse justify-between lg:p-0 p-5">
        <article className=" rounded-2xl relative lg:w-2/4 lg:p-10 lg:py-[5%] ">
          <div className="lg:mb-5">
            <p className="text-[#7992B2] font-semibold text-[14px] lg:text-xl flex items-center gap-2">
              <img src={img1} alt="" />
              {t("info.1")}
            </p>
            <p className="text-[#070E18] font-bold text-[24px] lg:text-3xl py-2.5">
              {data.name}
            </p>
            <p className="text-[#7992B2] font-semibold text-[15px] lg:text-[12px] py-1">
              {t("info.7")}
            </p>
            <p className="text-xl text-[#3284FF] font-semibold ">{data.sena}</p>
          </div>
        </article>

        <article className="lg:bg-[#3284FF] lg:w-[50%] lg:h-[52vh] h-[25vh] lg:p-10  rounded-r-2xl relative ">
          <div className="w-full h-full lg:absolute -bottom-2 -left-10 rounded-2xl py-5">
            <img
              className="w-full lg:h-[95%] h-[90%] object-cover rounded-2xl"
              src={data.img}
              alt=""
            />
          </div>
        </article>
      </section>

      <section>
        <p className="text-3xl font-semibold">Новые курсы по скидке</p>

        <article className="lg:flex flex-wrap gap-5 space-y-4 py-10">
          {images.map((e) => (
            <div
              key={e.id}
              className="bg-white lg:w-[23%] p-2.5 rounded-2xl relative flex flex-col justify-between"
            >
              <div>
                <img className="rounded" src={e.img} alt="" />
                <p className="text-xl text-[#3284FF] font-semibold absolute -mt-6 bg-white px-2 rounded-2xl">
                 24 000 ₽
                </p>
                <p className="py-3 text-[#070E18] text-[14px] font-semibold">
                  {t("info.2")}
                </p>
              </div>

              <div>
                <p className="text-[11px] text-[#7992B2]">{t("Home.54")}</p>
                <p className="text-[#4D5F7D] text-[14px] font-semibold">
                  {t("Home.55")}
                </p>

                <p className="text-[11px] text-[#7992B2] pt-3">
                  {t("Home.56")}
                </p>
                <p className="text-[#4D5F7D] text-[14px] font-semibold">
                  {t("Home.57")}
                </p>
              </div>
            </div>
          ))}
        </article>
      </section>

      <section className="bg-[#0063E5] lg:flex justify-around  rounded-2xl my-10">
        <div className="text-white flex flex-col items-start justify-between p-6">
          <p className="text-[25px] font-semibold lg:w-2/3 ">{t("cat.3")}</p>
          <button className=" border rounded-3xl px-4 py-1.5 flex items-center gap-2.5 my-5">
            {t("cat.4")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>

        <img className="w-2/10 lg:block hidden" src={img2} alt="" />
        <img
          className="w-8/10 block lg:hidden relative ml-[72px] rounded-br-2xl"
          src={img3}
          alt=""
        />
      </section>
    </div>
  );
};

export default Info;
