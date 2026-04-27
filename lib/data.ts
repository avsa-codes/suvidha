export const companies = [
  {
    id: 'tata',
    name: 'Tata Hitachi',
    image: '/images/tata-excavator.jpg',
    description: 'Indian Strength',
    logo: '/images/logos/tata.jpg',
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    image: '/images/hyundai-excavator.jpg',
    description: 'Modern Performance',
    logo: '/images/logos/hyundai.jpg',
  },
  {
    id: 'jcb',
    name: 'JCB',
    image: '/images/jcb-excavator.jpg',
    description: 'Yellow & Black Power',
    logo: '/images/logos/jcb.jpg',
  },
  {
    id: 'sany',
    name: 'Sany',
    image: '/images/sany-excavator.jpg',
    description: 'Heavy Duty Machines',
    logo: '/images/logos/sany.jpg',
  },
  {
    id: 'komatsu',
    name: 'Komatsu',
    image: '/images/komatsu-excavator.jpg',
    description: 'Japanese Engineering',
    logo: '/images/logos/komatsu.jpg',
  },
  {
    id: 'kobelco',
    name: 'Kobelco',
    image: '/images/kobelco-excavator.jpg',
    description: 'Precision Machines',
    logo: '/images/logos/kobelco.jpg',
  },
  {
    id: 'doosan',
    name: 'Doosan',
    image: '/images/doosan-excavator.jpg',
    description: 'Reliable Performance',
    logo: '/images/logos/doosan.jpg',
  },
];

export const models: Record<string, Array<{ id: string; name: string; capacity: string }>> = {
  tata: [
    { id: 'ex200', name: 'EX 200', capacity: '20 Ton' },
    { id: 'ex200lc', name: 'EX 200LC', capacity: '20 Ton' },
    { id: 'ex210lc', name: 'EX 210LC', capacity: '21 Ton' },
    { id: 'zaxis200', name: 'ZAXIS 200', capacity: '20 Ton' },
    { id: 'zaxis200lc', name: 'ZAXIS 200LC', capacity: '20 Ton' },
    { id: 'zaxis210h', name: 'ZAXIS 210H', capacity: '21 Ton' },
    { id: 'zaxis210k', name: 'ZAXIS 210K', capacity: '21 Ton' },
    { id: 'zaxis210lch', name: 'ZAXIS 210LCH', capacity: '21 Ton' },
  ],

  hyundai: [
    { id: 'r210-smart', name: 'R210 SMART / R210E', capacity: '21 Ton' },
    { id: 'r210-xplus', name: 'R210 SMART X Plus', capacity: '21 Ton' },
    { id: 'r215-xplus', name: 'R215 SMART X Plus', capacity: '21.5 Ton' },
    { id: 'r220', name: 'R220', capacity: '22 Ton' },
    { id: 'r225', name: 'R225', capacity: '22.5 Ton' },
  ],

  jcb: [
    { id: 'nxt205', name: 'JCB NXT 205', capacity: '20 Ton' },
    { id: 'nxt210lc', name: 'JCB NXT 210LC Fuel Master', capacity: '21 Ton' },
    { id: 'js200', name: 'JS200', capacity: '20 Ton' },
    { id: 'js220', name: 'JS220', capacity: '22 Ton' },
  ],

  sany: [
    { id: 'sy210c', name: 'SY210C', capacity: '21 Ton' },
    { id: 'sy215c', name: 'SY215C', capacity: '21.5 Ton' },
    { id: 'sy215c-9lc', name: 'SY215C-9LC', capacity: '21.5 Ton' },
    { id: 'sy220c', name: 'SY220C', capacity: '22 Ton' },
    { id: 'sy225c', name: 'SY225C', capacity: '22.5 Ton' },
    { id: 'sy240c', name: 'SY240C', capacity: '24 Ton' },
  ],

  komatsu: [
    { id: 'pc200', name: 'PC200', capacity: '20 Ton' },
    { id: 'pc205', name: 'PC205', capacity: '20.5 Ton' },
    { id: 'pc210', name: 'PC210', capacity: '21 Ton' },
    { id: 'pc210lc', name: 'PC210LC', capacity: '21 Ton' },
    { id: 'pc220', name: 'PC220', capacity: '22 Ton' },
  ],

  kobelco: [
    { id: 'sk200', name: 'SK200', capacity: '20 Ton' },
    { id: 'sk210', name: 'SK210', capacity: '21 Ton' },
    { id: 'sk220', name: 'SK220', capacity: '22 Ton' },
    { id: 'sk220xd', name: 'SK220XD', capacity: '22 Ton' },
    { id: 'sk220xdlc', name: 'SK220XDLC', capacity: '22 Ton' },
  ],

  doosan: [
    { id: 'dx210', name: 'DX210', capacity: '21 Ton' },
    { id: 'dx220lc', name: 'DX220LC', capacity: '22 Ton' },
    { id: 'dx225lc', name: 'DX225LC', capacity: '22.5 Ton' },
    { id: 'dx225lca', name: 'DX225LCA', capacity: '22.5 Ton' },
  ],
};

