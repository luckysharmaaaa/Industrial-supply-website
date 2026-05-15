export const BRAND = {
  name: 'Deepak Enterprises',
  tagline: 'Trusted Old Dhoti Suppliers in India Since 1987',
  phone: '+91 870278602',
  phoneRaw: '9991131010',
  email: 'luckysharma232004@gmail.com',
  address: 'House no 254/21, kailash colony iti gate gali no 1 ,Sonipat, haryana 131001',
  youtube: 'https://www.youtube.com',
  whatsapp: 'https://wa.me/918708278502',
  year: 1987,
  experience: '38+',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'Old Dhoti White', path: '/products/old-dhoti-white' },
      { label: 'Old Dhoti Colour', path: '/products/old-dhoti-colour' },
      {
        label: 'Old Cutting Cloth Colour Sports T-shirt',
        path: '/products/old-cutting-cloth-sports-tshirt',
      },
      {
        label: 'Knitted Hand Gloves Blue/White',
        path: '/products/knitted-hand-gloves',
      },
    ],
  },
  { label: 'Blog', path: '/blog' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
];
