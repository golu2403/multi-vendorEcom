import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <Button>
          I am button
        </Button>
      </div>
      <div>
        <Input placeholder="input.." />
      </div>
      {/* <div>
        <Progress value={50} />
      </div> */}
    </div>
  );
};

export default page;
