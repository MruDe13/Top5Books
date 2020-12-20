import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Crime = [
  {
    Title: "The Hound of the Baskervilles ",
    Author: "by Arthur Conan Doyle",
    Description:
      "Who can resist Sherlock Holmes and Dr. Watson on one of their most extraordinary cases ever to challenge them? Rumors of a legendary hound that haunts the Baskerville family lead them to ask Holmes and Watson to protect Sir Charles Baskerville’s only heir. It is on the moors surrounding the Baskerville mansion they come face to face with a terrifying evil."
  },
  {
    Title: " The Godfather",
    Author: "by Mario Puzo",
    Description:
      "The Corleones are the first family of the American mafia, and The Godfather details their powerful legacy of tradition, blood, and honor. Allegiance to the family as well as greed and power fuel every decision made. An epic story of crime and betrayal, this book uncovers the underbelly of the mafia’s violent subculture and places the reader right in the middle."
  },
  {
    Title: "Bleeding Heart Square ",
    Author: "by Andrew Taylor",
    Description:
      "1934, London. Into the decaying cul-de-sac of Bleeding Heart Square steps aristocratic Lydia Langstone fleeing an abusive marriage. However, unknown to Lydia, a dark mystery haunts the place."
  },
  {
    Title: "The Lovely Bones",
    Author: "by Alice Sebold",
    Description:
      "Susie Salmon, the teenage victim of a gruesome murder, describes what happened the day she was murdered, but she’s in heaven watching her family struggle with the aftermath of not knowing what actually happened to her. So what the readers know, the family doesn’t, which makes this a tense read that Sebold covers with amazing and compelling grace."
  },
  {
    Title: "The Big Sleep ",
    Author: "by Raymond Chandler",
    Description:
      "The first in the Philip Marlowe series, The Big Sleep introduces Marlowe, a private eye and an educated, heroic, streetwise, rugged individualist that epitomizes the hard-boiled detective. Marlowe is hired by General Sternwood to deal with the blackmailer of his young daughter Carmen. This is just the tip of the iceberg uncovered by Marlowe’s investigation."
  }
];

const Romance = [
  {
    Title: "Gone With The Wind ",
    Author: "by Margaret Mitchell",
    Description:
      "This 1937 Pulitzer-winning epic novel tells the story of headstrong leading lady Scarlett O'Hara. The Southern Belle fights for the love of her life and for the preservation of her family's plantation in the midst of the Civil War and the Reconstruction Era."
  },
  {
    Title: "It Ends with Us",
    Author: "by Colleen Hoover",
    Description:
      "A powerful and unexpected story that follows main character, Lily, through the tumultuous stages of an abusive relationship."
  },
  {
    Title: "Me Before You ",
    Author: "by Jojo Moyes",
    Description:
      "After desperately taking on a new job, ordinary girl Louisa Clark falls in love with her boss, wheelchair bound-grump Will Traynor."
  },
  {
    Title: "Pride and Prejudice ",
    Author: "by Jane Austen",
    Description:
      "Arguably one of the greatest romance novels of all time, Austen's Pride and Prejudice follows the opinionated heroine, Elizabeth Bennet, as she frequently finds herself at odds with her beau, the uptight Mr. Darcy."
  },
  {
    Title: "Tangled ",
    Author: "by Emma Chase",
    Description:
      "Tangled is a classic enemies-to-lovers tale in which rich, dashing businessman Drew finds his weakness in his new co-worker, the ambitious and beautiful Katherine. "
  }
];

