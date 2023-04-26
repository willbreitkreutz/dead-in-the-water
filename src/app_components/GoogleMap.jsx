import Loader from "./Loader"

function hideLoader() {
    // Remove the spinner from the page
    document.querySelectorAll(".spinner").forEach(e=>e.remove());
    // Show the iframe (for Google) once it has loaded
    document.querySelector("iframe").classList.remove("invisible");
}

// 
function GoogleMap({proj="", lat=39, lon=-96, height=600, zoom=14}) {
    return (
      <div className="w-100">
        <div className="spinner">
          <Loader />
        </div>
        <iframe
          className="border border-primary rounded invisible"
          onLoad={hideLoader}
          width="100%"
          height={height}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://maps.google.com/maps?width=100%25&height=${height}&hl=en&q=${lat},${lon}+(Map of ${proj})&t=&z=${zoom}&ie=UTF8&iwloc=B&output=embed`}
        >
          Map of {proj}
        </iframe>
      </div>
    );
}

export default GoogleMap;
