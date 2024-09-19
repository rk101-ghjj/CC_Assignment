import { React } from "react";
import { useSelector } from "react-redux";
import "./DashBoard.css";
import Card from "../Card/Card";

const DashBoard = () => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  console.log("stat", isStatus, "prio", isPriority);
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
  console.log("rere", user);
  return (
    selectedData && (
      <div
        className="dashContainer"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {selectedData.map((element, index) => {
          const cardWidthPercentage = 19;
          return (
            <div
              key={index}
              className="dashCardContainer"
              style={{ width: `${cardWidthPercentage}%` }}
            >
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {user ? (
                    <div
                      className="imageContainer relative"
                      style={{
                        width: "10px",
                        height: "15px",
                        display: "inline-block",
                      }}
                    ></div>
                  ) : isStatus ? (
                    <div
                      className="cardTitle"
                      style={{
                        width: "15px",
                        height: "15px",
                        display: "inline-block",
                        fontWeight: 200,
                      }}
                    >
                      {element[index].title === "Backlog" ? (
                        <img
                          src="/icons_FEtask/Backlog.svg"
                          alt="Backlog Icon"
                          style={{ width: "13px" }}
                        />
                      ) : element[index].title === "Todo" ? (
                        <img
                          src="/icons_FEtask/To-do.svg"
                          alt="To-do Icon"
                          style={{ width: "13px", color: "#ddeded" }}
                        />
                      ) : element[index].title === "In progress" ? (
                        <img
                          src="/icons_FEtask/in-progress.svg"
                          alt="In progress Icon"
                          style={{ width: "13px", color: "#f2d750" }}
                        />
                      ) : element[index].title === "Done" ? (
                        <img
                          src="/icons_FEtask/Done.svg"
                          alt="Done Icon"
                          style={{ width: "13px" }}
                        />
                      ) : (
                        <img
                          src="/icons_FEtask/Cancelled.svg"
                          alt="Cancelled Icon"
                          style={{ width: "13px" }}
                        />
                      )}
                    </div>
                  ) : isPriority ? (
                    <div
                      className="tags color-grey"
                      style={{
                        width: "35px",
                        height: "30px",
                        display: "inline-block",
                      }}
                    >
                      {element[index].title === "Low" ? (
                        <img
                          src="/icons_FEtask/Img - Low Priority.svg"
                          alt="Low Priority"
                        />
                      ) : element[index].title === "Medium" ? (
                        <img
                          src="/icons_FEtask/Img - Medium Priority.svg"
                          alt="Medium Priority"
                        />
                      ) : element[index].title === "High" ? (
                        <img
                          src="/icons_FEtask/Img - High Priority.svg"
                          alt="High Priority"
                        />
                      ) : element[index].title === "Urgent" ? (
                        <img
                          src="/icons_FEtask/SVG - Urgent Priority colour.svg"
                          alt="Urgent Priority"
                        />
                      ) : (
                        <p></p>
                      )}
                    </div>
                  ) : (
                    <img
                      src="/icons_FEtask/Display.svg"
                      alt="Default Icon"
                      style={{ width: "13px" }}
                    />
                  )}{" "}
                  <span>
                    {element[index]?.title} {element[index].value?.length}
                  </span>
                </div>
                <div className="rightView">
                  <img
                    src="/icons_FEtask/add.svg"
                    alt="Add Icon"
                    style={{ width: "13px" }}
                  />{" "}
                  <span style={{ letterSpacing: "2px" }}>...</span>
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {element[index]?.value?.map((element, ind) => {
                  return (
                    <Card
                      id={element.id}
                      title={element.title}
                      tag={element.tag}
                      status={element.status}
                      priority={element.priority}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        {isStatus && (
          <>
            <div className="dashCardHeading flex-sb">
              <div
                className="leftView"
                style={{
                  fontSize: "15px",
                  marginRight: "90px",
                  wordSpacing: "4px",
                }}
              >
                <div
                  className="cardTitle"
                  style={{
                    width: "13px",
                    height: "13px",
                    display: "inline-block",
                    fontWeight: 200,
                  }}
                >
                  <img
                    src="/icons_FEtask/Done.svg"
                    alt="Done Icon"
                    style={{ width: "13px", color: "blue" }}
                  />
                </div>{" "}
                <span style={{ fontSize: "13px", fontWeight: "lighter" }}>
                  Done
                </span>{" "}
                <span style={{ fontSize: "13px", color: "#8F9997" }}>0</span>
              </div>
              <div className="rightView">
                <img
                  src="/icons_FEtask/add.svg"
                  alt="Add Icon"
                  style={{ width: "13px" }}
                />{" "}
                <span style={{ letterSpacing: "2px" }}>...</span>
              </div>
            </div>
            <div className="dashCardHeading flex-sb">
              <div
                className="leftView"
                style={{
                  fontSize: "15px",
                  marginRight: "60px",
                  wordSpacing: "4px",
                }}
              >
                <div
                  className="cardTitle"
                  style={{
                    width: "9px",
                    height: "9px",
                    display: "inline-block",
                    fontWeight: 200,
                  }}
                >
                  <img
                    src="/icons_FEtask/Cancelled.svg"
                    alt="Cancelled Icon"
                    style={{ width: "9px", color: "grey" }}
                  />
                </div>{" "}
                <span style={{ fontSize: "13px", fontWeight: "lighter" }}>
                  Canceled
                </span>{" "}
                <span style={{ fontSize: "13px", color: "#8F9997" }}>0</span>
              </div>
              <div className="rightView">
                <img
                  src="/icons_FEtask/add.svg"
                  alt="Add Icon"
                  style={{ width: "13px" }}
                />{" "}
                <span style={{ letterSpacing: "2px" }}>...</span>
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};

export default DashBoard;
