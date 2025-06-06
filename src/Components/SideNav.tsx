import resumo from "../assets/icons/resumo.svg";
import vendas from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import configuracoes from "../assets/icons/configuracoes.svg";
import contato from "../assets/icons/contato.svg";
import sair from "../assets/icons/sair.svg";
import FintechSVG from "../assets/FintechSVG";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <nav className="sidenav box bg3">
      <FintechSVG title="Fintech Logo" />

      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>

          <NavLink to="/" end>
            Resumo
          </NavLink>
        </li>

        <li>
          <span>
            <img src={vendas} alt="" />
          </span>

          <NavLink to="/sales" end>
            Vendas
          </NavLink>
        </li>

        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a>Webhooks</a>
        </li>

        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a>Configurações</a>
        </li>

        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a>Contato</a>
        </li>

        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
