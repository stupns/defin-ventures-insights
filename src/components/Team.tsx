import {Linkedin} from "lucide-react";
import JasonAvatar from "@/assets/photo/JasonAvatar.jpg";
import AnnaAvatar from "@/assets/photo/AnnaAvatar2.jpg";


const team = [
    {
        name: "Jason Runyon",
        role: "Founder",
        bio: "With over 8 years of crypto asset management experience, Jason founded Ventures DeFi to bring institutional-grade management and education to the digital asset space. His disciplined approach and deep market understanding drive our investment strategies.",
        initials: "JR",
        photo: JasonAvatar,
        linkedin: "https://www.linkedin.com/in/jason-runyon/",
    },
    {
        name: "Anastasiia Klochko",
        role: "Co-Founder",
        bio: "Bringing 5+ years of digital asset management experience across Europe and the UK, Anastasiia joined as Co-Founder in 2025. Her operational excellence and international perspective strengthen our global capabilities.",
        initials: "AK",
        photo: AnnaAvatar,
        linkedin: "https://www.linkedin.com/in/anastasiia-klochko-701722355/",
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
                        <br/>
                        <span className="italic">Your Success</span>
                    </h2>
                    <p className="text-refined text-muted-foreground">
                        Our leadership combines decades of experience in digital assets, traditional finance, and
                        operational excellence.
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
                            <div className="aspect-[4/5] mb-6 overflow-hidden bg-warm">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>


                            {/* Content */}
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="font-heading text-2xl text-foreground mb-1">{member.name}</h3>
                                    <p className="text-label text-taupe">{member.role}</p>
                                </div>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${member.name}'s LinkedIn`}
                                    className="p-2 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                                >
                                    <Linkedin size={18}/>
                                </a>

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
