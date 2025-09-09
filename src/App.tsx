import Page from './Page/Page'
import { CartProvider } from './Context/CartContext'

function App() {

  return (
    <CartProvider>
      <Page />
    </CartProvider>
  )
}

export default App
