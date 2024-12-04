import Card from "../components/Card";

const cards = [
  {
    id: 1,
    title: "Clean Design",
    content: "Minimalist approach for modern interfaces.",
  },
  {
    id: 2,
    title: "Responsive",
    content: "Looks great on any device or screen size.",
  },
  {
    id: 3,
    title: "Interactive",
    content: "Engaging elements that respond to user actions.",
  },
  {
    id: 4,
    title: "Customizable",
    content: "Easily adapt the design to your brand.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-6 sm:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Frontend Assignment
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Card key={card.id} title={card.title} content={card.content} />
          ))}
        </div>
      </div>
    </main>
  );
}
