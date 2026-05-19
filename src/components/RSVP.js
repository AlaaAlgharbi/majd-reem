import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "./RSVP.css";
import { useTranslation } from "react-i18next";

const RSVP = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useTranslation();

  return (
    <div className="background">
      <div
        ref={ref}
        className={`rsvp hidden ${isVisible ? "slide-in-up" : ""}`}
      >
        <h2 className={`hidden ${isVisible ? "fade-in-up delay-1" : ""}`}>
          {t("rsvp.rsvp")}
        </h2>
        <div className={`hidden ${isVisible ? "fade-in-up delay-2" : ""}`}>
          <a
            href="https://www.facebook.com/share/g/1EASfKbWoh/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="rsvp-image" src="/img/4.jpg" alt="description" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
