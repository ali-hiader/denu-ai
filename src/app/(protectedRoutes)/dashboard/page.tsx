import FreeFeatures from "@/components/dashboardComponents/freeFeatures";
import FreeTabItem from "@/components/dashboardComponents/FreeTabItem";
import GenerateBtn from "@/components/dashboardComponents/generateBtn";
import ImagePicker from "@/components/dashboardComponents/imagePicker";
import ProFeatures from "@/components/dashboardComponents/proFeatures";
import ProTabItem from "@/components/dashboardComponents/ProTabItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

function page() {
  return (
    <main className="py-3 pt-2 h-full">
      <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-full">
        <Tabs
          defaultValue="pro"
          className="h-full flex flex-col justify-center items-center px-4"
        >
          <TabsList className="overflow-hidden rounded-xl p-1.5 flex gap-1.5 justify-center h-14 items-center w-full lg:w-2/3 max-w-[800px] mb-6 bg-white/[6%]">
            <TabsTrigger value="pro">
              <ProTabItem />
            </TabsTrigger>
            <TabsTrigger value="free">
              <FreeTabItem />
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="pro"
            className="w-full h-full grid xl:grid-cols-6 grid-cols-1 gap-x-6 gap-y-4 lg:w-2/3 xl:w-full lg:max-w-[800px] xl:max-w-full"
          >
            <ProFeatures />
            <div className="xl:col-span-4 flex w-full justify-center xl:justify-start lg:h-full h-[calc(100vh-250px-110px)]">
              <ImagePicker />
            </div>
            <div className="xl:col-start-2 xl:col-span-4 w-full xl:px-8">
              <GenerateBtn />
            </div>
          </TabsContent>

          <TabsContent
            value="free"
            className="w-full h-full grid xl:grid-cols-6 grid-cols-1 gap-x-6 gap-y-4 lg:w-2/3 xl:w-full lg:max-w-[800px] xl:max-w-full"
          >
            <FreeFeatures />
            <div className="xl:col-span-4 flex w-full justify-center xl:justify-start lg:h-full h-[calc(100vh-250px-110px)]">
              <ImagePicker />
            </div>
            <div className="xl:col-start-2 xl:col-span-4 w-full xl:px-8">
              <GenerateBtn />
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}

export default page;
