import { ListaCartonBingo } from '../../components/cartonBingo/ListaCartonBingo'
import { AddImages } from '../../components/varios/utilitarios/AddImages'
import { AddCartones } from '../../components/varios/utilitarios/AddCartones'

export const SalaDeJuegos = () => {
  
  return (
    <div style={{marginTop:'90px', backgroundColor:'#FFFCCD', display:'flex', gap:'10%', justifyContent:'center'}}>
        {/*<AddImages/>
        <AddCartones/>*/}
        
        <ListaCartonBingo/>        
    </div>
     
            
  )
}


