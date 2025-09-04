"use client";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function OfficeLocations() {
  const locations = [
    {
      country: "India,HQ",
      img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrJoG5oOyaE7-QtI6iv-Pxg27FWGSRcNhE1ORK-z54DsCxVtv61Q8D7mYbTjm29rwKluLFxsRuP4kJFqcHX4vSjCYtevNgVD_LXzaoGF2fSeXE7crC6rRF4nqmwhfjzZ4wQ2Z_b2w=w244-h408-n-k-no-nu",
      offices: [
        {
          city: "Vadodara-HQ",
          address:
            "Plot 66, Beside Sigil India, Padra Road, Atladra, Vadodara – 390012, Gujarat",
          phone: "+91-85111 22697",
        },
        {
          city: "Ahmedabad",
          address:
            "Devx, 4th floor Binori B Square3, Sindhu Bhavan Road, Ahmedabad – 380054, Gujarat",
        },
      ],
    },
    {
      country: "US",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
      offices: [
        {
          city: "Pune",
          address:
            "Supreme Headquarters Premises Co-operative Society, Office No. 501 & 709, Baner, Pune – 411045, Maharashtra",
        },
        {
          city: "Hyderabad",
          address:
            "215, Cyber Crown, Sec-II village, HUDA Techno Enclave, Madhapur, Hyderabad – 500081, Telangana",
        },
      ],
    },
    {
      country: "UK",
      img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrUwPiwMSmL-uOzLX4d-WWuA0nPbmPY4G3FZSqJ6peEZ1EWvZVDbDBYaUJoPzuDVjhVJf17OpDS2icc_zqJFZTyyU2SrBR2FckRwZJ8i-_KYVjMvOnY_GquRR52JCtzJN0_mM1DJA=w244-h204-n-k-no-nu",
      offices: [
        {
          city: "Bengaluru",
          address:
            "Workafella Co-working #150/1, Infantry Road, Opp. to Commissioner Office, Vasanth Nagar, Bengaluru – 560001, Karnataka",
        },
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left side banners */}
        <div className="flex flex-col gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={loc.img}
                alt={loc.country}
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-semibold">
                  {loc.country}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right side office details */}
        <div className="grid sm:grid-cols-2 gap-6">
          {locations.flatMap((loc) =>
            loc.offices.map((office, idx) => (
              <div key={idx} className=" pb-4">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  {office.city} <FaMapMarkerAlt className="text-pink-500" />
                </h4>
                <hr className="bg-gray h-[3px] my-3" />
                <p className="text-sm text-gray-600 ">{office.address}</p>
                {office.phone && (
                  <a
                    href={`tel:${office.phone}`}
                    className="text-blue-600 font-medium text-sm mt-1 block"
                  >
                    {office.phone}
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
