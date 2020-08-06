import React , {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresCategoria ={
        nome: '',
        descricao: '',
        cor: '#FF55GG'
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresCategoria);

    function setValue(key , value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleChange(event) {
        setValue( 
            event.target.getAttribute('name'),
            event.target.value
        );
    }


    return (
        <PageDefault>
            <h1> Cadastro Categoria: {values.nome}</h1>
            <form onSubmit={ function handleSubmit(event){
                event.preventDefault();
                setCategorias([...categorias, values]);
                setValues(valoresCategoria);
            }}>
                <FormField 
                    value={values.nome}
                    onChange={handleChange}
                    type= "text"
                    name="nome"
                    label="Nome"
                />
                <FormField 
                    value={values.descricao}
                    onChange={handleChange}
                    type= "text"
                    name="descricao"
                    label="Descrição"
                />
                <FormField 
                    value={values.cor}
                    onChange={handleChange}
                    type= "color"
                    name="cor"
                    label="Cor"
                />
                <button>Cadastrar</button>
            </form>
            <ul>
               { categorias.map((categoria,index) =>{
                   return(
                       <li key={`${categoria}${index}`}>
                            {categoria.nome}
                       </li>
                    )
                }) 
               }
            </ul>
            <Link to='/'>Home</Link>
        </PageDefault>
    )
}

export default CadastroCategoria;
