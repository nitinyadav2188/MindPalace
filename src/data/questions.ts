export interface Question {
  id: number;
  chamber: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    chamber: "Numeric Nexus",
    question: "What is the value of π (pi) to 3 decimal places?",
    options: ["3.141", "3.142", "3.143", "3.144"],
    correct: 1,
    explanation: "π (pi) is approximately 3.142 when rounded to 3 decimal places."
  },
  {
    id: 2,
    chamber: "Element Sanctuary",
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Au", "Gd", "Ag"],
    correct: 1,
    explanation: "Au comes from the Latin word 'aurum' meaning gold."
  },
  {
    id: 3,
    chamber: "History Halls",
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
    correct: 1,
    explanation: "George Washington served as the first President from 1789 to 1797."
  },
  {
    id: 4,
    chamber: "Code Caverns",
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
    correct: 0,
    explanation: "HTML stands for Hyper Text Markup Language, the standard markup language for web pages."
  },
  {
    id: 5,
    chamber: "Cosmic Chamber",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1,
    explanation: "Mars is called the Red Planet due to iron oxide (rust) on its surface."
  },
  {
    id: 6,
    chamber: "Literary Labyrinth",
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correct: 1,
    explanation: "William Shakespeare wrote this famous tragedy in the early part of his career."
  },
  {
    id: 7,
    chamber: "Geography Gateway",
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2,
    explanation: "Canberra is the capital city of Australia, located in the Australian Capital Territory."
  },
  {
    id: 8,
    chamber: "Physics Portal",
    question: "What is the speed of light in vacuum?",
    options: ["300,000 km/s", "299,792,458 m/s", "186,000 miles/s", "All of the above"],
    correct: 3,
    explanation: "The speed of light is approximately 299,792,458 m/s, 300,000 km/s, or 186,000 miles/s."
  },
  {
    id: 9,
    chamber: "Biology Booth",
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
    correct: 1,
    explanation: "Mitochondria are called the powerhouse of the cell because they produce ATP energy."
  },
  {
    id: 10,
    chamber: "Music Manor",
    question: "How many strings does a standard guitar have?",
    options: ["4", "5", "6", "7"],
    correct: 2,
    explanation: "A standard guitar has 6 strings, typically tuned E-A-D-G-B-E."
  },
  {
    id: 11,
    chamber: "Art Atrium",
    question: "Who painted the Mona Lisa?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
    correct: 2,
    explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519."
  },
  {
    id: 12,
    chamber: "Sports Stadium",
    question: "How many players are on a basketball team on the court at once?",
    options: ["4", "5", "6", "7"],
    correct: 1,
    explanation: "Each basketball team has 5 players on the court at any given time."
  },
  {
    id: 13,
    chamber: "Logic Lounge",
    question: "If all roses are flowers and some flowers fade quickly, which statement is true?",
    options: ["All roses fade quickly", "Some roses fade quickly", "No roses fade quickly", "Cannot be determined"],
    correct: 3,
    explanation: "We cannot determine if roses fade quickly from the given information."
  },
  {
    id: 14,
    chamber: "Tech Tower",
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
    correct: 0,
    explanation: "CPU stands for Central Processing Unit, the brain of the computer."
  },
  {
    id: 15,
    chamber: "Language Library",
    question: "What is the most spoken language in the world?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    correct: 2,
    explanation: "Mandarin Chinese is spoken by over 1 billion people worldwide."
  },
  {
    id: 16,
    chamber: "Ocean Observatory",
    question: "What is the deepest point in the ocean?",
    options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Tonga Trench"],
    correct: 0,
    explanation: "The Mariana Trench is the deepest part of the ocean at about 36,200 feet deep."
  },
  {
    id: 17,
    chamber: "Time Temple",
    question: "How many seconds are in a day?",
    options: ["86,400", "84,600", "88,400", "86,000"],
    correct: 0,
    explanation: "There are 86,400 seconds in a day (24 hours × 60 minutes × 60 seconds)."
  },
  {
    id: 18,
    chamber: "Nature Nook",
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correct: 1,
    explanation: "The Blue Whale is the largest mammal, reaching lengths of up to 100 feet."
  },
  {
    id: 19,
    chamber: "Culture Corner",
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "South Korea", "Japan", "Thailand"],
    correct: 2,
    explanation: "Japan is known as the Land of the Rising Sun, which is also the meaning of 'Nippon'."
  },
  {
    id: 20,
    chamber: "Final Fortress",
    question: "What is the square root of 144?",
    options: ["11", "12", "13", "14"],
    correct: 1,
    explanation: "The square root of 144 is 12, since 12 × 12 = 144."
  }
];