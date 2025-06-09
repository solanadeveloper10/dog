import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { VolumeUp, VolumeOff } from "@mui/icons-material";

const CustomSwitch = styled(Switch)(() => ({
  width: 80,
  height: 40,
  padding: 0,
  overflow: "visible",
  "&& .MuiSwitch-switchBase": {
    padding: 12,
    margin: -4,
    transitionDuration: "300ms",
    backgroundColor: "grey",
    border: "1px solid #fff",
    ":hover": {
      backgroundColor: "grey",
    },
    color: "#fff",
    "&.Mui-checked": {
      transform: "translateX(40px)",
      "& .MuiSwitch-thumb": {
        backgroundColor: "red",
        color: "#2d2f3a",
      },
      "& + .MuiSwitch-track": {
        backgroundColor: "#fff",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#fff",
    width: 32,
    height: 32,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#d9f6fd",
    "& svg": {
      width: 20,
      height: 20,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 20,
    backgroundColor: "#fff",
    opacity: 1,
    boxSizing: "border-box",
  },
}));

export default function ExactImageSwitch({
  onClick,
  checked,
}: {
  onClick: () => void;
  checked: boolean;
}) {
  return (
    <CustomSwitch
      checked={checked}
      onChange={() => onClick()}
      icon={<VolumeUp />}
      checkedIcon={<VolumeOff />}
      sx={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
      }}
    />
  );
}
