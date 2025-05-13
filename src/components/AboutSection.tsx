// components/AboutSection.tsx
"use client";

import Image from "next/image";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

export default function AboutSection() {
  return (
    <section className=" bg-[#F7F8FC] py-10" id="about">
      {/* decorative paper plane (desktop+) */}

      <div className="container mx-auto px-6 ">
        {/* card */}
        <div className="grid gap-12 lg:grid-cols-2 rounded-3xl bg-white p-10 lg:p-14">
          {/* left image */}
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <Image
              src="/about.png"
              alt="Beach landscape"
              width={700}
              height={500}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>

          {/* right pane */}
          <div className="flex flex-col justify-center gap-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FA7436]">
              About&nbsp;us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#222222]">
              The Best And Most&nbsp;trusted&nbsp;
              <span className="text-[#FA7436]">service</span>
            </h2>

            <p className="max-w-md text-[#666666]">
              We are the largest holiday service provider in the world with
              partners and places spread all over the world by prioritizing
              service and customer satisfaction.
            </p>

            {/* Ant Design button styled to match brand */}
            <Button
              type="primary"
              size="large"
              icon={<RightOutlined />}
              className="w-max flex items-center gap-2 !h-12 !rounded-md font-medium"
              style={{
                backgroundColor: "#FA7436",
                borderColor: "#FA7436",
                paddingInline: "2.5rem",
              }}
              onClick={() => {
                /* navigate or scroll */
              }}
            >
              Learn&nbsp;More
            </Button>

            {/* stats */}
            <div className="grid gap-8 pt-4 sm:grid-cols-3">
              {[
                { value: "200+", label: "Customer & Partners" },
                { value: "500+", label: "Place In The World" },
                { value: "1k+", label: "Success Journey" },
              ].map(({ value, label }) => (
                <div key={value}>
                  <p className="text-2xl font-extrabold text-[#FA7436]">
                    {value}
                  </p>
                  <p className="text-sm leading-snug text-[#666666]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
