import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input, Collapse, Slider } from "antd";
import axios from "axios";

import img1 from "../../assets/object копия 1.png";
import img2 from "../../assets/Img-box (1).png";
import img3 from "../../assets/Img-box (2).png";
import { Link } from "react-router";

const Categories = () => {
  const { t, i18n } = useTranslation();

  let api = "http://localhost:3000/data";
  let [data, setData] = useState([]);

  async function get() {
    try {
      let { data } = await axios.get(api);
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <div className=" px-[4%] lg:px-[8%]">
      <section className="bg-white rounded-2xl   my-16 flex justify-between lg:p-0 p-5">
        <article className=" rounded-2xl relative lg:w-3/5 lg:p-10 lg:py-[5%] ">
          <div className="lg:mb-5">
            <p className="text-[#7992B2] font-semibold text-[15px] lg:text-xl">
              {t("cat.1")}
            </p>
            <p className="text-[#070E18] font-semibold text-[24px] lg:text-4xl py-5">
              {t("cat.2")}
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 lg:pt-12 lg:text-[12px] text-[16px]">
            <p className=" text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.13")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.14")}
            </p>
            <p className="text-white bg-[#0080FF]  border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.15")}
            </p>
            <p className=" text-[#070E18] bg-[#F0F4FA]border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.16")}
            </p>
            <p className="text-white bg-[#0080FF] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.17")}
            </p>
            <p className="text-white bg-[#0080FF] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.18")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.19")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.20")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.21")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.22")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.23")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.24")}
            </p>
            <p className="text-white bg-[#0080FF] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.25")}
            </p>
          </div>
        </article>

        <article className="bg-[#3284FF] w-[40%] p-10  rounded-r-2xl relative lg:block hidden">
          <img
            className="w-8/10 absolute bottom-0 -left-20"
            src={img1}
            alt=""
          />
        </article>
      </section>

      <section>
        <article className="flex justify-between py-8 ">
          <div className="lg:flex items-center gap-5">
            <p className="text-[#070E18] font-semibold text-4xl ">
              {t("Home.28")}
            </p>
            <p className="text-[#4D5F7D]">{t("Home.29")}</p>
          </div>

          <div className="lg:flex items-center gap-5 hidden">
            <select className="text-[#0080FF]">
              <option value="">{t("Home.30")}</option>
            </select>
            <select className="text-[#4D5F7D]">
              <option value="">{t("Home.31")}</option>
            </select>
          </div>
        </article>

        <div className="flex items-start gap-5">
          <article className="bg-white rounded-2xl w-2/8 p-5 lg:block hidden">
            <div className="py-2">
              <p className="text-[#070E18] text-[14px] font-semibold">
                {t("Home.32")}
              </p>

              <div className="text-[#4D5F7D] text-[12px] flex flex-col py-5">
                <div>
                  <input type="checkbox" /> {t("Home.33")}
                </div>
                <div>
                  <input type="checkbox" /> {t("Home.34")}
                </div>
                <div>
                  <input type="checkbox" /> {t("Home.34")}
                </div>
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#070E18] text-[14px] font-semibold">
                {t("Home.36")}
              </p>

              <div className="text-[#4D5F7D] text-[12px] flex flex-col py-5">
                <div>
                 <Slider range defaultValue={[20, 50]} />
                  <div className="flex items-center ">
                    <Input placeholder={t("Home.37")} />
                    <Input placeholder={t("Home.38")} />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#070E18] text-[14px] font-semibold">
                {t("Home.43")}
              </p>

              <div className="text-[#4D5F7D] text-[12px] flex flex-col gap-2 py-2.5">
                <div>
                  <input type="radio" /> {t("Home.44")}
                </div>
                <div>
                  <input type="radio" /> {t("Home.45")}
                </div>
                <div>
                  <input type="radio" /> {t("Home.46")}
                </div>
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#070E18] text-[14px] font-semibold">
                {t("Home.47")}
              </p>

              <div className="text-[#4D5F7D] text-[12px] flex flex-col gap-2 py-2.5">
                <div>
                  <input type="checkbox" /> {t("Home.48")}
                </div>
                <div>
                  <input type="checkbox" /> {t("Home.49")}
                </div>
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#070E18] text-[14px] font-semibold">
                {t("Home.50")}
              </p>

              <div className="text-[#4D5F7D] text-[12px] flex flex-col py-5">
                <div>
                 <Slider range defaultValue={[20, 50]} />
                  <div className="flex items-center ">
                    <Input placeholder={t("Home.37")} />
                    <Input placeholder={t("Home.38")} />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#070E18] text-[14px] font-semibold">
                {t("Home.51")}
              </p>

              <div className="text-[#4D5F7D] text-[12px] flex flex-col py-5">
                <div>
                  <div className="flex items-center ">
                    <Input type="date" placeholder={t("Home.37")} />
                    <Input type="date" placeholder={t("Home.38")} />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-5 flex items-center gap-2 text-[12px] text-[#4D5F7D]">
              <input type="checkbox" /> <p>У меня иностранное гражданство</p>
            </div>

            <div className="flex flex-col gap-2.5">
              <Button type="primary">{t("Home.52")}</Button>
              <Button type="primary">{t("Home.53")}</Button>
            </div>
          </article>

          <div>
            <article className="lg:flex flex-wrap gap-5 space-y-4">
              {data.map((e) => (
                <div
                  key={e.id}
                  className="bg-white lg:w-3/10 p-2.5 rounded-2xl relative flex flex-col justify-between"
                >
                  <div>
                    <img className="rounded" src={e.img} alt="" />
                    <p
                      className={`text-xl  font-semibold absolute -mt-6 bg-white px-2 rounded-2xl ${
                        e.status ? "text-[#3284FF]" : "text-red-500"
                      }`}
                    >
                      {e.sena}
                    </p>
                    <p className="py-3 text-[#070E18] text-[14px] font-semibold">
                      {e.name}
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
                    <Link to={`/info/${e.id}`}>
                      <Button
                        variant="solid"
                        color="blue"
                        className="bg-blue-500 px-4 rounded text-white my-2.5"
                      >
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
                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                          />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </article>
            <Button className="w-[95%] my-10 " color="blue" variant="outlined">
              {t("Home.58")}
            </Button>
          </div>
        </div>
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

export default Categories;
