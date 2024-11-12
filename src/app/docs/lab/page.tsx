'use client';

import React, { useState } from 'react';
const labApp: any = {
  en: {
    'Landing Page': [
      <>
        Go to our website:{' '}
        <a
          href="https://lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://lnkrtech.com/
        </a>
      </>,
      'Navigate to Lab Center',
      <>
        Click on Visit Our App:
        <a
          href="https://lab.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://lab.lnkrtech.com/
        </a>
      </>,
    ],
    registration: [
      <>
        To create a new account:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>Enter Lab Manager: full name, mobile & password</li>
          <li>Enter Lab Center info: name & phone number</li>
        </ul>
      </>,
      <>
        To login, go to:{' '}
        <a
          href="https://lab.lnkrtech.com/login"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://lab.lnkrtech.com/login
        </a>
      </>,
    ],
    settings: [
      'The user must first add all relevant information about the Lab Center. Simply click on Settings, then Lab Center.',
      'Make sure to fill out the correct info, so the patients can easily find your Lab Center.',
    ],
    contracts: [
      'Navigate to the side bar and click on Contracts, to start adding your pricing list.',
      'You can filter your services, by either Category or Insurance. You can also search by typing down the service name.',
    ],
    'Manage Users': [
      'Navigate to the side bar and click on Manage Users, to start adding your permissions to your users.',
      <>
        There are two types of users:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>
            <u>Technicians</u>: responsible for direct contact with patients.
            Allowed to access: <strong>Search Patient & Pending Results</strong>
          </li>
          <li>
            <u>Accountants</u>: handling billings. Allowed to access:{' '}
            <strong>Contracts</strong>
            (view only) & <strong>More</strong>.
          </li>
        </ul>
      </>,
      <>
        The <u>Lab Manager</u> is allowed to access everything except: Search
        Patient & Pending Results.
      </>,
    ],
    'Search Patient': [
      "Users will simply enter the patient's mobile or card number, then click on Access Profile.",
      "Under Basic Info, users will see the patient's basic information e.g. age, gender, insurance company.",
      'Under Lab Results, users previous lab results that have been conducted in your lab & also any requests from the doctor.',
      "To proceed with the doctor's request, click on the item. Make sure that the price of the service is available. Once the sample is collected from the patient, click on Access Lab Request. Add Lab Title & any relevant notes. Once confirmed, the request will be transferred to Pending Results.",
      'In case the requested service is not available i.e. have no price. Users can not conduct the service.',
      'In case of no doctor’s request, users can directly conduct any services. Again, once the sample is collected from the patient, click on Request New Lab. Choose appropriate Lab Title, select the service from the drop down menu & add any notes. Once confirmed, the request will be transferred to Pending Results.',
    ],
    'Pending Results': [
      'Once the results are out, users navigate to Pending Results and select the relative item.',
      'Users will see a detailed description of Patient Visit.',
      'Click on the Update Results button, and upload the PDF file, where it will be instantly accessible for patients on Lnkr App.',
    ],
    More: [
      'This is where users can find Daily & Monthly Visits.',
      'Under Monthly Summary, users can validate the billings for Patient Visits.',
    ],
    Requests: [
      'Navigate to the side bar and click on Requests, to join an insurance company of your choice. You can also check the status of your request. Once a request is approved, you will find all relevant information under Contracts.',
    ],
  },
  ar: {
    'الموقع اإللكتروني': [
      <>
        انتقل إلى موقعنا الإلكتروني:{' '}
        <a
          href="https://lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://lnkrtech.com/
        </a>
      </>,
      'انتقل إلى مركز المختبر',
      <>
        انقر فوق زيارة تطبيقنا:
        <a
          href="https://lab.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://lab.lnkrtech.com/
        </a>
      </>,
    ],
    التسجيل: [
      <>
        لإنشاء حساب جديد:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>
            أدخل معلومات مدير المختبر: الإسم الكامل، والهاتف المحمول وكلمة
            المرور.
          </li>
          <li>أدخل معلومات مركز المختبر: الإسم، ورقم الهاتف.</li>
        </ul>
      </>,
      <>
        لتسجيل الدخول، انتقل إلى:{' '}
        <a
          href="https://lab.lnkrtech.com/login"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://lab.lnkrtech.com/login
        </a>
      </>,
    ],
    الإعدادات: [
      'يجب على المستخدم أولاً إضافة جميع المعلومات ذات الصلة بمركز المختبر. ما عليك سوى النقر فوق "الإعدادات"، ثم "مركز المختبر".',
      'تأكد من ملء جميع المعلومات بشكل صحيح، حتى يتمكن المرضى من العثور على مركز المختبر الخاص بك بسهولة.',
    ],
    التعاقدات: [
      'انتقل إلى الشريط الجانبي وانقر فوق العقود، لبدء إضافة قائمة التسعير الخاصة بك.',
      'يمكنك تصفية خدماتك حسب الفئة أو التأمين. كما يمكنك البحث عن طريق كتابة اسم الخدمة.',
    ],
    'إدارة المستخدمين': [
      'انتقل إلى الشريط الجانبي وانقر فوق إدارة المستخدمين، لبدء إضافة الأذونات إلى المستخدمين لديك.',
      <>
        هناك نوعان من المستخدمين:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>
            <u>الفنّيون</u>: مسؤولون عن الاتصال المباشر مع المرضى. مسموح لهم
            بالوصول إلى: البحث عن نتائج المرضى والمعلقة.
          </li>
          <li>
            <u>المحاسبون</u>: للتعامل مع الفواتير. مسموح لهم بالوصول إلى: العقود
            (عرض فقط) والمزيد.
          </li>
        </ul>
      </>,
      'يُسمح لمدير المختبر بالوصول إلى كل شيء باستثناء: البحث عن المريض والنتائج المعلقة.',
    ],
    'البحث عن المريض': [
      'كل ما على المستخدم فعله هو إدخال رقم الهاتف المحمول أو البطاقة الخاصة بالمريض، ثم النقر على "الوصول إلى الملف الشخصي".',
      'تحت المعلومات الأساسية، سيرى المستخدم المعلومات الأساسية للمريض مثل العمر والجنس وشركة التأمين التابع لها.',
      'تحت نتائج المختبر، يمكن للمستخدم الاطلاع على نتائج المختبر السابقة التي تم إجراؤها في مختبرك بالإضافة إلى أي طلبات من الطبيب.',
      'للمتابعة بطلب الطبيب، انقر على العنصر المطلوب. تأكد من توفر سعر الخدمة. بمجرد جمع العينة من المريض، انقر على طلب الوصول إلى المختبر. أضف عنوان المختبر وأي ملاحظات ذات صلة. بمجرد التأكيد، سيتم تحويل الطلب إلى النتائج المعلقة.',
      'في حالة عدم توفر الخدمة المطلوبة أي عدم وجود سعر لها، لا يمكن للمستخدم الحصول على الخدمة.',
      'في حالة عدم وجود طلب من الطبيب، يمكن للمستخدمين إجراء أي خدمات بشكل مباشر. مرة أخرى، بمجرد جمع العينة من المريض، انقر فوق طلب مختبر جديد. اختر عنوان المختبر المناسب، وحدد الخدمة من القائمة المنسدلة وأضف أي ملاحظات. بمجرد التأكيد، سيتم تحويل	لطلب إلى النتائج المعلقة.',
    ],
    'النتائج المعلقة': [
      'بمجرد ظهور النتائج، ينتقل المستخدم إلى النتائج المعلقة ويختارون التحليل المطلوب.',
      'سيشاهد المستخدم وصفًا تفصيليًا لزيارة المريض.',
      'انقر فوق زر تحديث النتائج، ثم قم بتحميل ملف PDF، حيث سيكون متاحًا على الفور للمرضى على تطبيق Lnkr.',
    ],
    المزيد: [
      'سيتمكن المستخدم من العثور على جميع الزيارات اليومية والشهرية.',
      'تحت الملخص الشهري، يمكن للمستخدم التحقق من صحة الفواتير الخاصة بزيارات المرضى.',
    ],
    الطلبات: [
      'انتقل إلى الشريط الجانبي وانقر على "الطلبات" للانضمام إلى شركة التأمين التي تختارها. يمكنك أيضًا التحقق من حالة طلبك. بمجرد الموافقة على الطلب، ستجد جميع المعلومات ذات الصلة ضمن "العقود".',
    ],
  },
};

export default function LabDocs() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ar' : 'en'));
  };
  return (
    <div
      className={`space-y-[2rem] overflow-auto text-[1.6rem]`}
      style={{
        direction: language === 'ar' ? 'rtl' : 'ltr',
      }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[1.8rem] font-bold tracking-wide">
          {language === 'en' ? 'Lab App Documentation' : 'دليل تطبيق المختبر'}
        </h2>
        <button
          onClick={toggleLanguage}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          {language === 'en' ? 'العربية' : 'English'}
        </button>
      </div>
      {/* Lab App Documentation */}
      <section className="space-y-8">
        {Object.entries(labApp[language]).map(([section, items]) => (
          <div key={section} className="space-y-3">
            <p>
              <strong>{section.replace(/([A-Z])/g, ' $1')}</strong>
            </p>
            <ul className="ml-4 list-inside list-disc">
              {(items as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>{' '}
    </div>
  );
}
