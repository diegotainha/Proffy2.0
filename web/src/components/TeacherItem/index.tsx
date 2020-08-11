import React from 'react';
import './styles.css';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    id: number; //nao usado
    cost: number;
    subject: string;
    user_id: number //nao usado
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    function newConnection(){
        api.post('connections', {
            user_id: teacher.id
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/${teacher.whatsapp}`}
                    onClick={newConnection} >
                    <img src={whatsAppIcon} alt="whatsapp"></img>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem