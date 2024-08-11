import BackgroundImage from '@/components/BackgroundImage';

export default function FAQsPage() {
  return (
    <div className="px-[6rem] py-[8rem]">
      <BackgroundImage src="/FAQsBg.png" alt="background image of FAQs page" />
      <div>
        <h1 className="text-primary-dark mb-16 text-center text-[2.5rem] font-bold">
          FAQs
        </h1>
        <div className="text-primary-dark space-y-6">
          <div>
            <h3 className="text-[1.5rem] font-bold">
              Q: Is Lnkr an insurance company?
            </h3>
            <p className="text-[1.4rem]">
              We are not an insurance company! We simply help medical service
              providers optimize their processes
            </p>
          </div>
          <div>
            <h3 className="text-[1.5rem] font-bold">
              Q: Is Lnkr - eCard a discount card?
            </h3>
            <p className="text-[1.4rem]">
              Our card does not provide discounts per se. it helps medical
              service providers better manage their healthcare plans.
            </p>
          </div>
          <div>
            <h3 className="text-[1.5rem] font-bold">
              Q: Are you limited to insurance companies and their network?
            </h3>
            <p className="text-[1.4rem]">
              No. Any running business offering its employees healthcare plans
              can easily use our products.
              <br />
              For example: Syndicates, Banks, Oil & Gas Co., Public Sectors Co.,
              Schools, Universities ...etc.
            </p>
          </div>
          <div>
            <h3 className="text-[1.5rem] font-bold">
              Q: As a business, how much would it cost to purchase the whole
              system?
            </h3>
            <p className="text-[1.4rem]">
              Only our eCard is the one to pay for! All other applications are
              totally free of charge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
