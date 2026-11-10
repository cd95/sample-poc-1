# data-source-poc

A self-describing data source POC API. Clients list the available tables, ask for each table's columns, then read rows. New tables and columns appear in the meta endpoints without any client change. The full contract is in [openapi.json](openapi.json).

## Run

```sh
npm start                  # http://localhost:3000
PORT=4000 npm start        # custom port
```

`node_modules` is committed to the repo, so no `npm install` is needed.

### Docker

```sh
docker build -t data-source-poc .
docker run -p 3000:3000 data-source-poc
```

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/health` | Health check |
| GET | `/api/meta/tables` | List available tables |
| GET | `/api/meta/tables/{id}/columns` | Column metadata for one table |
| GET | `/api/{id}` | All rows of a table |

Unknown table ids return `404` with `{"error": "Not found"}`.

```sh
curl localhost:3000/api/meta/tables
curl localhost:3000/api/meta/tables/okta/columns
curl localhost:3000/api/okta
```

## Tables

`github`, `okta`, `qualys` and `aws`, defined in [src/tables.js](src/tables.js). To add a table or column, edit that file. The meta endpoints pick it up automatically.

Column types: `string`, `integer`, `long`, `double`, `boolean`, `date`, `datetime`.

Columns with a fixed set of values can declare an optional `enum` list, which is returned in the column metadata (for example `okta.status`).
