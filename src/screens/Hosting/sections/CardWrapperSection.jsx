import { Card, CardContent } from "/components/UI/Card";

export const CardWrapperSection = () => {
  const domainTypes = [
    {
      type: "edu.sa للجامعات والمعاهد العليا فقط.",
      requirement:
        "خطاب رسمي إلى شركة ليبيا للاتصالات والتقنية؛ لطلب الموافقة على تسجيل اسم النطاق.",
    },
    {
      type: "med.sa للمستشفيات والعيادات.",
      requirement:
        "خطاب رسمي إلى شركة ليبيا للاتصالات والتقنية؛ لطلب الموافقة على تسجيل اسم النطاق.",
    },
    {
      type: "sch.sa للمدارس.",
      requirement:
        "خطاب رسمي إلى شركة ليبيا للاتصالات والتقنية؛ لطلب الموافقة على تسجيل اسم النطاق.",
    },
    {
      type: "gov.sa للحكومات.",
      requirement: "",
    },
  ];

  return (
    <section className="w-full max-w-[730px] px-4 mx-auto my-8">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-black tracking-[0] [font-family:'Cairo',Helvetica] [direction:rtl]">
        أسماء النطاق التي تحتاج إلى موافقة المسجل
      </h2>

      <Card className="border-none shadow-none">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col space-y-6 [direction:rtl]">
            {domainTypes.map((domain, index) => (
              <div key={index} className="flex flex-col space-y-2">
                {/* Line with dot and type */}
                <div className="flex items-start gap-2 text-base md:text-xl font-semibold text-black [font-family:'Cairo',Helvetica] tracking-[0]">
                  <span className="text-sm leading-[1.5] pt-1 text-black">
                    •
                  </span>
                  <span className="break-words">{domain.type}</span>
                </div>

                {/* Requirement below */}
                {domain.requirement && (
                  <div className="text-sm md:text-base font-normal text-black [font-family:'Cairo',Helvetica] tracking-[0] pr-4 md:pr-6 leading-relaxed">
                    {domain.requirement}
                  </div>
                )}
              </div>
            ))}

            <div className="text-sm md:text-base font-normal text-black [font-family:'Cairo',Helvetica] tracking-[0] mt-4 leading-relaxed">
              يتم تسجيله مباشرة مع شركة ليبيا للاتصالات والتقنية بعد موافقة
              الهيئة العامة للاتصالات والمعلوماتية وطلب تسجيله تحت لوحة تحكم
              العنكبوت الليبي.
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
