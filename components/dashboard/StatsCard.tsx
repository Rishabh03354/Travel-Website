"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  color: string;
  index?: number;
}

export default function StatsCard({ title, value, icon, color, index = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`bg-gradient-to-r ${color} text-white rounded-3xl shadow-xl p-8 transition-transform`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white/80 font-medium text-sm">{title}</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3 tracking-tight">{value}</h2>
        </div>
        <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm text-3xl">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}
