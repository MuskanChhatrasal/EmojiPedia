import React, { useState } from "react";
import "./styles.css";

var emojiPedia = {

  "๐": "Grinning Face",
  "๐": "Grinning Face with Big Eyes",
  "๐": "Grinning Face with Smiling Eyes",
  "๐": "Beaming Face with Smiling Eyes",
  "๐": "Grinning Squinting Face",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐": "smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐ฅก": "takeout box",
  "โค๏ธ": "love",
  "๐": "annoyance",
  "๐": "Winking Face",
  "๐": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "๐": "Kissing Face with Closed Eyes",
  "๐": "Kissing Face with Smiling Eyes",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐" : "Winking Face with Tongue",
  "๐คช" : "Zany Face",
  "๐" :"Squinting Face with Tongue",
  "๐ค" :"Money-Mouth Face",
  "๐ค" :"Hugging Face",
  "๐คญ" :"Face with Hand Over Mouth",
  "๐คซ": "Shushing Face",
"๐ค" :"Thinking Face",
"๐ค": "Zipper-Mouth Face",
"๐คจ": "Face with Raised Eyebrow",
"๐": "Neutral Face",
// "๐" :"Expressionless Face",
"๐ถ" :"Face Without Mouth",
"๐": "Smirking Face",
"๐": "Unamused Face",
"๐" :"Face with Rolling Eyes",
"๐ฌ" :"Grimacing Face",
"๐คฅ" :"Lying Face",
"๐" :"Relieved Face",
// "๐" :"Pensive Face",
"๐ช" :"Sleepy Face",
"๐คค": "Drooling Face",
"๐ด": "Sleeping Face",
"๐ท": "Face with Medical Mask",
"๐ค": "Face with Thermometer",
"๐ค":"Face with Head-Bandage",
"๐คข": "Nauseated Face",
"๐คฎ": "Face Vomiting",
"๐คง": "Sneezing Face",
"๐ฅต": "Hot Face",
"๐ฅถ": "Cold Face",
"๐ฅด": "Woozy Face",
"๐ต": "Dizzy Face",
"๐คฏ": "Exploding Head",
"๐ค ": "Cowboy Hat Face",
"๐ฅณ": "Partying Face",

"๐": "Smiling Face with Sunglasses",
"๐ค": "Nerd Face",
"๐ง": "Face with Monocle",
"๐": "Confused Face",
"๐": "Worried Face",
"๐": "Slightly Frowning Face",
"โน๏ธ": "Frowning Face",
"๐ฎ": "Face with Open Mouth",
"๐ฏ": "Hushed Face",
"๐ฒ": "Astonished Face",
// "๐ณ": "Flushed Face",
"๐ฅบ": "Pleading Face",
"๐ฆ": "Frowning Face with Open Mouth",
"๐ง": "Anguished Face",
"๐จ": "Fearful Face",
"๐ฐ": "Anxious Face with Sweat",
"๐ฅ": "Sad but Relieved Face",
"๐ข": "Crying Face",
"๐ญ": "Loudly Crying Face",
"๐ฑ": "Face Screaming in Fear",
"๐": "Confounded Face",
"๐ฃ": "Persevering Face",
"๐": "Disappointed Face",
"๐": "Downcast Face with Sweat",
"๐ฉ": "Weary Face",
"๐ซ": "Tired Face",
"๐ฅฑ": "Yawning Face",
"๐ค": "Face with Steam From Nose",
"๐ก": "Pouting Face",
"๐ ": "Angry Face",
"๐คฌ": "Face with Symbols on Mouth",
"๐": "Smiling Face with Horns",
"๐ฟ": "Angry Face with Horns",
  // ๐ Skull"
  // โ ๏ธ Skull and Crossbones
  // ๐ฉ Pile of Poo
  // ๐คก Clown Face
  // ๐น Ogre
  // ๐บ Goblin
  // ๐ป Ghost
  // ๐ฝ Alien
  // ๐พ Alien Monster
  // ๐ค Robot
  // ๐บ Grinning Cat
  // ๐ธ Grinning Cat with Smiling Eyes
  // ๐น Cat with Tears of Joy
  // ๐ป Smiling Cat with Heart-Eyes
  // ๐ผ Cat with Wry Smile
  // ๐ฝ Kissing Cat
  // ๐ Weary Cat
  // ๐ฟ Crying Cat
  // ๐พ Pouting Cat
  // ๐ Kiss Mark
  // ๐ Waving Hand
  // ๐ค Raised Back of Hand
  // ๐๏ธ Hand with Fingers Splayed
  // โ Raised Hand
  // ๐ Vulcan Salute
  // ๐ OK Hand
  // ๐ค Pinched Fingers
  // ๐ค Pinching Hand
  // โ๏ธ Victory Hand
  // ๐ค Crossed Fingers
  // ๐ค Love-You Gesture
  // ๐ค Sign of the Horns
  // ๐ค Call Me Hand
  // ๐ Backhand Index Pointing Left
  // ๐ Backhand Index Pointing Right
  // ๐ Backhand Index Pointing Up
  // ๐ Middle Finger
  // ๐ Backhand Index Pointing Down
  // โ๏ธ Index Pointing Up
  // ๐ Thumbs Up
  // ๐ Thumbs Down
  // โ Raised Fist
  // ๐ Oncoming Fist
  // ๐ค Left-Facing Fist
  // ๐ค Right-Facing Fist
  // ๐ Clapping Hands
  // ๐ Raising Hands
  // ๐ Open Hands
  // ๐คฒ Palms Up Together
  // ๐ค Handshake
  // ๐ Folded Hands
  // โ๏ธ Writing Hand
  // ๐ Nail Polish
  // ๐คณ Selfie
  // ๐ช Flexed Biceps
  // ๐ฆพ Mechanical Arm
  // ๐ฆฟ Mechanical Leg
  // ๐ฆต Leg
  // ๐ฆถ Foot
  // ๐ Ear
  // ๐ฆป Ear with Hearing Aid
  // ๐ Nose
  // ๐ง  Brain
  // ๐ซ Anatomical Heart
  // ๐ซ Lungs
  // ๐ฆท Tooth
  // ๐ฆด Bone
  // ๐ Eyes
  // ๐๏ธ Eye
  // ๐ Tongue
  // ๐ Mouth
  // ๐ถ Baby
  // ๐ง Child
  // ๐ฆ Boy
  // ๐ง Girl
  // ๐ง Person
  // ๐ฑ Person: Blond Hair
  // ๐จ Man
  // ๐ง Person: Beard
  // ๐จโ๐ฆฐ Man: Red Hair
  // ๐จโ๐ฆฑ Man: Curly Hair
  // ๐จโ๐ฆณ Man: White Hair
  // ๐จโ๐ฆฒ Man: Bald
  // ๐ฉ Woman
  // ๐ฉโ๐ฆฐ Woman: Red Hair
  // ๐งโ๐ฆฐ Person: Red Hair
  // ๐ฉโ๐ฆฑ Woman: Curly Hair
  // ๐งโ๐ฆฑ Person: Curly Hair
  // ๐ฉโ๐ฆณ Woman: White Hair
  // ๐งโ๐ฆณ Person: White Hair
  // ๐ฉโ๐ฆฒ Woman: Bald
  // ๐งโ๐ฆฒ Person: Bald
  // ๐ฑโโ๏ธ Woman: Blond Hair
  // ๐ฑโโ๏ธ Man: Blond Hair
  // ๐ง Older Person
  // ๐ด Old Man
  // ๐ต Old Woman
  // ๐ Person Frowning
  // ๐โโ๏ธ Man Frowning
  // ๐โโ๏ธ Woman Frowning
  // ๐ Person Pouting
  // ๐โโ๏ธ Man Pouting
  // ๐โโ๏ธ Woman Pouting
  // ๐ Person Gesturing No
  // ๐โโ๏ธ Man Gesturing No
  // ๐โโ๏ธ Woman Gesturing No
  // ๐ Person Gesturing OK
  // ๐โโ๏ธ Man Gesturing OK
  // ๐โโ๏ธ Woman Gesturing OK
  // ๐ Person Tipping Hand
  // ๐โโ๏ธ Man Tipping Hand
  // ๐โโ๏ธ Woman Tipping Hand
  // ๐ Person Raising Hand
  // ๐โโ๏ธ Man Raising Hand
  // ๐โโ๏ธ Woman Raising Hand
  // ๐ง Deaf Person
  // ๐งโโ๏ธ Deaf Man
  // ๐งโโ๏ธ Deaf Woman
  // ๐ Person Bowing
  // ๐โโ๏ธ Man Bowing
  // ๐โโ๏ธ Woman Bowing
  // ๐คฆ Person Facepalming
  // ๐คฆโโ๏ธ Man Facepalming
  // ๐คฆโโ๏ธ Woman Facepalming
  // ๐คท Person Shrugging
  // ๐คทโโ๏ธ Man Shrugging
  // ๐คทโโ๏ธ Woman Shrugging
  // ๐งโโ๏ธ Health Worker
  // ๐จโโ๏ธ Man Health Worker
  // ๐ฉโโ๏ธ Woman Health Worker
  // ๐งโ๐ Student
  // ๐จโ๐ Man Student
  // ๐ฉโ๐ Woman Student
};

var emojisWeKnow = Object.keys(emojiPedia);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {

    var userInput = event.target.value;

    var meaning = emojiPedia[userInput];

    if (meaning === undefined) {
      meaning = "This emoji is new for us!!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiPedia[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>EmojiPedia</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3 style={{ color: "#824596" }}> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}>
            {emoji}
          </span>
        );
      })}
      <section class="footer">
        <p>Muskan Chhatrasal</p>
        <ul>
          <li><a href="https://github.com/MuskanChhatrasal" alt="#"><i class="fab fa-github">&nbsp;Github</i></a></li>
          <li><a href="https://www.linkedin.com/in/muskan-chhatrasal/" alt="#"><i class="fab fa-linkedin">&nbsp;LinkedIn</i></a>
          </li>
          <li><a href="https://twitter.com/MuskanChhatras1" alt="#"><i class="fab fa-twitter">&nbsp;Twitter</i></a>
          </li>
        </ul>
      </section>
    </div>
  );
}
