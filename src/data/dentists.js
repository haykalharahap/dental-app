export const SPECIALTIES = [
  'General Dentistry',
];

function generateSlots() {
  const slots = [];
  const today = new Date();
  for (let d = 1; d <= 7; d++) {
    const date = new Date(today);
    date.setDate(today.getDate() + d);
    const dateStr = date.toISOString().split('T')[0];
    const hours = ['09:00','09:30','10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'];
    const available = hours.filter(() => Math.random() > 0.3);
    slots.push({ date: dateStr, times: available });
  }
  return slots;
}

export const DENTISTS = [
  {
    id: 1,
    name: 'drg. Ahmad Tommy Tantowi',
    specialty: 'General Dentistry',
    rating: 4.9,
    reviewsCount: 312,
    experience: 14,
    distance: 0,
    avatar: '🦷',
    bio: 'drg. Ahmad Tommy Tantowi adalah dokter gigi berpengalaman yang berkomitmen memberikan pelayanan kesehatan gigi terbaik. Dengan pengalaman lebih dari 14 tahun, beliau menangani berbagai perawatan gigi mulai dari perawatan umum, pembersihan karang gigi, penambalan, pencabutan, hingga perawatan estetika gigi.',
    education: 'drg., Universitas Indonesia',
    languages: ['Indonesia', 'English'],
    availableSlots: generateSlots(),
    reviews: [
      { author: 'Rina S.', rating: 5, text: 'Dokter yang sangat ramah dan teliti. Penanganannya cepat dan tidak sakit sama sekali.', date: '2026-03-10' },
      { author: 'Budi H.', rating: 5, text: 'Sudah langganan periksa gigi di sini. Pelayanannya selalu memuaskan!', date: '2026-03-05' },
      { author: 'Maya P.', rating: 5, text: 'Anak saya yang biasanya takut ke dokter gigi jadi tenang ditangani drg. Tommy.', date: '2026-02-28' },
    ],
  },
];

export function getDentists({ specialty = 'All', sortBy = 'distance' } = {}) {
  let list = [...DENTISTS];
  if (specialty && specialty !== 'All') {
    list = list.filter((d) => d.specialty === specialty);
  }
  return list;
}

export function getDentistById(id) {
  return DENTISTS.find((d) => d.id === Number(id));
}
