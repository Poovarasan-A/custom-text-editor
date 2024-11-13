import Editor from "./components/TextEditor";

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Editor placeholder={"Write something..."} />
    </div>
  );
};
export default App;
