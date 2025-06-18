import { Card, CardContent } from "../../../components/UI/Card";

export const MainContentSection = () => {
  const domains = [
    { id: 1, name: ".edu.sa", price: "20 دولار فقط", hasImage: true },
    { id: 2, name: ".med.sa", price: "20 دولار فقط", hasImage: true },
    { id: 3, name: ".com.sa", price: "20 دولار فقط", hasImage: true },
    { id: 4, name: ".id.sa", price: "20 دولار فقط", hasImage: true },
    { id: 5, name: ".net.sa", price: "20 دولار فقط", hasImage: true },
    { id: 6, name: ".org.sa", price: "20 دولار فقط", hasImage: true },
    { id: 7, name: ".sch.sa", price: "20 دولار فقط", hasImage: true },
    { id: 8, name: ".plc.sa", price: "20 دولار فقط", hasImage: true },
  ];

  return (
    <section className="w-full py-2 px-4 sm:px-6 lg:px-8 main-content-section">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[1170px] mx-auto">
        {domains.map((domain) => (
          <Card
            key={domain.id}
            className="shadow-[0_0_20px_1px_#0000000f] bg-white"
          >
            <CardContent className="p-4 sm:p-6 h-full flex items-center justify-between">
              <div className="flex items-center justify-between w-full gap-4">
                <div className="text-right flex-1">
                  <div className="font-semibold text-[#2b1f51] text-lg sm:text-xl md:text-2xl font-['Cairo',Helvetica] whitespace-nowrap">
                    {domain.name}
                  </div>
                  <div className="font-light text-black text-xs sm:text-sm md:text-base font-['Cairo',Helvetica] mt-1 [direction:rtl] whitespace-nowrap">
                    {domain.price}
                  </div>
                </div>
                {domain.hasImage && (
                  <img
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover"
                    alt={`${domain.name} icon`}
                    src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/image-1.png"
                  />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
