export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  sku: string;
  description: string;
  image: string;
  inStock: boolean;
  brand: string;
}

export const products: Product[] = [
  // UNIFORMS - Shirts
  {
    id: 'u1',
    name: 'KV White Shirt - Full Sleeve',
    category: 'Uniforms',
    subcategory: 'Shirts',
    price: 450,
    sku: 'UNI-SHT-001',
    description: 'Pure cotton white shirt with school monogram pocket, full sleeve for winter',
    image: 'https://images.unsplash.com/photo-1639690222445-595b0794bbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmlmb3JtJTIwc2hpcnQlMjB3aGl0ZSUyMGNvdHRvbnxlbnwxfHx8fDE3NzA1NDc4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  {
    id: 'u2',
    name: 'KV White Shirt - Half Sleeve',
    category: 'Uniforms',
    subcategory: 'Shirts',
    price: 350,
    sku: 'UNI-SHT-002',
    description: 'Pure cotton white shirt with school monogram pocket, half sleeve for summer',
    image: 'https://images.unsplash.com/photo-1639690222445-595b0794bbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmlmb3JtJTIwc2hpcnQlMjB3aGl0ZSUyMGNvdHRvbnxlbnwxfHx8fDE3NzA1NDc4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // UNIFORMS - Skirts
  {
    id: 'u3',
    name: 'KV Girls Skirt - Navy Blue',
    category: 'Uniforms',
    subcategory: 'Skirts',
    price: 550,
    sku: 'UNI-SKT-001',
    description: 'Box-pleated navy blue skirt, standard KV pattern with elastic waist',
    image: 'https://images.unsplash.com/photo-1735759589054-611437aff0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHNjaG9vbCUyMGNoaWxkcmVuJTIwdW5pZm9ybXxlbnwxfHx8fDE3NzA1NDc4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // UNIFORMS - Pants
  {
    id: 'u4',
    name: 'KV Boys Pant - Grey',
    category: 'Uniforms',
    subcategory: 'Pants',
    price: 650,
    sku: 'UNI-PNT-001',
    description: 'Grey formal pants for boys, cotton blend with belt loops and pockets',
    image: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzA1NDc4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // UNIFORMS - Salwar Kameez
  {
    id: 'u5',
    name: 'KV Salwar Kameez Set - Navy Blue',
    category: 'Uniforms',
    subcategory: 'Salwar',
    price: 850,
    sku: 'UNI-SLW-001',
    description: 'Complete salwar kameez set in navy blue for senior girls, includes dupatta',
    image: 'https://images.unsplash.com/photo-1735759589054-611437aff0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHNjaG9vbCUyMGNoaWxkcmVuJTIwdW5pZm9ybXxlbnwxfHx8fDE3NzA1NDc4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // UNIFORMS - Blazer
  {
    id: 'u6',
    name: 'KV School Blazer - Navy Blue',
    category: 'Uniforms',
    subcategory: 'Blazer',
    price: 1800,
    sku: 'UNI-BLZ-001',
    description: 'Premium navy blue blazer with KV emblem, wool blend for winter uniform',
    image: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzA1NDc4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // UNIFORMS - Sweater
  {
    id: 'u7',
    name: 'KV Sweater - Navy Blue V-Neck',
    category: 'Uniforms',
    subcategory: 'Sweater',
    price: 550,
    sku: 'UNI-SWT-001',
    description: 'Navy blue V-neck sweater with school initials, acrylic wool blend',
    image: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzA1NDc4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // UNIFORMS - Track Suit
  {
    id: 'u8',
    name: 'KV Track Suit - Blue & White',
    category: 'Uniforms',
    subcategory: 'Track Suit',
    price: 1200,
    sku: 'UNI-TRK-001',
    description: 'Complete track suit for PE/Sports, polyester blend with KV logo',
    image: 'https://images.unsplash.com/photo-1581161386859-3f5dfcb73fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNwb3J0cyUyMGRheSUyMGluZGlhfGVufDF8fHx8MTc3MDU0Nzg0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // UNIFORMS - Tie
  {
    id: 'u9',
    name: 'KV School Tie - Striped',
    category: 'Uniforms',
    subcategory: 'Tie',
    price: 180,
    sku: 'UNI-TIE-001',
    description: 'Blue and white striped tie, pre-stitched for easy wear',
    image: 'https://images.unsplash.com/photo-1735759589054-611437aff0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHNjaG9vbCUyMGNoaWxkcmVuJTIwdW5pZm9ybXxlbnwxfHx8fDE3NzA1NDc4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // UNIFORMS - Belt
  {
    id: 'u10',
    name: 'School Belt - Black Leather',
    category: 'Uniforms',
    subcategory: 'Belt',
    price: 250,
    sku: 'UNI-BLT-001',
    description: 'Genuine leather black belt with metal buckle, adjustable size',
    image: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzA1NDc4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // UNIFORMS - Socks
  {
    id: 'u11',
    name: 'School Socks - White (Pack of 3)',
    category: 'Uniforms',
    subcategory: 'Socks',
    price: 150,
    sku: 'UNI-SCK-001',
    description: 'Pure cotton white socks with colored stripes, pack of 3 pairs',
    image: 'https://images.unsplash.com/photo-1735759589054-611437aff0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHNjaG9vbCUyMGNoaWxkcmVuJTIwdW5pZm9ybXxlbnwxfHx8fDE3NzA1NDc4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // TROPHIES - Wooden
  {
    id: 't1',
    name: 'Wooden Trophy - Classic Excellence',
    category: 'Trophies',
    subcategory: 'Wooden',
    price: 850,
    sku: 'TRP-WD-001',
    description: 'Elegant wooden trophy with brass plate for engraving, height: 12 inches',
    image: 'https://images.unsplash.com/photo-1568057373873-87302f152271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwbGFxdWUlMjB0cm9waHl8ZW58MXx8fHwxNzcwNTQ3ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  {
    id: 't2',
    name: 'Wooden Trophy - Premium Award',
    category: 'Trophies',
    subcategory: 'Wooden',
    price: 1200,
    sku: 'TRP-WD-002',
    description: 'Premium sheesham wood trophy with golden figurine, height: 15 inches',
    image: 'https://images.unsplash.com/photo-1568057373873-87302f152271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwbGFxdWUlMjB0cm9waHl8ZW58MXx8fHwxNzcwNTQ3ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  {
    id: 't3',
    name: 'Wooden Trophy - Championship',
    category: 'Trophies',
    subcategory: 'Wooden',
    price: 1500,
    sku: 'TRP-WD-003',
    description: 'Championship wooden trophy with 3 pillars and star topper, height: 18 inches',
    image: 'https://images.unsplash.com/photo-1568057373873-87302f152271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwbGFxdWUlMjB0cm9waHl8ZW58MXx8fHwxNzcwNTQ3ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // TROPHIES - Metal
  {
    id: 't4',
    name: 'Metal Trophy - Gold Star',
    category: 'Trophies',
    subcategory: 'Metal',
    price: 950,
    sku: 'TRP-MT-001',
    description: 'Gold plated metal trophy with star design, height: 10 inches',
    image: 'https://images.unsplash.com/photo-1633785584922-503ad0e982f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFzcyUyMHRyb3BoeSUyMGdvbGRlbnxlbnwxfHx8fDE3NzA1NDc4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  {
    id: 't5',
    name: 'Metal Trophy - Victory Cup',
    category: 'Trophies',
    subcategory: 'Metal',
    price: 1400,
    sku: 'TRP-MT-002',
    description: 'Classic victory cup design in brass with gold finish, height: 14 inches',
    image: 'https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waHklMjBzcG9ydHMlMjBpbmRpYXxlbnwxfHx8fDE3NzA1NDc4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  {
    id: 't6',
    name: 'Metal Trophy - Silver Achievement',
    category: 'Trophies',
    subcategory: 'Metal',
    price: 1100,
    sku: 'TRP-MT-003',
    description: 'Silver plated metal trophy for academic excellence, height: 12 inches',
    image: 'https://images.unsplash.com/photo-1770240366283-629dfa6be794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMGNlcmVtb255JTIwc2Nob29sfGVufDF8fHx8MTc3MDU0Nzg0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // TROPHIES - Acrylic
  {
    id: 't7',
    name: 'Acrylic Trophy - Modern Crystal',
    category: 'Trophies',
    subcategory: 'Acrylic',
    price: 750,
    sku: 'TRP-AC-001',
    description: 'Modern crystal-clear acrylic trophy with laser engraving, height: 8 inches',
    image: 'https://images.unsplash.com/photo-1550438655-400744b9fefc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGF3YXJkJTIwdHJhbnNwYXJlbnR8ZW58MXx8fHwxNzcwNTQ3ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  {
    id: 't8',
    name: 'Acrylic Trophy - Star Design',
    category: 'Trophies',
    subcategory: 'Acrylic',
    price: 900,
    sku: 'TRP-AC-002',
    description: 'Star-shaped acrylic trophy with golden base and custom engraving, height: 10 inches',
    image: 'https://images.unsplash.com/photo-1550438655-400744b9fefc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGF3YXJkJTIwdHJhbnNwYXJlbnR8ZW58MXx8fHwxNzcwNTQ3ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  {
    id: 't9',
    name: 'Acrylic Trophy - Premium Shield',
    category: 'Trophies',
    subcategory: 'Acrylic',
    price: 1100,
    sku: 'TRP-AC-003',
    description: 'Premium shield-shaped acrylic with multi-color LED base, height: 12 inches',
    image: 'https://images.unsplash.com/photo-1550438655-400744b9fefc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGF3YXJkJTIwdHJhbnNwYXJlbnR8ZW58MXx8fHwxNzcwNTQ3ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // PRINTING - ID Cards
  {
    id: 'p1',
    name: 'KV Student ID Card - Standard',
    category: 'Printing',
    subcategory: 'ID Cards',
    price: 50,
    sku: 'PRT-ID-001',
    description: 'PVC student ID card with photo, barcode, and school logo (per card)',
    image: 'https://images.unsplash.com/photo-1673334562483-08c3d823b2c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZCUyMGNhcmQlMjBsYW55YXJkJTIwc2Nob29sfGVufDF8fHx8MTc3MDU0Nzg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  {
    id: 'p2',
    name: 'KV Student ID Card - Premium',
    category: 'Printing',
    subcategory: 'ID Cards',
    price: 80,
    sku: 'PRT-ID-002',
    description: 'Premium PVC ID card with RFID chip, photo, and holographic overlay (per card)',
    image: 'https://images.unsplash.com/photo-1673334562483-08c3d823b2c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZCUyMGNhcmQlMjBsYW55YXJkJTIwc2Nob29sfGVufDF8fHx8MTc3MDU0Nzg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  {
    id: 'p3',
    name: 'Staff ID Card - Professional',
    category: 'Printing',
    subcategory: 'ID Cards',
    price: 70,
    sku: 'PRT-ID-003',
    description: 'Professional staff ID card with designation and department details (per card)',
    image: 'https://images.unsplash.com/photo-1673334562483-08c3d823b2c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZCUyMGNhcmQlMjBsYW55YXJkJTIwc2Nob29sfGVufDF8fHx8MTc3MDU0Nzg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // PRINTING - Diaries
  {
    id: 'p4',
    name: 'KV School Diary - Academic Year 2026-27',
    category: 'Printing',
    subcategory: 'Diaries',
    price: 280,
    sku: 'PRT-DRY-001',
    description: 'Official KV school diary with calendar, timetable, and attendance pages',
    image: 'https://images.unsplash.com/photo-1748500192026-fee2ba823904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFubmVyJTIwYWNhZGVtaWMlMjBpbmRpYXxlbnwxfHx8fDE3NzA1NDc4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  {
    id: 'p5',
    name: 'School Diary - Premium Leather Cover',
    category: 'Printing',
    subcategory: 'Diaries',
    price: 450,
    sku: 'PRT-DRY-002',
    description: 'Premium diary with leather-finish cover, embossed school logo, and gold edges',
    image: 'https://images.unsplash.com/photo-1588934867842-39b70669d9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9vayUyMGRpYXJ5JTIwaW5kaWF8ZW58MXx8fHwxNzcwNTQ3ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  
  // PRINTING - Notebooks
  {
    id: 'p6',
    name: 'Custom School Notebook - 172 Pages',
    category: 'Printing',
    subcategory: 'Notebooks',
    price: 120,
    sku: 'PRT-NB-001',
    description: 'A4 size ruled notebook with school logo on cover, 172 pages, single line',
    image: 'https://images.unsplash.com/photo-1709728351186-46177b597ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwbm90ZWJvb2slMjBwZW58ZW58MXx8fHwxNzcwNTQ3ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  {
    id: 'p7',
    name: 'Custom School Notebook - 76 Pages',
    category: 'Printing',
    subcategory: 'Notebooks',
    price: 70,
    sku: 'PRT-NB-002',
    description: 'A4 size ruled notebook with school logo on cover, 76 pages, single line',
    image: 'https://images.unsplash.com/photo-1709728351186-46177b597ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwbm90ZWJvb2slMjBwZW58ZW58MXx8fHwxNzcwNTQ3ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  },
  {
    id: 'p8',
    name: 'Custom Drawing Book - 40 Pages',
    category: 'Printing',
    subcategory: 'Notebooks',
    price: 90,
    sku: 'PRT-NB-003',
    description: 'A4 size drawing book with school logo, 40 blank pages, premium quality paper',
    image: 'https://images.unsplash.com/photo-1709728351186-46177b597ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwbm90ZWJvb2slMjBwZW58ZW58MXx8fHwxNzcwNTQ3ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
    brand: 'VS Unicraft'
  }
];

export const categories = [
  'All',
  'Uniforms',
  'Trophies',
  'Printing'
];

export const subcategories: Record<string, string[]> = {
  'Uniforms': ['All', 'Shirts', 'Skirts', 'Pants', 'Salwar', 'Blazer', 'Sweater', 'Track Suit', 'Tie', 'Belt', 'Socks'],
  'Trophies': ['All', 'Wooden', 'Metal', 'Acrylic'],
  'Printing': ['All', 'ID Cards', 'Diaries', 'Notebooks']
};

export const brands = [
  'All',
  'VS Unicraft'
];