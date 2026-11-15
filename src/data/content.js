// Centralized content for Victoria Alabaster International Women Ministry
// Edit here to update copy across the site.

import imgGallery1 from '../assets/gallery1.jpg'
import imgGallery2 from '../assets/gallery2.jpg'
import imgGallery3 from '../assets/gallery3.jpg'
import imgGallery4 from '../assets/gallery4.jpg'
import imgGallery5 from '../assets/gallery5.jpg'
import imgGalleryLaptop from '../assets/gallery_laptop_donation.jpg'
import imgGalleryCommunity from '../assets/gallery_community_meeting.jpg'
import imgGallerySisterhood from '../assets/gallery_sisterhood.jpg'
import imgGallerySchool from '../assets/gallery_school_uniform.jpg'
import imgNeedFood from '../assets/need_food_supplies_new.jpg'
import imgNeedClothing from '../assets/need_clothing.png'
import imgNeedEssentials from '../assets/need_essentials_new.jpg'
import imgProjectOffice from '../assets/project_community_center.jpg'
import imgProjectShelter from '../assets/project_empowerment.jpg'

// 2026 Outreach Media (Videos & Beneficiary Grants)
import video1 from '../assets/Video1.mp4'
import video2 from '../assets/Video2.mp4'
import video3 from '../assets/Video3.mp4'
import video4 from '../assets/Video4.mp4'
import video5 from '../assets/Video5.mp4'
import video6 from '../assets/Video6.mp4'
import img01 from '../assets/image01.jpeg'
import img02 from '../assets/image02.jpeg'
import img03 from '../assets/image03.jpeg'
import img04 from '../assets/image04.jpeg'

export const siteInfo = {
  name: 'Victoria-Alabaster International Women Ministry',
  shortName: 'Victoria-Alabaster IWM',
  tagline: 'Empowering Women, Transforming Communities',
  founded: 2014,
}

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Needs', path: '/needs' },
  { name: 'Projects', path: '/projects' },
  { name: 'Media', path: '/media' },
  { name: 'Contact', path: '/contact' },
]

export const supportAreas = [
  {
    icon: 'FaGraduationCap',
    title: 'School Fees Support',
    description: 'Covering tuition, books, and uniforms so no child is sent home for lack of funds.',
  },
  {
    icon: 'FaBowlFood',
    title: 'Food Assistance',
    description: 'Monthly food packages reaching families who would otherwise go without.',
  },
  {
    icon: 'FaHandsHolding',
    title: 'Widow Empowerment',
    description: 'Skills training and start-up grants that help widows rebuild stable, dignified livelihoods.',
  },
  {
    icon: 'FaPersonBreastfeeding',
    title: 'Single Mother Support',
    description: 'Counseling, childcare support, and income-generating training for single mothers.',
  },
  {
    icon: 'FaSeedling',
    title: 'Youth Empowerment',
    description: 'Mentorship, vocational training, and scholarships that open doors for young people.',
  },
]

export const projects = [
  {
    id: 'community-center',
    title: 'Women Support & Gathering Programs',
    image: 'office',
    imgSrc: imgProjectOffice,
    summary: 'A supportive safe space where women connect, receive counseling, build community, and share child care support.',
    description:
      'We bring women, mothers, and children together in community safe spaces to receive emotional counseling, share resources, and build support networks. This project ensures widows and single mothers have a dedicated, structured environment to connect, learn from one another, and access child welfare and essential support services.',
    goals: [
      'Host weekly group counseling and peer support sessions',
      'Provide a safe, welcoming environment for children while mothers undergo training',
      'Deliver community relief supplies, hygiene kits, and guidance directly to mothers'
    ],
    impact: 'Strengthens community bonds, reduces isolation among single mothers and widows, and creates a local network where families look out for one another.',
    progress: 75,
  },
  {
    id: 'empowerment-equipment',
    title: 'Vocational Equipment & Enterprise Initiative',
    image: 'shelter',
    imgSrc: imgProjectShelter,
    summary: 'Providing start-up enterprise equipment, baking ovens, and tools to help women establish independent businesses.',
    description:
      'To build lasting independence, we equip women with vocational skills and the actual physical assets required to launch micro-enterprises. From sewing machines to commercial baking ovens, this initiative funds and distributes work equipment to help graduates start generating immediate income and support their households.',
    goals: [
      'Fund and distribute baking ovens, catering gear, and sewing machinery to trained women',
      'Conduct practical, asset-based business workshops to ensure long-term usage',
      'Establish a mentoring network connecting new business owners with experienced mentors'
    ],
    impact: 'Graduates transition from relying on aid to running self-sustaining enterprises, creating financial security and jobs in their neighborhoods.',
    progress: 60,
  },
]

