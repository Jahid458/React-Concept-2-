export default function Freind({freind}){
  const {name, email} = freind
  return(
    <div className="box">
        <h4>Name: {name} </h4>
        <p>Email: {email} </p>
    </div>
  )
}