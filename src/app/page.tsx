import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="flex h-full w-full flex-col items-center gap-[2rem] p-12">
        <div className="animate-logo relative h-[100px] w-[250px] transition-transform duration-300 hover:scale-110">
          <Image
            src="/logo.png"
            alt="Lnkr Logo"
            fill
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        <section className="animate-content max-w-[65rem] space-y-3 text-center opacity-0">
          <h1 className="bg-gradient-to-r from-primary-dark to-blue-600 bg-clip-text text-[3rem] font-extrabold text-transparent">
            Healthcare Infrastructure Reimagined
          </h1>

          <div className="space-y-3">
            <p className="rounded-xl bg-white/50 p-6 text-[1.5rem] font-medium leading-relaxed text-primary-dark/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/80">
              Lnkr is building the digital infrastructure for healthcare
              industry.
            </p>

            <p className="rounded-xl bg-white/50 p-6 text-[1.5rem] font-medium leading-relaxed text-primary-dark/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/80">
              An integrated system that connects patients with insurers and
              healthcare providers whether doctors, hospitals, pharmacies, lab
              or radiology centers.
            </p>

            <p className="rounded-xl bg-white/50 p-6 text-[1.5rem] font-medium leading-relaxed text-primary-dark/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/80">
              Our open-loop scheme enables exchanging both medical and financial
              data in real-time, resulting in huge cost reduction for insurers
              and eliminating waiting time for patients while ensuring smooth
              and secure journey for all stakeholders.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