export const futureProjects = [
  {
    title: 'Victoria Alabaster Charity School',
    description: 'Providing tuition-free, quality education, learning materials, and supportive schooling for underprivileged children and orphans.',
  },
  {
    title: 'Charity Remidial Home For Women And Children Welfare Home',
    description: 'A safe residential haven and rehabilitation welfare center providing shelter, care, counseling, and holistic recovery support for vulnerable women and children.',
  },
]

export const futureInitiatives = [
  {
    title: 'Microloan Cooperative',
    description: 'Small, interest-free loans to help widows and single mothers launch sustainable businesses.',
  },
  {
    title: 'Vocational Training Center',
    description: 'A hands-on training hub teaching tailoring, catering, and digital skills to women and youth.',
  },
  {
    title: 'Mobile Health Outreach',
    description: 'Periodic free health screenings and maternal care clinics in underserved communities.',
  },
]

export const needsCategories = {
  education: [
    { title: 'School Fees', description: 'Tuition and registration costs for primary, secondary, and vocational students.' },
    { title: 'Educational Materials', description: 'Textbooks, uniforms, bags, and stationery for the new school term.' },
  ],
  community: [
    { title: 'Food Supplies', description: 'Staple food packages — rice, beans, oil, and grains — for vulnerable households.', image: imgNeedFood },
    { title: 'Clothing', description: 'Seasonal clothing donations for children, widows, and displaced families.', image: imgNeedClothing },
    { title: 'Essential Needs', description: 'Hygiene kits, bedding, and household basics for families starting over.', image: imgNeedEssentials },
  ],
  empowerment: [
    { title: 'Widows', description: 'Skills training and small grants to start sustainable, income-generating work.' },
    { title: 'Single Mothers', description: 'Childcare support and vocational training to build financial independence.' },
    { title: 'Youths', description: 'Mentorship, scholarships, and career-readiness programs for young people.' },
  ],
}

export const donationImpact = [
  { title: 'Education', description: 'Keeps children in school and learning, term after term.' },
  { title: 'Feeding Programs', description: 'Puts consistent, nutritious meals on family tables.' },
  { title: 'Community Support', description: 'Provides clothing, hygiene kits, and essentials to those in need.' },
  { title: 'Shelter Projects', description: 'Builds safe housing for survivors and displaced families.' },
  { title: 'Women Empowerment', description: 'Funds training and grants that create lasting independence.' },
]

export const donationOptions = [
  {
    title: 'One-Time Donation',
    description: 'Make an immediate impact with a single gift toward our most urgent needs.',
    icon: 'FaHandHoldingHeart',
  },
  {
    title: 'Monthly Donation',
    description: 'Become a sustaining partner with a recurring gift that funds ongoing programs.',
    icon: 'FaCalendarCheck',
  },
  {
    title: 'Sponsorship Opportunities',
    description: 'Sponsor a child\'s education, a widow\'s training, or a full program area.',
    icon: 'FaHandshakeAngle',
  },
]

export const team = {
  founder: {
    name: 'Dr. Victoria Alabaster-Eze',
    role: 'Founder & Executive Director',
    bio: 'Dr. Victoria Alabaster-Eze founded the ministry after two decades of grassroots community work, driven by a conviction that every woman deserves dignity, opportunity, and a community that believes in her future.',
    message: '"I have seen what happens when a widow is given not charity, but a chance. She does not just survive — she builds, she leads, she lifts others. That is the work we are committed to, one family at a time."',
  },
  admin: [
    { name: 'Grace Adeyemi', role: 'Programs Director' },
    { name: 'Patricia Mensah', role: 'Finance & Operations Manager' },
    { name: 'Esther Williams', role: 'Community Outreach Coordinator' },
  ],
  board: [
    { name: 'Rev. Daniel Okafor', role: 'Board Chairman' },
    { name: 'Dr. Linda Brown', role: 'Board Secretary' },
    { name: 'Michael Johnson', role: 'Board Treasurer' },
    { name: 'Pastor Ruth Adebayo', role: 'Board Member' },
  ],
}

export const offices = [
  {
    country: 'Nigeria Office',
    address: ' Akure, Nigeria',
    phone: '+234 80 XXXXXXXXX',
    email: 'victoriaalabaster007@gmail.com',
  },
  {
    country: 'USA Office',
    address: 'Texas, USA',
    phone: '+1 4438588441',
    email: 'victoriaalabaster007@gmail.com',
  },
]

export const galleryCategories = [
  'All',
  '2026 Outreach',
  'Outreach Activities',
  'Programs',
  'Community Impact',
  'Events',
]

