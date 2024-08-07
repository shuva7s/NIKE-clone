import Image from "next/image";
import { newAndFeatured, men, women, kids, sale } from "@/constants/const";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="bg-primary-foreground max-lg:hidden">
        <div className="wrapper py-2.5 flex justify-between items-center">
          <Image
            className="invert"
            src="/jordan.svg"
            width={18}
            height={18}
            alt="jordan"
          />
          <div className="flex text-xs font-bold">
            <p>Find a Store</p>
            <span className="w-[0.5px] mx-3 bg-foreground"></span>
            <p>Help</p>
            <span className="w-[0.5px] mx-3 bg-foreground"></span>
            <p>Join Us</p>
            <span className="w-[0.5px] mx-3 bg-foreground"></span>
            <p>Sign In</p>
          </div>
        </div>
      </div>
      <div className="wrapper flex justify-between items-center py-3">
        <Image src="/Logo.svg" width={55} height={20} alt="Nike" />
        <div className="flex gap-6 max-lg:hidden items-center flex-row">
          {/* New & Featured */}
          <HoverCard>
            <HoverCardTrigger className="font-semibold">
              <p className="py-2 hover:underln relative">New & Featured</p>
            </HoverCardTrigger>
            <HoverCardContent className="bg-background w-screen p-12 grid gap-2 grid-cols-minmax">
              {newAndFeatured.map((box) => (
                <div key={box.heading} className="p-2">
                  <h3 className="my-2 text-foreground">{box.heading}</h3>
                  {box.contents.map((line) => (
                    <Link key={line.key} href="">
                      <p className="py-1.5 text-secondary hover:text-secondary-foreground transition-all">
                        {" "}
                        {line.value}
                      </p>
                    </Link>
                  ))}
                </div>
              ))}
            </HoverCardContent>
          </HoverCard>

          {/* men */}
          <HoverCard>
            <HoverCardTrigger className="font-semibold">
              <p className="py-2 hover:underln relative">Men</p>
            </HoverCardTrigger>
            <HoverCardContent className="bg-background w-screen p-12 grid gap-2 grid-cols-minmax">
              {men.map((box) => (
                <div key={box.heading} className="p-2">
                  <h3 className="my-2 text-foreground">{box.heading}</h3>
                  {box.contents.map((line) => (
                    <Link key={line.key} href="">
                      <p className="py-1.5 text-secondary hover:text-secondary-foreground transition-all">
                        {" "}
                        {line.value}
                      </p>
                    </Link>
                  ))}
                </div>
              ))}
            </HoverCardContent>
          </HoverCard>

          {/* women */}
          <HoverCard>
            <HoverCardTrigger className="font-semibold">
              <p className="py-2 hover:underln relative">Women</p>
            </HoverCardTrigger>
            <HoverCardContent className="bg-background w-screen p-12 grid gap-2 grid-cols-minmax">
              {women.map((box) => (
                <div key={box.heading} className="p-2">
                  <h3 className="my-2 text-foreground">{box.heading}</h3>
                  {box.contents.map((line) => (
                    <Link key={line.key} href="">
                      <p className="py-1.5 text-secondary hover:text-secondary-foreground transition-all">
                        {" "}
                        {line.value}
                      </p>
                    </Link>
                  ))}
                </div>
              ))}
            </HoverCardContent>
          </HoverCard>

          {/* kids */}
          <HoverCard>
            <HoverCardTrigger className="font-semibold">
              <p className="py-2 hover:underln relative">Kids</p>
            </HoverCardTrigger>
            <HoverCardContent className="bg-background w-screen p-12 grid gap-2 grid-cols-minmax">
              {kids.map((box) => (
                <div key={box.heading} className="p-2">
                  <h3 className="my-2 text-foreground">{box.heading}</h3>
                  {box.contents.map((line) => (
                    <Link key={line.key} href="">
                      <p className="py-1.5 text-secondary hover:text-secondary-foreground transition-all">
                        {" "}
                        {line.value}
                      </p>
                    </Link>
                  ))}
                </div>
              ))}
            </HoverCardContent>
          </HoverCard>

          {/* sale */}
          <HoverCard>
            <HoverCardTrigger className="font-semibold">
              <p className="py-2 hover:underln relative">Sale</p>
            </HoverCardTrigger>
            <HoverCardContent className="bg-background w-screen p-12 grid gap-2 grid-cols-minmax">
              {sale.map((box) => (
                <div key={box.heading} className="p-2">
                  <h3 className="my-2 text-foreground">{box.heading}</h3>
                  {box.contents.map((line) => (
                    <Link key={line.key} href="">
                      <p className="py-1.5 text-secondary hover:text-secondary-foreground transition-all">
                        {" "}
                        {line.value}
                      </p>
                    </Link>
                  ))}
                </div>
              ))}
            </HoverCardContent>
          </HoverCard>
          <Link href="">
            <p className="py-2 hover:underln relative">Customize</p>
          </Link>
          <Link href="">
            <p className="py-2 hover:underln relative">SNKRS</p>
          </Link>
        </div>

        <div className="flex items-center">
          {/* <div className="mr-4 w-40 h-9 rounded-full border-2 border-muted-foreground"></div> */}
          <button className="p-2 rounded-full hover:bg-muted-foreground">
            <Image
              className="invert"
              src="/love.svg"
              width={24}
              height={24}
              alt="love"
            />
          </button>
          <button className="p-2 rounded-full hover:bg-muted-foreground">
            <Image
              className="invert"
              src="/cart.svg"
              width={24}
              height={24}
              alt="cart"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
