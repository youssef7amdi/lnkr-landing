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
      'Navigate to Doctor',
      <>
        Click on Visit:
        <a
          href="https://clinic.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://clinic.lnkrtech.com/
        </a>
      </>,
    ],
    Registration: [
      <>
        To create a new account:{' '}
        <ul className="ml-6 list-inside list-disc">
        Enter Doctor info: full name, mobile & password. Enter Clinic info: name, phone number, and pricing list.
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
    Settings: [
    "The user must first add all relevant information about the Clinic. Simply click on Settings, then Clinic. Make sure to fill out the correct info, so the patients can easily find your Clinic.",
    "Our system supports managing multiple clinics. User can simply create a new clinic, by entering basic info: name & phone number. In order to access that clinic, simply logout, then login again and then choose the corresponding clinic. Kindly make sure that each clinic is a totally separate entity acting on its own."
    ],
    Contracts: [
      'Navigate to the side bar and click on Contracts, to see your Pricing List of Services.',
      'You can easily add any other Service besides Examination and Follow Up.',
    ],
    Requests: [
    "Navigate to the side bar and click on Requests, to join either a hospital or an insurance company of your choice. You can also check the status of your request. Once a request is approved, you will find all relevant information under Contracts.",
    "Insurer Request is simply a request to an insurance company of your choice. Simply choose a company, the corresponding Network, and any service you choose, then enter any notes you want to share with them. Once sent, the company will then have access to that pricing and start adding their pricing accordingly. The purpose here is to securely automated the billing. When an insured patient visits your clinic, all billings will be fully automated as per the contract.",
    "In case you want to join a hospital, simply click on Hospital, then choose its location, then add any service you conduct in that hospital and the corresponding price. Once sent, the hospital manager will approve the request by adding the corresponding pricing list. Once approved, simply logout, then login again and choose the correspodning hospital.",
    "If you want to send a insurer request for a service conducted at a hospital, log in from the hospital account, then proceed to do an insurer request as usual."
    ],
    'Search Patient': [
      "Users will simply enter the patient's mobile or card number, choose the corresponding Service and click on Access Profile.",
      "Under Basic Info, users will see the patient's basic information e.g. age, gender, insurance company, and other medical information entered by the patient through Lnkr Mobile App.",
      'Under Prescriptions, you will find all previous records as entered by other doctors. For those records previously entered by yourself, you will have a green flag under Yours in the table. To create a new prescription, simply click on Add Prescription, then choose the suitable medication and dosage. You can also add Diagnosis, if necessary. Once submitted it will instantaneously be reflected on the Patient Mobile App and insurance company, in case the patient is insured and you have a running contract with it.',
      'Same goes for Lab & Radiology, you will find all previous results that have been conducted. Adding new records will be exactly the same way.',
      'Kindly note that all records will be shared with the patient and insurance company, except for Personal Notes. This will not be shared with patients or other doctors.',
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
      'انتقل إلى العيادة',
      <>
        انقر فوق زيارة:
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
        أدخل معلومات الطبيب: الإسم الكامل، والهاتف المحمول وكلمة المرور. أدخل معلومات العيادة: الإسم، ورقم الهاتف وسعر الفحص والمتابعة.
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
    "يجب على المستخدم أولاً إضافة جميع المعلومات ذات الصلة بمركز العيادة. ما عليك سوى النقر فوق الإعدادات، ثم العيادة. تأكد من ملء جميع المعلومات بشكل صحيح، حتى يتمكن المرضى من العثور على العيادة الخاصة بك بسهولة.",
    "يدعم نظامنا إدارة عيادات متعددة. يمكن للمستخدم ببساطة إنشاء عيادة جديدة، عن طريق إدخال المعلومات الأساسية: الاسم ورقم الهاتف. للوصول إلى تلك العيادة، ما عليك سوى تسجيل الخروج، ثم تسجيل الدخول مرة أخرى ثم اختيار العيادة المقابلة. يرجى التأكد من أن كل عيادة هي كيان منفصل تمامًا يعمل بمفرده.",
    ],
    التعاقدات: [
      'انتقل إلى الشريط الجانبي وانقر على العقود لرؤية قائمة أسعار الخدمات الخاصة بك.',
      'يمكنك بسهولة إضافة أي خدمة أخرى بالإضافة إلى الفحص والمتابعة.',
    ],
    الطلبات: [
      "انتقل إلى الشريط الجانبي وانقر على الطلبات للانضمام إلى مستشفى أو شركة تأمين من اختيارك. يمكنك أيضًا التحقق من حالة طلبك. بمجرد الموافقة على الطلب، ستجد جميع المعلومات ذات الصلة ضمن العقود.",
      "طلب شركة التأمين هو ببساطة طلب موجه إلى شركة التأمين التي تختارها. ما عليك سوى اختيار الشركة والشبكة المقابلة وأي خدمة تختارها، ثم إدخال أي ملاحظات تريد مشاركتها معهم. بمجرد إرسالها، ستتمكن الشركة من الوصول إلى هذا التسعير والبدء في إضافة تسعيرها وفقًا لذلك. الغرض هنا هو أتمتة الفواتير بشكل آمن. عندما يزور مريض مؤمن عليه عيادتك، سيتم أتمتة جميع الفواتير بالكامل وفقًا للعقد.",
      "في حال رغبتك بالانضمام إلى مستشفى، ما عليك سوى النقر على المستشفى ثم اختيار موقعه ثم إضافة أي خدمة تقدمها في هذا المستشفى والسعر المقابل لها. وبمجرد إرسال الطلب، سيوافق مدير المستشفى على الطلب بإضافة قائمة الأسعار المقابلة. وبمجرد الموافقة، ما عليك سوى تسجيل الخروج ثم تسجيل الدخول مرة أخرى واختيار المستشفى المقابل.",
      "إذا كنت تريد إرسال طلب تأمين لخدمة يتم تقديمها في المستشفى، قم بتسجيل الدخول من حساب المستشفى، ثم قم بإجراء طلب تأمين كالمعتاد.",
    ],
    'البحث عن المريض': [
      'كل ما على المستخدم فعله هو إدخال رقم الهاتف المحمول أو البطاقة الخاصة بالمريض واختيار الخدمة المناسبة والنقر على "ملف الوصول".',
      'تحت المعلومات الأساسية، سيرى المستخدم المعلومات الأساسية للمريض مثل العمر والجنس وشركة التأمين التابع لها وغيرها من المعلومات الطبية التي أدخلها المريض من خلال التطبيق الخاص به.',
      'تحت الوصفات الطبية، ستجد جميع السجلات السابقة كما أدخلها أطباء آخرون. بالنسبة للسجلات التي أدخلتها بنفسك سابقًا، سيكون لديك علم أخضر أسفل خاصتك في الجدول. لإنشاء وصفة طبية جديدة، ما عليك سوى النقر فوق إضافة وصفة طبية. ثم اختر الدواء و الجرعة المناسبين. يمكنك أيضًا إضافة التشخيص، إذا لزم الأمر. بمجرد إرسالها، سيتم عرضها على الفور على تطبيق الهاتف المحمول للمريض وشركة التأمين، في حالة تأمين المريض ولديك عقد ساري معها.',
      'ينطبق الأمر نفسه على المختبر والأشعة، حيث ستجد جميع النتائج السابقة التي تم إجراؤها. وستتم إضافة سجلات جديدة بنفس الطريقة تمامًا.',
      'يرجى ملاحظة أن جميع السجلات سيتم مشاركتها مع المريض وشركة التأمين، باستثناء الملاحظات الشخصية. لن يتم مشاركتها مع المرضى أو الأطباء الآخرين.',
    ],
    المزيد: [
    "هذا هو المكان الذي يمكن للمستخدم العثور فيه على جميع التفاصيل ذات الصلة بالزيارات اليومية والشهرية.",
    "تحت الملخص الشهري، يمكن للمستخدم التحقق من صحة فواتير زيارات المرضى. سواء كانت خاصة أو مؤمنة، سيجد المستخدم جميع الأرقام المتراكمة من بداية الشهر.",
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
