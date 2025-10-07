import axios from "axios"
import { LoaderCircle } from "lucide-react"
import { useState } from "react"
function App(){
  const [ textinput,settextinput ] = useState("")
  const [ selectvalue,setselectvalue ] = useState("")
  const [result,setresult] = useState("")
  const [loading,setloading]=useState(false)
  const handletexttranslator = async () =>{
    setloading(true)
    try{
      const options = {
  method: 'POST',
  url: 'https://google-translator9.p.rapidapi.com/v2',
  headers: {
    'x-rapidapi-key': '76edf7f187mshfb077820752ea08p1ee66fjsn559c4c8d962d',
    'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    q: `${textinput}`,
    source: 'en',
    target: `${selectvalue}`,
    format: 'text'
  }
};
const response = await axios.request(options);
setloading(false)
setresult(response?.data?.data?.translations?.[Number(0)]?.translatedText)

    }catch(errror){
      setloading(false)
    }
  }

  console.log(textinput)
  console.log(selectvalue)
  return (
  <div className="h-screen w-screen bg-slate-200 flex items-center justify-center">
    <div className="flex items-center justify-center flex-col gap-y-10 ">
      <h1 className="text-3xl text-zinc-700 font-bold">
        Text Translator App
      </h1>
      <div className="flex items-center justify-center flex-col gap-y-5">
        <textarea name="input-text" className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-2"onChange={(e) =>settextinput(e.target.value)}/>
        <textarea name="input-text" className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-2" value={result}readOnly />
      </div>
      <div>
        <label htmlFor="options">Converted Into:</label>
        <select name="value" className="bg-white px-2 py-1 rounded-lg border border-zinc-700 outline--none cursor-pointer" onChange={(e) =>setselectvalue(e.target.value)}>
          <option value="">Select</option>
          <option value="hi">Hindi</option>
          <option value="kn">Kannada</option>
        </select>
      </div>
      <div>
        <button className="bg-slate-700 text-slate-100 mx-auto w-[500px] py-2 rounded-lg cursor-pointer flex items-center justify-center" onClick={handletexttranslator}>
          {
            loading ? (<LoaderCircle className="animate-spin"/>) : "Translate"
          }
        </button>
      </div>
    </div>
  </div>
  )
}
export default App