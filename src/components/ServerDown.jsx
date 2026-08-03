import "./ServerDown.css";
import logo from "../assets/logof.png";

// Full-screen screen used for two states:
//   • mode="loading" -> the ~1 second loading screen shown while the status is
//                       checked on every visit (logo + spinner).
//   • mode="down"    -> the maintenance screen shown when the site is flagged
//                       down (logo + spinner + "We'll be back soon" message).
// Self-contained: uses only its own `server-down__*` classes so it doesn't
// affect any other UI.
export default function ServerDown({ mode = "down" }) {
  const loading = mode === "loading";
  return (
    <div className="server-down">
      <div className="server-down__inner">
        <img className="server-down__logo" src={logo} alt="Mspring Infotech" />
        <div className="server-down__spinner" aria-hidden="true" />
        {loading ? (
          <p className="server-down__text">Loading&hellip;</p>
        ) : (
          <>
            <h1 className="server-down__title">We&rsquo;ll be back soon</h1>
            <p className="server-down__text">
              Our site is temporarily undergoing scheduled maintenance. Please
              check back shortly &mdash; thank you for your patience.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
