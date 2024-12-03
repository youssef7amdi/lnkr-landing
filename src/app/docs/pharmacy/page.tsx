'use client';

import React, { useState } from 'react';
const pharmacyApp: any = {
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
      'Navigate to Pharmacy Center',
      <>
        Click on Visit:
        <a
          href="https://pharmacy.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://pharmacy.lnkrtech.com/
        </a>
      </>,
    ],
    Registration: [
      <>
        To create a new account:{' '}
        <ul className="ml-6 list-inside list-disc">
          Enter Pharmacy Manager info: full name, mobile & password. Enter
          Pharmacy Center info: name & phone number.
        </ul>
      </>,
      <>
        To login, go to:{' '}
        <a
          href="https://pharmacy.lnkrtech.com/login"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://pharmacy.lnkrtech.com/login
        </a>
      </>,
    ],
    Settings: [
      'The user must first add all relevant information about the Pharmacy Center. Simply click on Settings, then Pharmacy Center. Make sure to fill out the correct info, so the patients can easily find your Pharmacy Center.',
    ],
    Requests: [
      'Navigate to the side bar and click on Requests, to join an insurance company of your choice. Simply choose a company and the corresponding Network, then enter any notes you want to share with them. Once sent, the company will then process the request. The purpose here is to securely automated the billing. When an insured patient visits your center, all billings will be fully automated as per the contract.',
      'You can also check the status of your request. Once a request is approved, you will find all relevant information under Contracts.',
    ],
    'Manage Users': [
      'Navigate to the side bar and click on Manage Users, to start adding your permissions to your users.',
      <>
        There are two types of users:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>
            {' '}
            Pharmacist: responsible for direct contact with patients. Allowed to
            access: Search Patient.
          </li>
          <li>
            {' '}
            Accountant: handling billings. Allowed to access: Contracts & More.{' '}
          </li>
        </ul>
      </>,
      <>
        The Pharmacy Manager is allowed to access everything except: Search
        Patient.
      </>,
    ],
    'Search Patient': [
      "User will simply enter the patient's mobile or card number, then click on Access Profile.",
      "Under Basic Info, user will see the patient's basic information e.g. age, gender, insurance company.",
      'Under Prescriptions, user will find all previous prescriptions that have been dispensed from your pharmacy. Simply click on Create New, in case you want to dispense a medicine or any other product to the patient. Choose the medicine or product from the drop down menu & add any notes.',
      "Under Requests, user will find any requests written by doctors. To proceed with a doctor's request, click on the item, then Access Request. Select the available medicine and type any relevant notes.",
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
      'انتقل إلى الصيدلة',
      <>
        انقر فوق زيارة:
        <a
          href="https://pharmacy.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://pharmacy.lnkrtech.com/
        </a>
      </>,
    ],
    التسجيل: [
      <>
        لإنشاء حساب جديد:{' '}
        <ul className="ml-6 list-inside list-disc">
          أدخل معلومات مدير الصيدلة التحاليل: الإسم الكامل، والهاتف المحمول
          وكلمة المرور. أدخل معلومات الصيدلة التحاليل: الإسم، ورقم الهاتف.
        </ul>
      </>,
      <>
        لتسجيل الدخول، انتقل إلى:{' '}
        <a
          href="https://pharmacy.lnkrtech.com/login"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://pharmacy.lnkrtech.com/login
        </a>
      </>,
    ],
    الإعدادات: [
      'يجب على المستخدم أولاً إضافة جميع المعلومات ذات الصلة الصيدلة التحاليل. ما عليك سوى النقر فوق الإعدادات، ثم الصيدلة التحاليل. تأكد من ملء جميع المعلومات بشكل صحيح، حتى يتمكن المرضى من العثور على الصيدلة التحاليل الخاص بك بسهولة.',
    ],
    الطلبات: [
      'انتقل إلى الشريط الجانبي وانقر على الطلبات للانضمام إلى شركة التأمين التي تختارها. ما عليك سوى اختيار الشركة والشبكة المقابلة، ثم إدخال أي ملاحظات تريد مشاركتها معهم. بمجرد إرسالها، ستتمكن الشركة من الوصول إلى قائمة الأسعار الخاصة بك والبدء في إضافة قائمة الأسعار الخاصة بها وفقًا لذلك. والغرض هنا هو أتمتة الفواتير بشكل آمن. عندما يزور مريض مؤمن عليه الصيدلة سيتم أتمتة جميع الفواتير بالكامل وفقًا للعقد.',
      'يمكنك أيضًا التحقق من حالة طلبك. بمجرد الموافقة على الطلب، ستجد جميع المعلومات ذات الصلة ضمن العقود.',
    ],
    'إدارة المستخدمين': [
      'انتقل إلى الشريط الجانبي وانقر فوق إدارة المستخدمين، لبدء إضافة الأذونات إلى المستخدمين لديك.',
      <>
        هناك نوعان من المستخدمين:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>
            الصيدلي: مسؤولون عن الاتصال المباشر مع المرضى. مسموح لهم بالوصول
            إلى: البحث عن نتائج المرضى والمعلقة.
          </li>
          <li>
            {' '}
            المحاسب للتعامل مع الفواتير. مسموح لهم بالوصول إلى: العقود والمزيد.{' '}
          </li>
        </ul>
      </>,
      'يُسمح لمدير التحاليل بالوصول إلى كل شيء باستثناء: البحث عن المريض والنتائج المعلقة.',
    ],
    'البحث عن المريض': [
      'كل ما على المستخدم فعله هو إدخال رقم الهاتف المحمول أو البطاقة الخاصة بالمريض، ثم النقر على الوصول إلى الملف الشخصي.',
      'تحت المعلومات الأساسية، سيرى المستخدم المعلومات الأساسية للمريض مثل العمر والجنس وشركة التأمين.',
      'تحت الوصفات الطبية، سيجد المستخدم جميع الوصفات الطبية السابقة التي تم صرفها من الصيدلية. ما عليك سوى النقر فوق إنشاء جديد في حالة رغبتك في صرف دواء أو أي منتج آخر للمريض. اختر الدواء أو المنتج من القائمة المنسدلة وأضف أي ملاحظات.',
      'تحت الطلبات، سيجد المستخدم أي طلبات كتبها الأطباء. لمتابعة طلب الطبيب، انقر على العنصر، ثم الوصول إلى الطلب. حدد الدواء المتاح واكتب أي ملاحظات ذات صلة.',
    ],
    المزيد: [
      'هذا هو المكان الذي يمكن للمستخدم العثور فيه على جميع التفاصيل ذات الصلة بالزيارات اليومية والشهرية.',
      'تحت الملخص الشهري، يمكن للمستخدم التحقق من صحة فواتير زيارات المرضى. سواء كانت خاصة أو مؤمنة، سيجد المستخدم جميع الأرقام المتراكمة من بداية الشهر.',
    ],
  },
};

export default function PharmacyDocs() {
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
          {language === 'en' ? 'Pharmacy Documentation' : 'دليل الصيدلة'}
        </h2>
        <button
          onClick={toggleLanguage}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          {language === 'en' ? 'العربية' : 'English'}
        </button>
      </div>
      {/* Pharmacy Center Documentation */}
      <section className="space-y-8">
        {Object.entries(pharmacyApp[language]).map(([section, items]) => (
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
