import { useState } from "react"
import axios from 'axios'

const Words = () => {
  const [phrase, setPhrase] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const onInputChangeHandle = e => {
    setPhrase(e.target.value)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const data = { frase: phrase }
      const result = await axios('http://localhost:8080/api/words/largest', {
        method: 'post',
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      setResult(result.data.payload.toString())
      setError('')
    } catch (err) {
      setError(err.message)
      setResult('')
    }
  }

  return (
    <>
      <h2>Words</h2>
      <form onSubmit={onSubmitHandler}>
        Frase: <input type="text" size="50" value={phrase} onChange={onInputChangeHandle} /><br /><br />
        <input type="submit" />
      </form>
      <br /><br />
      <div>
        <strong>Respuesta:</strong> <span>{ result }</span>
        <br />
        <strong>Error:</strong> <span>{ error }</span>
      </div>
    </>
  )
}

export default Words