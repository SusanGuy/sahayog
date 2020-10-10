import React from "react";
import ContentLoader from "react-content-loader";
const ContentLoaderP = () => {
  return (
    <React.Fragment>
      {Array.from({ length: 3 }).map(() => (
        <ContentLoader
          height={100}
          speed={1}
          backgroundColor={"#fff"}
          foregroundColor={"#ccc"}
          viewBox="0 0 380 70"
          style={{ width: "100%" }}
        >
          {/* Only SVG shapes */}

          <rect x="0" y="0" rx="10" ry="10" width="100%" height="65" />
        </ContentLoader>
      ))}
    </React.Fragment>
  );
};

export default ContentLoaderP;
