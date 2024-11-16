import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostraerFiltros={true} />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
