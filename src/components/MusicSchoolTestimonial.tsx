"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "I thought learning to play Guitar would be plain and boring, as starting anything new generally is, but learning from him was rather more exciting.",
    name: "Ankit kr. Sharma",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this academy are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Arsh",
    title: "Piano Student",
  },
  {
    quote:
      "This academy offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Harshita",
    title: "Vocal Student",
  },
  {
    quote:
      "Glad to find a teacher as patient, friendly and knowledgable as Zaif sir. His practice tips are commendable and lessons are easy to follow😄",
    name: "Priyanka",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Dev",
    title: "Music Production Student",
  },
];

function MusicSchoolTestimonial() {
  return <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col justify-center items-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices of success</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
            <InfiniteMovingCards items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
            />
        </div>
    </div>
  </div>;
}

export default MusicSchoolTestimonial;
