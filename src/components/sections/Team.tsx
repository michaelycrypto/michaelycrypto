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
                <h3 className="text-5xl font-bold text-[var(--noir-void)] tracking-tight">
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

                <div className="flex flex-col md:flex-row items-start gap-6 pt-4">
                  <img
                    src={teamMember.image}
                    alt={teamMember.name}
                    className="w-20 h-20 rounded-md object-cover"
                  />

                  <blockquote className="flex-1 bg-gray-50 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] px-9 py-5 pb-0">
                    <p className="text-gray-700 text-lg leading-relaxed italic">
                      Decentralized technology isn't just about new protocols—it's about creating better ways to build and connect. I'm focused on bridging the gap between web3's promise and its everyday utility through thoughtful, user-focused design.
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

interface SocialLinkProps {
  icon: 'linkedin' | 'twitter';
}

const SocialLink = ({ icon }: SocialLinkProps) => {
  const IconComponent = () => {
    switch (icon) {
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 13.5v2.25A2.25 2.25 0 0118.75 18h-7.5A2.25 2.25 0 019 15.75v-2.25M21 13.5V6.75A2.25 2.25 0 0018.75 4.5h-7.5A2.25 2.25 0 009 6.75v6.75m12-3H9m12 0v2.25A2.25 2.25 0 0118.75 15h-7.5A2.25 2.25 0 019 12.75V12m12 0H9" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        );
    }
  };

  return (
    <button className="text-gray-500 hover:text-[var(--accent-blue)]
                     transition-colors duration-300">
      <IconComponent />
    </button>
  );
};