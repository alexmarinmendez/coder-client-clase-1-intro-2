import { useState } from "react"
import axios from 'axios'

const Numbers = () => {
  const [data, setData] = useState({
    number1: 0,
    number2: 0
  })
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const onInputChangeHandle = e => {
    setData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const result = await axios('http://localhost:8080/api/numbers/reverse', {
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
      <h2>Numbers</h2>
      <form onSubmit={onSubmitHandler}>
        Number 1: <input type="number" name="number1" value={data.number1} onChange={onInputChangeHandle} /><br />
        Number 2: <input type="number" name="number2" value={data.number2} onChange={onInputChangeHandle} /><br /><br />
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

export default Numbers