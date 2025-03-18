import Image from "next/image";

const teamMember = {
  name: "@michaelycrypto",
  role: "Builder & Strategist",
  image: "/profile.jpg",
  bio: "Full-stack developer and web3 entrepreneur merging technical expertise with strategic vision. Passionate about building decentralized solutions that empower users while pushing the boundaries of digital innovation."
};

export const Team = () => {
  return (
    <section id="team" className="relative bg-[#EBEBED]">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12">
            <div className="space-y-10">
              {/* Profile Header */}
              <div className="space-y-2">
                <h3 className="text-2xl md:text-5xl font-bold text-[var(--noir-void)] tracking-tight">
                  {teamMember.name}
                </h3>
                <p className="text-lg text-gray-600 font-medium">
                  {teamMember.role}
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute top-0 w-1 h-full bg-[var(--accent-red)] rounded-full"></div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-6">
                    {teamMember.bio}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-3 pt-4">
                  <Image
                    src={teamMember.image}
                    alt={teamMember.name}
                    width={48}
                    height={48}
                    className="rounded-md object-cover"
                  />

                  <blockquote className="flex-1 bg-gray-50 rounded- shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] px-8 py-5 pb-0">
                    <p className="text-gray-700 text-lg leading-relaxed italic">
                      I believe in crypto&apos;s original vision - putting users back in control of their digital lives. Not your keys, not your coins. I&apos;m building tools that make self-custody simple and give people true ownership of their assets, just as Satoshi intended.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
