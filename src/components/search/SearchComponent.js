import "./Search.css";
import mingcute from "../../assets/mingcute.svg";

import React from "react";

import { TextField } from "@mui/material";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ClearIcon from "@mui/icons-material/Clear";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import EastIcon from "@mui/icons-material/East";
import AddIcon from "@mui/icons-material/Add";

const SearchComponent = () => {
  const [type, setType] = React.useState(10);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const CustomClearIcon = () => (
    <ClearIcon
      style={{
        color: "white",
        marginLeft: "-25px",
        marginRight: "10px",
        fontSize: "20px",
      }}
    />
  );

  return (
    <div className="search">
      <div className="search-container">
        <div className="load-block">
          <div>
            <p>Погрузка</p>
          </div>

          <div>
            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NorthEastIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <ClearIcon />
                  </InputAdornment>
                ),
              }}
              style={{ backgroundColor: "#FAFAFA", marginRight: "10px" }}
              SelectProps={{
                native: true,
              }}
              value={"Астана, Казахстан"}
              variant="outlined"
              fullWidth
            ></TextField>

            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <ClearIcon />
                  </InputAdornment>
                ),
              }}
              style={{ backgroundColor: "#FAFAFA" }}
              SelectProps={{
                native: true,
              }}
              value={"20 Марта — 23 Марта"}
              variant="outlined"
              fullWidth
            ></TextField>
          </div>
        </div>

        <div className="unload-block">
          <div>
            <p>Выгрузка</p>
          </div>

          <div>
            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "grey" }}>
                    <SouthEastIcon />
                  </InputAdornment>
                ),
                style: { color: "grey" },
              }}
              style={{ backgroundColor: "#FAFAFA", marginRight: "10px" }}
              SelectProps={{
                native: true,
              }}
              value={"Город выгрузки"}
              variant="outlined"
              fullWidth
            ></TextField>

            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "grey" }}>
                    <CalendarMonthIcon />
                  </InputAdornment>
                ),
                style: { color: "grey" },
              }}
              style={{ backgroundColor: "#FAFAFA" }}
              SelectProps={{
                native: true,
              }}
              value={"Дата выгрузки"}
              variant="outlined"
              fullWidth
            ></TextField>
          </div>
        </div>
      </div>

      <div className="search-select">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
          style={{
            borderRadius: "50px",
            outline: "none",
            borderColor: "white",
            marginRight: "5px",
          }}
        >
          <MenuItem value={10}>Тип транспорта</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
          style={{
            borderRadius: "50px",
            outline: "none",
            borderColor: "white",
            marginRight: "5px",
          }}
        >
          <MenuItem value={10}>Вес</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
          style={{
            borderRadius: "50px",
            outline: "none",
            borderColor: "white",
            marginRight: "5px",
          }}
        >
          <MenuItem value={10}>Объем</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
          style={{
            borderRadius: "50px",
            outline: "none",
            borderColor: "white",
            marginRight: "5px",
          }}
        >
          <MenuItem value={10}>Тип погрузки</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
          style={{
            borderRadius: "50px",
            outline: "none",
            borderColor: "white",
            marginRight: "5px",
          }}
        >
          <MenuItem value={10}>Категория груза</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
          style={{
            borderRadius: "50px",
            outline: "none",
            borderColor: "white",
            marginRight: "5px",
          }}
        >
          <MenuItem value={10}>Тип заказа</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
          style={{
            borderRadius: "50px",
            outline: "none",
            borderColor: "white",
          }}
        >
          <MenuItem value={10}>Тип оплаты</MenuItem>
        </Select>
      </div>

      <div className="search-selected">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
          IconComponent={CustomClearIcon}
          style={{
            borderRadius: "50px",
            borderColor: "black",
            outline: "none",
            marginRight: "5px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <MenuItem value={10}>Рефрижератор</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
          IconComponent={CustomClearIcon}
          style={{
            borderRadius: "50px",
            borderColor: "black",
            outline: "none",
            marginRight: "5px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <MenuItem value={10}>Продукты питания</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
          IconComponent={CustomClearIcon}
          style={{
            borderRadius: "50px",
            borderColor: "black",
            outline: "none",
            marginRight: "5px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <MenuItem value={10}>Фармацевтика</MenuItem>
        </Select>
      </div>

      <p
        style={{
          fontSize: "16px",
          fontWeight: "500",
          paddingTop: "10px",
          paddingLeft: "15px",
        }}
      >
        Очистить фильтры
      </p>

      <hr style={{ borderTop: "1px solid #ECEDEE" }}></hr>

      <p
        style={{
          fontSize: "16px",
          fontWeight: "500",
          paddingTop: "10px",
          paddingLeft: "15px",
        }}
      >
        Сохраненные направления: 3
      </p>

      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 10px",
            fontSize: "18px",
            border: "1px solid #ecedee",
            borderRadius: "50px",
            backgroundColor: "#FAFAFA",
            maxWidth: "250px",
            maxHeight: "30px",
            marginRight: "10px",
          }}
        >
          <img alt="img" src={mingcute} style={{ marginRight: "6px" }} />
          <span>Казахстан</span> <EastIcon style={{ padding: "0px 5px" }} />{" "}
          <span>Казахстан</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 10px",
            fontSize: "18px",
            border: "1px solid #ecedee",
            borderRadius: "50px",
            backgroundColor: "#FAFAFA",
            maxWidth: "250px",
            maxHeight: "30px",
            marginRight: "10px",
          }}
        >
          <img alt="img" src={mingcute} style={{ marginRight: "6px" }} />
          <span>Астана</span> <EastIcon style={{ padding: "0px 5px" }} />{" "}
          <span>Любой</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 10px",
            fontSize: "18px",
            border: "1px solid #ecedee",
            borderRadius: "50px",
            backgroundColor: "#FAFAFA",
            maxWidth: "250px",
            maxHeight: "30px",
            marginRight: "10px",
          }}
        >
          <img alt="img" src={mingcute} style={{ marginRight: "6px" }} />
          <span>Шымкент</span> <EastIcon style={{ padding: "0px 5px" }} />{" "}
          <span>Астана</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 10px",
            fontSize: "18px",
            maxWidth: "250px",
            maxHeight: "30px",
          }}
        >
          <AddIcon style={{ paddingRight: "5px" }} />
          <p>Добавить текущее</p>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
