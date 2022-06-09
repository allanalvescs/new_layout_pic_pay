import PicPayDark from "../../Images/pic_pay_dark.png";
import PicPayLight from "../../Images/pic_pay_light.png";

import { useTheme } from "../../Providers/Theme";

import { HeaderCustomizer } from "./style";
import { Switch } from "@mui/material";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  const { mode, getOppositeMode, setMode } = useTheme();
  return (
    <HeaderCustomizer>
      <Link to="/">
        <img
          src={mode === "light" ? PicPayLight : PicPayDark}
          alt="Logo PicPay"
        />
      </Link>
      <div>
        <Switch defaultChecked onClick={() => setMode(getOppositeMode())} />
        <button>
          Log In <FiLogIn size="18" color="var(--color-light)" />
        </button>
      </div>
    </HeaderCustomizer>
  );
}

export default Header;
