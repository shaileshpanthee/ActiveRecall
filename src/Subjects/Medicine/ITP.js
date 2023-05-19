const ITP = {
  topic: "Idiopathic Thrombocytopenic Purpura",
  chapter: "Hematology",
  subject: "Medicine",
  howImportant: 5,
  quesAndAnsArray: [
    {
      statement: "",
      question: "Treatment:",
      show: false,
      ontoggle() {
        this.show = !this.show;
      },
      answer: [
        {
          question:
            "For patients with spontaneous bleeding, first line therapy:",
          answer:
            "High dose of glucocorticoids either Prednisolone or Dexamethasone",
          show: false,
          ontoggle() {
            this.show = !this.show;
          },
        },
        {
          question:
            "Persistent / Life threatening bleeding : Platelet transfusion in addition to other therapy",
        },
      ],
    },
    {},
    {},
  ],
};

console.log(ITP.quesAndAnsArray[0].show);
ITP.quesAndAnsArray[0].ontoggle();
console.log(ITP.quesAndAnsArray[0].show);
