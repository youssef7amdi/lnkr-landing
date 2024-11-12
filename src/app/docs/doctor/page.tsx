'use client';

import { useState } from 'react';

const doctorApp: any = {
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
      'Navigate to Clinic Management',
      <>
        Click on Visit Our App:
        <a
          href="https://clinic.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://clinic.lnkrtech.com/
        </a>
      </>,
    ],
    registration: [
      <>
        To create a new account:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>Enter Doctor info: full name, mobile & password</li>
          <li>Enter Clinic info: name, phone number, and pricing list</li>
        </ul>
      </>,
      <>
        To login, go to:{' '}
        <a
          href="https://clinic.lnkrtech.com/login"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://clinic.lnkrtech.com/login
        </a>
      </>,
    ],
    settings: [
      'The user must first add all relevant information about the Clinic. Simply click on Settings, then Clinic',
      'Make sure to fill out the correct info, so the patients can easily find your Clinic.',
    ],
    contracts: [
      'Navigate to the side bar and click on Contracts, to see your Pricing List of Services.',
      'You can easily add any other Service besides Examination and Follow Up.',
    ],
    'Search Patient': [
      "Users will simply enter the patient's mobile or card number, choose the corresponding Service and click on Access Profile.",
      "Under Basic Info, users will see the patient's basic information e.g. age, gender, insurance company, and other medical information entered by the patient through Lnkr Mobile App.",
      'Under Prescriptions, you will find all previous records as entered by other doctors. For those records previously entered by yourself, you will have a green flag under Yours in the table. To create a new prescription, simply click on Add Prescription. Then choose the suitable medication and dosage. You can also add Diagnosis, if necessary. Once submitted it will instantaneously be reflected on the Patient Mobile App and insurance company, in case the patient is insured and you have a running contract with it.',
      'Same goes for Lab & Radiology, you will find all previous results that have been conducted. Adding new records will be exactly the same way.',
      'Kindly note that all records will be shared with the patient and insurance company, except for Personal Notes. This will not be shared with patients or other doctors.',
    ],
    More: [
      'This is where users can find Daily & Monthly Visits.',
      'Under Monthly Summary, users can validate the billings for Patient Visits.',
    ],
    Requests: [
      'Navigate to the side bar and click on Requests, to join either a hospital or an insurance company of your choice. You can also check the status of your request. Once a request is approved, you will find all relevant information under Contracts.',
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
      'انتقل إلى العيادة',
      <>
        انقر فوق زيارة تطبيقنا:
        <a
          href="https://clinic.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://clinic.lnkrtech.com/
        </a>
      </>,
    ],
    التسجيل: [
      <>
        لإنشاء حساب جديد:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>
            أدخل معلومات الطبيب: الإسم الكامل، والهاتف المحمول وكلمة المرور.
          </li>
          <li>
            أدخل معلومات العيادة: الإسم، ورقم الهاتف وسعر الفحص والمتابعة.
          </li>
        </ul>
      </>,
      <>
        لتسجيل الدخول، انتقل إلى:{' '}
        <a
          href="https://clinic.lnkrtech.com/login"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://clinic.lnkrtech.com/login
        </a>
      </>,
    ],
    الإعدادات: [
      'يجب على المستخدم أولاً إضافة جميع المعلومات ذات الصلة بمركز العيادة. ما عليك سوى النقر فوق "الإعدادات"، ثم "العيادة".',
      'تأكد من ملء جميع المعلومات بشكل صحيح، حتى يتمكن المرضى من العثور على العيادة الخاصة بك بسهولة.',
    ],
    التعاقدات: [
      'انتقل إلى الشريط الجانبي وانقر على العقود لرؤية قائمة أسعار الخدمات الخاصة بك.',
      'يمكنك بسهولة إضافة أي خدمة أخرى بالإضافة إلى الفحص والمتابعة.',
    ],
    'البحث عن المريض': [
      'كل ما على المستخدم فعله هو إدخال رقم الهاتف المحمول أو البطاقة الخاصة بالمريض واختيار الخدمة المناسبة والنقر على "ملف الوصول".',
      'تحت المعلومات الأساسية، سيرى المستخدم المعلومات الأساسية للمريض مثل العمر والجنس وشركة التأمين التابع لها وغيرها من المعلومات الطبية التي أدخلها المريض من خلال التطبيق الخاص به.',
      'تحت الوصفات الطبية، ستجد جميع السجلات السابقة كما أدخلها أطباء آخرون. بالنسبة للسجلات التي أدخلتها بنفسك سابقًا، سيكون لديك علم أخضر أسفل خاصتك في الجدول. لإنشاء وصفة طبية جديدة، ما عليك سوى النقر فوق إضافة وصفة طبية. ثم اختر الدواء و الجرعة المناسبين. يمكنك أيضًا إضافة التشخيص، إذا لزم الأمر. بمجرد إرسالها، سيتم عرضها على الفور على تطبيق الهاتف المحمول للمريض وشركة التأمين، في حالة تأمين المريض ولديك عقد ساري معها.',
      'ينطبق الأمر نفسه على المختبر والأشعة، حيث ستجد جميع النتائج السابقة التي تم إجراؤها. وستتم إضافة سجلات جديدة بنفس الطريقة تمامًا.',
      'يرجى ملاحظة أن جميع السجلات سيتم مشاركتها مع المريض وشركة التأمين، باستثناء الملاحظات الشخصية. لن يتم مشاركتها مع المرضى أو الأطباء الآخرين.',
    ],
    المزيد: [
      'سيتمكن المستخدم من العثور على جميع الزيارات اليومية والشهرية.',
      'تحت الملخص الشهري، يمكن للمستخدم التحقق من صحة الفواتير الخاصة بزيارات المرضى.',
    ],
    الطلبات: [
      'انتقل إلى الشريط الجانبي وانقر على "الطلبات" للانضمام إلى إلى مستشفى أو شركة التأمين التي تختارها. يمكنك أيضًا التحقق من حالة طلبك. بمجرد الموافقة على الطلب، ستجد جميع المعلومات ذات الصلة ضمن "التعاقدات".',
    ],
  },
};

export default function Doctor() {
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
          {language === 'en' ? 'Doctor App Documentation' : 'دليل تطبيق الطبيب'}
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
        {Object.entries(doctorApp[language]).map(([section, items]) => (
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
