import Image from "next/image";
import assets from "@/public/assets";

export default function LatestWork() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl text-gray-900">
          Our latest work
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          From strategy to execution, we craft digital solutions that move your business forward.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16 text-left">

          {/* Card 1 */}
          <div className="rounded-xl shadow-sm hover:shadow-lg transition p-4">
            <Image
              src={assets.work_mobile_app}
              width={900}
              height={600}
              alt="Mobile app marketing"
              className="rounded-xl"
            />
            <h3 className="text-lg mt-5 text-left text-[#364153]">Mobile app marketing</h3>
            <p className="text-gray-600/85 mt-2 text-[15px]">
              We turn bold ideas into powerful digital solutions that connect, engage...
            </p>
          </div>

          {/* Card 2  */}
          <div className="rounded-xl shadow-sm hover:shadow-lg transition  p-4">
            <Image
              src={assets.work_dashboard_management}
              width={900}
              height={600}
              alt="Dashboard management"
              className="rounded-xl"
            />
            <h3 className="text-lg mt-5 text-[#364153]">Dashboard management</h3>
            <p className="text-gray-600/85 mt-2 text-[15px]">
              We help you execute your plan and deliver results.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl shadow-sm hover:shadow-lg transition  p-4">
            <Image
              src={assets.work_fitness_app}
              width={900}
              height={600}
              alt="Fitness app promotion"
              className="rounded-xl"
            />
            <h3 className="text-lg mt-5 text-[#364153]">Fitness app promotion</h3>
            <p className="text-gray-600/85 mt-2 text-[15px]">
              We help you create a marketing strategy that drives results.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
