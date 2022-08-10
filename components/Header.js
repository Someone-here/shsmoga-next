import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Button from "./Button";
import { Headset, List, Search, XSquareFill } from "react-bootstrap-icons";

export default function Header() {
  const colorMap = {
    ABOUT: "green",
    ADMISSION: "blue",
    "E-MAGAZINE": "dark-blue",
    GALLERY: "grey",
    INFRASTRUCTURE: "red",
    "STUDENT LIFE": "violet",
  };

  const navLinks = [
    {
      name: "ABOUT",
      href: "/about",
      color: colorMap["ABOUT"],
      menu: [
        {
          name: "Junior Wing",
          href: "#",
        },
        {
          name: "Primary Wing",
          href: "#",
        },
        {
          name: "Principal's Desk",
          href: "#",
        },
        {
          name: "Chairman's Desk",
          href: "#",
        },
      ],
    },
    {
      name: "ADMISSION",
      href: "/admission",
      color: colorMap["ADMISSION"],
      menu: [
        {
          name: "Test",
          href: "#",
        },
        {
          name: "Another Test",
          href: "#",
        },
      ],
    },
    {
      name: "GALLERY",
      href: "/GALLERY",
      color: colorMap["GALLERY"],
      menu: [
        {
          name: "Test",
          href: "#",
        },
        {
          name: "Another Test",
          href: "#",
        },
      ],
    },
    {
      name: "INFRASTRUCTURE",
      href: "/INFRASTRUCTURE",
      color: colorMap["INFRASTRUCTURE"],
      menu: [
        {
          name: "Test",
          href: "#",
        },
        {
          name: "Another Test",
          href: "#",
        },
      ],
    },
    {
      name: "STUDENT LIFE",
      href: "/STUDENT LIFE",
      color: colorMap["STUDENT LIFE"],
      menu: [
        {
          name: "Test",
          href: "#",
        },
        {
          name: "Another Test",
          href: "#",
        },
      ],
    },
  ];

  const [selected, setSelected] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);
  const onHover = (e) => {
    setSelected(e.target.innerText);
  };

  const onHoverEnd = () => {
    setSelected(null);
  };

  const showNav = () => {
    setMobileNav(true);
  };

  return (
    <header className={styles.root}>
      <div className={styles.left}>
        <img src="/Logo.svg" alt="logo" width="90%" />
      </div>
      <div className={styles.mobileIcons}>
        <Search size={25} color="var(--accent)" />
        <List size={40} onClick={showNav} className={styles.navIcon} />
      </div>

      <nav className={styles.right}>
        <div className={styles.up}>
          <a href="#">FEE PAYMENT</a>
          <a href="#">FAQ</a>
          <a href="#">NEWS</a>
          <a href="#">PORTAL</a>
          <Button
            onClick={() => {}}
            style={{ marginLeft: "1rem" }}
            bordered={false}
          >
            <Headset /> INQUIRE
          </Button>
        </div>
        <div
          className={styles.down}
          style={{ backgroundColor: `var(--${colorMap[selected]})` }}
        >
          {navLinks.map((link) => (
            <div
              className={styles.link}
              key={link.name}
              onMouseLeave={onHoverEnd}
            >
              <a href={link.href} onMouseOver={onHover}>
                {link.name}
              </a>
              <div
                className={styles.dropdown}
                style={{
                  backgroundColor: `var(--${link.color}-o)`,
                  opacity: selected === link.name ? 1 : 0,
                }}
              >
                {link.menu.map((menu) => (
                  <a href={menu.href} key={menu.name}>
                    {menu.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
      <nav
        className={styles.mobile}
        style={{ left: mobileNav ? "40%" : "100%" }}
      >
        <Button onClick={() => setMobileNav(false)} className={styles.closeBtn}>
          <XSquareFill
            color="var(--accent)"
            style={{ marginRight: "0.5rem" }}
          />{" "}
          CLOSE
        </Button>
        <div className={styles.mobileLinks}>
          <a href="#">FEE PAYMENT</a>
          <a href="#">FAQ</a>
          <a href="#">NEWS</a>
          <a href="#">PORTAL</a>
        </div>
      </nav>
    </header>
  );
}
