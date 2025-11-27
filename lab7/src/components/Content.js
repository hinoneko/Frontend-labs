import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobby8: { state: 0, bg: "", color: "" },
      hobby9: { state: 0, bg: "", color: "" },
    };
  }

  toggleColor = (hobbyId) => {
    const colorSets = {
      hobby8: [
        { bg: "#FFE5B4", color: "#8B4513" },
        { bg: "#D7FFE0", color: "#185843" },
      ],
      hobby9: [
        { bg: "#FFD1DC", color: "#C71585" },
        { bg: "#E4DBFF", color: "#322979" },
      ],
    };

    this.setState((prevState) => {
      const currentState = prevState[hobbyId].state;
      const newState = (currentState + 1) % 3;

      let newColors = { bg: "", color: "" };
      if (newState === 1) {
        newColors = colorSets[hobbyId][0];
      } else if (newState === 2) {
        newColors = colorSets[hobbyId][1];
      }

      return {
        [hobbyId]: { state: newState, ...newColors },
      };
    });
  };

  render() {
    const { hobby8, hobby9 } = this.state;

    return (
      <div>
        <p>Мої хобі:</p>
        <ul>
          <li>Читання</li>
          <li>Фотографія</li>
          <li>Гончарство</li>
          <li
            onClick={() => this.toggleColor("hobby8")}
            style={{
              cursor: "pointer",
              backgroundColor: hobby8.bg,
              color: hobby8.color,
              transition: "all 0.3s",
            }}
          >
            Ігрові види спорту (волейбол, теніс, баскетбол)
          </li>
          <li
            onClick={() => this.toggleColor("hobby9")}
            style={{
              cursor: "pointer",
              backgroundColor: hobby9.bg,
              color: hobby9.color,
              transition: "all 0.3s",
            }}
          >
            Автомобілі
          </li>
          <li>Стрільба</li>
        </ul>

        <p>Мої улюблені фільми:</p>
        <ol>
          <li>Kingsman: Таємна служба, 2015</li>
          <li>Нова Людина-Павук, 2012</li>
          <li>Аватар: Останній Захисник, 2005</li>
        </ol>

        <p>Улюблене місто</p>
        <p>
          Амстердам (нід. Amsterdam) — місто, столиця Нідерландів, комерційний
          та фінансовий центр країни. Культурний центр світового рівня, у ньому
          знаходяться безліч культурних та історичних пам'яток, один з
          найпопулярніших туристичних центрів Європи; система оборонних споруд
          міста занесена в список об'єктів Світової спадщини ЮНЕСКО.
          Розташований у провінції Північна Голландія на Заході країни в гирлі
          р. Амстел, на берегах вузької затоки Ей та Нордзе-каналу, який
          сполучає її з Північним морем. Частина міста лежить нижче рівня моря,
          деякі ділянки — на землях, де раніше були болота, озера або морська
          затока.
        </p>
      </div>
    );
  }
}

export default Content;
