"use client";
import React from "react";
import Image from "next/image";
import {
  EnvironmentOutlined,
  StarFilled,
  CheckOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import type { Tour } from "@/data/tours";

const TourCard: React.FC<{ tour: Tour }> = React.memo(({ tour }) => (
  <Card
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
    className="overflow-hidden rounded-xl border-0"
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

    {/* includes list */}
    <ul className="text-xs text-[#999999] space-y-1">
      {tour.includes.map((item, idx) => (
        <li key={idx} className="flex items-center gap-1">
          <CheckOutlined className="text-[#FA7436]" />
          {item}
        </li>
      ))}
    </ul>
  </Card>
));

TourCard.displayName = "TourCard";
export default TourCard;
