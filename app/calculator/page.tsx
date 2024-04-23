import CalculatorForm from "@/components/calculator-form"

export default function Page() {
  return (
    <main>
      <section>
        <h1 className="font-bold text-3xl mx-auto p-4 text-center">Cost Calculator</h1>
        <CalculatorForm />
      </section>
    </main>
  )
}