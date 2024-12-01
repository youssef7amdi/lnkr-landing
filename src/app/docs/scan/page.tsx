'use client';

import React, { useState } from 'react';
const scanApp: any = {
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
      'Navigate to Radiology Center',
      <>
        Click on Visit:
        <a
          href="https://scan.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://scan.lnkrtech.com/
        </a>
      </>,
    ],
    Registration: [
      <>
        To create a new account:{' '}
        <ul className="ml-6 list-inside list-disc">
          Enter Radiology Manager info: full name, mobile & password. Enter Radiology Center info: name & phone number.
        </ul>
      </>,
      <>
        To login, go to:{' '}
        <a
          href="https://scan.lnkrtech.com/login"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://scan.lnkrtech.com/login
        </a>
      </>,
    ],
    Settings: [
      "The user must first add all relevant information about the Radiology Center. Simply click on Settings, then Radiology Center. Make sure to fill out the correct info, so the patients can easily find your Radiology Center.",
    ],
    Contracts: [
      'Navigate to the side bar and click on Contracts, to start adding your pricing list.',
      'You can filter your services, by either Category or Insurance. You can also search by typing down the service name. Once you click on a specific service, you will find all relevant pricing list for each of your contracts.',
    ],
    Requests: [
      "Navigate to the side bar and click on Requests, to join an insurance company of your choice. Simply choose a company and the corresponding Network, then enter any notes you want to share with them.",
      "Once sent, the company will then have access to your pricing list and start adding their pricing list accordingly. The purpose here is to securely automated the billing. When an insured patient visits your center, all billings will be fully automated as per the contract.",
      "You can also check the status of your request. Once a request is approved, you will find all relevant information under Contracts.",
    ],
    'Manage Users': [
      'Navigate to the side bar and click on Manage Users, to start adding your permissions to your users.',
      <>
        There are two types of users:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>Technician: responsible for direct contact with patients. Allowed to access: Search Patient & Pending Results.</li>
          <li>Accountant: handling billings. Allowed to access: Contracts & More.</li>
        </ul>
      </>,
      <>
        The <u>Radiology Manager</u> is allowed to access everything except: Search Patient & Pending Results.
      </>,
    ],
    'Search Patient': [
      "User will simply enter the patient's mobile or card number, then click on Access Profile.",
      "Under Basic Info, user will see the patient's basic information e.g. age, gender, insurance company.",
      "Under Results, user will find all previous results that have been conducted in your center. Simply click on Create New, in case you want to conduct a specific service to the patient. You will only find the services available entered by the Manager under Contracts. You simply can not conduct a service without its corresponding price. Choose suitable Title, select the service from the drop down menu & add any notes. Once confirmed, the request will be transferred to Pending.",
      "Under Requests, user will find any requests written by doctors. To proceed with a doctor's request, click on the item. Once the sample is collected from the patient, click on Access Request. Add a suitable Title & any relevant notes. Once confirmed, the request will be transferred to Pending.",
      "Under Pending, user can simply upload imaging and reports for each service conducted. The result will be instantly accessible for patient on Lnkr App.",
    ],
    'Pending Results': [
      "Once results are out, user can navigate to Pending Results section and search for patient and simply select the relative item.",
      "User will see a detailed description of Patient Visit.",
      "Again, user can upload imaging and reports for each service conducted. The result will be instantly accessible for patient on Lnkr App.",
    ],
    More: [
      'This is where user can find all relevant details about Daily & Monthly Visits.',
      'Under Monthly Summary, user can validate the billings for Patient Visits. Whether private or insured, user will find all accumulated numbers from the beginning of the month.',
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
      'انتقل إلى مركز الأشعة',
      <>
        انقر فوق زيارة:
        <a
          href="https://scan.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://scan.lnkrtech.com/
        </a>
      </>,
    ],
    التسجيل: [
      <>
        لإنشاء حساب جديد:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>
            أدخل معلومات مدير مركز الأشعة: الإسم الكامل، والهاتف المحمول وكلمة
            المرور.
          </li>
          <li>أدخل معلومات مركز الأشعة: الإسم، ورقم الهاتف.</li>
        </ul>
      </>,
      <>
        لتسجيل الدخول، انتقل إلى:{' '}
        <a
          href="https://scan.lnkrtech.com/login"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://scan.lnkrtech.com/login
        </a>
      </>,
    ],
    الإعدادات: [
      "يجب على المستخدم أولاً إضافة جميع المعلومات ذات الصلة بمركز الأشعة. ما عليك سوى النقر فوق الإعدادات، ثم مركز الأشعة. تأكد من ملء جميع المعلومات بشكل صحيح، حتى يتمكن المرضى من العثور على مركز الأشعة الخاص بك بسهولة.",
    ],
    التعاقدات: [
      "انتقل إلى الشريط الجانبي وانقر فوق العقود، لبدء إضافة قائمة التسعير الخاصة بك.",
      "يمكنك تصفية خدماتك حسب الفئة أو التأمين. كما يمكنك البحث عن طريق كتابة اسم الخدمة. بمجرد النقر على خدمة معينة، ستجد قائمة الأسعار ذات الصلة لكل عقد من عقودك.",
    ],
    الطلبات: [
      "انتقل إلى الشريط الجانبي وانقر على الطلبات للانضمام إلى شركة التأمين التي تختارها. ما عليك سوى اختيار الشركة والشبكة المقابلة، ثم إدخال أي ملاحظات تريد مشاركتها معهم.",
      "بمجرد إرسالها، ستتمكن الشركة من الوصول إلى قائمة الأسعار الخاصة بك والبدء في إضافة قائمة الأسعار الخاصة بها وفقًا لذلك. والغرض هنا هو أتمتة الفواتير بشكل آمن. عندما يزور مريض مؤمن عليه مركزك، سيتم أتمتة جميع الفواتير بالكامل وفقًا للعقد.",
      "يمكنك أيضًا التحقق من حالة طلبك. بمجرد الموافقة على الطلب، ستجد جميع المعلومات ذات الصلة ضمن العقود.",
      ],  
    'إدارة المستخدمين': [
      'انتقل إلى الشريط الجانبي وانقر فوق إدارة المستخدمين، لبدء إضافة الأذونات إلى المستخدمين لديك.',
      <>
        هناك نوعان من المستخدمين:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>الفني: مسؤولون عن الاتصال المباشر مع المرضى. مسموح لهم بالوصول إلى: البحث عن نتائج المرضى والمعلقة. </li>
          <li>المحاسب: للتعامل مع الفواتير. مسموح لهم بالوصول إلى: العقود والمزيد. </li>
        </ul>
      </>,
      'يُسمح لمدير الأشعة بالوصول إلى كل شيء باستثناء: البحث عن المريض والنتائج المعلقة.',
    ],
    'البحث عن المريض': [
      "كل ما على المستخدم فعله هو إدخال رقم الهاتف المحمول أو البطاقة الخاصة بالمريض، ثم النقر على الوصول إلى الملف الشخصي.",
      "تحت المعلومات الأساسية، سيرى المستخدم المعلومات الأساسية للمريض مثل العمر والجنس وشركة التأمين.",
      "تحت النتائج، سيجد المستخدم جميع النتائج السابقة التي تم إجراؤها في مركزك. ما عليك سوى النقر فوق إنشاء جديد، في حالة رغبتك في إجراء خدمة معينة للمريض. ستجد فقط الخدمات المتاحة التي أدخلها المدير ضمن العقود. لا يمكنك إجراء خدمة بدون السعر المقابل لها. اختر العنوان المناسب، ثم حدد الخدمة من القائمة المنسدلة وأضف أي ملاحظات. بمجرد التأكيد، سيتم تحويل الطلب إلى معلق.",
      "تحت الطلبات، سيجد المستخدم أي طلبات كتبها الأطباء. للمتابعة بطلب الطبيب، انقر على العنصر. بمجرد جمع العينة من المريض، انقر على طلب الوصول. أضف عنوانًا مناسبًا وأي ملاحظات ذات صلة. بمجرد التأكيد، سيتم تحويل الطلب إلى معلق.",
      "في حالة الانتظار، يمكن للمستخدم ببساطة تحميل الصور والتقارير لكل خدمة يتم إجراؤها. ستكون النتيجة متاحة على الفور للمريض على تطبيق لنكر.",
    ],
    'النتائج المعلقة': [
      "بمجرد ظهور النتائج، يمكن للمستخدم الانتقال إلى قسم النتائج المعلقة والبحث عن المريض وتحديد العنصر ببساطة.",
      "سوف يرى المستخدم وصفًا تفصيليًا لزيارة المريض.",
      "مرة أخرى، يمكن للمستخدم تحميل الصور والتقارير لكل خدمة يتم إجراؤها. وستكون النتيجة متاحة على الفور للمريض على تطبيق لنكر.",
    ],
    المزيد: [
    "هذا هو المكان الذي يمكن للمستخدم العثور فيه على جميع التفاصيل ذات الصلة بالزيارات اليومية والشهرية.",
    "تحت الملخص الشهري، يمكن للمستخدم التحقق من صحة فواتير زيارات المرضى. سواء كانت خاصة أو مؤمنة، سيجد المستخدم جميع الأرقام المتراكمة من بداية الشهر.",
    ],
  },
};

export default function ScanDocs() {
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
          {language === 'en' ? 'Radiology Center Documentation' : 'دليل مركز الأشعة'}
        </h2>
        <button
          onClick={toggleLanguage}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          {language === 'en' ? 'العربية' : 'English'}
        </button>
      </div>
      {/* Radiology Center Documentation */}
      <section className="space-y-8">
        {Object.entries(scanApp[language]).map(([section, items]) => (
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
