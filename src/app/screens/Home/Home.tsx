import React from "react";

import mock from "../Details/utils/mock";

import Card from "./components/Card";

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Card product={mock.product} />
    </div>
  );
};

export default HomeScreen;
