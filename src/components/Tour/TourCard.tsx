"use client";
import React from "react";
import Image from "next/image";
import {
  EnvironmentOutlined,
  StarFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import type { Tour } from "@/data/tours";

const TourCard = React.memo(({ tour }: { tour: Tour }) => (
  <Card
    hoverable
    cover={
      <Image
        src={tour.img}
        alt={tour.title}
        width={400}
        height={260}
        loading="lazy"
        className="h-48 w-full rounded-t-lg object-cover"
        priority={false}
      />
    }
    className="overflow-hidden rounded-xl border-0 shadow-sm"
  >
    {/* top row */}
    <div className="mb-2 flex items-center justify-between text-xs">
      <span className="flex items-center gap-1 text-[#666666]">
        <EnvironmentOutlined className="text-[#FA7436]" />
        {tour.country}
      </span>
      <span className="flex items-center gap-1 font-medium text-[#999999]">
        <StarFilled className="text-[#FFBF00]" />
        {tour.rating}
      </span>
    </div>

    <h3 className="line-clamp-2 font-semibold text-[#222222]">{tour.title}</h3>
    <p className="mb-4 text-xs text-[#999999]">{tour.duration}</p>

    <div className="flex items-center justify-between">
      <span className="text-lg font-bold text-[#FA7436]">{tour.price}$</span>
      <a
        href="#"
        className="flex items-center gap-1 text-xs font-medium text-[#999999] transition-colors hover:text-[#FA7436]"
      >
        View&nbsp;More <ArrowRightOutlined />
      </a>
    </div>
  </Card>
));
TourCard.displayName = "TourCard";
export default TourCard;
