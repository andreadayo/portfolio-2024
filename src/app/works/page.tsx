import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import TabsAndContent from "@/app/components/TabsAndContent";
import styles from "./works.module.scss";
import { projects } from "../../../public/data/projects";
import AnimatedDiv from "@/app/components/animation/AnimatedDiv";
import Stairs from "@/app/components/animation/Stairs";

export const metadata: Metadata = {
  title: "Works",
};

const DynamicContact = dynamic(() => import("@/app/components/Contact"));

export default function Works() {
  return (
    <>
      <Stairs>
        <div className={styles.works}>
          <div className={styles.header}>
            <AnimatedDiv animationType="fadeInUp">
              <h1>Works</h1>
            </AnimatedDiv>
          </div>
          <AnimatedDiv animationType="fadeInUp">
            <TabsAndContent projects={projects} />
          </AnimatedDiv>
          <DynamicContact />
        </div>
      </Stairs>
    </>
  );
}
