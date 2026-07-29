import { MenuItem, Outlet, CareerPosition } from '../types';

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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlGT4a0QGNCs5bhgmJHco7tnb7wlvy_tPQgLPZQqTHzssR1Voa5Cv0GVS5ISAJOf-JrGVP2g584X2Dai2JwM3QqFf_m0MBZ1leiMSFyDwG18kw5DEabBZL1Fim3uAI5_3mYtc9jf7Ct9MKUAvKVfe31ZiecQjLEx0-pyHgC1GQT9gvliikYD3yayiMDC4-Wu695IaW1kyMEcVwu8-XxD3trat2Qpm4pKFI8kNYEayuAvBtzZ3Z_kacZ1Uvm-LqxRDl7vLO1klW3Dg',
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
    status: 'Open Now',
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
    status: 'Open Now',
    mapQuery: 'Marine Drive Ernakulam Kochi Kerala',
    mapUrl: 'https://maps.google.com/?q=Marine+Drive+Kochi+Kerala'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- BEEF BURGERS ---
  {
    id: 'clean-classic',
    name: 'Clean Classic',
    description: '100% grass-fed beef patty, sharp melted cheddar, pickles, onions & signature house clean sauce on toasted brioche.',
    price: 209,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWOv-I2Wl8nQcMzv577DiUNNp1QHS58TqTcu-o50kq-XBDIwFtA5stLnbmAIkMnKRP2j02W9Wwgbjh3m1Be0zreMyh8H1GTiwyGl5YYENEdzGCvsVu8bDhwrkqmR2REdSfYTeUrIuqdzKN9wVX8K-sDSQDh8ownuquFJcNeOI4AOBoWDVf29UwPuSSv4-RYRh_jfISxLYFQWsUb3oQLF0E_aUSOZi9GE1RWDGYt2GnAbdNVdtsjOSA7g_ECZUd5GR2riBuyXCyVtU',
    category: 'beef',
    badge: 'Classic',
    calories: 620,
    popular: true
  },
  {
    id: 'clean-classic-double',
    name: 'Clean Classic Double',
    description: 'Double grass-fed beef patties with double melted cheddar, pickles, onions & signature clean sauce.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    category: 'beef',
    badge: 'Bestseller',
    calories: 840,
    popular: true
  },
  {
    id: 'smokestack',
    name: 'Smokestack',
    description: 'Seared beef patty, crispy smoked bacon, caramelized onions & rich hickory BBQ glaze on brioche.',
    price: 259,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    category: 'beef',
    calories: 710
  },
  {
    id: 'smokestack-double',
    name: 'Smokestack Double',
    description: 'Double seared beef patties, double crispy bacon, caramelized onions & double hickory BBQ glaze.',
    price: 349,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
    category: 'beef',
    badge: 'Heavy Hitter',
    calories: 950
  },

  // --- SMASHED CHICKEN BURGERS ---
  {
    id: 'smash-bird',
    name: 'Smash Bird',
    description: 'Freshly smashed chicken patty, melted cheddar, crisp lettuce & signature house bird sauce.',
    price: 199,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
    category: 'smashed_chicken',
    calories: 540,
    popular: true
  },
  {
    id: 'smash-bird-double',
    name: 'Smash Bird Double',
    description: 'Double smashed chicken patties, double melted cheddar, lettuce & signature bird sauce.',
    price: 269,
    image: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?auto=format&fit=crop&w=800&q=80',
    category: 'smashed_chicken',
    calories: 720
  },
  {
    id: 'bacon-bird',
    name: 'Bacon Bird',
    description: 'Smashed chicken patty with crispy smoked bacon, melted cheddar & smoky ranch mayo.',
    price: 249,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80',
    category: 'smashed_chicken',
    badge: 'Popular',
    calories: 630
  },
  {
    id: 'bacon-bird-double',
    name: 'Bacon Bird Double',
    description: 'Double smashed chicken patty, double crispy bacon, melted cheddar & smoky ranch.',
    price: 329,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?auto=format&fit=crop&w=800&q=80',
    category: 'smashed_chicken',
    calories: 810
  },

  // --- PREMIUM BURGERS ---
  {
    id: 'surf-and-turf',
    name: 'Surf & Turf',
    description: '100% grass-fed beef patty topped with golden crispy fried shrimp, garlic herb butter & spicy aioli.',
    price: 379,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_UBtHq0qPTVrprLGEY7IhGelVb33WgPgQRIOE7_AcLuh_2Td2JE5Fa_a1F7HRccw71_71vcjlqvtGMGnzqH4Oo--Yur5FDDtN2bUsXC9Uecw2jvzk7i4zsqVkrF4zksuWjH1es8oQ-sXLtOybtuHtB5PpRTfjx869AjT0P2x8jNlhPjA6D48hz2G4SlKqw-VHlkwVFFkWurPinY_1EkL21n3lPxKKLTC5GD_P9w7TXiOADQ6VO_y6BpFXFJKZSf3v-BB6I4mib68',
    category: 'premium',
    badge: 'Chef Special',
    calories: 890,
    popular: true
  },
  {
    id: 'the-big-bird',
    name: 'The Big Bird',
    description: 'Colossal crispy fried chicken breast stack, double cheddar cheese, dill pickles & honey mustard.',
    price: 349,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    category: 'premium',
    badge: 'Signature Stack',
    calories: 860
  },

  // --- CRISPY CHICKEN BURGERS ---
  {
    id: 'classic-crunch',
    name: 'Classic Crunch',
    description: 'Golden crispy chicken breast, shredded lettuce & creamy garlic mayo on toasted brioche.',
    price: 189,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80',
    category: 'crispy_chicken',
    calories: 580
  },
  {
    id: 'nashville-heat',
    name: 'Nashville Heat',
    description: 'Crispy chicken tossed in fiery Nashville spice oil, spicy cayenne slaw & dill pickles.',
    price: 333,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5rIBtCuRZRN_UOnClCuUBHP4DOGzlqErWOSskXfu858eaT8zCwYqn4qWbtvgHJQWPlmUUXg-TbfilAtL8ld2azxZHAh1ZkCCtU_YG2MXHLgFRexsv_r3dggF_OnC5e4z4anR8ciBRTwGLYXbWvUKOp-tQ-HpTSJTHHW4zcODv8e3i0om1jPXX9jxoRohNkYhUBCLDbd4webGVh_e-vrNv-OW-muO5ZAQlJyEV87MDWb6mihBg1BMY3QQFrrwh_JqhtqQHt8prChs',
    category: 'crispy_chicken',
    badge: 'Fiery 🌶️',
    isSpicy: true,
    calories: 740,
    popular: true
  },
  {
    id: 'cajun-crunch',
    name: 'Cajun Crunch',
    description: 'Crispy chicken breast coated in zesty Cajun spices, melted pepper jack cheese & creole mayo.',
    price: 229,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    category: 'crispy_chicken',
    isSpicy: true,
    calories: 650
  },
  {
    id: 'cheesy-classic',
    name: 'Cheesy Classic',
    description: 'Crispy chicken breast smothered in warm melted cheddar cheese sauce & crunchy dill pickles.',
    price: 239,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80',
    category: 'crispy_chicken',
    badge: 'Melted Cheddar',
    calories: 690
  },

  // --- LOADED FRIES ---
  {
    id: 'clean-clucker-fries',
    name: 'Clean Clucker Fries',
    description: 'Crispy skin-on fries topped with chopped fried chicken, house cheese sauce & scallions.',
    price: 239,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxi_Ve0mnsgkOifX2bP5lvHk8-1LhIUPnrli1hXH2ebKq7pRD6mATjAOs3smAl8U85P-KP_JWb7DFSymuHKqgkKEgRDWOHzXR0V8c46AKcVH5TpflXhPJRWEDasNAk1cf_JGEb9UKuEOD8m2NBtaOB-fSgnoNrieVZCBpVtjyKN7bvrEg82toP0E3VjirSVrzzMfSeA1bI-b9htOKmZSVhUdQ7TXpyGXmFG03p_gkaxYBzAyDnmNBB9fWFoB6bw0XY5l3l5wDlbfY',
    category: 'loaded_fries',
    badge: 'Fan Favorite',
    calories: 520,
    popular: true
  },
  {
    id: 'firebird-fries',
    name: 'Firebird Fries',
    description: 'Golden fries loaded with Nashville hot chicken tenders, sliced jalapeños & sriracha drizzle.',
    price: 249,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    category: 'loaded_fries',
    isSpicy: true,
    calories: 560
  },
  {
    id: 'beef-boss-fries',
    name: 'Beef Boss Fries',
    description: 'Loaded skin-on fries with seasoned minced beef, melted sharp cheddar, pickles & clean sauce.',
    price: 269,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    category: 'loaded_fries',
    badge: 'Heavy Loaded',
    calories: 610
  },
  {
    id: 'smokehouse-fries',
    name: 'Smokehouse Fries',
    description: 'Golden fries layered with crispy bacon bits, caramelized onions & hickory BBQ drizzle.',
    price: 289,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80',
    category: 'loaded_fries',
    calories: 590
  },
  {
    id: 'nashville-heat-fries',
    name: 'Nashville Heat Fries',
    description: 'Crispy skin-on fries generously loaded with fiery Nashville hot chicken chunks & pickled jalapeños.',
    price: 319,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    category: 'loaded_fries',
    isSpicy: true,
    calories: 640
  },

  // --- COMBO DEAL ---
  {
    id: 'make-it-a-meal',
    name: 'Make It A Meal',
    description: 'Add skin-on golden fries + cold beverage of your choice to any burger.',
    price: 129,
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80',
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
