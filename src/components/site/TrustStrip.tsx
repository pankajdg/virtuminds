import cisco from "@/assets/logos/cisco.png";
import intuit from "@/assets/logos/intuit.png";
import ge from "@/assets/logos/ge.png";
import hp from "@/assets/logos/hp.png";
import directv from "@/assets/logos/directv.png";
import wachovia from "@/assets/logos/wachovia.png";
import aol from "@/assets/logos/aol.png";
import constellation from "@/assets/logos/constellation.png";
import sanctumshield from "@/assets/logos/sanctumshield.png";

const logos = [
  { name: "Cisco", src: cisco },
  { name: "Intuit", src: intuit },
  { name: "GE", src: ge },
  { name: "HP", src: hp },
  { name: "DirecTV", src: directv },
  { name: "Wachovia", src: wachovia },
  { name: "AOL", src: aol },
  { name: "Constellation Energy", src: constellation },
  { name: "SanctumShield", src: sanctumshield, chip: true },
];

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-card py-12">
      <div className="section-shell text-center">
        <p className="eyebrow">Experience Across Enterprises and Advisory Roles</p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((logo) => (
            <li key={logo.name}>
              <img
                src={logo.src}
                alt={logo.name}
                className={logo.chip ? "h-9 w-auto rounded-md" : "h-8 w-auto"}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
