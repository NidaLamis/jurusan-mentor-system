
import { Topic } from '../types/quiz';

export const chemistryTopics: Topic[] = [
  {
    id: "kimia-organik",
    name: "Kimia Organik",
    description: "Mempelajari senyawa yang mengandung karbon, struktur, sifat, dan reaksinya.",
    icon: "molecule"
  },
  {
    id: "kimia-anorganik",
    name: "Kimia Anorganik",
    description: "Mempelajari senyawa-senyawa yang tidak mengandung karbon (kecuali beberapa pengecualian).",
    icon: "atom" 
  },
  {
    id: "kimia-fisik",
    name: "Kimia Fisik",
    description: "Menerapkan fisika untuk memahami fenomena kimia seperti termodinamika dan kinetika.",
    icon: "flask-conical"
  },
  {
    id: "biokimia",
    name: "Biokimia",
    description: "Mempelajari proses kimia dalam sistem biologi, termasuk struktur dan fungsi biomolekul.",
    icon: "test-tube"
  },
  {
    id: "kimia-analitik",
    name: "Kimia Analitik",
    description: "Mempelajari metode untuk mengidentifikasi, memisahkan dan mengukur zat kimia.",
    icon: "beaker"
  }
];
