import React, { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import ReactECharts from "echarts-for-react";
import "./LeetCodeCard.css";

function LeetCodeCard() {
  const [leetcodeData, setLeetcodeData] = useState(null);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/userProfile/RicardoOvO")
      .then((response) => response.json())
      .then((data) => setLeetcodeData(data))
      .catch((error) => console.error("Error fetching LeetCode data:", error));
  }, []);

  if (!leetcodeData) return null;

  const option = {
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: false,
          clip: false,
          width: 4,
          itemStyle: {
            color: "#ffa116",
            borderWidth: 0,
          },
        },
        axisLine: {
          lineStyle: {
            width: 4,
            color: [[1, "#3e3e3e"]],
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        data: [
          {
            value:
              (leetcodeData.totalSolved / leetcodeData.totalQuestions) * 100,
            detail: {
              valueAnimation: true,
              offsetCenter: ["0%", "0%"],
            },
          },
        ],
        detail: {
          width: 50,
          height: 14,
          fontSize: 24,
          color: "#fff",
          formatter: "{value|" + leetcodeData.totalSolved + "}",
          offsetCenter: [0, 2],
          rich: {
            value: {
              fontSize: 24,
              fontWeight: "500",
              color: "#fff",
              fontFamily: "Consolas, monospace",
              padding: [0, 0, 0, 0],
              align: "center",
            },
          },
        },
      },
    ],
  };

  return (
    <div className="leetcode-card">
      <div className="leetcode-header">
        <div className="leetcode-title-section">
          <SiLeetcode className="leetcode-icon" />
          <span className="leetcode-title">LeetCode</span>
          <span className="leetcode-username-divider">/</span>
          <span className="leetcode-username">RicardoOvO</span>
        </div>
        <span className="leetcode-id">#{leetcodeData.ranking}</span>
      </div>

      <div className="leetcode-stats">
        <div className="progress-circle">
          <ReactECharts
            option={option}
            style={{ height: "140px", width: "140px" }}
          />
        </div>

        <div className="progress-bars">
          <div className="difficulty-row">
            <span className="difficulty-label">Easy</span>
            <div className="progress-bar easy">
              <div
                className="progress"
                style={{
                  width: `${
                    (leetcodeData.easySolved / leetcodeData.totalEasy) * 100
                  }%`,
                }}
              ></div>
            </div>
            <span className="count-label">
              {leetcodeData.easySolved}/{leetcodeData.totalEasy}
            </span>
          </div>

          <div className="difficulty-row">
            <span className="difficulty-label">Medium</span>
            <div className="progress-bar medium">
              <div
                className="progress"
                style={{
                  width: `${
                    (leetcodeData.mediumSolved / leetcodeData.totalMedium) * 100
                  }%`,
                }}
              ></div>
            </div>
            <span className="count-label">
              {leetcodeData.mediumSolved}/{leetcodeData.totalMedium}
            </span>
          </div>

          <div className="difficulty-row">
            <span className="difficulty-label">Hard</span>
            <div className="progress-bar hard">
              <div
                className="progress"
                style={{
                  width: `${
                    (leetcodeData.hardSolved / leetcodeData.totalHard) * 100
                  }%`,
                }}
              ></div>
            </div>
            <span className="count-label">
              {leetcodeData.hardSolved}/{leetcodeData.totalHard}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeetCodeCard;
