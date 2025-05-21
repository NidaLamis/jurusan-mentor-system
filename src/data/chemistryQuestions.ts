
import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: "Berapa massa atom relatif dari oksigen (O)?",
    options: [
      { value: "a", label: "8" },
      { value: "b", label: "12" },
      { value: "c", label: "16" },
      { value: "d", label: "32" }
    ],
    correctAnswer: "c",
    explanation: "Massa atom relatif oksigen adalah 16, berdasarkan skala massa atom dengan karbon-12 sebagai rujukan.",
    topic: "kimia-anorganik",
    difficulty: "easy"
  },
  {
    id: 2,
    text: "Senyawa berikut yang merupakan alkana adalah:",
    options: [
      { value: "a", label: "C₂H₄" },
      { value: "b", label: "C₃H₈" },
      { value: "c", label: "C₂H₂" },
      { value: "d", label: "C₆H₆" }
    ],
    correctAnswer: "b",
    explanation: "C₃H₈ (propana) adalah alkana dengan rumus umum CnH2n+2. Alkana merupakan hidrokarbon jenuh yang hanya memiliki ikatan tunggal.",
    topic: "kimia-organik",
    difficulty: "medium"
  },
  {
    id: 3,
    text: "Perhatikan reaksi berikut:\n2H₂ + O₂ → 2H₂O\n\nBerapa mol oksigen yang diperlukan untuk bereaksi sempurna dengan 6 mol hidrogen?",
    options: [
      { value: "a", label: "3 mol" },
      { value: "b", label: "6 mol" },
      { value: "c", label: "2 mol" },
      { value: "d", label: "1.5 mol" }
    ],
    correctAnswer: "a",
    explanation: "Dari persamaan reaksi, 2 mol H₂ membutuhkan 1 mol O₂. Jadi 6 mol H₂ membutuhkan 6/2 = 3 mol O₂.",
    topic: "kimia-fisik",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 4,
    text: "Perhatikan konfigurasi elektron berikut:\n1s² 2s² 2p⁶ 3s² 3p⁵\n\nUnsur dengan konfigurasi elektron tersebut termasuk dalam golongan:",
    options: [
      { value: "a", label: "Alkali" },
      { value: "b", label: "Gas mulia" },
      { value: "c", label: "Halogen" },
      { value: "d", label: "Alkali tanah" }
    ],
    correctAnswer: "c",
    explanation: "Konfigurasi elektron tersebut memiliki 7 elektron pada kulit terluar (3s² 3p⁵), yang merupakan ciri khas golongan halogen (golongan VIIA).",
    topic: "kimia-anorganik",
    difficulty: "hard"
  },
  {
    id: 5,
    text: "pH larutan dengan [H⁺] = 1 × 10⁻⁵ M adalah:",
    options: [
      { value: "a", label: "5" },
      { value: "b", label: "9" },
      { value: "c", label: "10" },
      { value: "d", label: "14" }
    ],
    correctAnswer: "a",
    explanation: "pH = -log[H⁺] = -log(1 × 10⁻⁵) = -((-5) × log10) = 5",
    topic: "kimia-fisik",
    difficulty: "medium"
  },
  {
    id: 6,
    text: "Dalam elektrokimia, manakah pernyataan yang BENAR tentang sel galvani?",
    options: [
      { value: "a", label: "Energi listrik diubah menjadi energi kimia" },
      { value: "b", label: "Reaksi kimia spontan menghasilkan energi listrik" },
      { value: "c", label: "Elektroda positif disebut anoda" },
      { value: "d", label: "Elektroda negatif disebut katoda" }
    ],
    correctAnswer: "b",
    explanation: "Sel galvani (sel volta) mengubah energi kimia dari reaksi redoks spontan menjadi energi listrik.",
    topic: "kimia-fisik",
    difficulty: "hard"
  },
  {
    id: 7,
    text: "Struktur Lewis untuk molekul CO₂ yang benar adalah:",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    options: [
      { value: "a", label: "O=C=O" },
      { value: "b", label: "O-C-O" },
      { value: "c", label: "O≡C-O" },
      { value: "d", label: "O-C≡O" }
    ],
    correctAnswer: "a",
    explanation: "CO₂ memiliki dua ikatan rangkap, dengan atom oksigen di kedua sisi yang terikat dengan ikatan rangkap ke atom karbon pusat.",
    topic: "kimia-anorganik",
    difficulty: "medium"
  },
  {
    id: 8,
    text: "Reaksi berikut merupakan contoh dari:\nCH₃CH₂OH + O₂ → CH₃COOH + H₂O",
    options: [
      { value: "a", label: "Oksidasi" },
      { value: "b", label: "Reduksi" },
      { value: "c", label: "Hidrolisis" },
      { value: "d", label: "Netralisasi" }
    ],
    correctAnswer: "a",
    explanation: "Reaksi ini menunjukkan oksidasi etanol (CH₃CH₂OH) menjadi asam asetat (CH₃COOH), di mana terjadi penambahan oksigen dan atom C mengalami kenaikan bilangan oksidasi.",
    topic: "kimia-organik",
    difficulty: "hard"
  },
  {
    id: 9,
    text: "Larutan buffer dapat dihasilkan dari campuran:",
    options: [
      { value: "a", label: "Asam kuat dan basa kuat" },
      { value: "b", label: "Asam lemah dan garamnya" },
      { value: "c", label: "Basa kuat dan garam dari asam kuat" },
      { value: "d", label: "Dua asam kuat yang berbeda" }
    ],
    correctAnswer: "b",
    explanation: "Larutan buffer (penyangga) dapat dibuat dari asam lemah dan garamnya (seperti CH₃COOH dan CH₃COONa) atau basa lemah dan garamnya.",
    topic: "kimia-fisik",
    difficulty: "medium"
  },
  {
    id: 10,
    text: "Berikut ini yang merupakan contoh koloid adalah:",
    options: [
      { value: "a", label: "Larutan gula" },
      { value: "b", label: "Air laut" },
      { value: "c", label: "Susu" },
      { value: "d", label: "Oksigen dalam air" }
    ],
    correctAnswer: "c",
    explanation: "Susu adalah contoh koloid jenis emulsi, di mana partikel lemak tersebar dalam medium air. Koloid memiliki ukuran partikel antara larutan sejati dan suspensi.",
    topic: "kimia-fisik",
    difficulty: "easy"
  }
];
