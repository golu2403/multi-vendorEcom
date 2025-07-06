import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";


import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <Button>
          I am button
        </Button>
      </div>
      <div className="border-black">
        <Input type="email" placeholder="input.." />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea placeholder='write the text' />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
};

export default page;
