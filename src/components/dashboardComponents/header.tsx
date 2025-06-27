import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProTabItem from "./ProTabItem";
import GenerateBtn from "./generateBtn";
import ImagePicker2 from "./imagePicker";
import ProFeatures from "./proFeatures";
import FreeFeatures from "./freeFeatures";
import FreeTabItem from "./FreeTabItem";

function DashboardHeader() {
  return (
    <>
      <div className="py-3 pt-18 h-full">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-full">
          <Tabs
            defaultValue="pro"
            className="h-full flex flex-col justify-center items-center"
          >
            <TabsList className="overflow-hidden rounded-xl p-1.5 flex gap-1.5 justify-center items-center w-full lg:w-2/3 max-w-[900px] mb-6 bg-white/[6%]">
              <TabsTrigger value="pro" className="w-full h-full">
                <ProTabItem />
              </TabsTrigger>
              <TabsTrigger value="free" className="w-full h-full">
                <FreeTabItem />
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="pro"
              className="w-full grid xl:grid-cols-6 grid-cols-1 gap-x-6 gap-y-4 "
            >
              <ProFeatures />
              <div className="xl:col-span-5 flex mx-4 justify-center xl:justify-start ">
                <ImagePicker2 />
              </div>
              <div className="xl:col-start-2 xl:col-span-4 w-full px-8">
                <GenerateBtn />
              </div>
            </TabsContent>

            <TabsContent
              value="free"
              className="w-full grid xl:grid-cols-6 grid-cols-1 gap-x-6 gap-y-4 "
            >
              <FreeFeatures />
              <div className="xl:col-span-5 flex mx-4 justify-center xl:justify-start ">
                <ImagePicker2 />
              </div>
              <div className="xl:col-start-2 xl:col-span-4 w-full px-8">
                <GenerateBtn isFree />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
