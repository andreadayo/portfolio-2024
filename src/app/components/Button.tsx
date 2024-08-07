import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  target?: "_self" | "_blank";
}

const Button: React.FC<ButtonProps> = ({ children, href, target }) => {
  const buttonContent = (
    <>
      <span className={styles.button__inner}>{children}</span>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marquee__inner}>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
        </div>
      </div>
    </>
  );

  return href ? (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      <button className={styles.button__atlas}>{buttonContent}</button>
    </Link>
  ) : (
    <button className={styles.button__atlas}>{buttonContent}</button>
  );
};

export default Button;