export const parts: Record<string, Array<{ id: string; name: string; image: string; description: string }>> = {
  tata: [
    { id: 'bucket', name: 'Bucket & Tooth', image: '/images/parts/bucket.jpg', description: 'Bucket, teeth, adapters' },
    { id: 'pump', name: 'Hydraulic Pump', image: '/images/parts/pump.jpg', description: 'Main hydraulic pump' },
    { id: 'cylinder', name: 'Hydraulic Cylinder', image: '/images/parts/cylinder.jpg', description: 'Boom / arm cylinder' },
    { id: 'engine', name: 'Engine Parts', image: '/images/parts/engine.jpg', description: 'Engine components' },
    { id: 'final-drive', name: 'Final Drive / Motor', image: '/images/parts/final-drive.jpg', description: 'Travel motor assembly' },
    { id: 'swing', name: 'Swing Motor', image: '/images/parts/swing.jpg', description: 'Swing motor system' },
    { id: 'undercarriage', name: 'Undercarriage', image: '/images/parts/track.jpg', description: 'Track, roller, idler' },
    { id: 'filters', name: 'Filters & Service', image: '/images/parts/filter.jpg', description: 'Oil, air, fuel filters' },
    { id: 'electrical', name: 'Electrical Parts', image: '/images/parts/electrical.jpg', description: 'Sensors, wiring' },
    { id: 'cabin', name: 'Cabin & Body', image: '/images/parts/cabin.jpg', description: 'Cabin, panels, glass' },
  ],

  hyundai: [
    { id: 'bucket', name: 'Bucket & Tooth', image: '/images/parts/bucket.jpg', description: 'Bucket, teeth, adapters' },
    { id: 'pump', name: 'Hydraulic Pump', image: '/images/parts/pump.jpg', description: 'Main hydraulic pump' },
    { id: 'cylinder', name: 'Hydraulic Cylinder', image: '/images/parts/cylinder.jpg', description: 'Boom / arm cylinder' },
    { id: 'engine', name: 'Engine Parts', image: '/images/parts/engine.jpg', description: 'Engine components' },
    { id: 'final-drive', name: 'Final Drive / Motor', image: '/images/parts/final-drive.jpg', description: 'Travel motor assembly' },
    { id: 'swing', name: 'Swing Motor', image: '/images/parts/swing.jpg', description: 'Swing motor system' },
    { id: 'undercarriage', name: 'Undercarriage', image: '/images/parts/track.jpg', description: 'Track, roller, idler' },
    { id: 'filters', name: 'Filters & Service', image: '/images/parts/filter.jpg', description: 'Oil, air, fuel filters' },
    { id: 'electrical', name: 'Electrical Parts', image: '/images/parts/electrical.jpg', description: 'Sensors, wiring' },
    { id: 'cabin', name: 'Cabin & Body', image: '/images/parts/cabin.jpg', description: 'Cabin, panels, glass' },
  ],

  jcb: [
    { id: 'bucket', name: 'Bucket & Tooth', image: '/images/parts/bucket.jpg', description: 'Bucket, teeth, adapters' },
    { id: 'pump', name: 'Hydraulic Pump', image: '/images/parts/pump.jpg', description: 'Main hydraulic pump' },
    { id: 'cylinder', name: 'Hydraulic Cylinder', image: '/images/parts/cylinder.jpg', description: 'Boom / arm cylinder' },
    { id: 'engine', name: 'Engine Parts', image: '/images/parts/engine.jpg', description: 'Engine components' },
    { id: 'final-drive', name: 'Final Drive / Motor', image: '/images/parts/final-drive.jpg', description: 'Travel motor assembly' },
    { id: 'swing', name: 'Swing Motor', image: '/images/parts/swing.jpg', description: 'Swing motor system' },
    { id: 'undercarriage', name: 'Undercarriage', image: '/images/parts/track.jpg', description: 'Track, roller, idler' },
    { id: 'filters', name: 'Filters & Service', image: '/images/parts/filter.jpg', description: 'Oil, air, fuel filters' },
    { id: 'electrical', name: 'Electrical Parts', image: '/images/parts/electrical.jpg', description: 'Sensors, wiring' },
    { id: 'cabin', name: 'Cabin & Body', image: '/images/parts/cabin.jpg', description: 'Cabin, panels, glass' },
  ],

  sany: [
    { id: 'bucket', name: 'Bucket & Tooth', image: '/images/parts/bucket.jpg', description: 'Bucket, teeth, adapters' },
    { id: 'pump', name: 'Hydraulic Pump', image: '/images/parts/pump.jpg', description: 'Main hydraulic pump' },
    { id: 'cylinder', name: 'Hydraulic Cylinder', image: '/images/parts/cylinder.jpg', description: 'Boom / arm cylinder' },
    { id: 'engine', name: 'Engine Parts', image: '/images/parts/engine.jpg', description: 'Engine components' },
    { id: 'final-drive', name: 'Final Drive / Motor', image: '/images/parts/final-drive.jpg', description: 'Travel motor assembly' },
    { id: 'swing', name: 'Swing Motor', image: '/images/parts/swing.jpg', description: 'Swing motor system' },
    { id: 'undercarriage', name: 'Undercarriage', image: '/images/parts/track.jpg', description: 'Track, roller, idler' },
    { id: 'filters', name: 'Filters & Service', image: '/images/parts/filter.jpg', description: 'Oil, air, fuel filters' },
    { id: 'electrical', name: 'Electrical Parts', image: '/images/parts/electrical.jpg', description: 'Sensors, wiring' },
    { id: 'cabin', name: 'Cabin & Body', image: '/images/parts/cabin.jpg', description: 'Cabin, panels, glass' },
  ],

  komatsu: [
    { id: 'bucket', name: 'Bucket & Tooth', image: '/images/parts/bucket.jpg', description: 'Bucket, teeth, adapters' },
    { id: 'pump', name: 'Hydraulic Pump', image: '/images/parts/pump.jpg', description: 'Main hydraulic pump' },
    { id: 'cylinder', name: 'Hydraulic Cylinder', image: '/images/parts/cylinder.jpg', description: 'Boom / arm cylinder' },
    { id: 'engine', name: 'Engine Parts', image: '/images/parts/engine.jpg', description: 'Engine components' },
    { id: 'final-drive', name: 'Final Drive / Motor', image: '/images/parts/final-drive.jpg', description: 'Travel motor assembly' },
    { id: 'swing', name: 'Swing Motor', image: '/images/parts/swing.jpg', description: 'Swing motor system' },
    { id: 'undercarriage', name: 'Undercarriage', image: '/images/parts/track.jpg', description: 'Track, roller, idler' },
    { id: 'filters', name: 'Filters & Service', image: '/images/parts/filter.jpg', description: 'Oil, air, fuel filters' },
    { id: 'electrical', name: 'Electrical Parts', image: '/images/parts/electrical.jpg', description: 'Sensors, wiring' },
    { id: 'cabin', name: 'Cabin & Body', image: '/images/parts/cabin.jpg', description: 'Cabin, panels, glass' },
  ],

  kobelco: [
    { id: 'bucket', name: 'Bucket & Tooth', image: '/images/parts/bucket.jpg', description: 'Bucket, teeth, adapters' },
    { id: 'pump', name: 'Hydraulic Pump', image: '/images/parts/pump.jpg', description: 'Main hydraulic pump' },
    { id: 'cylinder', name: 'Hydraulic Cylinder', image: '/images/parts/cylinder.jpg', description: 'Boom / arm cylinder' },
    { id: 'engine', name: 'Engine Parts', image: '/images/parts/engine.jpg', description: 'Engine components' },
    { id: 'final-drive', name: 'Final Drive / Motor', image: '/images/parts/final-drive.jpg', description: 'Travel motor assembly' },
    { id: 'swing', name: 'Swing Motor', image: '/images/parts/swing.jpg', description: 'Swing motor system' },
    { id: 'undercarriage', name: 'Undercarriage', image: '/images/parts/track.jpg', description: 'Track, roller, idler' },
    { id: 'filters', name: 'Filters & Service', image: '/images/parts/filter.jpg', description: 'Oil, air, fuel filters' },
    { id: 'electrical', name: 'Electrical Parts', image: '/images/parts/electrical.jpg', description: 'Sensors, wiring' },
    { id: 'cabin', name: 'Cabin & Body', image: '/images/parts/cabin.jpg', description: 'Cabin, panels, glass' },
  ],

  doosan: [
    { id: 'bucket', name: 'Bucket & Tooth', image: '/images/parts/bucket.jpg', description: 'Bucket, teeth, adapters' },
    { id: 'pump', name: 'Hydraulic Pump', image: '/images/parts/pump.jpg', description: 'Main hydraulic pump' },
    { id: 'cylinder', name: 'Hydraulic Cylinder', image: '/images/parts/cylinder.jpg', description: 'Boom / arm cylinder' },
    { id: 'engine', name: 'Engine Parts', image: '/images/parts/engine.jpg', description: 'Engine components' },
    { id: 'final-drive', name: 'Final Drive / Motor', image: '/images/parts/final-drive.jpg', description: 'Travel motor assembly' },
    { id: 'swing', name: 'Swing Motor', image: '/images/parts/swing.jpg', description: 'Swing motor system' },
    { id: 'undercarriage', name: 'Undercarriage', image: '/images/parts/track.jpg', description: 'Track, roller, idler' },
    { id: 'filters', name: 'Filters & Service', image: '/images/parts/filter.jpg', description: 'Oil, air, fuel filters' },
    { id: 'electrical', name: 'Electrical Parts', image: '/images/parts/electrical.jpg', description: 'Sensors, wiring' },
    { id: 'cabin', name: 'Cabin & Body', image: '/images/parts/cabin.jpg', description: 'Cabin, panels, glass' },
  ],
};
