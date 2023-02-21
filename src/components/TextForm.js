import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter Your Text');
    const [texte, setEtext] = useState('')

    const countWords = (str) => {
        const arr = str.split(' ');
      
        return arr.filter(word => word !== '').length;
      }

    const handleUpClick = () => {
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }
    const handleDownClick =() => {
        let lowerText = text.toLowerCase()
        setText(lowerText)
        props.showAlert("Converted to lower case","success")
    }
    const handleClrClick =() => {
        let lowerText = ''
        setText(lowerText)
    }
    const handleEmaClick =() => {
        let lowerText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)
        setEtext(lowerText)
        if (lowerText.length<3){
            props.showAlert("No Email generated","danger")
        }
        else
        props.showAlert("Email generated","success")
    }
    const handleOnChange = (e) => {
        console.log("onchange")
        setText(e.target.value)
    }
    return ( 
        <>
            <div className='container'>
                <h1>{props.heading}  </h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-info" onClick={handleDownClick}>Convert to lowercase</button>
                <button type="button" className="btn btn-warning" onClick={handleClrClick}>Clear</button>
                <button type="button" className="btn btn-warning" onClick={handleEmaClick}>Email</button>
                
            </div>
            <div className='container my-2'>
                <h2>Your text Summary</h2>
                <p>{countWords(text)} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something"}</p>
                <h2>Email Extract</h2>
                <p>{texte}</p>
            </div>
        </>
        
        
    )
}
