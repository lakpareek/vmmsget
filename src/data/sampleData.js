export const sampleData = [
  {
    question: "how old are you?",
    name: "age",
    options: [
      { label: "<18", value: "<18", points: 0 },
      { label: "18-45", value: "18-45", points: 4 },
      { label: ">45", value: ">45", points: 2 }
    ],
    reactionText: {
      "<18": "We don't hire minors, try applying at Diddy's",
      "18-45": "Exactly what we want! some jawaan khoon 🥵",
      ">45": "Too old. Apply for a retirement home gramps"
    }
  },
  {
    question: "Educational Qualification",
    name: "education",
    options: [
      { label: "Anpadh", value: "Anpadh", points: 0 },
      { label: "10+2", value: "10+2", points: 2 },
      { label: "Engineering", value: "Engineering", points: 4  },
      { label: "Bachelors or other equivalent degree", value: "Bachelors or other equivalent degree", points: 3 },
    ],
    reactionText: {
      "Anpadh": "The education system doesn't deserve you anyway king 👑",
      "10+2": "Borderline anpadh",
      "Engineering": "Good as long as you're not a GEM",
      "Bachelors or other equivalent degree": "Worthless tbh"
    }
  },
  {
    question: "How close is your house to the nearest Vishal Mega Mart?",
    name: "distance",
    options: [
      { label: ">10km", value: ">10km", points: 1 },
      { label: "<10Km", value: "<10Km", points: 2 },
      { label: "I Live in Vishal Mega Mart", value: "I Live in Vishal Mega Mart", points: 4 },

    ],
    reactionText: {
      ">10km": "You'll have to relocate. You will be provided with a 10sqft space in the basement",
      "<10Km": "kabza karlenge tere ghar pe",
      "I Live in Vishal Mega Mart": "Toh papa ko bolo aur mehnat kare 🙏 also happy working from home 🥳"
    }
  },
  {
    question: "Expected Salary",
    name: "salary",
    options: [
      { label: "Unpaid Intern", value: "Unpaid Intern", points: 4 },
      { label: "Paid Employee", value: "Paid Employee", points: 0 },

    ],
    reactionText: {
      "Unpaid Intern": "Congratulations! You are a top candidate for this position",
      "Paid Employee": "You're only getting paid if you are a PhD holder",
    }
  }
];