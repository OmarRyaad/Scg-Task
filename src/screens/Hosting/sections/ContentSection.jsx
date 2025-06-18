import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/UI/Accordion";
import { Card, CardContent } from "../../../components/UI/Card";

export const ContentSection = () => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "ما هو المخدم الافتراضي المخصص (VPS)؟",
      answer:
        "المخدم الافتراضي هو مخدم مقسم إلى بيئات استضافة منفصلة تماما. عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.",
    },
    {
      question: "متى يجب علي استخدام استضافة VPS بدلا من الاستضافة المشتركة؟",
      answer: "",
    },
    {
      question: "ما الفرق بين المخدم الافتراضي والمخدم المخصص؟",
      answer: "",
    },
    {
      question: "ماهي المواقع المتاحة لاستضافة VPS؟",
      answer: "",
    },
  ];

  return (
    <div className="flex flex-row gap-4 w-full py-8 px-4 md:px-8 lg:px-12">
      {/* Main FAQ Section */}
      <div className="flex-grow">
        <Card className="h-full shadow-[0px_0px_43.2px_22px_#09234805] rounded-[5px]">
          <CardContent className="p-6" dir="rtl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-['Cairo',Helvetica] text-xl text-[#2b1f51] py-4 text-right">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-['Cairo',Helvetica] font-light text-sm text-black leading-[30px] text-right">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* Right side cards */}
      <div className="flex flex-col gap-4 w-full max-w-[246px]">
        {/* FAQ Card */}
        <Card className="h-[248px] shadow-[0px_0px_43.2px_22px_#09234805] rounded-[5px]">
          <CardContent className="flex flex-col items-center justify-between h-full p-0">
            <div className="flex justify-center items-center pt-10">
              <img
                className="w-[101px] h-32"
                alt="FAQ Icon"
                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-228.png"
              />
            </div>
            <div className="flex flex-col items-center pb-2">
              <div className="font-['Cairo',Helvetica] font-normal text-xl text-black text-center [direction:rtl] mb-2">
                الأسئلة الشائعة
              </div>
              <img
                className="w-[135px] h-0.5"
                alt="Line"
                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/line-4.svg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Help Center Card */}
        <Card className="h-[247px] shadow-[0px_0px_43.2px_22px_#09234805] rounded-[5px]">
          <CardContent className="flex flex-col items-center justify-between h-full p-6">
            <div className="w-[65px] h-[100px] bg-[url(https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1709.png)] bg-[100%_100%] mt-2" />
            <div className="font-['Cairo',Helvetica] font-normal text-2xl text-black text-center [direction:rtl]">
              مركز المساعدة
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
