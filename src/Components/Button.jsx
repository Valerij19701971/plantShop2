import './ComponentsStyle/button.scss'

export default function Button({className, href = "#", children}) {



  return (
    <div>
        <a href={href} className={`button ${className}`}>{children}</a>


    </div>
  )
}
