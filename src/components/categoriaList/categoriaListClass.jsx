import React from 'react'
import { connect } from 'react-redux';
import CategoriaListItem from './categoriaListItemConConnect'
import BotonTodos from './categoriaBotonTodos'
class CategoriaList extends React.Component{
    render(){
        this.props.state.categorias.map(categoria=>{
            return categoria.borrable=
            (this.props.state.libros.filter(libro=>libro.categoria_id===categoria.id).length===0)
        })
        const filas=[<BotonTodos key="-1"/>]
        this.props.state.categorias.forEach((categoria)=>{
            filas.push(<CategoriaListItem nombre={categoria.nombre}
                 borrable={categoria.borrable} id={categoria.id} key={categoria.id}/>
                )
        });
        return (
            <ul>{filas}</ul>

        )

    }
}

const mapEstadoAProps = (state) => {
 
    return {
        state: state,
            
    }
}


export default connect(mapEstadoAProps)(CategoriaList)