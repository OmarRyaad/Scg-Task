import { Badge } from "../../../components/UI/Badge";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../components/UI/Card";

export const CallToActionSection = () => {
  const packages = [
    { color: "#fbe06b", id: 1 },
    { color: "#c6cde0", id: 2 },
    { color: "#69a0e0", id: 3 },
  ];

  const features = [
    { label: "NVMe Storage", value: "60GB" },
    { label: "Website (s)", value: "15" },
    { label: "RAM", value: "4" },
    { label: "CPU", value: "3" },
    { label: "cPanel Control Panel", value: "" },
    { label: "Subdomains", value: "Unlimited" },
    { label: "MySQL & SQL Databases", value: "Unlimited" },
    { label: "Email Account", value: "Unlimited" },
    { label: "FTP Accounts", value: "Unlimited" },
    { label: "Dedicated Name Server(ns1,ns2)", value: "" },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-[603px] bg-[url(https://c.animaapp.com/mc1s1pc84dIubF/img/clip-path-group.png)] bg-center bg-no-repeat bg-cover z-0" />

      {/* Main content */}
      <div className="relative mt-[250px] z-10 max-w-6xl w-full px-4 text-center">
        <h2 className="text-[64px] font-semibold text-[#2b1f51] [font-family:'Cairo',Helvetica] [direction:rtl] mb-16">
          اختار الخطط
        </h2>

        <div className="flex flex-wrap justify-center gap-[60px]">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="w-[310px] rounded-[10px_10px_5px_5px] shadow-[0px_0px_15px_#00000012] bg-white relative p-0 border-0"
            >
              <div
                className="w-full h-5 rounded-[10px_10px_0px_0px] shadow-[0px_0px_15px_#00000012]"
                style={{ backgroundColor: pkg.color }}
              />

              <CardHeader className="pt-[41px] pb-0 px-0 text-center">
                <h3 className="mx-auto [font-family:'Cairo',Helvetica] font-semibold text-[#092346] text-[28px]">
                  P2-HOST
                </h3>
              </CardHeader>

              <CardContent className="p-0">
                <div className="w-[231px] h-14 mx-auto relative">
                  <div className="absolute top-[39px] left-0 [font-family:'Cairo',Helvetica] font-normal text-[#17171780] text-2xl text-left tracking-[0] leading-[normal] whitespace-nowrap [direction:rtl]">
                    د.ل
                  </div>
                  <div className="w-[195px] absolute top-0 left-8 [font-family:'Cairo',Helvetica] font-extralight text-[#092346] text-[80px] leading-[normal] whitespace-nowrap">
                    91.30
                  </div>
                </div>

                <div className="w-[168px] h-7 mt-[32px] mx-auto flex justify-end">
                  <div className="font-extralight text-[#00000080] text-2xl text-left leading-[normal] whitespace-nowrap [direction:rtl] mt-[5px] mr-2">
                    <span>120</span>
                    <span className="text-sm">د.ل</span>
                  </div>
                  <Badge className="w-[97px] h-7 bg-[#fee9df] text-[#f67a3c] rounded-[5px] font-extralight">
                    <span className="[direction:rtl]">تخفيض 30%</span>
                  </Badge>
                </div>

                <div className="flex justify-center mt-[48px]">
                  <Button className="w-[116px] h-10 bg-[#2b1f51] rounded-[5px] hover:bg-[#3d2c70]">
                    <span className="[font-family:'Cairo',Helvetica] font-semibold text-white text-sm [direction:rtl]">
                      اطلب الان
                    </span>
                  </Button>
                </div>

                <div className="mt-[58px] flex justify-center">
                  <img
                    className="w-[252px] h-0.5"
                    alt="Line"
                    src="https://c.animaapp.com/mc1s1pc84dIubF/img/line-5.svg"
                  />
                </div>

                <div className="mt-[28px] px-[35px]">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="mb-9 [font-family:'Cairo',Helvetica] text-black text-base"
                    >
                      {feature.value ? (
                        <>
                          <span className="font-bold">{feature.value} </span>
                          <span>{feature.label}</span>
                        </>
                      ) : (
                        <span>{feature.label}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-[20px]">
                  <img
                    className="w-full h-px"
                    alt="Line"
                    src="https://c.animaapp.com/mc1s1pc84dIubF/img/line-5-1.svg"
                  />
                </div>
              </CardContent>

              <CardFooter className="flex justify-center pt-[30px] pb-[16px]">
                <span className="[font-family:'Cairo',Helvetica] font-light text-[#2b1f51] text-base">
                  compare packages
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
