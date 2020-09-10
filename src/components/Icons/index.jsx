import React from "react";
import { iconName } from "./iconNames";

function Icons(props) {
  const { type } = props;

  const renderIcons = () => {
    switch (type) {
      case iconName.rightArrow:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-right"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        );

      case iconName.add:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        );

      case iconName.delete:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-archive-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"
            />
          </svg>
        );
    }
  };

  return renderIcons();
}

export default Icons;
