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

export interface GalleryImage {
  id: number;
  url: string;
  category: 'Foundation' | 'Construction' | 'Events' | 'Final Look' | 'Ceremony';
  alt: string;
  date?: string;
}

export interface Contribution {
  id: number;
  contributorName: string;
  type: 'Cash' | 'Land' | 'Material';
  amount: number;
  date: string;
  anonymous: boolean;
  purpose?: string;
}

export interface LandDonor {
  id: number;
  name: string;
  landAmount: string;
  quote?: string;
  date: string;
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
      alt: "Foundation laying ceremony",
      date: "January 2022"
    },
    {
      id: 2,
      url: "/images/gallery/construction-1.jpg",
      category: "Construction",
      alt: "Wall construction progress",
      date: "March 2022"
    },
    {
      id: 3,
      url: "/images/gallery/event-1.jpg",
      category: "Events",
      alt: "Community fundraising dinner",
      date: "April 2022"
    },
    {
      id: 4,
      url: "/images/gallery/foundation-2.jpg",
      category: "Foundation",
      alt: "Concrete foundation work",
      date: "February 2022"
    },
    {
      id: 5,
      url: "/images/gallery/construction-2.jpg",
      category: "Construction",
      alt: "Roof structure installation",
      date: "June 2022"
    },
    {
      id: 6,
      url: "/images/gallery/final-1.jpg",
      category: "Final Look",
      alt: "Completed mosque exterior view",
      date: "December 2024"
    },
    {
      id: 7,
      url: "/images/gallery/ceremony-1.jpg",
      category: "Ceremony",
      alt: "Land donation ceremony",
      date: "November 2021"
    },
    {
      id: 8,
      url: "/images/gallery/construction-3.jpg",
      category: "Construction",
      alt: "Dome construction in progress",
      date: "August 2022"
    },
    {
      id: 9,
      url: "/images/gallery/event-2.jpg",
      category: "Events",
      alt: "Eid celebration gathering",
      date: "May 2023"
    },
    {
      id: 10,
      url: "/images/gallery/foundation-3.jpg",
      category: "Foundation",
      alt: "Steel reinforcement work",
      date: "January 2022"
    },
    {
      id: 11,
      url: "/images/gallery/final-2.jpg",
      category: "Final Look",
      alt: "Interior prayer hall",
      date: "November 2024"
    },
    {
      id: 12,
      url: "/images/gallery/ceremony-2.jpg",
      category: "Ceremony",
      alt: "Groundbreaking ceremony",
      date: "December 2021"
    },
    {
      id: 13,
      url: "/images/gallery/construction-4.jpg",
      category: "Construction",
      alt: "Minaret construction",
      date: "September 2022"
    },
    {
      id: 14,
      url: "/images/gallery/event-3.jpg",
      category: "Events",
      alt: "Community iftar program",
      date: "March 2023"
    },
    {
      id: 15,
      url: "/images/gallery/final-3.jpg",
      category: "Final Look",
      alt: "Mosque at sunset",
      date: "October 2024"
    },
    {
      id: 16,
      url: "/images/gallery/construction-5.jpg",
      category: "Construction",
      alt: "Plastering and finishing work",
      date: "January 2023"
    },
    {
      id: 17,
      url: "/images/gallery/event-4.jpg",
      category: "Events",
      alt: "Youth volunteer program",
      date: "June 2023"
    },
    {
      id: 18,
      url: "/images/gallery/ceremony-3.jpg",
      category: "Ceremony",
      alt: "Donor appreciation ceremony",
      date: "July 2023"
    },
    {
      id: 19,
      url: "/images/gallery/final-4.jpg",
      category: "Final Look",
      alt: "Wudu area completed",
      date: "September 2024"
    },
    {
      id: 20,
      url: "/images/gallery/construction-6.jpg",
      category: "Construction",
      alt: "Tile installation work",
      date: "April 2023"
    }
  ] as GalleryImage[],

  contributions: [
    {
      id: 1,
      contributorName: "Md. Abdul Karim",
      type: "Cash",
      amount: 50000,
      date: "2023-01-15",
      anonymous: false,
      purpose: "General Fund"
    },
    {
      id: 2,
      contributorName: "Anonymous",
      type: "Land",
      amount: 500000,
      date: "2023-02-20",
      anonymous: true,
      purpose: "Land Acquisition"
    },
    {
      id: 3,
      contributorName: "Mst. Ayesha Begum",
      type: "Cash",
      amount: 25000,
      date: "2023-03-10",
      anonymous: false,
      purpose: "Construction Fund"
    },
    {
      id: 4,
      contributorName: "Md. Rafiqul Islam",
      type: "Material",
      amount: 75000,
      date: "2023-04-05",
      anonymous: false,
      purpose: "Building Materials"
    },
    {
      id: 5,
      contributorName: "Anonymous",
      type: "Cash",
      amount: 100000,
      date: "2023-05-12",
      anonymous: true,
      purpose: "General Fund"
    },
    {
      id: 6,
      contributorName: "Md. Jahangir Alam",
      type: "Cash",
      amount: 35000,
      date: "2022-06-18",
      anonymous: false,
      purpose: "Foundation Work"
    },
    {
      id: 7,
      contributorName: "Mst. Fatema Khatun",
      type: "Cash",
      amount: 20000,
      date: "2022-07-22",
      anonymous: false,
      purpose: "General Fund"
    },
    {
      id: 8,
      contributorName: "Md. Habibur Rahman",
      type: "Material",
      amount: 45000,
      date: "2022-08-30",
      anonymous: false,
      purpose: "Cement & Bricks"
    },
    {
      id: 9,
      contributorName: "Anonymous",
      type: "Cash",
      amount: 150000,
      date: "2022-09-15",
      anonymous: true,
      purpose: "Construction Fund"
    },
    {
      id: 10,
      contributorName: "Md. Shamsul Haque",
      type: "Cash",
      amount: 60000,
      date: "2022-10-08",
      anonymous: false,
      purpose: "Roof Construction"
    },
    {
      id: 11,
      contributorName: "Md. Kamal Uddin",
      type: "Cash",
      amount: 40000,
      date: "2022-11-20",
      anonymous: false,
      purpose: "General Fund"
    },
    {
      id: 12,
      contributorName: "Mst. Nasima Begum",
      type: "Material",
      amount: 30000,
      date: "2022-12-05",
      anonymous: false,
      purpose: "Tiles & Fixtures"
    },
    {
      id: 13,
      contributorName: "Md. Nurul Amin",
      type: "Cash",
      amount: 80000,
      date: "2024-01-10",
      anonymous: false,
      purpose: "Final Phase"
    },
    {
      id: 14,
      contributorName: "Anonymous",
      type: "Cash",
      amount: 200000,
      date: "2024-02-14",
      anonymous: true,
      purpose: "Dome Construction"
    },
    {
      id: 15,
      contributorName: "Md. Aminul Islam",
      type: "Cash",
      amount: 55000,
      date: "2024-03-22",
      anonymous: false,
      purpose: "Interior Work"
    },
    {
      id: 16,
      contributorName: "Md. Mizanur Rahman",
      type: "Material",
      amount: 65000,
      date: "2024-04-18",
      anonymous: false,
      purpose: "Electrical Items"
    },
    {
      id: 17,
      contributorName: "Mst. Rowshan Ara",
      type: "Cash",
      amount: 45000,
      date: "2024-05-25",
      anonymous: false,
      purpose: "Finishing Work"
    },
    {
      id: 18,
      contributorName: "Md. Jahirul Islam",
      type: "Cash",
      amount: 70000,
      date: "2024-06-30",
      anonymous: false,
      purpose: "General Fund"
    }
  ] as Contribution[],

  landDonors: [
    {
      id: 1,
      name: "Md. Abdul Rahman",
      landAmount: "5 Decimals",
      quote: "This land is my family's legacy. I donate it for the service of Allah and our community. May it bring blessings for generations.",
      date: "2021-11-15"
    },
    {
      id: 2,
      name: "Md. Shafikul Islam",
      landAmount: "4 Decimals",
      quote: "Our community needed a place to gather and pray. I'm honored to contribute to this noble cause.",
      date: "2021-12-10"
    },
    {
      id: 3,
      name: "Mst. Halima Khatun",
      landAmount: "3 Decimals",
      quote: "In memory of my late husband, this land is dedicated to serve our community for generations.",
      date: "2022-01-05"
    },
    {
      id: 4,
      name: "Md. Rafiqul Hasan",
      landAmount: "3 Decimals",
      date: "2022-02-20"
    }
  ] as LandDonor[],

  yearlyContributions: [
    { year: "2022", amount: 420000 },
    { year: "2023", amount: 595000 },
    { year: "2024", amount: 700000 }
  ],

  typeBreakdown: [
    { type: "Cash Donations", percentage: 75, amount: 1287500, color: "#0d9488" },
    { type: "Land Donations", percentage: 15, amount: 257500, color: "#f59e0b" },
    { type: "Materials", percentage: 10, amount: 171500, color: "#3b82f6" }
  ],

  contactInfo: {
    email: "contact@amanatenaazirpara.org",
    phone: "+880 1XXX-XXXXXX",
    address: "Nazirpara, Bangladesh"
  }
};
