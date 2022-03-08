import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LoginIcon from '@mui/icons-material/Login'
import { IconButton, Badge, Tooltip } from '@mui/material'
import { Container } from './styles'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const history = useHistory()
  const cart = useSelector(state => state.cart)


  
  return (
    <Container>
      <Tooltip title='Clique para ir à página inicial'><h1 onClick={() => history.push('/')}>{"< tech.place />"}</h1></Tooltip>
      
      
      <div>
      <Tooltip title='Clique para ir ao carrinho'>

        <IconButton sx={{ color: '#c85311', '&:hover': { color: '#80CEE1' } }} onClick = {() => history.push('/cart')}>
          <Badge color='primary' badgeContent={cart.length}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        </Tooltip>
        <Tooltip title='Login'>
          <IconButton
            sx={{ color: '#c85311', '&:hover': { color: '#80CEE1' } }}
            onClick = {() => history.push('/login')}
          >
            <LoginIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Container>
  )
}
export default Header
