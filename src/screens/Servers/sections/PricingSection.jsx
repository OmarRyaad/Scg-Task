import { Card, CardContent } from "../../../components/UI/Card";

export const PricingSection = () => {
  const platforms = [
    {
      name: "Phpbb",
      image: "https://c.animaapp.com/mc1s1pc84dIubF/img/image-16.png",
      imageWidth: "118px",
      imageHeight: "39px",
      imageTop: "55px",
    },
    {
      name: "Joomla",
      image: "https://c.animaapp.com/mc1s1pc84dIubF/img/image-15.png",
      imageWidth: "83px",
      imageHeight: "82px",
      imageTop: "34px",
    },
    {
      name: "Drupal",
      image: "https://c.animaapp.com/mc1s1pc84dIubF/img/image-14.png",
      imageWidth: "69px",
      imageHeight: "92px",
      imageTop: "29px",
    },
    {
      name: "Magento",
      image: "https://c.animaapp.com/mc1s1pc84dIubF/img/image-13.png",
      imageWidth: "79px",
      imageHeight: "92px",
      imageTop: "29px",
    },
    {
      name: "WordPress",
      image: "https://c.animaapp.com/mc1s1pc84dIubF/img/image-12.png",
      imageWidth: "97px",
      imageHeight: "92px",
      imageTop: "29px",
    },
  ];

  return (
    <section className="w-full max-w-[1204px] mx-auto py-12 px-4">
      <div className="flex flex-col items-center mb-10">
        <h2 className="[font-family:'Cairo',Helvetica] font-bold text-[#2b1f51] text-3xl sm:text-4xl text-center tracking-[0] leading-[normal] whitespace-nowrap [direction:rtl] mb-4">
          تقدم Sucuri دعم لمختلف المنصات
        </h2>
        <p className="max-w-[667px] [font-family:'Cairo',Helvetica] font-normal text-[#2b1f51] text-sm sm:text-base text-center tracking-[0] leading-[normal] [direction:rtl]">
          تقدم Sucuri دعم لمختلف المنصات يعمل جدار حماية موقع الويب Sucuri عبر
          جميع المنصات، بما في ذلك العلامات التجارية الأكثر شهرة اليوم.
        </p>
      </div>

      {/* Responsive Grid instead of fixed-width flex */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 justify-items-center">
        {platforms.map((platform, index) => (
          <Card
            key={index}
            className="w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] rounded-[10px_10px_5px_5px] shadow-[0px_0px_15px_#00000012]"
          >
            <CardContent className="p-0 h-full flex flex-col items-center justify-between relative">
              <img
                className="absolute object-contain"
                style={{
                  width: platform.imageWidth,
                  height: platform.imageHeight,
                  top: platform.imageTop,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                alt={platform.name}
                src={platform.image}
              />
              <div className="absolute bottom-[22px] left-0 right-0 [font-family:'Cairo',Helvetica] font-bold text-[#2b1f51] text-xl sm:text-2xl text-center leading-[normal] whitespace-nowrap">
                {platform.name}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
