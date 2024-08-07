import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

type Product = {
  _id: string;
  productImage: string;
  heading: string;
  sub_heading: string;
  price: string;
};

type ProductListProp = {
  productList: Product[];
  sliderType: "normal" | "featured";
};

const Slider = ({ productList, sliderType }: ProductListProp) => {
  return (
    <Carousel className="mt-8">
      <div className="wrapper flex justify-between items-center mb-6">
        <h4 className="text-primary text-lg">
          {sliderType === "featured" ? "Featured" : "Popular Right Now"}
        </h4>
        <div className="flex gap-4">
          <CarouselPrevious className="max-md:hidden w-12 h-12 rounded-full" />
          <CarouselNext className="max-md:hidden rounded-full w-12 h-12" />
        </div>
      </div>
      <CarouselContent className="wrapper">
        {productList.map((product, index) => (
          <CarouselItem
            key={product._id}
            className={`md:basis-1/2 lg:basis-1/3 min-h-72 rounded-lg ${
              index >= 1 ? "ml-2" : ""
            }`}
          >
            <Link href="" className="flex flex-col">
              <Image
                src={product.productImage}
                width={300}
                height={400}
                className="w-[100%]"
                alt="product-image"
              />
              <div className="m-4 flex flex-col gap-4">
                <h5
                  className={sliderType === "featured" ? "" : "font-semibold"}
                >
                  {product.heading}
                </h5>
                <p
                  className={
                    sliderType === "featured"
                      ? "text-xl font-bold"
                      : "text-accent-foreground"
                  }
                >
                  {product.sub_heading}
                </p>
                {sliderType === "featured" ? (
                  <Link
                    href=""
                    className="px-4 py-2 rounded-full border self-start"
                  >
                    Shop
                  </Link>
                ) : (
                  <p>MRP : ₹ {product.price}</p>
                )}
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
