"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default PageTransition;
