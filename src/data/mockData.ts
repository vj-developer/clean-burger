import { MenuItem, Outlet, CareerPosition } from '../types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuB5rpqfL_5D7d7m0-DTzAjh5jtHP1WaEUSlgZdJJG5igaSodHx81E6wWxJz1afFpN1-V1yAqM12SBCZGyCxwUsejfu8DD6xTZWDJ4sx_Th_4iBwLtt0Pe5D6aGeE7KkMMBY50Bmd2SzHFDEBvAZUyNxrmqXzW_Z12bQIAVitPM8Mu6g7-VoEc_aJuzweOVO_jgwOD7gmA9tTQKDIiEtB5pzShUDJ698bOvaQ1s01iFUs6XsXukXQA0qHTf3BYUA8JZ_J0f0uOdWMBE";

export const OUTLETS: Outlet[] = [
  {
    id: 'race-course',
    name: 'Race Course',
    tagline: 'THE URBAN LANDMARK',
    description: 'Situated in the heart of the historic district, our Race Course outlet blends artisanal culinary speed with an architectural sanctuary of deep navy and polished glass.',
    address: '442 Grand Pavilion Road, Race Course Plaza, Downtown Metropolitan, 4002',
    phone: '+1 (0555) 080-4432',
    email: 'racecourse@cleanburger.com',
    hours: '11:00 AM – 11:30 PM Daily',
    schedule: {
      monThu: '11:00 AM - 10:00 PM',
      friSat: '11:00 AM - 12:00 AM',
      sunday: '12:00 PM - 09:00 PM'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlGT4a0QGNCs5bhgmJHco7tnb7wlvy_tPQgLPZQqTHzssR1Voa5Cv0GVS5ISAJOf-JrGVP2g584X2Dai2JwM3QqFf_m0MBZ1leiMSFyDwG18kw5DEabBZL1Fim3uAI5_3mYtc9jf7Ct9MKUAvKVfe31ZiecQjLEx0-pyHgC1GQT9gvliikYD3yayiMDC4-Wu695IaW1kyMEcVwu8-XxD3trat2Qpm4pKFI8kNYEayuAvBtzZ3Z_kacZ1Uvm-LqxRDl7vLO1klW3Dg',
    status: 'Open Now',
    mapQuery: '124 Race Course Road Coimbatore'
  },
  {
    id: 'peelamedu',
    name: 'Peelamedu',
    tagline: 'TECH HUB FLAGSHIP',
    description: 'Located right opposite PSG Tech, our Peelamedu outpost caters to the fast-moving tech and academic pulse with late-night wagyu drops and high-contrast ambient seating.',
    address: 'Avinashi Rd, opposite PSG Tech, Peelamedu, Coimbatore, 641004',
    phone: '+91 98765 43211',
    email: 'peelamedu@cleanburger.com',
    hours: '11:00 AM – 12:00 AM Daily',
    schedule: {
      monThu: '11:00 AM - 11:00 PM',
      friSat: '11:00 AM - 01:00 AM',
      sunday: '12:00 PM - 11:00 PM'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOfRCNoF7qMpRNDD7mSI5h7TtfjHZXCJasuHp6_MLOmJLUCQyAUUdy5GmEXiLSrvgcJFa_cgJVBYNy0Jof0Uo434zgQkM9eZ9hYVQfj7wKTdzjT2JhgSUJHHcW-kQRm4856xCBzw4kvDJFugD0z14q6AyUFrhSLrA6J9P0Awj1N9oMGlrwljhlzjWjKNTwbEjInoRtS2RgkKNJ7zi2RiofWSzJ65pBGqYUCl0kiHB7PYnaasIy5cbze7oy656zVc2U46ze7J_VEx0',
    status: 'Open Now',
    mapQuery: 'PSG Tech Peelamedu Coimbatore'
  },
  {
    id: 'rs-puram',
    name: 'RS Puram',
    tagline: 'CULTURAL SANCTUARY',
    description: 'Surrounded by heritage avenues on DB Road, RS Puram offers an intimate, design-forward dining atmosphere featuring open-flame searing and handcrafted craft beverages.',
    address: 'Diwan Bahadur Rd, RS Puram, Coimbatore, Tamil Nadu 641002',
    phone: '+91 98765 43212',
    email: 'rspuram@cleanburger.com',
    hours: '11:30 AM – 11:00 PM Daily',
    schedule: {
      monThu: '11:30 AM - 10:30 PM',
      friSat: '11:30 AM - 11:30 PM',
      sunday: '12:00 PM - 10:00 PM'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCds_f5AwmCZvC0_ti2ozixLaXV0n49cspFwFC7y2-gh-Yn84EIrVA1xgEUHWq7wesXLd40Y1Z7uqlRMCKE6gJ7LlHBjoNCa-N1IdZ_mZSi3bWVFkN0xpRcBF0UkUpvjTIo0AHJJHSXEGuAC5yxiE_CxFkwSRWuZlMfDLjPYGFvknXHT9dA-7w86KMzP8EytFa_kqJSswkiLj5CHtHlsHncp9Fb_B2aQLvbkqkM0wC4khq60fNZSPEDWdQCLd8aNZgvMuHX9HIt3WA',
    status: 'Open Now',
    mapQuery: 'Diwan Bahadur Road RS Puram Coimbatore'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'classic-clean',
    name: 'Classic Clean',
    description: "The purist's choice. 100% Wagyu beef, sharp cheddar, secret house sauce, toasted brioche.",
    price: 280,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWOv-I2Wl8nQcMzv577DiUNNp1QHS58TqTcu-o50kq-XBDIwFtA5stLnbmAIkMnKRP2j02W9Wwgbjh3m1Be0zreMyh8H1GTiwyGl5YYENEdzGCvsVu8bDhwrkqmR2REdSfYTeUrIuqdzKN9wVX8K-sDSQDh8ownuquFJcNeOI4AOBoWDVf29UwPuSSv4-RYRh_jfISxLYFQWsUb3oQLF0E_aUSOZi9GE1RWDGYt2GnAbdNVdtsjOSA7g_ECZUd5GR2riBuyXCyVtU',
    category: 'burgers',
    badge: "Chef's Choice",
    calories: 680,
    popular: true
  },
  {
    id: 'truffle-drip',
    name: 'Truffle Drip',
    description: 'Earthy black truffle aioli, wild sautéed mushrooms, aged swiss cheese, and prime beef.',
    price: 350,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_UBtHq0qPTVrprLGEY7IhGelVb33WgPgQRIOE7_AcLuh_2Td2JE5Fa_a1F7HRccw71_71vcjlqvtGMGnzqH4Oo--Yur5FDDtN2bUsXC9Uecw2jvzk7i4zsqVkrF4zksuWjH1es8oQ-sXLtOybtuHtB5PpRTfjx869AjT0P2x8jNlhPjA6D48hz2G4SlKqw-VHlkwVFFkWurPinY_1EkL21n3lPxKKLTC5GD_P9w7TXiOADQ6VO_y6BpFXFJKZSf3v-BB6I4mib68',
    category: 'burgers',
    badge: 'Signature',
    calories: 740,
    popular: true
  },
  {
    id: 'spicy-yard',
    name: 'Spicy Yard',
    description: 'For the bold. Jalapeño jam, pepper jack cheese, crispy onions, and sriracha mayo.',
    price: 320,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5rIBtCuRZRN_UOnClCuUBHP4DOGzlqErWOSskXfu858eaT8zCwYqn4qWbtvgHJQWPlmUUXg-TbfilAtL8ld2azxZHAh1ZkCCtU_YG2MXHLgFRexsv_r3dggF_OnC5e4z4anR8ciBRTwGLYXbWvUKOp-tQ-HpTSJTHHW4zcODv8e3i0om1jPXX9jxoRohNkYhUBCLDbd4webGVh_e-vrNv-OW-muO5ZAQlJyEV87MDWb6mihBg1BMY3QQFrrwh_JqhtqQHt8prChs',
    category: 'burgers',
    badge: 'Hot',
    isSpicy: true,
    calories: 710,
    popular: true
  },
  {
    id: 'smokey-bbq-stack',
    name: 'Smokey BBQ Stack',
    description: 'Double smoked bacon, hickory BBQ glaze, caramelized onions, double sharp cheddar on toasted brioche.',
    price: 360,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    category: 'burgers',
    badge: 'Bestseller',
    calories: 820
  },
  {
    id: 'green-urban-veg',
    name: 'Green Urban Patty',
    description: 'House-made spiced black bean & portobello patty, avocado smash, microgreens, and vegan truffle mayo.',
    price: 260,
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80',
    category: 'burgers',
    badge: 'Plant-Based',
    isVeg: true,
    calories: 540
  },
  {
    id: 'artisanal-thrice-cut-fries',
    name: 'Thrice-Cut Hand Fries',
    description: 'Golden, hand-cut local potatoes fried thrice and tossed with sea salt & rosemary.',
    price: 140,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxi_Ve0mnsgkOifX2bP5lvHk8-1LhIUPnrli1hXH2ebKq7pRD6mATjAOs3smAl8U85P-KP_JWb7DFSymuHKqgkKEgRDWOHzXR0V8c46AKcVH5TpflXhPJRWEDasNAk1cf_JGEb9UKuEOD8m2NBtaOB-fSgnoNrieVZCBpVtjyKN7bvrEg82toP0E3VjirSVrzzMfSeA1bI-b9htOKmZSVhUdQ7TXpyGXmFG03p_gkaxYBzAyDnmNBB9fWFoB6bw0XY5l3l5wDlbfY',
    category: 'sides',
    badge: 'Must Have',
    calories: 380,
    popular: true
  },
  {
    id: 'truffle-parm-fries',
    name: 'Truffle Parmesan Fries',
    description: 'Thrice-cut hand fries drizzled with black truffle oil and freshly shaved parmesan.',
    price: 190,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    category: 'sides',
    calories: 460
  },
  {
    id: 'mint-citrus-artisan-soda',
    name: 'Artisanal Mint Soda',
    description: 'Pressed lime, muddled fresh mint, organic cane sugar, and chilled sparkling mineral water.',
    price: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Om7l6tMqwkxHpkB8lsI-S61rA7G53L1BDG6QUK52oplr2rEy3U4lYHk6RxvgjoHUSVVhc16e-u91q8062H8loSNurF_bdMWOWJzUT0G4UAOWdZz1g30N2ZDzBiktwY7rUkvtJlgqMdG_SKRGh0nYUPvvNyB7w519jmwhlg58O3FOSucV9VoJ-3fQntwzTGjFKT62agCGT9GANds_M1lfj1qUqg3BXJofLPcTVdyfSimX4xJWTxYKA4CJWi1cwvD_Z42dfgGBL6o',
    category: 'beverages',
    badge: 'Craft',
    calories: 110,
    popular: true
  },
  {
    id: 'dark-cocoa-thickshake',
    name: 'Dark Belgian Cocoa Shake',
    description: '70% dark Belgian chocolate blended with artisanal vanilla bean gelato and whipped cream.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    category: 'desserts',
    calories: 520
  }
];

export const INSTAGRAM_IMAGES = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqAfqJLy57IiDPOKRqOk46F4-d7yiHPPjA768p-dW81ArAGaveyvB46d5WmxZWFD_fttXlapBqwdGUf_Geqkw1_tiot2aSDR-AmR2ccZMqe7Glfz7ECoN2IauE2rQkjbUFpf1okpTi1fnFpqJ5m2yxTqRAA4G6wbxIMJ2OV2cW9z5ClJmknbHfad4XwPvjbyHymvE4e4HHsM0WO46Hc1dHpX7oNwbR2TfG3sCYHR0iheWqiywDGAAQTo16vr6wQyf3hGkBLDvVgrY',
    caption: 'Handcrafted flour dusting before baking 4 AM brioche'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSBhJEN86IvyhjfqZmh39N1yMdzCLYsiisWkE_roESaHZpdjbMSMO52Ojq7jlzro2sEaWhnhKQ5XvmCwVYBxyK7uJqn_RseHLXKS5p23W8HoPYiNHUSKe4xN_BcuWejk0om_3svVsvrxT7N7tuKVOm4qsxToHMQbIxn-xfbSpWq80-RD23QBqfpigqtiYETN_RC8SEnKAtgGMzud5OGcYRfSMWN8_w5FUj59LEyk5DOUGBVMastLzh0fdC11HxNyUG-Oy22eqq7h0',
    caption: 'Glistening grass-fed beef sizzling on the flat-top'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn1-UndGBKAKjl4DA5-biB7f-YzYgaA1eVPJ3ZNFAX5Mo6u75neXd98FrYn7ZRqtdP1UygEbBWIJzl3qWwYMlMhQo_TL8IKwPgDdqKMpPXS-MYow9Wm-0MC4LhrfZn5DLTQkvl03ijJBUijygIlE2r505yQ51vCWnURs9VTMojJJfyTHtOLsEOVtwTY0b3tA_IeuSixexa3qW5gAYuPkkp3vYND5UHlfTIQ19ome152HKA9RTh7UC9-8Abasn8XwbrXMyJWQ3Of30',
    caption: 'Minimalist sustainable parchment wrapping'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4h3gFS33UZ5h1sfhUfwrJBox69SU9QA7f4tYjP8PsdfDPRyGjOL--fKAPThaShCXvRiVueLVmTlQJ4lKeFd3ZZnwU3onuEFVjN0J677Ei8DKptWzLGSK-7DpHkbazwQfg0mdTfKtOaCLzipmg5U1ASkkknDEAqw__G2pdNes-_G78CkCDKD-L3W1QzYdcZzCQYbdtz7hXAZ0hWOkzUdenKEVSY6CJLkriQQpFk73O6QwHVcD1KCBnNsEiTGYYUQyGzYsYKwhyDpw',
    caption: 'Tech-casual vibe at the Peelamedu outlet'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Om7l6tMqwkxHpkB8lsI-S61rA7G53L1BDG6QUK52oplr2rEy3U4lYHk6RxvgjoHUSVVhc16e-u91q8062H8loSNurF_bdMWOWJzUT0G4UAOWdZz1g30N2ZDzBiktwY7rUkvtJlgqMdG_SKRGh0nYUPvvNyB7w519jmwhlg58O3FOSucV9VoJ-3fQntwzTGjFKT62agCGT9GANds_M1lfj1qUqg3BXJofLPcTVdyfSimX4xJWTxYKA4CJWi1cwvD_Z42dfgGBL6o',
    caption: 'Crisp house-pressed mint soda'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxi_Ve0mnsgkOifX2bP5lvHk8-1LhIUPnrli1hXH2ebKq7pRD6mATjAOs3smAl8U85P-KP_JWb7DFSymuHKqgkKEgRDWOHzXR0V8c46AKcVH5TpflXhPJRWEDasNAk1cf_JGEb9UKuEOD8m2NBtaOB-fSgnoNrieVZCBpVtjyKN7bvrEg82toP0E3VjirSVrzzMfSeA1bI-b9htOKmZSVhUdQ7TXpyGXmFG03p_gkaxYBzAyDnmNBB9fWFoB6bw0XY5l3l5wDlbfY',
    caption: 'Thrice-cut rosemary & sea salt fries'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLxI21XNCibJWL1DfMJJFEAsfBkSuIHrQ4ulXADGY7I3FSJsUZ9dIC2DooN1FmiqADDhAbcGVG8vjwXmGfhf_hYb0wV3gD4VnXFim6d0i8_p0f3c0d4Kt2GBn8EZYhx6EHxnOpbPGwCki-V_mcB8wwOVVwDMGb9Q3XhtWhSsKv5x-Ymzs3Hgsi2pH1WRd8Cowen1xZ0JYWLcYyTAPI0NxD_kld-Yw2XJMM6iuO7--K2ZKP0wlqimIEOihiYHwo6lEvWzw-96ATZHI',
    caption: 'The glowing Clean Burger neon sign at dusk'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh7ucTqJf34o8vsYzRz0uiAfULipU3iLW2MpAzIEqqL8khFw2UCZNfItD8E1Ux6VS27gktgyfkPA95HB5S-EATffTdHEzvZFvDrCXWYKEZjYjpqss6ZpMxPQgl8SLCSgvXhP4WBBQn3mBOdLgOtb8DAC7MQo_tAtsfCj5tqsfBPImgbSGQyt1EI_YKe-Mzt4L8gSVaHGlcab1-PCLth26kdoclmaz-tOvrmdQCtfY2QCKJHIO2YC-AwU8ksHXUO6YrEqtAm4zaf8Q',
    caption: 'Precision plating by our Head Grill Master'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_yy6AChqlzvTD5bq-CNFDkpHh3m8SKRUYR2tV2-aPDUlbEtjW5IXa63A3SbaxzFcWZQRXB1YzPKOEX894vzzMWUEosdSrshRKfoko2Xi82hSedNJrxrK9s8ddMpHq8vgLpbwm701nLEWNfv4qMXMfOhn3mpXZabwCeHUxNDo-43KK-9LvlJn9qa43dcHdFOK4LwuVNFqxeYIQdQ4vrLo4ww6tgPESNqLnTXgvmQ6uhI4GNFXGScweCW7eEI8H7u7gO-07vjTS5Dk',
    caption: 'Coimbatore skyline at twilight — Born here, refined for the world'
  }
];

export const CAREER_POSITIONS: CareerPosition[] = [
  {
    id: 'grill-master',
    title: 'Head Grill Master',
    department: 'Kitchen Ops',
    location: 'Race Course Outlet',
    type: 'Full-Time',
    description: 'Lead our high-speed artisanal kitchen team, overseeing precision temperature control, wagyu searing, and bun assembly.',
    requirements: ['3+ years in high-volume gourmet burger or steakhouse kitchens', 'Mastery of temperature precision', 'Passion for local artisanal ingredients']
  },
  {
    id: 'store-lead',
    title: 'Outlet Hospitality Manager',
    department: 'Store Management',
    location: 'Peelamedu Outlet',
    type: 'Full-Time',
    description: 'Deliver unmatched urban hospitality and manage day-to-day outlet operations, staff scheduling, and customer experience.',
    requirements: ['Proven experience managing modern food service concepts', 'Strong leadership & communication skills', 'Obsession with clean architecture and customer satisfaction']
  },
  {
    id: 'qa-chef',
    title: 'Flavor & Sauce R&D Specialist',
    department: 'Culinary Innovation',
    location: 'Coimbatore HQ Lab',
    type: 'Full-Time',
    description: 'Experiment with regional ingredients and international techniques to craft next-season signature sauces and drops.',
    requirements: ['Degree or diploma in Culinary Arts', 'Demonstrated creativity in sauce emulsion & spice balancing']
  }
];
