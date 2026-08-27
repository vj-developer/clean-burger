import { MenuItem, Outlet, CareerPosition } from '../types';
import kallambalamOutletImage from '@/assets/images/kalambalam_outlet.webp';
import classicCheeseImage from '@/assets/images/classic_cheese.PNG';
import classicDoubleCheeseImage from '@/assets/images/classic_double_cheese.PNG';
import smokeStackImage from '@/assets/images/smoke_stack.jpeg';
import smokeStackDoubleImage from '@/assets/images/smoke_stack_double.jpeg';
import classicChickenImage from '@/assets/images/classic_chicken.PNG';
import cheesyChickenImage from '@/assets/images/chessy_chicken_borger.PNG';
import smashBirdImage from '@/assets/images/smash_bird.PNG';
import smashBirdDoubleImage from '@/assets/images/smash_bird_double.PNG';
import nashvilleBurgerImage from '@/assets/images/nashville_chicken.PNG';
import surfAndTurfImage from '@/assets/images/surf_and_turf.PNG';
import bigBirdImage from '@/assets/images/big_bird.PNG';
import dirtyLoadedFriesImage from '@/assets/images/dirty_loaded_fries.PNG';
import cluckLoadedFriesImage from '@/assets/images/cluck_loaded_fries.PNG';
import bigMixFriesImage from '@/assets/images/loaded_big_mix_fries.PNG';
import nashvilleLoadedFriesImage from '@/assets/images/nashvile_loaded_fries.PNG';
import cajunChickenImage from '@/assets/images/cajun_chicken.PNG';
import frenchFriesImage from '@/assets/images/french_fries.PNG';
import mealDealImage from '@/assets/images/meal_deal.PNG';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuB5rpqfL_5D7d7m0-DTzAjh5jtHP1WaEUSlgZdJJG5igaSodHx81E6wWxJz1afFpN1-V1yAqM12SBCZGyCxwUsejfu8DD6xTZWDJ4sx_Th_4iBwLtt0Pe5D6aGeE7KkMMBY50Bmd2SzHFDEBvAZUyNxrmqXzW_Z12bQIAVitPM8Mu6g7-VoEc_aJuzweOVO_jgwOD7gmA9tTQKDIiEtB5pzShUDJ698bOvaQ1s01iFUs6XsXukXQA0qHTf3BYUA8JZ_J0f0uOdWMBE";

