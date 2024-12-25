import IframeEmbed from "@/components/IframeEmbed";

export default function EmploymentAgreement() {
  return (
    <>
      <main className="container mx-auto p-4 mt-20">
        <h1 className="text-2xl font-bold mb-4">Employment Agreement Form</h1>
        <IframeEmbed
          src="https://form.jotform.com/243405038023041"
          title="Employment Agreement - Netwitx"
          className="w-full aspect-video"
        />
      </main>
    </>
  );
}
