import Autocomplete from "@mui/joy/Autocomplete";
import CssBaseline from "@mui/joy/CssBaseline";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { unstable_joySlots as joySlots } from "@mui/x-data-grid/joy";
import countries from "./countries.json";

const DATA = [
  {
    id: "1",
    name: "spray",
    manufacturedDate: new Date().toString(),
    price: 200,
  },
  {
    id: "2",
    name: "foam",
    manufacturedDate: new Date("2021-05-22").toString(),
    price: 120,
  },
];

function App() {
  return (
    <Container>
      <CssBaseline />
      <Typography component="h1" level="h3" sx={{ my: 3 }}>
        Joy DataGrid - CRUD Workshop
      </Typography>
      <DataGrid
        columns={[
          {
            field: "id",
            headerName: "ID",
          },
          {
            field: "countries",
            headerName: "Shipped countries",
            width: 240,
            editable: true,
            renderEditCell: () => (
              <Autocomplete
                placeholder="Choose a country"
                autoFocus
                openOnFocus
                options={countries}
                getOptionLabel={(option) => option.label}
                sx={{
                  width: "100%",
                }}
              />
            ),
          },
          {
            field: "name",
            headerName: "Name",
            width: 160,
            editable: true,
          },
          {
            field: "price",
            headerName: "Price",
            width: 160,
            editable: true,
            type: "number",
          },
          {
            field: "manufacturedDate",
            headerName: "Manufactured date",
            width: 160,
            editable: true,
            type: "date",
            // to turn the string value (DATA.manufacturedDate) into a Date object
            // so that the filter and sort function work properly
            // to learn more, visit: https://mui.com/x/react-data-grid/column-definition/#value-getter
            valueGetter: (params) => new Date(params.value),
            // to format the date value from `valueGetter`.
            // to learn more, visit: https://mui.com/x/react-data-grid/column-definition/#value-formatter
            valueFormatter: (params) => new Date(params.value).toDateString(),
          },
        ]}
        rows={DATA}
        slots={joySlots} // to learn more about component slots, visit: https://mui.com/x/react-data-grid/components/#component-slots
      />
    </Container>
  );
}

export default App;
