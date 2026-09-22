export type GuideSection = {
  heading: string;
  intro: string;
  actions: string[];
  reflection?: string;
};

export type Guide = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  readTime: string;
  sections: GuideSection[];
  nextStep: string;
};

export const guides: Guide[] = [
  {
    slug: "time-and-rhythm",
    title: "Time & Rhythm",
    eyebrow: "A gentler shape for your days",
    summary: "Build a weekly rhythm that offers structure without turning retirement into another job.",
    readTime: "8 minute read",
    sections: [
      {
        heading: "Start with anchors, not a packed calendar",
        intro: "An anchor is a small, dependable point in the day. A few anchors can make time feel legible while leaving room for choice.",
        actions: [
          "Choose one morning anchor: opening the curtains, making tea, or taking a short walk.",
          "Choose one evening anchor: calling someone, reading, stretching, or preparing tomorrow’s breakfast.",
          "Keep the anchors at roughly the same time for one week, then notice what feels supportive."
        ],
        reflection: "Which part of the day currently feels most unsteady?"
      },
      {
        heading: "Plan three kinds of time",
        intro: "A balanced week often includes time that restores you, time that connects you, and time that gives a sense of progress.",
        actions: [
          "Restore: protect two periods for rest, nature, music, or an unhurried meal.",
          "Connect: schedule one low-pressure conversation or shared activity.",
          "Progress: pick one task small enough to finish in a single sitting."
        ],
        reflection: "Which kind of time has been missing lately?"
      },
      {
        heading: "Use a two-list week",
        intro: "Separate what must happen from what would be pleasant. This reduces the feeling that every idea is an obligation.",
        actions: [
          "Keep the must-do list to five items or fewer.",
          "Make a second ‘could-do’ list with enjoyable options for open moments.",
          "At week’s end, move only what still matters. Let the rest go."
        ]
      },
      {
        heading: "Make room for low-energy days",
        intro: "A useful rhythm still works when motivation or energy is limited.",
        actions: [
          "Create a minimum-day version of routines: five minutes outside, one simple meal, one message to a friend.",
          "Place demanding activities after the time of day when your energy is usually highest.",
          "Treat rest as part of the rhythm, not evidence that the rhythm failed."
        ]
      }
    ],
    nextStep: "Choose one morning anchor and put it somewhere visible for the next seven days."
  },
  {
    slug: "home-and-space",
    title: "Home & Space",
    eyebrow: "Make home support the life you have now",
    summary: "Adjust your surroundings for ease, safety, comfort, and new possibilities—one small zone at a time.",
    readTime: "9 minute read",
    sections: [
      {
        heading: "Begin with how the space feels",
        intro: "Before reorganizing, notice where your home creates friction and where it already supports you.",
        actions: [
          "Walk through your usual day and note places where you pause, reach awkwardly, or search for things.",
          "Identify one place that feels calm and name what works there: light, clear surfaces, color, or familiarity.",
          "Choose a single zone to work on; a chair-side table or entryway is enough."
        ],
        reflection: "What would you like your home to make easier?"
      },
      {
        heading: "Reduce everyday friction",
        intro: "Small placement changes can save effort and make routines more intuitive.",
        actions: [
          "Keep frequently used items between waist and shoulder height when practical.",
          "Give keys, glasses, medicines, and charging cables consistent homes.",
          "Improve task lighting near reading, cooking, stairs, and entryways.",
          "Remove or secure loose rugs and keep common walking paths clear."
        ]
      },
      {
        heading: "Edit belongings without rushing",
        intro: "Sorting can bring up memory, identity, and family expectations. Work in short sessions and make fewer decisions at once.",
        actions: [
          "Use four categories: keep here, keep elsewhere, share, and release.",
          "Start with low-emotion items rather than photographs or heirlooms.",
          "Set a 20-minute timer and stop while you still have energy.",
          "Photograph meaningful objects before releasing them, if that helps preserve the story."
        ],
        reflection: "Which objects tell a story you want to pass along?"
      },
      {
        heading: "Create space for what comes next",
        intro: "A home can reflect future interests as well as past chapters.",
        actions: [
          "Dedicate a visible basket, shelf, or corner to a current interest.",
          "Set up one comfortable place for conversation, reading, or creative work.",
          "Leave some space intentionally empty. Not every shelf needs a purpose today."
        ]
      }
    ],
    nextStep: "Choose one high-friction spot and spend 20 minutes making it easier to use."
  },
  {
    slug: "purpose-and-connection",
    title: "Purpose & Connection",
    eyebrow: "Meaning can be built in small ways",
    summary: "Explore belonging, contribution, curiosity, and relationships without pressure to find one grand purpose.",
    readTime: "10 minute read",
    sections: [
      {
        heading: "Broaden the idea of purpose",
        intro: "Purpose does not need to be a title, mission, or major commitment. It can be a repeated way of caring, learning, creating, or contributing.",
        actions: [
          "List three moments from the past year when you felt useful, absorbed, or connected.",
          "Circle the quality underneath each moment: teaching, making, listening, solving, tending, or exploring.",
          "Pick one quality to express in a small way this week."
        ],
        reflection: "When do you feel most like yourself?"
      },
      {
        heading: "Build a connection ladder",
        intro: "Different relationships serve different needs. A ladder makes it easier to choose a manageable next step.",
        actions: [
          "Easy: send a message, greet a neighbor, or attend an online gathering.",
          "Moderate: invite someone for coffee, join a recurring class, or call an old friend.",
          "Stretch: volunteer regularly, host a gathering, or join a group where you know no one.",
          "Choose the rung that fits your energy now—not the one you think should fit."
        ]
      },
      {
        heading: "Try small experiments",
        intro: "Treat new activities as trials rather than permanent commitments. Curiosity gives you room to revise.",
        actions: [
          "Choose an experiment lasting two to four weeks.",
          "Define success as learning whether you want more, less, or something different.",
          "After each session, note: Did this give me energy? Did I feel welcome? Would I return?"
        ]
      },
      {
        heading: "Offer what you already know",
        intro: "Experience becomes meaningful when it is shared in a form that fits your life.",
        actions: [
          "Help one person with a skill you take for granted.",
          "Record a family story, recipe, repair method, or lesson learned.",
          "Ask a school, library, mutual-aid group, or community organization what help is actually useful.",
          "Choose a commitment with a clear boundary so contribution remains sustainable."
        ],
        reflection: "What knowledge or care would you enjoy passing on?"
      }
    ],
    nextStep: "Choose one two-week experiment and tell one person you plan to try it."
  }
];

export const futureTopics = [
  { title: "Health & Energy", description: "Everyday movement, appointments, rest, and adapting to changing energy." },
  { title: "Money & Choices", description: "Values-led spending, simpler systems, and questions for qualified professionals." },
  { title: "Learning & Curiosity", description: "Ways to keep exploring, practicing, and sharing what you discover." },
  { title: "Family & Boundaries", description: "Navigating changing roles, expectations, care, and honest conversations." },
  { title: "Travel & Adventure", description: "Meaningful outings near and far, planned around comfort and energy." },
  { title: "Creativity & Play", description: "Low-pressure ways to make, perform, collect, and experiment." },
  { title: "Work on Your Terms", description: "Consulting, mentoring, part-time work, and knowing when enough is enough." },
  { title: "Caregiving & Support", description: "Finding help, sharing responsibility, and protecting the caregiver’s well-being." },
  { title: "Legacy & Stories", description: "Preserving memories, values, practical knowledge, and family history." }
] as const;

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}