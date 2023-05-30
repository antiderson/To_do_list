import Clipboard from '../../assets/clipboard.svg';
import './style.css';

export const NoContent = () => {
    return (
        <section className='section_container'>
            <img src={Clipboard} alt="ícone de clipboard" />
            <p className='text'>
                <strong> Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </section>
    )
}