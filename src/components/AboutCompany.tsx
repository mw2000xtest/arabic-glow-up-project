import React from 'react';
const AboutCompany = () => {
  return <section id="about" className="py-16 bg-ishraq-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ishraq-gold mb-6 text-right">نبذة عن إشراق</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <img alt="خدمات الرعاية الصحية المنزلية" className="rounded-lg shadow-xl max-w-full h-auto" src="/lovable-uploads/82ddf1e4-b061-4f30-863f-e80b4df83a87.jpg" />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-right text-gray-700 leading-relaxed mb-6">
                شركة إشراق للخدمات الطبية المنزلية هي شركة سعودية مقرها مدينة جدة، متخصصة في تقديم خدمات الرعاية الصحية المنزلية من خلال فريق طبي وتمريضي مؤهل، بهدف توفير بيئة علاجية آمنة ومريحة داخل منزل المريض، بما يتماشى مع أعلى معايير الجودة والسلامة، وبما يدعم رؤية المملكة 2030 في تطوير جودة الحياة والخدمات الصحية
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ishraq-gold mb-6 text-right">رؤيتــــنا</h2>
          <p className="text-right text-ishraq leading-relaxed">
            نسعى في إشراق إلى أن نكون الرواد في تقديم الرعاية الصحية المنزلية في المملكة العربية السعودية، والمساهم الأبرز في تحسين جودة حياة الأفراد وتمكينهم من الحصول على رعاية متخصصة في بيئة مريحة وآمنة، بما يتوافق مع تطلعات رؤية المملكة 2030
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ishraq-gold mb-6 text-right">رسالتنا</h2>
          <p className="text-right text-ishraq leading-relaxed">
            توفير خدمات صحية منزلية شاملة، ذات جودة عالية، ترتكز على احتياجات المريض و، وتقدم بواسطة فريق طبي و تمريضي مؤهل بإشراف مباشر من الأطباء، باستخدام أحدث التقنيات الطبية لضمان أفضل نتائج علاجية
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ishraq-gold mb-6 text-right">مبادئنا</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-ishraq text-lg mb-2 text-right">الجودة والتميّز</h4>
              <p className="text-gray-700 text-right">الالتزام بتقديم أعلى مستويات الجودة في كل خدماتنا الطبية.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-ishraq text-lg mb-2 text-right">الرحمة والإنسانية</h4>
              <p className="text-gray-700 text-right">التعامل مع المرضى بأعلى درجات الرحمة والاحترام والإنسانية.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-ishraq text-lg mb-2 text-right">الخصوصية والسرية</h4>
              <p className="text-gray-700 text-right">ضمان خصوصية المريض والحفاظ على سرية معلوماته الطبية.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-ishraq-gold mb-6 text-right">أهداف الشــــركة</h2>
          <ul className="list-none mr-6 text-right text-ishraq space-y-4">
            <li className="flex items-center justify-end">
              <span className="text-right">تحسين تجربة المريض داخل المملكة من خلال تقديم خدمات منزلية بجودة عالية</span>
              <span className="text-ishraq-gold ml-2 text-xl">●</span>
            </li>
            <li className="flex items-center justify-end">
              <span>تقليل الحاجة للزيارات المتكررة للمستشفيات</span>
              <span className="text-ishraq-gold ml-2 text-xl">●</span>
            </li>
            <li className="flex items-center justify-end">
              <span>دعم الأسر وتمكينها من رعاية أفرادها داخل المنزل</span>
              <span className="text-ishraq-gold ml-2 text-xl">●</span>
            </li>
            <li className="flex items-center justify-end">
              <span>المساهمة في تحقيق أهداف وزارة الصحة ورؤية 2030</span>
              <span className="text-ishraq-gold ml-2 text-xl">●</span>
            </li>
            <li className="flex items-center justify-end">
              <span>التوسع في خدماتنا لتشمل جميع مناطق المملكة</span>
              <span className="text-ishraq-gold ml-2 text-xl">●</span>
            </li>
          </ul>
        </div>
      </div>
    </section>;
};
export default AboutCompany;