import Slider from "@/components/shared/Slider";
import { productList1, featuredProducts } from "@/constants/const";

export default function Home() {
  return (
    <main className="">
      <div className="wrapper relative aspect-10-5 banner-image max-md:hidden" />
      <div className="wrapper relative aspect-10-12 banner-image md:hidden" />

      <div className="wrapper py-8 flex flex-col">
        <p className="text-primary text-center head-bold-text max-md:text-left">
          SECONDS TAKE YEARS
        </p>
        <p className="text-primary text-center leading-none my-6 max-md:text-left max-md:my-4">
          A lifetime of work comes down to a single moment. See how Sha'Carri
          Richardson makes history happen on her time.
        </p>
        <button className="bg-primary self-center max-md:self-start text-background px-4 py-1.5 rounded-full font-semibold">
          Explore
        </button>
      </div>

      <div className="wrapper relative aspect-10-3 banner-image max-md:hidden" />
      <div className="wrapper relative aspect-1 banner-image md:hidden" />

      <div className="wrapper flex flex-col">
        <p className="text-primary text-center leading-none my-6 max-md:text-left max-md:my-4">
          Nike Electric Pack
        </p>
        <p className="text-primary text-center head-bold-text max-md:text-left">
          WIN ON AIR
        </p>
        <p className="text-primary text-center leading-none my-6 max-md:text-left max-md:my-4">
          Engineered for those who stand out.
        </p>
        <div className="flex flex-row gap-4 justify-center max-md:justify-start">
          <button className="bg-primary text-background px-4 py-1.5 rounded-full font-semibold">
            Experience Air
          </button>
          <button className="bg-primary text-background px-4 py-1.5 rounded-full font-semibold">
            Shop Air
          </button>
        </div>
      </div>

      <Slider productList={productList1} sliderType="normal"></Slider>
      <Slider productList={featuredProducts} sliderType="featured"></Slider>
    </main>
  );
}
