let topics = ["HTML", "CSS", "Git", "JavaScript"];
// console.log(topics);

function listTopics() {
  for (let i = 0; i < topics.length; i++) {
    console.log(topics[i]);
  }
}

function selectTopic() {
  if (topics === "HTML") {
    console.log("Lets study HTML!");
  } else if (topics === "CSS") {
    console.log("Lets study CSS!");
  } else if (topics === "Git") {
    console.log("Lets study Git!");
  } else if (topics === "JavaScript") {
    console.log("Lets study JavaScript!");
  } else {
    console.log("Please Try Again!");
  }
}

listTopics()
// selectTopic()
