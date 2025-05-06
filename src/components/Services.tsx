import React from 'react';
import { HeartPulse, Activity, MessagesSquare, Stethoscope, TestTube, Syringe } from 'lucide-react';
const ServiceCard = ({
  title,
  description,
  icon,
  points,
  image
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  points: string[];
  image?: string;
}) => {
  return <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {image ? <div className="order-2 md:order-1">
            <div className="rounded-full overflow-hidden bg-gradient-to-r from-ishraq to-ishraq-gold p-1">
              <img src={image} alt={title} className="w-full h-auto rounded-full" />
            </div>
          </div> : <div className="order-2 md:order-1">
            <div className="rounded-full overflow-hidden bg-ishraq p-16 flex items-center justify-center">
              <div className="text-white text-7xl">{icon}</div>
            </div>
          </div>}
        
        <div className="order-1 md:order-2">
          <div className="mb-4">
            <div className="flex items-center justify-end gap-2 my-0">
              <h3 className="font-bold text-2xl text-ishraq">{title}</h3>
              <span className="text-ishraq-gold text-2xl ml-2">خدماتنا</span>
            </div>
            <p className="text-gray-700 mb-4 text-right mt-2">{description}</p>
          </div>
          <ul className="text-gray-600 space-y-2 text-right">
            {points.map((point, index) => <li key={index} className="flex items-center justify-end gap-2">
                <span>{point}</span>
                <span className="text-ishraq-gold">●</span>
              </li>)}
          </ul>
        </div>
      </div>
    </div>;
};
const Services = () => {
  const services = [{
    title: "التمريض المنزلي",
    description: "نقدم خدمات تمريض منزلية شاملة وآمنة، بإشراف كوادر تمريضية مؤهلة ومرخصة، تسهم في تحسين الحالة الصحية للمريض داخل بيئته الطبيعية والتي تشتمل على خدمات",
    icon: <HeartPulse size={80} />,
    points: ["إعطاء الأدوية والحقن", "تغيير الضمادات", "متابعة العلامات الحيوية", "رعاية بعد العمليات", "العناية بكبار السن ومرضى الأمراض المزمنة", "إعداد خطة رعاية فردية بالتنسيق مع الطبيب"],
    image: "/lovable-uploads/dc8a4b29-b8d8-4a14-bb16-963eb72aa6c5.png"
  }, {
    title: "العلاج الطبيعي",
    description: "نوفر جلسات علاج طبيعي في المنزل تهدف إلى تأهيل وتحسين قدرات المريض الحركية، وتقليل الألم وتحسين جودة الحياة من خلال خدمات",
    icon: <Activity size={80} />,
    points: ["إعادة تأهيل ما بعد الجلطات", "علاج إصابات العظام والمفاصل", "برامج علاجية لكبار السن", "تمارين علاجية مخصصة", "جلسات موجهة للأطفال"],
    image: "/lovable-uploads/e19d81f1-904d-49c5-a3ab-45b8d8d6cd72.png"
  }, {
    title: "جلسات التخاطب للأطفال",
    description: "نعمل على تطوير قدرات الأطفال اللغوية والتواصلية من خلال جلسات تخاطب متخصصة داخل المنزل",
    icon: <MessagesSquare size={80} />,
    points: ["علاج اضطرابات النطق", "التعامل مع التأخر اللغوي", "علاج التلعثم وصعوبات النطق", "تمارين تفاعلية مخصصة للأطفال", "إشراف مختصين في علم التخاطب"],
    image: "/lovable-uploads/a3478b4d-8981-451e-ae8b-9b8e7885d814.png"
  }, {
    title: "خدمة المرافق الصحي",
    description: "نقدّم خدمة المرافق الصحي لمساعدة المرضى وكبار السن في حياتهم اليومية ومرافقتهم بشكل آمن ومهني",
    icon: <Stethoscope size={80} />,
    points: ["المساعدة في تناول الأدوية", "المرافقة أثناء الزيارات الطبية", "الدعم في النظافة الشخصية والحركة", "تقديم الدعم النفسي والاجتماعي", "متابعة النظام الغذائي"],
    image: "/lovable-uploads/24c86dda-3de0-4afd-9d23-5fadc664de11.png"
  }, {
    title: "خدمات المختبر",
    description: "نوفّر خدمات سحب العينات من المنزل لضمان راحة المريض وتسريع الحصول على النتائج المخبرية، وتشتمل على خدمات",
    icon: <TestTube size={80} />,
    points: ["سحب عينات الدم", "الفحوصات دورية", "التحاليل الشاملة"],
    image: "/lovable-uploads/75b750a2-4e28-4a1c-89b4-7d5de6be2a07.png"
  }, {
    title: "خدمات اللقاحات",
    description: "نوفّر اللقاحات الموسمية والمتخصصة داخل المنزل لضمان الوقاية الصحية لكافة أفراد الأسرة",
    icon: <Syringe size={80} />,
    points: ["لقاحات الأطفال", "لقاحات الإنفلونزا الموسمية", "لقاحات السفر", "التوعية صحية"],
    image: "/lovable-uploads/dbc23f60-b547-4924-8c4a-42b1c4911dc2.png"
  }];
  return <section id="services" className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} points={service.points} image={service.image} />)}
        </div>
      </div>
    </section>;
};
export default Services;