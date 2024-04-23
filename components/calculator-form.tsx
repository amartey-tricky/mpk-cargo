import { SeaCalculator } from "./ui/calculator/seacbm";
import { AirCalculator } from "./ui/calculator/aircbm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function CalculatorForm() {
  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8">
      <Tabs defaultValue="air" className="w-full h-auto">
        <TabsList>
          <TabsTrigger value="air">Air CBM Calculator</TabsTrigger>
          <TabsTrigger value="sea">Sea CBM Calculator</TabsTrigger>
        </TabsList>
        <TabsContent value="air"><AirCalculator /></TabsContent>
        <TabsContent value="sea"><SeaCalculator /></TabsContent>
      </Tabs>
    </div>
  )
}