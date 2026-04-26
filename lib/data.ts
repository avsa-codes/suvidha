export const companies = [
  {
    id: 'jcb',
    name: 'JCB',
    image: '/images/jcb-excavator.jpg',
    description: 'Yellow & Black Power',
  },
  {
    id: 'cat',
    name: 'Caterpillar',
    image: '/images/cat-excavator.jpg',
    description: 'CAT Excellence',
  },
  {
    id: 'tata',
    name: 'Tata',
    image: '/images/tata-excavator.jpg',
    description: 'Indian Innovation',
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    image: '/images/hyundai-excavator.jpg',
    description: 'Korean Technology',
  },
  {
    id: 'komatsu',
    name: 'Komatsu',
    image: '/images/komatsu-excavator.jpg',
    description: 'Global Standard',
  },
];

export const models: Record<string, Array<{ id: string; name: string; capacity: string }>> = {
  jcb: [
    { id: 'jcb-3cx', name: 'JCB 3CX', capacity: '14 Ton' },
    { id: 'jcb-4cx', name: 'JCB 4CX', capacity: '18 Ton' },
    { id: 'jcb-js', name: 'JCB JS 200', capacity: '20 Ton' },
  ],
  cat: [
    { id: 'cat-320', name: 'CAT 320', capacity: '20 Ton' },
    { id: 'cat-330', name: 'CAT 330', capacity: '30 Ton' },
    { id: 'cat-336', name: 'CAT 336', capacity: '36 Ton' },
  ],
  tata: [
    { id: 'tata-cx', name: 'Tata Hitachi CX', capacity: '19 Ton' },
    { id: 'tata-ex', name: 'Tata Hitachi EX', capacity: '23 Ton' },
    { id: 'tata-zx', name: 'Tata Hitachi ZX', capacity: '25 Ton' },
  ],
  hyundai: [
    { id: 'hyundai-r210', name: 'Hyundai R210', capacity: '21 Ton' },
    { id: 'hyundai-r220', name: 'Hyundai R220', capacity: '22 Ton' },
    { id: 'hyundai-r250', name: 'Hyundai R250', capacity: '25 Ton' },
  ],
  komatsu: [
    { id: 'komatsu-pc200', name: 'Komatsu PC200', capacity: '20 Ton' },
    { id: 'komatsu-pc300', name: 'Komatsu PC300', capacity: '30 Ton' },
    { id: 'komatsu-pc360', name: 'Komatsu PC360', capacity: '36 Ton' },
  ],
};

export const parts: Record<string, Array<{ id: string; name: string; image: string; description: string }>> = {
  jcb: [
    { id: 'bucket', name: 'Excavator Bucket', image: '/images/part-bucket.jpg', description: 'High-capacity bucket attachment' },
    { id: 'cylinder', name: 'Hydraulic Cylinder', image: '/images/part-cylinder.jpg', description: 'Main hydraulic lifting system' },
    { id: 'track', name: 'Track Assembly', image: '/images/part-track.jpg', description: 'Durable rubber track system' },
    { id: 'engine', name: 'Engine Component', image: '/images/part-engine.jpg', description: 'Core engine block assembly' },
  ],
  cat: [
    { id: 'bucket', name: 'Excavator Bucket', image: '/images/part-bucket.jpg', description: 'Heavy-duty bucket attachment' },
    { id: 'cylinder', name: 'Hydraulic Cylinder', image: '/images/part-cylinder.jpg', description: 'Precision hydraulic system' },
    { id: 'track', name: 'Track Assembly', image: '/images/part-track.jpg', description: 'Industrial-grade tracks' },
    { id: 'engine', name: 'Engine Component', image: '/images/part-engine.jpg', description: 'Robust engine assembly' },
  ],
  tata: [
    { id: 'bucket', name: 'Excavator Bucket', image: '/images/part-bucket.jpg', description: 'Quality bucket attachment' },
    { id: 'cylinder', name: 'Hydraulic Cylinder', image: '/images/part-cylinder.jpg', description: 'Reliable hydraulic system' },
    { id: 'track', name: 'Track Assembly', image: '/images/part-track.jpg', description: 'Standard track assembly' },
    { id: 'engine', name: 'Engine Component', image: '/images/part-engine.jpg', description: 'Standard engine component' },
  ],
  hyundai: [
    { id: 'bucket', name: 'Excavator Bucket', image: '/images/part-bucket.jpg', description: 'Premium bucket design' },
    { id: 'cylinder', name: 'Hydraulic Cylinder', image: '/images/part-cylinder.jpg', description: 'Advanced hydraulic system' },
    { id: 'track', name: 'Track Assembly', image: '/images/part-track.jpg', description: 'Modern track technology' },
    { id: 'engine', name: 'Engine Component', image: '/images/part-engine.jpg', description: 'Advanced engine block' },
  ],
  komatsu: [
    { id: 'bucket', name: 'Excavator Bucket', image: '/images/part-bucket.jpg', description: 'Precision bucket attachment' },
    { id: 'cylinder', name: 'Hydraulic Cylinder', image: '/images/part-cylinder.jpg', description: 'High-precision hydraulics' },
    { id: 'track', name: 'Track Assembly', image: '/images/part-track.jpg', description: 'Premium track system' },
    { id: 'engine', name: 'Engine Component', image: '/images/part-engine.jpg', description: 'Premium engine assembly' },
  ],
};
