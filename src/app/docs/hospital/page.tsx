'use client';

import { useState } from 'react';

const hospitalApp: any = {
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
      'Navigate to Hospital',
      <>
        Click on Visit:
        <a
          href="https://hospital.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://hospital.lnkrtech.com/
        </a>
      </>,
    ],
    Registration: [
      <>
        To create a new account:{' '}
        <ul className="ml-6 list-inside list-disc">
        Enter Manager info: full name, mobile & password. Enter Hospital info: name, phone number.
        </ul>
      </>,
      <>
        To login, go to:{' '}
        <a
          href="https://hospital.lnkrtech.com/login"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://hospital.lnkrtech.com/login
        </a>
      </>,
    ],
    Settings: [
    "The user must first add all relevant information about the Hospital. Simply click on Settings, then Hospital. Make sure to fill out the correct info, so the patients can easily find your Hospital.",
    ],
    Requests: [
    "This is where doctors send requests to join your hospital. Navigate to the side bar and click on Requests. You can also check the status of your request. Once a request is approved, you will find all relevant information under Contracts.",
    "Once you choose a request, you can check with doctor is sending it, and which services he claims to conduct in your hospital. Once you approve a request, you will find it under Doctors. The doctor will be notified that request has been approved. The purpose here is to securely automated the billing. When an insured patient visits your Hospital, all billings will be fully automated as per the contract.",
    ],
    More: [
      "This is where user can find all relevant details about Daily & Monthly Visits.",
      "Under Monthly Summary, user can validate the billings for Patient Visits. Whether private or insured, user will find all accumulated numbers from the beginning of the month.",
    ],
  },
  ar: {
    'الموقع الإلكتروني': [
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
      'انتقل إلى المستشفى',
      <>
        انقر فوق زيارة:
        <a
          href="https://Hospital.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://Hospital.lnkrtech.com/
        </a>
      </>,
    ],
    التسجيل: [
      <>
        لإنشاء حساب جديد:{' '}
        <ul className="ml-6 list-inside list-disc">
        أدخل معلومات الطبيب: الإسم الكامل، والهاتف المحمول وكلمة المرور. أدخل معلومات المستشفى: الإسم، ورقم الهاتف وسعر الفحص والمتابعة.
        </ul>
      </>,
      <>
        لتسجيل الدخول، انتقل إلى:{' '}
        <a
          href="https://Hospital.lnkrtech.com/login"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://Hospital.lnkrtech.com/login
        </a>
      </>,
    ],
    الإعدادات: [
      "يجب على المستخدم أولاً إضافة جميع المعلومات ذات الصلة بمركز المستشفى. ما عليك سوى النقر فوق الإعدادات، ثم المستشفى. تأكد من ملء جميع المعلومات بشكل صحيح، حتى يتمكن المرضى من العثور على المستشفى الخاصة بك بسهولة.",
    ],
    الطلبات: [
      "هذا هو المكان الذي يرسل فيه الأطباء طلبات الانضمام إلى مستشفاك. انتقل إلى الشريط الجانبي وانقر على الطلبات. يمكنك أيضًا التحقق من حالة طلبك. بمجرد الموافقة على الطلب، ستجد جميع المعلومات ذات الصلة ضمن العقود.",
      "بمجرد اختيارك لطلب ما، يمكنك التحقق من الطبيب الذي يرسله، والخدمات التي يدعي أنه يقدمها في مستشفاك. بمجرد الموافقة على الطلب، ستجده ضمن الأطباء. سيتم إخطار الطبيب بأن الطلب قد تمت الموافقة عليه. الغرض هنا هو أتمتة الفواتير بشكل آمن. عندما يزور مريض مؤمن عليه مستشفاك، سيتم أتمتة جميع الفواتير بالكامل وفقًا للعقد.",
    ],
    المزيد: [
    "هذا هو المكان الذي يمكن للمستخدم العثور فيه على جميع التفاصيل ذات الصلة بالزيارات اليومية والشهرية.",
    "تحت الملخص الشهري، يمكن للمستخدم التحقق من صحة فواتير زيارات المرضى. سواء كانت خاصة أو مؤمنة، سيجد المستخدم جميع الأرقام المتراكمة من بداية الشهر.",
    ],
  },
};

export default function Hospital() {
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
          {language === 'en' ? 'Hospital Documentation' : 'دليل المستشفى'}
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
        {Object.entries(hospitalApp[language]).map(([section, items]) => (
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