const Motivational = [
  {
    Title: "Man’s Search for Meaning",
    Author: "by Victor E. Fankl",
    Description:
      "Psychiatrist Viktor Frankl’s discusses in-depth his experience with living in Nazi death camps and describes the lessons it taught him about spiritual survival. Frankl puts forth a convincing argument that avoiding suffering isn’t realistic. However, through choosing how we cope with that suffering and the meaning we ascribe to it, we retain the ability to move forward with renewed purpose."
  },
  {
    Title: "The Alchemist",
    Author: "by Paulo Coelho",
    Description:
      "The Alchemist by Paulo Coelho is a wonderful story about an inspiring journey towards self-discovery. Mysticism and wisdom combine in this classic novel that has sold millions of copies worldwide. This story outlines the journey of a young shepherd boy who desires to travel the world in search of treasure but ends up discovering a vastly different type of riches than he initially imagined."
  },
  {
    Title: "The Four Agreements",
    Author: "by Don Miguel Ruiz",
    Description:
      "Don Miguel Ruiz uses his book The Four Agreements to reveal the limiting beliefs that we commonly hold which rob us of joy and cause us to endure needless suffering. The Four Agreements encourages self-reflection and encourages us to do better within our everyday lives. "
  },
  {
    Title: "Grit: The Power of Passion and Perseverance",
    Author: "by Angela Duckworth",
    Description:
      "In this book, psychologist Angela Duckworth, takes her readers on a journey to argue that the secret to being a success relies largely on an individual’s grit, a unique blend of passion and persistence."
  },
  {
    Title: "Choose Yourself",
    Author: "by James Altucher",
    Description:
      "Choose Yourself by James Altucher is one of the best motivational books around. James argues that the most valuable asset we have and the one which we should be investing the most time, effort, and resources into is — ourselves. This whole book is about how we can achieve success simply by choosing to invest in ourselves and our growth."
  }
];

const Philosophy = [
  {
    Title: "A History of Western Philosophy",
    Author: "by Bertrand Russell",
    Description:
      "Comprehensive, erudite and revealing; this is a history written by one who would go on to become a regarded philosopher in his own right."
  },
  {
    Title: "Meditations",
    Author: "by Marcus Aurelius",
    Description:
      "Roman Emperor Marcus Aurelius wrote meditations during his experiences administrating the Roman Empire and during his life as a warrior. He outlines a timeless philosophy of commitment to virtue above pleasure, tranquility above happiness, and perhaps most importantly, a search for inner peace in the face of an endlessly changing and chaotic world. Highly practical for everyday life."
  },
  {
    Title:
      "Physics, Ethics, Poetics, Metaphysics, Categories, On Logic, On the Soul",
    Author: "by Aristotle",
    Description:
      "Aristotle, like Plato, was one of the greatest intellectual figures of Western history. Even after the intellectual revolutions of the Renaissance, the Reformation, and the Enlightenment, Aristotelian concepts remained embedded in Western thinking."
  },
  {
    Title: "Beyond Good And Evil",
    Author: "by Nietzsche",
    Description:
      "Nietzsche’s ‘Beyond Good and Evil’ is one of his slightly more accessible. He breaks down the paradoxes of conventional understandings of morality, and in doing so sets the stage for much of the 20th century thought that would follow."
  },
  {
    Title: "The Stranger",
    Author: "by Albert Camus",
    Description:
      "Through the story of an ordinary man unwittingly drawn into a senseless murder on an Algerian beach, Camus explored what he termed the nakedness of man faced with the AudioBufferSourceNode. First published in English in 1946"
  }
];

const Library = {
  Crime,
  Romance,
  Motivational,
  Philosophy
};

const Genre = Object.keys(Library);

class Top5Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  render() {
    const listofbooks = this.state.books;
    return (
      <div>
        <div>
          <nav className="NavBar">Top 5 Books</nav>
        </div>
        <div className="GenreContent">
          <ul className="GenreList">
            {Genre.map((item) => {
              return (
                <li
                  key={item}
                  onClick={() => this.setState({ books: Library[item] })}
                  className="Genre"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ol className="Book-ListBg">
            {listofbooks.map((book) => {
              const { Title, Author, Description } = book;
              return (
                <li key={Title} className="Book">
                  <div>
                    <h3>{Title}</h3>
                    <span>{Author}</span>
                    <hr style={{ padding: "0.1rem", color: "red" }}></hr>
                    <p>{Description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Top5Books />
  </React.StrictMode>,
  rootElement
);
