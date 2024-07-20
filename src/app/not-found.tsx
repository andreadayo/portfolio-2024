import { Metadata } from "next";
import Button from "@/app/components/Button";
import AnimatedDiv from "@/app/components/animation/AnimatedDiv";
import Spline from "@splinetool/react-spline/next";
import Stairs from "@/app/components/animation/Stairs";
import styles from "./not-found.module.scss";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Stairs>
      <div className={styles.error}>
        <div className={styles.overlay}>
          <div className={styles.errorSection}>
            <AnimatedDiv animationType="fadeInUp">
              <h1>Page not found</h1>
              <p>Oops! We couldn’t find the page you were looking for.</p>
            </AnimatedDiv>
            <AnimatedDiv animationType="fadeInUp">
              <Button href="/">Go Back to Home</Button>
            </AnimatedDiv>
          </div>
        </div>
        <Spline scene="https://prod.spline.design/StMq9TNTN2eHvGB8/scene.splinecode" />
      </div>
    </Stairs>
  );
}
