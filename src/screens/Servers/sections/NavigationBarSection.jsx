import { ArrowRightIcon } from "lucide-react";
import { Button } from "/components/ui/button";

export const NavigationBarSection = () => {
  // Country/language flag data
  const flagImages = [
    {
      src: "https://c.animaapp.com/mc1s1pc84dIubF/img/ae-circle-01-xs-1.png",
      alt: "Ae circle XS",
    },
    {
      src: "https://c.animaapp.com/mc1s1pc84dIubF/img/image.png",
      alt: "Image",
    },
    {
      src: "https://c.animaapp.com/mc1s1pc84dIubF/img/image-1.png",
      alt: "Image",
    },
    {
      src: "https://c.animaapp.com/mc1s1pc84dIubF/img/sa-circle-01-xs-1.png",
      alt: "Sa circle XS",
    },
    {
      src: "https://c.animaapp.com/mc1s1pc84dIubF/img/image-2.png",
      alt: "Image",
    },
    {
      src: "https://c.animaapp.com/mc1s1pc84dIubF/img/image-3.png",
      alt: "Image",
    },
    {
      src: "https://c.animaapp.com/mc1s1pc84dIubF/img/fi-circle-01-xs-1.png",
      alt: "Fi circle XS",
    },
    {
      src: "https://c.animaapp.com/mc1s1pc84dIubF/img/image-4.png",
      alt: "Image",
    },
    {
      src: "https://c.animaapp.com/mc1s1pc84dIubF/img/it-circle-01-xs-1.png",
      alt: "It circle XS",
    },
    {
      src: "https://c.animaapp.com/mc1s1pc84dIubF/img/de-circle-01-xs-1.png",
      alt: "De circle XS",
    },
    {
      src: "https://c.animaapp.com/mc1s1pc84dIubF/img/us-circle-01-xs-1.png",
      alt: "Us circle XS",
    },
    {
      src: "https://c.animaapp.com/mc1s1pc84dIubF/img/uk-circle-01-xs-1.png",
      alt: "Uk circle XS",
    },
  ];

  // Secondary navigation items
  const secondaryNavItems = [
    "Registration",
    "Login Screen",
    "Status Page",
    "Status Page 2",
    "Dashboard",
    "Payment Screen",
  ];

  // Main navigation items
  const mainNavItems = [
    "Demos",
    "Hosting",
    "ProHosting",
    "Domains",
    "Need Help?",
    "Pages",
    "Contact Us",
  ];

  return (
    <header className="w-full h-[85px] bg-white">
      <div className="relative h-full max-w-[1440px] mx-auto">
        {/* Main navigation bar */}
        <div className="flex justify-between items-center h-full px-7">
          {/* Logo and language selector */}
          <div className="flex items-center">
            <div className="[font-family:'Cairo',Helvetica] font-semibold text-black text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Logo
            </div>
            <div className="ml-[5px] flex items-center">
              <div className="w-4 h-4 bg-[#d9d9d9] rounded-lg"></div>
              <div className="ml-[7px] [font-family:'Cairo',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                EN
              </div>
            </div>
          </div>

          {/* Main navigation */}
          <nav className="flex items-center">
            <ul className="flex items-center">
              {mainNavItems.map((item, index) => (
                <li
                  key={index}
                  className="h-[65px] flex items-center justify-center"
                >
                  <a
                    href="#"
                    className="[font-family:'Cairo',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal] px-3"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Client login button */}
            <Button className="ml-4 bg-[#2b1f51] text-white rounded-[10px] h-10 w-[136px]">
              <span className="[font-family:'Cairo',Helvetica] font-normal text-white text-base text-center">
                client login
              </span>
              <ArrowRightIcon className="ml-2 w-[18px] h-[18px]" />
            </Button>
          </nav>
        </div>

        {/* Secondary navigation */}
        <div className="absolute w-[1118px] h-16 bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-[0px_0px_5px_5px]">
          <div className="flex items-center h-full">
            {/* Secondary nav items */}
            <div className="flex items-center gap-[35px] ml-[164px]">
              {secondaryNavItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Cairo',Helvetica] font-light text-black text-base tracking-[0] leading-[normal] whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Flag icons */}
          <div className="flex items-start gap-[30px] absolute top-[20px] left-[164px]">
            {flagImages.map((flag, index) => (
              <img
                key={index}
                className="w-6 h-6 object-cover"
                alt={flag.alt}
                src={flag.src}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
