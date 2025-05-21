
export interface Question {
  id: number;
  text: string;
  options: {
    value: string;
    label: string;
    traits: Record<string, number>;
  }[];
}

export interface Major {
  id: string;
  name: string;
  description: string;
  traits: Record<string, number>;
  icon: string;
}

// These traits represent different dimensions that can predict academic interests
// analytical: logical thinking and problem solving
// creative: artistic and innovative thinking
// social: interaction with and helping others
// practical: hands-on and application-oriented
// investigative: research and discovery-oriented
// enterprising: leadership and persuasion-oriented

export const questions: Question[] = [
  {
    id: 1,
    text: "Ketika dihadapkan dengan masalah baru, bagaimana pendekatan yang lebih Anda sukai?",
    options: [
      { 
        value: "a", 
        label: "Menganalisis secara logis dan mencari solusi terbaik", 
        traits: { analytical: 3, investigative: 2 }
      },
      { 
        value: "b", 
        label: "Mencari pendekatan kreatif dan solusi inovatif", 
        traits: { creative: 3, enterprising: 1 }
      },
      { 
        value: "c", 
        label: "Mendiskusikan dengan orang lain untuk mendapatkan perspektif beragam", 
        traits: { social: 3, creative: 1 }
      },
      { 
        value: "d", 
        label: "Menggunakan pengalaman dan pengetahuan praktis untuk menemukan solusi", 
        traits: { practical: 3, analytical: 1 }
      }
    ]
  },
  {
    id: 2,
    text: "Aktivitas manakah yang paling Anda nikmati di waktu luang?",
    options: [
      { 
        value: "a", 
        label: "Membaca buku atau artikel tentang topik yang menarik", 
        traits: { investigative: 3, analytical: 1 }
      },
      { 
        value: "b", 
        label: "Berkreasi, menggambar, atau membuat sesuatu", 
        traits: { creative: 3, practical: 1 }
      },
      { 
        value: "c", 
        label: "Bersosialisasi dan menghabiskan waktu dengan teman atau keluarga", 
        traits: { social: 3, enterprising: 1 }
      },
      { 
        value: "d", 
        label: "Memperbaiki, merakit, atau bekerja dengan alat", 
        traits: { practical: 3, investigative: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "Dalam kerja kelompok, peran apa yang biasanya Anda ambil?",
    options: [
      { 
        value: "a", 
        label: "Menganalisis informasi dan data untuk pengambilan keputusan", 
        traits: { analytical: 3, investigative: 2 }
      },
      { 
        value: "b", 
        label: "Menyumbangkan ide-ide kreatif dan perspektif baru", 
        traits: { creative: 3, enterprising: 1 }
      },
      { 
        value: "c", 
        label: "Memfasilitasi diskusi dan membantu kelompok tetap fokus", 
        traits: { social: 2, enterprising: 2 }
      },
      { 
        value: "d", 
        label: "Memastikan tugas diselesaikan tepat waktu dengan standar tinggi", 
        traits: { practical: 2, analytical: 2 }
      }
    ]
  },
  {
    id: 4,
    text: "Ketika mempelajari topik baru, pendekatan mana yang lebih Anda sukai?",
    options: [
      { 
        value: "a", 
        label: "Memahami konsep dan teori yang mendasarinya", 
        traits: { analytical: 3, investigative: 2 }
      },
      { 
        value: "b", 
        label: "Mengeksplorasi berbagai interpretasi dan kemungkinan", 
        traits: { creative: 3, investigative: 1 }
      },
      { 
        value: "c", 
        label: "Berdiskusi dan belajar melalui pengajaran dari orang lain", 
        traits: { social: 3, enterprising: 1 }
      },
      { 
        value: "d", 
        label: "Menerapkan secara langsung melalui contoh praktis dan latihan", 
        traits: { practical: 3, analytical: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "Mata pelajaran apa yang paling Anda sukai di sekolah?",
    options: [
      { 
        value: "a", 
        label: "Matematika dan Sains (Fisika, Kimia, Biologi)", 
        traits: { analytical: 3, investigative: 2 }
      },
      { 
        value: "b", 
        label: "Seni, Musik, atau Bahasa", 
        traits: { creative: 3, social: 1 }
      },
      { 
        value: "c", 
        label: "Ilmu Sosial (Sosiologi, Psikologi, Ekonomi)", 
        traits: { social: 2, enterprising: 2 }
      },
      { 
        value: "d", 
        label: "Pendidikan Teknikal atau Olahraga", 
        traits: { practical: 3, analytical: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "Bagaimana Anda paling suka mengungkapkan ide-ide Anda?",
    options: [
      { 
        value: "a", 
        label: "Melalui data, grafik, dan penjelasan logis", 
        traits: { analytical: 3, investigative: 1 }
      },
      { 
        value: "b", 
        label: "Melalui gambar, cerita, atau presentasi kreatif", 
        traits: { creative: 3, social: 1 }
      },
      { 
        value: "c", 
        label: "Melalui diskusi dan persuasi verbal", 
        traits: { social: 2, enterprising: 2 }
      },
      { 
        value: "d", 
        label: "Melalui demonstrasi dan contoh praktis", 
        traits: { practical: 3, analytical: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "Dalam pengambilan keputusan penting, apa yang paling Anda andalkan?",
    options: [
      { 
        value: "a", 
        label: "Logika dan analisis rasional", 
        traits: { analytical: 3, investigative: 1 }
      },
      { 
        value: "b", 
        label: "Intuisi dan perasaan kreatif", 
        traits: { creative: 2, social: 1 }
      },
      { 
        value: "c", 
        label: "Dampak pada orang lain dan nilai-nilai", 
        traits: { social: 3, enterprising: 1 }
      },
      { 
        value: "d", 
        label: "Pengalaman praktis dan apa yang telah berhasil sebelumnya", 
        traits: { practical: 3, enterprising: 1 }
      }
    ]
  },
  {
    id: 8,
    text: "Ketika menghadapi tantangan baru, apa yang paling memotivasi Anda?",
    options: [
      { 
        value: "a", 
        label: "Kesempatan untuk menganalisis dan menemukan solusi yang optimal", 
        traits: { analytical: 3, investigative: 2 }
      },
      { 
        value: "b", 
        label: "Kebebasan untuk mengeksplorasi ide-ide inovatif", 
        traits: { creative: 3, enterprising: 1 }
      },
      { 
        value: "c", 
        label: "Kesempatan untuk bekerja sama dan membantu orang lain", 
        traits: { social: 3, practical: 1 }
      },
      { 
        value: "d", 
        label: "Melihat hasil konkret dari upaya Anda", 
        traits: { practical: 3, enterprising: 1 }
      }
    ]
  },
  {
    id: 9,
    text: "Jenis pencapaian apa yang membuat Anda paling bangga?",
    options: [
      { 
        value: "a", 
        label: "Memecahkan masalah kompleks atau menemukan wawasan baru", 
        traits: { analytical: 2, investigative: 3 }
      },
      { 
        value: "b", 
        label: "Menciptakan sesuatu yang unik atau mengekspresikan diri secara kreatif", 
        traits: { creative: 3, social: 1 }
      },
      { 
        value: "c", 
        label: "Membantu orang lain mencapai tujuan mereka atau membuat perubahan positif", 
        traits: { social: 3, enterprising: 1 }
      },
      { 
        value: "d", 
        label: "Membangun, memperbaiki, atau menyelesaikan proyek secara efisien", 
        traits: { practical: 3, analytical: 1 }
      }
    ]
  },
  {
    id: 10,
    text: "Dalam lima tahun ke depan, lingkungan kerja seperti apa yang ideal bagi Anda?",
    options: [
      { 
        value: "a", 
        label: "Lingkungan yang memungkinkan penelitian mendalam dan pemecahan masalah", 
        traits: { analytical: 2, investigative: 3 }
      },
      { 
        value: "b", 
        label: "Lingkungan yang mendorong kreativitas dan inovasi", 
        traits: { creative: 3, enterprising: 1 }
      },
      { 
        value: "c", 
        label: "Lingkungan yang berfokus pada membantu orang dan bekerja dalam tim", 
        traits: { social: 3, practical: 1 }
      },
      { 
        value: "d", 
        label: "Lingkungan yang menghasilkan hasil praktis dan konkret", 
        traits: { practical: 3, analytical: 1 }
      }
    ]
  }
];

export const majors: Major[] = [
  {
    id: "teknik-informatika",
    name: "Teknik Informatika",
    description: "Jurusan yang berfokus pada pengembangan perangkat lunak, algoritma, dan sistem komputasi.",
    traits: { analytical: 9, investigative: 7, creative: 5, practical: 6, enterprising: 2, social: 1 },
    icon: "file-code"
  },
  {
    id: "teknik-elektro",
    name: "Teknik Elektro",
    description: "Jurusan yang mempelajari penerapan listrik, elektronika, dan elektromagnetisme.",
    traits: { analytical: 8, investigative: 6, practical: 8, creative: 3, enterprising: 2, social: 1 },
    icon: "flask-conical"
  },
  {
    id: "ilmu-kedokteran",
    name: "Kedokteran",
    description: "Jurusan yang mempelajari diagnosis, pengobatan, dan pencegahan penyakit pada manusia.",
    traits: { analytical: 8, investigative: 8, social: 7, practical: 6, enterprising: 2, creative: 2 },
    icon: "flask-round"
  },
  {
    id: "manajemen-bisnis",
    name: "Manajemen Bisnis",
    description: "Jurusan yang mempelajari perencanaan, organisasi, dan pengelolaan operasi bisnis.",
    traits: { enterprising: 8, practical: 6, analytical: 5, social: 7, creative: 4, investigative: 2 },
    icon: "chart-bar"
  },
  {
    id: "psikologi",
    name: "Psikologi",
    description: "Jurusan yang mempelajari perilaku dan proses mental manusia.",
    traits: { social: 9, investigative: 7, analytical: 6, creative: 4, practical: 2, enterprising: 3 },
    icon: "brain"
  },
  {
    id: "desain-komunikasi-visual",
    name: "Desain Komunikasi Visual",
    description: "Jurusan yang berfokus pada desain grafis, ilustrasi, dan komunikasi visual.",
    traits: { creative: 9, practical: 5, social: 4, enterprising: 3, analytical: 2, investigative: 1 },
    icon: "book"
  },
  {
    id: "ilmu-komunikasi",
    name: "Ilmu Komunikasi",
    description: "Jurusan yang mempelajari proses komunikasi antar individu, kelompok, dan masyarakat.",
    traits: { social: 8, creative: 6, enterprising: 6, practical: 3, analytical: 3, investigative: 2 },
    icon: "book-open"
  },
  {
    id: "akuntansi",
    name: "Akuntansi",
    description: "Jurusan yang mempelajari pengukuran, pemrosesan, dan komunikasi informasi keuangan.",
    traits: { analytical: 9, practical: 7, enterprising: 4, investigative: 3, social: 2, creative: 1 },
    icon: "chart-pie"
  },
  {
    id: "hukum",
    name: "Hukum",
    description: "Jurusan yang mempelajari sistem aturan yang diberlakukan melalui lembaga sosial untuk mengatur perilaku.",
    traits: { analytical: 8, social: 6, investigative: 7, enterprising: 5, practical: 2, creative: 2 },
    icon: "file-text"
  },
  {
    id: "pendidikan",
    name: "Pendidikan",
    description: "Jurusan yang mempelajari proses pengajaran dan pembelajaran.",
    traits: { social: 9, practical: 6, creative: 5, analytical: 3, enterprising: 4, investigative: 3 },
    icon: "graduation-cap"
  }
];
