import React from "react";

import { GetMessage } from "src/common/helpers";
import ExternalLink from "src/options/components/common/ExternalLink";

const Introduction = () => {
  return (
    <div>
      <p>
        {GetMessage("customFields_intro")}{" "}
        <ExternalLink url="https://github.com/anburocky3/fake-filler-extension/wiki/Customization-using-Custom-Fields-and-Profiles">
          <b>{GetMessage("customFields_getMoreInfo")}</b>
        </ExternalLink>
      </p>
    </div>
  );
};

export default Introduction;
