import { FaUsers, FaHeart, FaHandsHelping } from "react-icons/fa";

export default function WeCare() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">We Care</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-14">
          Our success is defined by our core values of commitment to clients,
          ethics, and society through sustained collaboration, honesty, and
          opportunity-creation partnerships.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Clients */}
          <div className="bg-blue-600 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <FaUsers className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-3">
              We Care for Our Clients
            </h3>
            <ul className="text-sm space-y-2">
              <li>• Long-term relationships with high commitment</li>
              <li>• Multi-level engagements with personalized attention</li>
            </ul>
          </div>

          {/* People */}
          <div className="bg-pink-600 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <FaHeart className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-3">
              We Care for Our People
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                • Integrity, inclusion, and continuous learning define our
                culture
              </li>
              <li>
                • We foster collaboration that sparks innovation and
                purpose-driven action
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="bg-purple-600 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <FaHandsHelping className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-3">
              We Care for Our Community
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                • We actively support regional initiatives that uplift
                communities
              </li>
              <li>
                • We believe in paying it forward—through education, mentorship,
                and skills development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
