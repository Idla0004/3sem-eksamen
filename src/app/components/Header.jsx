"use client";
import Image from "next/image";
import HeaderButton from "./HeaderButton";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";
import "@/app/custom.css";
import { usePathname } from "next/navigation";
import {
  useState,
  useRef,
  useEffect,
} from "react";
import { motion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  // AI HELPED WITH THIS //
  // Se synopsis om AI brug: Header.jsx
  const [activeLink, setActiveLink] =
    useState(pathname);
  const [underline, setUnderline] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const linkRefs = useRef({});
  useEffect(() => {
    setActiveLink(pathname);
    const activeRef = linkRefs.current[pathname];
    if (activeRef) {
      const { offsetLeft, offsetWidth } =
        activeRef;
      setUnderline({
        left: offsetLeft,
        width: offsetWidth,
        opcaity: 1,
      });
    }
  }, [pathname]);

  const handleHover = (path) => {
    const ref = linkRefs.current[path];
    if (ref) {
      const { offsetLeft, offsetWidth } = ref;
      setUnderline({
        left: offsetLeft,
        width: offsetWidth,
        opcaity: 1,
      });
    }
  };

  const handleHoverEnd = () => {
    const activeRef =
      linkRefs.current[activeLink];
    if (activeRef) {
      const { offsetLeft, offsetWidth } =
        activeRef;
      setUnderline({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
      });
    }
  };
  ///////////
  return (
    <div className="header-wrapper z-50 bg-background">
      <header className="flex justify-between border-y-(--pink) border-y-2">
        <div className="border-s-transparent border-bs-(--pink) border-e-transparent border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
        <div className="py-4">
          <Link href="/">
            <Image
              src="/assets/Logo.png"
              width={220}
              height={50}
              alt="Logo with the text 'Night Club'"
            ></Image>
          </Link>
        </div>
        <nav className="relative flex gap-(--padding-block-input-field) place-content-center items-center justify-between">
          <motion.div
            animate={{
              left: underline.left,
              width: underline.width,
              opacity: underline.opacity,
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
            }}
            className="absolute bottom-3 h-3 z-0"
          >
            <Image
              src="/assets/bottom_line2.png"
              height={20}
              width={200}
              className="w-full h-full object-container"
              alt="Links underline"
            />
          </motion.div>
          <Link
            href="/"
            ref={(el) =>
              (linkRefs.current["/"] = el)
            }
            onMouseEnter={() => handleHover("/")}
            onMouseLeave={handleHoverEnd}
          >
            <HeaderButton
              active={pathname === "/"}
            >
              home
            </HeaderButton>
          </Link>
          <Link
            href="/events"
            ref={(el) =>
              (linkRefs.current["/events"] = el)
            }
            onMouseEnter={() =>
              handleHover("/events")
            }
            onMouseLeave={handleHoverEnd}
          >
            <HeaderButton
              active={pathname === "/events"}
            >
              events
            </HeaderButton>
          </Link>
          <Link
            href="/booktable"
            ref={(el) =>
              (linkRefs.current["/booktable"] =
                el)
            }
            onMouseEnter={() =>
              handleHover("/booktable")
            }
            onMouseLeave={handleHoverEnd}
          >
            <HeaderButton
              active={pathname === "/booktable"}
            >
              book&nbsp;table
            </HeaderButton>
          </Link>
          <Link
            href="/contact"
            ref={(el) =>
              (linkRefs.current["/contact"] = el)
            }
            onMouseEnter={() =>
              handleHover("/contact")
            }
            onMouseLeave={handleHoverEnd}
          >
            <HeaderButton
              active={pathname === "/contact"}
            >
              contact&nbsp;us
            </HeaderButton>
          </Link>
        </nav>
        <BurgerMenu></BurgerMenu>
        <div className="border-s-transparent border-bs-transparent border-e-transparent border-be-(--pink) border-s-40 border-bs-0 border-e-0 border-be-40"></div>
      </header>
    </div>
  );
};

export default Header;
