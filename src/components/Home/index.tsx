import { Link } from 'react-router-dom'
import print from '../../assets/print.png'
import './styles.css'

export const Home = () => {
    return (
        <section className='conteudo' >
            <div className='titulo'>
                <Link to="/to-do" className='link'>
                    <h1>
                        ToDo List
                    </h1>
                </Link>
            </div>
            <img className='img' src={print} alt="ícone de clipboard" />
        </section >
    )
}