export const galleryItems = [
  {
    id: '2026-v4',
    type: 'video',
    category: '2026 Outreach',
    title: 'Live Classroom Distribution of Books & Educational Supplies',
    description: 'Volunteers and educators distributing textbooks, exercise books, and writing materials directly to primary school students.',
    video: video4,
    duration: '1:54',
  },
  {
    id: '2026-v5',
    type: 'video',
    category: '2026 Outreach',
    title: 'Beneficiary Testimony & Thanksgiving for Medical Surgery Grant',
    description: 'Mrs. Oluwafemi Oluwafunmilayo Elizabeth offering heartfelt prayers and gratitude after receiving a ₦750,000 surgical intervention grant.',
    video: video5,
    duration: '1:34',
  },
  {
    id: '2026-img01',
    type: 'image',
    category: '2026 Outreach',
    title: 'Educational Sponsorship Award Presentation',
    description: 'Agboola Sunday Stephen receiving an educational scholarship grant to support his schooling.',
    image: img01,
  },
  {
    id: '2026-v1',
    type: 'video',
    category: '2026 Outreach',
    title: 'Students Praying & Expressing Heartfelt Gratitude',
    description: 'Pupils at Community Primary School offering prayers of blessing and saying thank you for the educational sponsorship.',
    video: video1,
    duration: '0:30',
  },
  {
    id: '2026-img03',
    type: 'image',
    category: '2026 Outreach',
    title: 'Emergency Medical Surgery Support Cheque (₦750,000)',
    description: 'Signed FirstBank cheque issued to Oluwafemi Oluwafunmilayo Elizabeth for urgent medical surgical care.',
    image: img03,
  },
  {
    id: '2026-v6',
    type: 'video',
    category: '2026 Outreach',
    title: 'Issuing Official Medical Assistance Grant Cheque',
    description: 'Official signing and issuance of the ₦750,000 surgery support cheque to ensure urgent healthcare for the beneficiary.',
    video: video6,
    duration: '0:57',
  },
  {
    id: '2026-img02',
    type: 'image',
    category: '2026 Outreach',
    title: 'FirstBank Scholarship Grant Cheque (₦200,000)',
    description: 'Official scholarship cheque presented to Agboola Sunday Stephen from Victoria-Alabaster International Women Ministry.',
    image: img02,
  },
  {
    id: '2026-v2',
    type: 'video',
    category: '2026 Outreach',
    title: 'Little Pupil Joyfully Saying "Thank You Ma!"',
    description: 'A young learner holding her new school books and sharing a sweet thank-you message with joy.',
    video: video2,
    duration: '0:04',
  },
  {
    id: '2026-v3',
    type: 'video',
    category: '2026 Outreach',
    title: 'School Administration & Teachers Blessing Donors',
    description: 'Headteachers and staff expressing sincere gratitude and invoking blessings upon the ministry and generous sponsors.',
    video: video3,
    duration: '0:28',
  },
  {
    id: '2026-img04',
    type: 'image',
    category: '2026 Outreach',
    title: 'Healthcare Assistance Documentation & Cheque',
    description: 'Official grant documentation ensuring full transparency and timely medical care for the beneficiary.',
    image: img04,
  },
  { id: 1, type: 'image', category: 'Outreach Activities', title: 'Food & Supply Distribution', color: 'from-green-400 to-green-600', image: imgGallery1 },
  { id: 2, type: 'image', category: 'Programs', title: 'Empowering Small Businesses', color: 'from-gold-300 to-gold-500', image: imgGallery2 },
  { id: 3, type: 'image', category: 'Community Impact', title: 'Educational Support Program', color: 'from-green-300 to-green-500', image: imgGallery3 },
  { id: 4, type: 'image', category: 'Outreach Activities', title: 'School Children Assistance', color: 'from-gold-200 to-gold-400', image: imgGallery4 },
  { id: 5, type: 'image', category: 'Community Impact', title: 'Nurturing Future Generations', color: 'from-green-500 to-green-700', image: imgGallery5 },
  { id: 6, type: 'image', category: 'Programs', title: 'Laptop Donation — Digital Education Initiative', color: 'from-emerald-400 to-emerald-600', image: imgGalleryLaptop },
  { id: 7, type: 'image', category: 'Outreach Activities', title: 'Community Gathering & Women Support Session', color: 'from-gold-400 to-gold-600', image: imgGalleryCommunity },
  { id: 8, type: 'image', category: 'Community Impact', title: 'Bonds of Sisterhood — Faith & Friendship', color: 'from-green-300 to-green-500', image: imgGallerySisterhood },
  { id: 9, type: 'image', category: 'Programs', title: 'School Uniforms for Sponsored Children', color: 'from-emerald-300 to-emerald-500', image: imgGallerySchool },
]

export const testimonials = [
  {
    quote: 'Through the widow empowerment program, I started my tailoring business. Today I support my three children on my own.',
    name: 'Chidinma O.',
    role: 'Program Beneficiary',
  },
  {
    quote: 'My daughter never missed a single term because of this ministry. I finally felt like someone saw us.',
    name: 'Funmilayo A.',
    role: 'Single Mother, Program Beneficiary',
  },
]
