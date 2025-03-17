const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Creative Director",
    image: "https://placehold.co/400x400/3B82F6/FFFFFF?text=AR"
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    image: "https://placehold.co/400x400/EF4444/FFFFFF?text=SC"
  },
  {
    name: "Marcus Kim",
    role: "Tech Lead",
    image: "https://placehold.co/400x400/8B5CF6/FFFFFF?text=MK"
  }
];

export const Team = () => {
  return (
    <section id="team" className="relative py-32 px-6 bg-[#F8FAFC] overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[var(--accent-blue)] rounded-full opacity-[0.03] blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-[400px] h-[400px] bg-[#1E293B] rounded-full opacity-[0.03] blur-3xl" />
      </div>

      <div className="container mx-auto">
        {/* Header - Asymmetric Layout */}
        <div className="grid grid-cols-12 gap-12 items-end mb-24">
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold leading-[0.9] tracking-tight">
              <span className="block text-[#1E293B] transform hover:translate-x-2 transition-transform duration-300">
                Meet Our
              </span>
              <span className="block text-[var(--accent-blue)] mt-4 transform hover:-translate-x-2 transition-transform duration-300 translate-x-[8%]">
                Creative Team
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <p className="text-xl text-[#475569] leading-relaxed">
              A collective of innovative minds passionate about crafting exceptional digital experiences that push boundaries and inspire change.
            </p>
          </div>
        </div>

        {/* Team Grid - Dynamic Layout */}
        <div className="grid grid-cols-12 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative col-span-12 md:col-span-6 lg:col-span-4
                ${index === 1 ? 'lg:translate-y-12' : ''}
                ${index === 2 ? 'lg:translate-y-24' : ''}`}
            >
              {/* Member Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden p-6 transition-all duration-500
                            hover:shadow-xl hover:shadow-[var(--accent-blue)]/10
                            border border-black/5 hover:border-[var(--accent-blue)]/20">
                {/* Image Container */}
                <div className="relative mb-8 aspect-square rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transform transition-transform duration-700
                             group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-bold text-[#1E293B] group-hover:text-[var(--accent-blue)]
                               transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#475569] font-medium">{member.role}</p>

                  {/* Interactive Elements */}
                  <div className="pt-6 flex items-center justify-between">
                    <button className="text-[#1E293B] font-medium group-hover:text-[var(--accent-blue)]
                                    transition-colors duration-300 flex items-center gap-2">
                      <span>View Profile</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      <SocialLink icon="linkedin" />
                      <SocialLink icon="twitter" />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r
                             from-[var(--accent-blue)] to-transparent scale-x-0
                             group-hover:scale-x-100 transition-transform duration-500
                             origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <button className="inline-flex items-center gap-3 text-lg font-medium
                          text-[var(--text-secondary)] hover:text-[var(--accent-red)]
                          transition-colors duration-300">
            <span>Join Our Team</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
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
    <button className="text-[#475569] hover:text-[var(--accent-blue)]
                     transition-colors duration-300">
      <IconComponent />
    </button>
  );
};