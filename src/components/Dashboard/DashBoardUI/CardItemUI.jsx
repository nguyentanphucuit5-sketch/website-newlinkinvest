"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardItemUI = ({ title, value, unit, desc }) => {
  return (
    <Card className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base text-muted-foreground">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-semibold text-gray-900 ">
          {value} <span className="text-[14px] text-gray-500">{unit}</span>
        </div>
        <div className="flex items-center gap-1 mt-1 text-sm">
          <span className="">{desc}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItemUI;
