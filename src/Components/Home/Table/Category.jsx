import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import { Link } from "react-router-dom";
import NewArrival from "./NewArrival";
import BestSeller from "./BestSeller";

const Category = () => {
  const [activeTab, setActiveTab] = useState("addClass");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Tabs className="mb-20 md:mx-10 mx-5">
      <TabList>
        <div className="flex gap-4 border-b-4 pb-2 justify-center">
          <Tab>
            <Link
              className={`flex items-center text-xl font-bold ${
                activeTab == "addClass"
                  ? "font-extrabold border-b-4 border-red-500"
                  : ""
              } `}
              onClick={() => handleTabClick("addClass")}
            >
              New Arrivals
            </Link>
          </Tab>
          <Tab>
            <Link
              className={`flex items-center text-xl font-bold ${
                activeTab == "myClass"
                  ? "font-extrabold border-b-4 border-red-500"
                  : ""
              } `}
              onClick={() => handleTabClick("myClass")}
            >
              BestSellers
            </Link>
          </Tab>
        </div>
      </TabList>

      <TabPanel>
        <NewArrival></NewArrival>
      </TabPanel>
      <TabPanel>
        <BestSeller></BestSeller>
      </TabPanel>
    </Tabs>
  );
};

export default Category;
