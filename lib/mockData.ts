// Mock data for development - centralized for easy removal

export interface CommitteeMember {
  id: number;
  name: string;
  designation: 'president' | 'vice-president' | 'secretary' | 'treasurer' | 'member';
  designationLabel: string;
  photo: string;
  phone?: string;
  email?: string;
  bio?: string;
}

export interface Committee {
  id: number;
  name: string;
  term: string;
  members: string[];
  memberDetails?: CommitteeMember[];
  description: string;
  image: string;
  type: 'past' | 'current';
}

export const mockData = {
  statistics: {
    totalFunds: 2500000,
    landDonated: 15,
    totalContributors: 342,
  },
  
  committees: [
    {
      id: 1,
      name: "Founding Committee",
      term: "2018-2020",
      members: ["Md. Abdul Karim", "Md. Rafiqul Islam", "Mst. Ayesha Begum"],
      description: "Established the foundation and acquired initial land plots",
      image: "/images/committee-1.jpg",
      type: "past"
    },
    {
      id: 2,
      name: "Development Committee",
      term: "2020-2022",
      members: ["Md. Jahangir Alam", "Md. Shafikul Islam", "Mst. Fatema Khatun"],
      description: "Oversaw construction planning and community fundraising",
      image: "/images/committee-2.jpg",
      type: "past"
    },
    {
      id: 3,
      name: "Construction Committee",
      term: "2022-2024",
      members: ["Md. Habibur Rahman", "Md. Mizanur Rahman", "Mst. Rowshan Ara"],
      description: "Managed construction activities and material procurement",
      image: "/images/committee-3.jpg",
      type: "past"
    },
    {
      id: 4,
      name: "Current Committee",
      term: "2024-Present",
      members: ["Md. Aminul Islam", "Md. Shamsul Haque", "Mst. Nasima Begum"],
      memberDetails: [
        {
          id: 1,
          name: "Md. Aminul Islam",
          designation: "president",
          designationLabel: "President",
          photo: "/images/members/president.jpg",
          phone: "+880 1XXX-XXXXXX",
          email: "president@amanatenaazirpara.org",
          bio: "Leading our community with dedication and vision since 2024."
        },
        {
          id: 2,
          name: "Md. Shamsul Haque",
          designation: "vice-president",
          designationLabel: "Vice President",
          photo: "/images/members/vice-president.jpg",
          phone: "+880 1XXX-XXXXXX",
          bio: "Supporting leadership and coordinating community initiatives."
        },
        {
          id: 3,
          name: "Md. Kamal Uddin",
          designation: "secretary",
          designationLabel: "Secretary",
          photo: "/images/members/secretary.jpg",
          phone: "+880 1XXX-XXXXXX",
          email: "secretary@amanatenaazirpara.org",
          bio: "Managing documentation and communication for the committee."
        },
        {
          id: 4,
          name: "Md. Rafiqul Hasan",
          designation: "treasurer",
          designationLabel: "Treasurer",
          photo: "/images/members/treasurer.jpg",
          phone: "+880 1XXX-XXXXXX",
          bio: "Overseeing financial management and transparency."
        },
        {
          id: 5,
          name: "Mst. Nasima Begum",
          designation: "member",
          designationLabel: "Executive Member",
          photo: "/images/members/member-1.jpg",
          bio: "Active contributor to community welfare programs."
        },
        {
          id: 6,
          name: "Md. Jahirul Islam",
          designation: "member",
          designationLabel: "Executive Member",
          photo: "/images/members/member-2.jpg",
          bio: "Dedicated to construction oversight and quality assurance."
        },
        {
          id: 7,
          name: "Md. Nurul Amin",
          designation: "member",
          designationLabel: "Executive Member",
          photo: "/images/members/member-3.jpg",
          bio: "Focused on fundraising and donor relations."
        }
      ],
      description: "Finalizing construction and establishing operational guidelines",
      image: "/images/committee-4.jpg",
      type: "current"
    }
  ] as Committee[],

  galleryImages: [
    {
      id: 1,
      url: "/images/gallery/foundation-1.jpg",
      category: "Foundation",
      alt: "Foundation laying ceremony"
    },
    {
      id: 2,
      url: "/images/gallery/construction-1.jpg",
      category: "Construction",
      alt: "Construction progress"
    },
    {
      id: 3,
      url: "/images/gallery/event-1.jpg",
      category: "Events",
      alt: "Community gathering"
    },
    {
      id: 4,
      url: "/images/gallery/foundation-2.jpg",
      category: "Foundation",
      alt: "Land acquisition"
    },
    {
      id: 5,
      url: "/images/gallery/construction-2.jpg",
      category: "Construction",
      alt: "Building structure"
    },
    {
      id: 6,
      url: "/images/gallery/final-1.jpg",
      category: "Final Look",
      alt: "Completed mosque view"
    }
  ],

  contributions: [
    {
      id: 1,
      contributorName: "Md. Abdul Karim",
      type: "Cash",
      amount: 50000,
      date: "2023-01-15",
      anonymous: false
    },
    {
      id: 2,
      contributorName: "Anonymous",
      type: "Land",
      amount: 500000,
      date: "2023-02-20",
      anonymous: true
    },
    {
      id: 3,
      contributorName: "Mst. Ayesha Begum",
      type: "Cash",
      amount: 25000,
      date: "2023-03-10",
      anonymous: false
    },
    {
      id: 4,
      contributorName: "Md. Rafiqul Islam",
      type: "Material",
      amount: 75000,
      date: "2023-04-05",
      anonymous: false
    },
    {
      id: 5,
      contributorName: "Anonymous",
      type: "Cash",
      amount: 100000,
      date: "2023-05-12",
      anonymous: true
    }
  ],

  contactInfo: {
    email: "contact@amanatenaazirpara.org",
    phone: "+880 1XXX-XXXXXX",
    address: "Nazirpara, Bangladesh"
  }
};
