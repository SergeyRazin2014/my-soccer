import { NavLink } from 'react-router-dom';
import { urls } from '../../../api/urls';

export const culumns = [ // Название колонок в таблице
    {
        title: "",
        dataIndex: "crestUrl",
        key: "crestUrl",
        render: (text, item) => <img style={{maxWidth: '100px'}} src={item.crestUrl} alt='img' />
    },
    {
        title: "Название команды",
        dataIndex: "name",
        key: "name",
    },

    {
        title: "Страна",
        dataIndex: "area",
        key: "area",
    },
    {
        title: "Адрес",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Телефон",
        dataIndex: "phone",
        key: "phone",
    },
    {
        title: "Сайт",
        dataIndex: "website",
        key: "website",
        render: (text, item) => <a href={item.website} target="_blank" rel="noreferrer" >{text}</a>
    },
    {
        title: "Эл. почта",
        dataIndex: "email",
        key: "email",
        render: (text, item) => <a href={`mailto:${item.email}`}>{item.email}</a>
    },
    {
        title: "Год основания",
        dataIndex: "founded",
        key: "founded",
    },
    {
        title: "Цвета клуба",
        dataIndex: "clubColors",
        key: "clubColors",
    },
];