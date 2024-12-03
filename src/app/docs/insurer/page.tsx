'use client';

import React, { useState } from 'react';
const insurerApp: any = {
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
      'Navigate to Insurer',
      <>
        Click on Visit:
        <a
          href="https://insurer.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://insurer.lnkrtech.com/
        </a>
      </>,
    ],
    Registration: [
      <>
        To create a new account:{' '}
        <ul className="ml-6 list-inside list-disc">
          Enter Insurer Manager info: full name, mobile & password. Enter
          Insurer info: name & phone number.
        </ul>
      </>,
      <>
        To login, go to:{' '}
        <a
          href="https://insurer.lnkrtech.com/login"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://insurer.lnkrtech.com/login
        </a>
      </>,
    ],
    Settings: [
      'The user must first add all relevant information about the Insurer. Simply click on Settings, then Insurer. Make sure to fill out the correct info, so the patients can easily find your company.',
    ],
    'Manage Users': [
      'Navigate to the side bar and click on Manage Users, to start adding your permissions to your users.',
      <>
        There are two types of users:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>
            {' '}
            Approval Employee: responsible for processing approvals from
            doctors. Allowed to access: Approvals, Beneficiaries & Network.{' '}
          </li>
          <li>
            {' '}
            Accountant: handling billings. Allowed to access: Beneficiary,
            Network & More.{' '}
          </li>
        </ul>
      </>,
      <>
        The Insurer Manager is allowed to access everything except: Search
        Patient & Pending Results.
      </>,
    ],
    Requests: [
      'This is where you will receive requests from both beneficiaries & healthcare providers, asking to join your network. Navigate to the side bar and click on Requests.',
      'Starting with Patients, you will find a list of requests sent from patient mobile app asking to join your network. Proceed and click on one of them. You will find some basic information about the patient. To process the request, click on Process Request, choose the right status. If approved, select the appropriate expiry data. If applied, you can add the current consumption for the patient according to the provider entity i.e. current consumption. This is allow an easier track of consumption in real time. Once Approved, the provider will be found under Beneficiaries',
      'For Doctors, you will find the doctor info, clinic infor, and what services does the doctor provide in that clinic/hospital. Proceed and once again, update the request status accordingly. Add an expiry date for each service approved. As you can see, for each service there is a base price which is the standard price for private patients. As per the agreement, adjust the amounts accordingly. Once Approved, the provider will be found under Network  - Doctors.',
      'For Lab/Radiology Centers, you will find all relevant info about the center itself. Navigate to Services to check the list of services/pricing available. If approved, proceed by adding an expiry date and the agreed price for each service accordingly. Once Approved, the provider will be found under Network - Lab / Radiology Center.',
    ],
    Beneficiaries: [
      "This is where all members' information resides. User can search by typing down name or mobile number or card numbers. Profile consists of multiple sections.",
      'Basic Info: e.g. full name, mobile number, some medical history entered by patient himself, ...etc.',
      'Medical Records: is where all the medical transactions between patient and his network of providers, processed in real-time. This is non-financial records.',
      "Card: Card Info, is simply which network of providers this patient was permitted to use. Consumption: real-time tracking of patient's consumption divided by providers' visits",
    ],
    "Providers' Network": [
      'This is your network of healthcare providers. Profile consists of multiple sections.',
      'Basic Info about the entity e.g. name, address, contact details, ...etc.',
      'Contracts: is a list of services available at the provider & corresponding agreed prices.',
      'Visits: is a detailed list of visits conducted at the provider, sorted up to date',
      'Monthly Summary: is the accumulated numbers from the beginning of the month. For example, how many patients, how much did they pay, copayment if applicable, ...etc.',
    ],
    'Medical Approvals': [
      'This is your real-time transactions, as entered by the doctor. This section is divided into: Prescriptions (for medicines), Lab/Radiology (for Lab/Radiology services).',
      'Under Prescriptions, you will find 2 sections: Pending (for those awaiting approvals) & Approved (for those already processed). To process a prescription claim, click on the item, you will find detailed description about the Clinic Visit, and what has been recommended by the doctor. Simply click on Make Approval, for each prescribed medicine choose the appropriate status, whether Accepted, Replacement Allowed, Rejected. Then proceed to choose the approved quantity, and type any notes you might find useful. Once submitted, you will find the record under Approved.',
      'Under Approved, user will view a detailed description about the record once created e.g. which patient, visited which doctor, and when, what is the prescribed and approved medicines, and whether or not have been dispensed, and of course who approved it.',
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
      'انتقل إلى التأمين',
      <>
        انقر فوق زيارة:
        <a
          href="https://insurer.lnkrtech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://insurer.lnkrtech.com/
        </a>
      </>,
    ],
    التسجيل: [
      <>
        لإنشاء حساب جديد:{' '}
        <ul className="ml-6 list-inside list-disc">
          أدخل معلومات مدير التأمين: الإسم الكامل، والهاتف المحمول وكلمة المرور.
          أدخل معلومات التأمين: الإسم، ورقم الهاتف.
        </ul>
      </>,
      <>
        لتسجيل الدخول، انتقل إلى:{' '}
        <a
          href="https://insurer.lnkrtech.com/login"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://insurer.lnkrtech.com/login
        </a>
      </>,
    ],
    الإعدادات: [
      'يجب على المستخدم أولاً إضافة جميع المعلومات ذات الصلة بشركة التأمين. ما عليك سوى النقر فوق الإعدادات، ثم شركة التأمين. تأكد من ملء المعلومات الصحيحة، حتى يتمكن المرضى من العثور على شركتك بسهولة.',
    ],
    'إدارة المستخدمين': [
      'انتقل إلى الشريط الجانبي وانقر فوق إدارة المستخدمين، لبدء إضافة الأذونات إلى المستخدمين لديك.',
      <>
        هناك نوعان من المستخدمين:{' '}
        <ul className="ml-6 list-inside list-disc">
          <li>
            {' '}
            موظف الموافقات: المسؤول عن معالجة الموافقات من الأطباء. المسموح لهم
            بالوصول إلى: الموافقات والمستفيدين والشبكة.{' '}
          </li>
          <li>
            {' '}
            المحاسب: معالجة الفواتير. يُسمح بالوصول إلى: المستفيد والشبكة
            والمزيد.
          </li>
        </ul>
      </>,
      'يُسمح لمدير التحاليل بالوصول إلى كل شيء باستثناء: البحث عن المريض والنتائج المعلقة.',
    ],
    الطلبات: [
      'هذا هو المكان الذي ستتلقى فيه طلبات من المستفيدين ومقدمي الرعاية الصحية، يطلبون فيها الانضمام إلى شبكتك. انتقل إلى الشريط الجانبي وانقر على الطلبات.',
      'ابدأ بالمرضى، ستجد قائمة بالطلبات المرسلة من تطبيق الهاتف المحمول للمرضى تطلب الانضمام إلى شبكتك. تابع وانقر على أحدها. ستجد بعض المعلومات الأساسية عن المريض. لمعالجة الطلب، انقر فوق معالجة الطلب، واختر الحالة الصحيحة. إذا تمت الموافقة، حدد بيانات انتهاء الصلاحية المناسبة. إذا تم تطبيقه، يمكنك إضافة الاستهلاك الحالي للمريض وفقًا لكيان المزود أي الاستهلاك الحالي. يتيح هذا تتبع الاستهلاك بشكل أسهل في الوقت الفعلي. بمجرد الموافقة، سيتم العثور على مقدم الخدمة ضمن المستفيدين.',
      'بالنسبة للأطباء، ستجد معلومات الطبيب ومعلومات العيادة والخدمات التي يقدمها الطبيب في تلك العيادة/المستشفى. تابع وقم بتحديث حالة الطلب وفقًا لذلك. أضف تاريخ انتهاء الصلاحية لكل خدمة معتمدة. كما ترى، لكل خدمة سعر أساسي وهو السعر القياسي للمرضى الخاصين. وفقًا للاتفاقية، قم بتعديل المبالغ وفقًا لذلك. بمجرد الموافقة، سيتم العثور على مقدم الخدمة ضمن الشبكة - الأطباء.',
      'بالنسبة لمراكز المختبرات/الأشعة، ستجد جميع المعلومات ذات الصلة بالمركز نفسه. انتقل إلى الخدمات للتحقق من قائمة الخدمات/الأسعار المتاحة. إذا تمت الموافقة، قم بإضافة تاريخ انتهاء الصلاحية والسعر المتفق عليه لكل خدمة وفقًا لذلك. بمجرد الموافقة، سيتم العثور على مقدم الخدمة ضمن الشبكة ـ المختبرات/مراكز الأشعة.',
    ],
    المستفيدون: [
      'هذا هو المكان الذي توجد فيه معلومات جميع الأعضاء. يمكن للمستخدم البحث عن طريق كتابة الاسم أو رقم الهاتف المحمول أو أرقام البطاقات. يتكون الملف الشخصي من أقسام متعددة.',
      'المعلومات الأساسية: على سبيل المثال الاسم الكامل، رقم الهاتف المحمول، بعض التاريخ الطبي الذي أدخله المريض بنفسه، ... إلخ.',
      'السجلات الطبية: هي المكان الذي تتم فيه معالجة كافة المعاملات الطبية بين المريض وشبكته من مقدمي الخدمات في الوقت الفعلي. وهي سجلات غير مالية.',
      'البطاقة: معلومات البطاقة، هي ببساطة شبكة مقدمي الخدمات التي سُمح لهذا المريض باستخدامها. الاستهلاك: تتبع استهلاك المريض في الوقت الفعلي مقسمًا بين زيارات مقدمي الخدمات.',
    ],
    'شبكة مقدمي الخدمات الطبية': [
      'هذه هي شبكتك لمقدمي الرعاية الصحية. يتكون الملف الشخصي من أقسام متعددة.',
      'المعلومات الأساسية عن الكيان مثل الاسم والعنوان وتفاصيل الاتصال، ... إلخ.',
      'العقود: هي قائمة بالخدمات المتوفرة لدى مقدم الخدمة والأسعار المتفق عليها.',
      'الزيارات: هي قائمة مفصلة بالزيارات التي تم إجراؤها لدى مقدم الخدمة، مرتبة حسب التاريخ.',
      'الملخص الشهري: هو الأرقام المتراكمة من بداية الشهر. على سبيل المثال، عدد المرضى، وكم دفعوا، والدفعة المشتركة إذا لزم الأمر، ... إلخ.',
    ],
    'الموافقات الطبية': [
      'هذه هي معاملاتك في الوقت الفعلي، كما أدخلها الطبيب. ينقسم هذا القسم إلى: الوصفات الطبية (للأدوية)، المختبر/الأشعة (لخدمات المختبر/الأشعة).',
      'تحت قسم الوصفات الطبية، ستجد قسمين: معلق (للحالات التي تنتظر الموافقات) وموافق عليه (للحالات التي تمت معالجتها بالفعل). لمعالجة طلب وصفة طبية، انقر فوق العنصر، وستجد وصفًا تفصيليًا لزيارة العيادة، وما أوصى به الطبيب. ما عليك سوى النقر فوق إبداء الموافقة، لكل دواء موصوف اختر الحالة المناسبة، سواء مقبول أو مسموح بالاستبدال أو مرفوض. ثم انتقل إلى اختيار الكمية المعتمدة، واكتب أي ملاحظات قد تجدها مفيدة. بمجرد الإرسال، ستجد السجل تحت موافق عليه.',
      'تحت الموافق عليه، سيتمكن المستخدم من عرض وصف تفصيلي للسجل بمجرد إنشائه، على سبيل المثال أي مريض، وأي طبيب زاره، ومتى، وما هي الأدوية الموصوفة والموافق عليها، وما إذا كانت قد تم صرفها أم لا، وبالطبع من وافق عليها.',
    ],
  },
};

export default function InsurerDocs() {
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
          {language === 'en' ? 'Insurer Documentation' : 'دليل التأمين'}
        </h2>
        <button
          onClick={toggleLanguage}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          {language === 'en' ? 'العربية' : 'English'}
        </button>
      </div>
      {/* Insurer Documentation */}
      <section className="space-y-8">
        {Object.entries(insurerApp[language]).map(([section, items]) => (
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
