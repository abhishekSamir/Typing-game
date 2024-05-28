const main = document.querySelector(".main");
const typeArea = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");
const words = [
    "A day in the life of a programmer involves writing and debugging code, attending meetings to discuss project requirements, collaborating with other team members, and continuously learning about new technologies and programming languages to stay up-to-date with industry trends.",
    "JavaScript is a versatile and widely-used programming language that enables developers to create interactive and dynamic web pages, making it essential for front-end development and often used in combination with HTML and CSS to build engaging user experiences.",
    "React is a powerful JavaScript library developed by Facebook for building user interfaces, particularly single-page applications, by creating reusable components that manage their own state, leading to more efficient and maintainable code.",
    "A programming language is a formal system of communication that allows humans to instruct computers to perform specific tasks, using a set of syntax and rules to write code that can be compiled or interpreted into machine-readable instructions.",
    "What's your name? This simple question, often asked when meeting someone new, serves as an introductory prompt that opens the door to further conversation and helps establish a personal connection.",
    "Where are you from? This question aims to learn about a person's background, providing insights into their culture, experiences, and potentially shared interests or connections that can foster deeper understanding and relationships.",
    "This is just a random word sequence designed to test typing speed and accuracy, with no inherent meaning or context, allowing individuals to focus solely on the mechanics of typing.",
    "Remix.js is a modern web framework built on top of React, designed to provide a seamless development experience with features like server-side rendering, optimized performance, and enhanced data loading capabilities.",
    "New technologies are constantly emerging in the fields of software development, artificial intelligence, and data science, driving innovation and transforming industries by offering novel solutions and improving efficiency.",
    "Is programming hard? The difficulty of programming can vary based on the individual's background, experience, and the complexity of the projects they undertake, but with persistence, practice, and the right resources, anyone can learn to code.",
    "Why do you wanna become a programmer? People pursue programming for various reasons, such as the desire to solve problems, create innovative software, enjoy high demand and lucrative career opportunities, or simply the passion for technology and coding.",
    "Which programming language do you like the most? Personal preferences for programming languages often depend on factors like ease of use, community support, performance, and the specific needs of the projects being developed.",
    "Golang, also known as Go, is a statically typed, compiled programming language developed by Google that is known for its simplicity, concurrency support, and performance, making it an excellent choice for building scalable and efficient software.",
    "CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML or XML, allowing developers to control the layout, colors, fonts, and overall visual appearance of web pages."
  ];
  
const game = {
  start: 0,
  end: 0,
  user: "",
  arrText: "",
};

btn.addEventListener("click", () => {
  if (btn.textContent === "Start") {
    play();
    typeArea.value = "";
    typeArea.disabled = false;
  } else if (btn.textContent === "Done") {
    typeArea.disabled = true;
    main.style.borderColor = "white";
    end();
  }
});

function play() {
  let randText = Math.floor(Math.random() * words.length);
  main.textContent = words[randText];
  game.arrText = words[randText];
  main.style.borderColor = "#c8c8c8";
  btn.textContent = "Done";
  const duration = new Date();
  game.start = duration.getTime(); // unix timestamp
}

function end() {
  const duration = new Date();
  game.end = duration.getTime();
  const totalTime = (game.end - game.start) / 1000;
  game.user = typeArea.value;
  const correct = results();
  main.style.borderColor = "white";
  main.innerHTML = `Time: ${totalTime} Score: ${correct.score} out of ${correct.total}`;
  btn.textContent = "Start";
}

function results() {
  let valueOne = game.arrText.split(" ");
  let valueTwo = game.user.split(" ");
  let score = 0;
  valueOne.forEach((word, idx) => {
    if (word === valueTwo[idx]) {
      score++;
    }
  });

  return { score, total: valueOne.length };
}