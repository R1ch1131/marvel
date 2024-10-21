import spider from "/spider.jpg";
import iron from "/iron.jpeg";
import thor from "/thor.jpg";
import hulk from "/hulk.jpeg";
import russia from "/russia.jpeg";

interface CharaсterData {
  image: string; 
  title: string;
  description: string;
  comics1: string;
  comics2: string;
  id: number;
 }
 
 const CharaсterData: CharaсterData[] = [
    {
        image: spider,
        title: "Spiderman",
        description:
          "Spider-Man, aka Peter Parker, is an ordinary teenager who gained superpowers after being bitten by a radioactive spider. He uses his abilities to fight crime in New York",
        comics1: "The Amazing Spider-Man v.4 (2015 - наст.вр.)",
        comics2: "Amazing Spider-Man: Renew Your Vows (2016 - наст.вр.)",
        id: 1
      },
      {
        image: iron,
        title: "Iron man",
        description:
          "Iron Man, aka Tony Stark, is a genius billionaire, inventor and philanthropist who uses his talent to create high–tech armored suits.",
        comics1: "Iron Man #1-332 (May 1968 - September 1996)",
        comics2: "Iron Man vol. 2 #1-13 [#333-345] (November 1996 - November 1997)",
        id: 2
        },
      {
        image: thor,
        title: "Thor",
        description:
          "Thor is the god of thunder from Asgard, who has incredible power, the ability to control the weather and the mighty hammer Mjolnir.",
        comics1: "Journey into Mystery #83–125 (August 1962 – February 1966)",
        comics2: "Thor: God of Thunder #1–25 [#644–668] (November 2012 – September 2014)",
        id: 3
        },
      {
        image: hulk,
        title: "Hulk",
        description:
          "The Hulk, aka Bruce Banner, is a scientist who gained incredible strength and green skin after being exposed to gamma radiation. In moments of anger, Banner transforms into the Hulk, who has tremendous strength and endurance.",
        comics1: "The Incredible Hulk #102–474 (April 1968 – March 1999)",
        comics2: "Hulk #1–11 [#475–485][1] (April 1999 – February 2000)",
        id: 4
        },
      {
        image: russia,
        title: "Captain America",
        description:
          "Captain America, aka Steve Rogers, is a soldier who volunteered for the secret Super Soldier program during World War II. He gained enhanced physical abilities by becoming a superhero",
        comics1: "Captain America vol. 8 #25 [#694] (October 2017)",
        comics2: "Captain America #695–704 (January 2018 – August 2018)",
        id: 5
        },
  ];
 
 export default CharaсterData;