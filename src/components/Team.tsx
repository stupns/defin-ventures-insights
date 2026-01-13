import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Jason Runyon",
    role: "Founder & Chief Executive Officer",
    bio: "With over 8 years of crypto asset management experience, Jason founded DeFin Ventures to bring institutional-grade management and education to the digital asset space. His disciplined approach and deep market understanding drive our investment strategies.",
    initials: "JR",
  },
  {
    name: "Anastasiia Klochko",
    role: "Co-Founder & Chief Operations Officer",
    bio: "Bringing 5+ years of digital asset management experience across Europe and the UK, Anastasiia joined as Co-Founder in 2025. Her operational excellence and international perspective strengthen our global capabilities.",
    initials: "AK",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-label text-muted-foreground block mb-4">Leadership</span>
          <h2 className="heading-section text-foreground mb-6">
            Meet the Team Behind
            <br />
            <span className="italic">Your Success</span>
          </h2>
          <p className="text-refined text-muted-foreground">
            Our leadership combines decades of experience in digital assets, traditional finance, and operational excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl">
          {team.map((member) => (
            <div
              key={member.name}
              className="group"
            >
              {/* Avatar Placeholder */}
              <div className="aspect-[4/5] bg-warm mb-6 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                <span className="font-heading text-6xl lg:text-7xl text-foreground/20">
                  {member.initials}
                </span>
              </div>

              {/* Content */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading text-2xl text-foreground mb-1">{member.name}</h3>
                  <p className="text-label text-taupe">{member.role}</p>
                </div>
                <button
                  className="p-2 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin size={18} />
                </button>
              </div>

              <p className="text-refined text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