export const OUTLETS: Outlet[] = [
  {
    id: 'kallambalam',
    name: 'Kallambalam (Main Outlet)',
    tagline: 'KERALA MAIN FLAGSHIP',
    description: 'Our primary flagship outlet located on Nagaroor Road in Kallambalam, Kerala. Crafted with passion, serving hot burgers, smashed chicken, and loaded fries fresh daily.',
    address: 'Nagaroor Road, near Anzari Hardwares, Kallambalam, Kerala 695605',
    phone: '+91 98765 43210',
    email: 'kallambalam@cleanburger.com',
    hours: '3:00 PM – 12:00 AM Daily',
    schedule: {
      monThu: '3:00 PM - 12:00 AM',
      friSat: '3:00 PM - 12:00 AM',
      sunday: '3:00 PM - 12:00 AM'
    },
    image: kallambalamOutletImage,
    status: 'Open Now',
    mapQuery: 'Nagaroor Road near Anzari Hardwares Kallambalam Kerala 695605',
    mapUrl: 'https://maps.app.goo.gl/w1bA5NssQSBg9UYJ6'
  },
  {
    id: 'trivandrum',
    name: 'Trivandrum City',
    tagline: 'KERALA URBAN HUB',
    description: 'Serving urban foodies with artisanal speed, high-contrast dining ambiance, and late-night burger drops in Kerala.',
    address: 'MG Road, Statue, Thiruvananthapuram, Kerala 695001',
    phone: '+91 98765 43211',
    email: 'trivandrum@cleanburger.com',
    hours: '3:00 PM – 12:00 AM Daily',
    schedule: {
      monThu: '3:00 PM - 12:00 AM',
      friSat: '3:00 PM - 12:00 AM',
      sunday: '3:00 PM - 12:00 AM'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOfRCNoF7qMpRNDD7mSI5h7TtfjHZXCJasuHp6_MLOmJLUCQyAUUdy5GmEXiLSrvgcJFa_cgJVBYNy0Jof0Uo434zgQkM9eZ9hYVQfj7wKTdzjT2JhgSUJHHcW-kQRm4856xCBzw4kvDJFugD0z14q6AyUFrhSLrA6J9P0Awj1N9oMGlrwljhlzjWjKNTwbEjInoRtS2RgkKNJ7zi2RiofWSzJ65pBGqYUCl0kiHB7PYnaasIy5cbze7oy656zVc2U46ze7J_VEx0',
    status: 'Coming Soon',
    mapQuery: 'MG Road Statue Thiruvananthapuram Kerala',
    mapUrl: 'https://maps.google.com/?q=Statue+Trivandrum+Kerala'
  },
  {
    id: 'kochi',
    name: 'Kochi Marine Drive',
    tagline: 'COASTAL OUTPOST',
    description: 'A coastal hotspot offering fresh smashed chicken, loaded fries, and signature burgers with seaside vibes.',
    address: 'Marine Drive Walkway, Ernakulam, Kochi, Kerala 682031',
    phone: '+91 98765 43212',
    email: 'kochi@cleanburger.com',
    hours: '3:00 PM – 12:00 AM Daily',
    schedule: {
      monThu: '3:00 PM - 12:00 AM',
      friSat: '3:00 PM - 12:00 AM',
      sunday: '3:00 PM - 12:00 AM'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCds_f5AwmCZvC0_ti2ozixLaXV0n49cspFwFC7y2-gh-Yn84EIrVA1xgEUHWq7wesXLd40Y1Z7uqlRMCKE6gJ7LlHBjoNCa-N1IdZ_mZSi3bWVFkN0xpRcBF0UkUpvjTIo0AHJJHSXEGuAC5yxiE_CxFkwSRWuZlMfDLjPYGFvknXHT9dA-7w86KMzP8EytFa_kqJSswkiLj5CHtHlsHncp9Fb_B2aQLvbkqkM0wC4khq60fNZSPEDWdQCLd8aNZgvMuHX9HIt3WA',
    status: 'Coming Soon',
    mapQuery: 'Marine Drive Ernakulam Kochi Kerala',
    mapUrl: 'https://maps.google.com/?q=Marine+Drive+Kochi+Kerala'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- BURGER BEEF ---
  {
    id: 'cheese-burger',
    name: 'Cheese Burger',
    description: 'Smashed beef patties, toasted bun, signature house sauce, shredded onions, lettuce, gherkins & cheese slice.',
    price: 209,
    image: classicCheeseImage,
    category: 'beef'
  },
  {
    id: 'double-cheese-burger',
    name: 'Double Cheese Burger',
    description: 'Smashed double beef patties, toasted bun, signature house sauce, gherkins, shredded onions, lettuce & cheese slice.',
    price: 279,
    image: classicDoubleCheeseImage,
    category: 'beef'
  },
  {
    id: 'smokestack',
    name: 'Smokestack',
    description: 'Smashed beef patties, toasted bun, signature house sauce, beef bacon, caramelised onions, lettuce, gherkins & cheese slice.',
    price: 249,
    image: smokeStackImage,
    category: 'beef'
  },
  {
    id: 'smokestack-double',
    name: 'Smokestack Double',
    description: 'Smashed double beef patties, toasted bun, signature house sauce, beef bacon, caramelised onions, lettuce, gherkins & cheese slice.',
    price: 329,
    image: smokeStackDoubleImage,
    category: 'beef'
  },

  // --- FRIED CHICKEN BURGER ---
  {
    id: 'classic-chicken-burger',
    name: 'Classic Chicken Burger',
    description: 'Deep fried chicken comes with signature sauce, toasted bun & slice cheese.',
    price: 189,
    image: classicChickenImage,
    category: 'fried_chicken'
  },
  {
    id: 'cheesy-chicken-burger',
    name: 'Cheesy Chicken Burger',
    description: 'Deep fried chicken comes with signature sauce, toasted bun, slice cheese, fresh creamy slaw, house made cheese sauce, lettuce & gherkins.',
    price: 239,
    image: cheesyChickenImage,
    category: 'fried_chicken'
  },
  {
    id: 'spicy-chicken-burger',
    name: 'Spicy Chicken Burger',
    description: 'Deep fried chicken comes with signature sauce and powdered spicy seasoning, toasted bun, cheese slice, fresh creamy slaw, lettuce & gherkins.',
    price: 219,
    image: cajunChickenImage,
    category: 'fried_chicken',
    isSpicy: true
  },

  // --- SMASHED CHICKEN BURGER ---
  {
    id: 'smash-bird',
    name: 'Smash Bird',
    description: 'Smashed chicken patties comes with signature sauce and spicy seasoning, toasted bun, chicken bacon, cheese slice, lettuce & gherkins.',
    price: 199,
    image: smashBirdImage,
    category: 'smashed_chicken'
  },
  {
    id: 'smash-bird-double',
    name: 'Smash Bird Double',
    description: 'Smashed double chicken patties comes with signature sauce and spicy seasoning, toasted bun, chicken bacon, cheese slice, lettuce & gherkins.',
    price: 259,
    image: smashBirdDoubleImage,
    category: 'smashed_chicken'
  },

  // --- PREMIUM BURGERS ---
  {
    id: 'nashville-burger',
    name: 'Nashville Burger',
    description: 'Deep fried chicken dips in Nashville signature sauce, toasted bun, hot signature sauce, fresh creamy slaw, lettuce & gherkins.',
    price: 339,
    image: nashvilleBurgerImage,
    category: 'premium',
    badge: 'Popular',
    isSpicy: true,
    popular: true
  },
  {
    id: 'surf-and-turf',
    name: 'Surf & Turf',
    description: 'Smashed chicken and beef patties, toasted bun, signature house sauce, beef bacon, cheese slice, lettuce & gherkins.',
    price: 369,
    image: surfAndTurfImage,
    category: 'premium',
    badge: 'Popular',
    popular: true
  },
  {
    id: 'big-bird',
    name: 'Big Bird',
    description: 'Smashed chicken patties, deep fried spicy chicken, toasted bun, cheese slice, lettuce, fresh creamy slaw & gherkins.',
    price: 349,
    image: bigBirdImage,
    category: 'premium',
    badge: 'Popular',
    popular: true
  },

  // --- LOADED FRIES ---
  {
    id: 'dirty-loaded-fries',
    name: 'Dirty Loaded Fries',
    description: 'Cajun fries loaded with smashed beef, cheesy fillings, topped with signature sauces & jalapeños.',
    price: 249,
    image: dirtyLoadedFriesImage,
    category: 'loaded_fries'
  },
  {
    id: 'cluck-loaded-fries',
    name: 'Cluck Loaded Fries',
    description: 'Cajun fries loaded with deep fried chicken, cheesy fillings, topped with signature sauces & jalapeños.',
    price: 199,
    image: cluckLoadedFriesImage,
    category: 'loaded_fries'
  },
  {
    id: 'big-mix-fries',
    name: 'Big Mix Fries',
    description: 'Cajun fries loaded with deep fried chicken and smashed beef, cheesy fillings, topped with signature sauces & jalapeños.',
    price: 269,
    image: bigMixFriesImage,
    category: 'loaded_fries'
  },
  {
    id: 'nashville-loaded-fries',
    name: 'Nashville Loaded Fries',
    description: 'Cajun fries loaded with Nashville deep fried chicken, topped with signature sauces, fresh creamy slaw & chopped pickles.',
    price: 319,
    image: nashvilleLoadedFriesImage,
    category: 'loaded_fries',
    isSpicy: true
  },
  {
    id: 'classic-fries',
    name: 'Classic Fries',
    description: 'Golden skin-on fries, lightly salted.',
    price: 99,
    image: frenchFriesImage,
    category: 'loaded_fries'
  },

  // --- COMBO DEAL ---
  {
    id: 'make-it-a-meal',
    name: 'Make It A Meal',
    description: 'Upgrade any burger with golden fries + a refreshing drink.',
    price: 109,
    image: mealDealImage,
    category: 'combos',
    badge: 'Best Value',
    popular: true
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
    caption: 'Kerala skyline at twilight — Born here, refined for the world'
  }
];

export const CAREER_POSITIONS: CareerPosition[] = [
  {
    id: 'grill-master',
    title: 'Head Grill Master',
    department: 'Kitchen Ops',
    location: 'Kallambalam Main Outlet',
    type: 'Full-Time',
    description: 'Lead our high-speed artisanal kitchen team, overseeing precision temperature control, smashed chicken, and bun assembly.',
    requirements: ['3+ years in high-volume gourmet burger kitchens', 'Mastery of temperature precision', 'Passion for local fresh ingredients']
  },
  {
    id: 'store-lead',
    title: 'Outlet Hospitality Manager',
    department: 'Store Management',
    location: 'Kallambalam Main Outlet',
    type: 'Full-Time',
    description: 'Deliver unmatched urban hospitality and manage day-to-day outlet operations, staff scheduling, and customer experience.',
    requirements: ['Proven experience managing modern food service concepts', 'Strong leadership & communication skills', 'Obsession with clean quality and customer satisfaction']
  },
  {
    id: 'qa-chef',
    title: 'Flavor & Sauce R&D Specialist',
    department: 'Culinary Innovation',
    location: 'Kerala HQ Lab',
    type: 'Full-Time',
    description: 'Experiment with regional ingredients and international techniques to craft next-season signature sauces and drops.',
    requirements: ['Degree or diploma in Culinary Arts', 'Demonstrated creativity in sauce emulsion & spice balancing']
  }
];
