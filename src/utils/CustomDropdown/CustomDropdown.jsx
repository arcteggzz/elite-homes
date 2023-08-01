import { useEffect, useRef, useState } from "react";
import styles from "./CustomDropdown.module.scss";
import dropdown_icon_opened from "./images/dropdown_icon_opened.png";
import dropdown_icon_closed from "./images/dropdown_icon_closed.png";
import PropTypes from "prop-types";

// type CustomDropdownProps = {
//   defaultSelection: string;
//   possibleOptions: any[];
//   customOnChange: React.Dispatch<React.SetStateAction<any>>;
//   customDropdownTitle?: string;
// };

const CustomDropdown = ({
  defaultSelection,
  possibleOptions,
  customOnChange,
  customDropdownTitle = "",
}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(defaultSelection);
  let selectionRef = useRef(null);
  let optionRef = useRef(null);

  const Options_Style = {
    background: "#ffffff",
  };

  const updateSelection = (choice) => {
    setSelectedChoice(choice);
    customOnChange(choice);
    setOpenOptions(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (openOptions) {
        if (!selectionRef?.current?.contains(e.target)) {
          setOpenOptions(false);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <>
      <div className={styles.CustomDropdown}>
        <div
          className={styles.Selection}
          tabIndex={0}
          onClick={() => setOpenOptions(!openOptions)}
          ref={selectionRef}
        >
          <div className={styles.text_header}>
            {customDropdownTitle?.length > 0 ? (
              <p className={styles.season_text}>{customDropdownTitle}</p>
            ) : (
              <></>
            )}
            {selectedChoice?.length > 0 ? (
              <p className={styles.selected_option}>{selectedChoice}</p>
            ) : (
              <p className={styles.selected_option}>{"None"}</p>
            )}
          </div>
          <img
            src={openOptions ? dropdown_icon_opened : dropdown_icon_closed}
            alt="dropdown icon"
          />
        </div>
        {openOptions ? (
          <div className={styles.Options} style={Options_Style}>
            {possibleOptions.map((possibleOption) => {
              return (
                <p
                  tabIndex={0}
                  onClick={() => updateSelection(possibleOption)}
                  key={possibleOption}
                  ref={optionRef}
                >
                  {possibleOption}
                </p>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CustomDropdown;

CustomDropdown.propTypes = {
  defaultSelection: PropTypes.string.isRequired,
  possibleOptions: PropTypes.arrayOf(PropTypes.any).isRequired,
  customOnChange: PropTypes.func.isRequired,
  customDropdownTitle: PropTypes.string.isRequired,
};
