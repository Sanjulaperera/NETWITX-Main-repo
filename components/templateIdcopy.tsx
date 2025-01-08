import ScriptCopyBtn from "@/components/ui/script-copy-btn";

export function ScriptCopyBtnDemo() {
  const customCommandMap = {
    ID: "Hi this is test",

  };
  return (
    <>
      <ScriptCopyBtn
        showMultiplePackageOptions={true}
        codeLanguage="shell"
        lightTheme="nord"
        darkTheme="vitesse-dark"
        commandMap={customCommandMap}
      />
    </>
  );
}
